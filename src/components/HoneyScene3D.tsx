"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HoneyScene3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xF5A623, 3, 20);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xFF6B00, 2, 15);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    const directionalLight = new THREE.DirectionalLight(0xFFD700, 1.5);
    directionalLight.position.set(0, 5, 5);
    scene.add(directionalLight);

    // Create hexagon shape
    const createHexagon = (size: number) => {
      const shape = new THREE.Shape();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6;
        const x = size * Math.cos(angle);
        const y = size * Math.sin(angle);
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.closePath();
      return shape;
    };

    // Floating hexagons group
    const hexGroup = new THREE.Group();
    scene.add(hexGroup);

    const hexPositions = [
      [0, 0, 0, 1.0],
      [2.0, 0.5, -1, 0.7],
      [-2.0, -0.3, -0.5, 0.6],
      [1.2, -1.8, -0.8, 0.5],
      [-1.5, 1.5, -1.2, 0.55],
      [3.0, -1.0, -2, 0.4],
      [-3.0, 0.8, -1.5, 0.45],
      [0.5, 2.5, -1.5, 0.5],
    ];

    const hexMeshes: THREE.Mesh[] = [];

    hexPositions.forEach(([x, y, z, scale]) => {
      const hexShape = createHexagon(0.8 * scale);
      const extrudeSettings = {
        depth: 0.15 * scale,
        bevelEnabled: true,
        bevelThickness: 0.05 * scale,
        bevelSize: 0.03 * scale,
        bevelSegments: 5,
      };
      const geometry = new THREE.ExtrudeGeometry(hexShape, extrudeSettings);
      geometry.center();

      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0xF5A623),
        metalness: 0.3,
        roughness: 0.1,
        transmission: 0.6,
        thickness: 0.5,
        transparent: true,
        opacity: 0.75,
        emissive: new THREE.Color(0xD4850A),
        emissiveIntensity: 0.15,
        iridescence: 0.5,
        iridescenceIOR: 1.5,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      hexGroup.add(mesh);
      hexMeshes.push(mesh);
    });

    // Honey jar - main centerpiece
    const jarGroup = new THREE.Group();
    scene.add(jarGroup);
    jarGroup.position.set(0, 0, 0);

    // Jar body
    const jarBodyGeo = new THREE.CylinderGeometry(0.7, 0.9, 1.8, 32, 8, true);
    const jarBodyMat = new THREE.MeshPhysicalMaterial({
      color: 0xF5A623,
      metalness: 0.0,
      roughness: 0.0,
      transmission: 0.9,
      thickness: 1.0,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    });
    const jarBody = new THREE.Mesh(jarBodyGeo, jarBodyMat);
    jarGroup.add(jarBody);

    // Jar bottom
    const jarBottomGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.05, 32);
    const jarBottom = new THREE.Mesh(jarBottomGeo, jarBodyMat);
    jarBottom.position.y = -0.9;
    jarGroup.add(jarBottom);

    // Honey inside
    const honeyGeo = new THREE.CylinderGeometry(0.65, 0.85, 1.4, 32);
    const honeyMat = new THREE.MeshPhysicalMaterial({
      color: 0xD4850A,
      metalness: 0.0,
      roughness: 0.05,
      transmission: 0.7,
      thickness: 2.0,
      transparent: true,
      opacity: 0.9,
      emissive: 0xF5A623,
      emissiveIntensity: 0.3,
    });
    const honey = new THREE.Mesh(honeyGeo, honeyMat);
    honey.position.y = -0.2;
    jarGroup.add(honey);

    // Honey surface ripple
    const rippleGeo = new THREE.CircleGeometry(0.63, 64);
    const rippleMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFD700,
      metalness: 0.1,
      roughness: 0.05,
      transparent: true,
      opacity: 0.85,
      emissive: 0xFFAA00,
      emissiveIntensity: 0.4,
    });
    const ripple = new THREE.Mesh(rippleGeo, rippleMat);
    ripple.rotation.x = -Math.PI / 2;
    ripple.position.y = 0.5;
    jarGroup.add(ripple);

    // Jar lid
    const lidGeo = new THREE.CylinderGeometry(0.5, 0.72, 0.3, 32);
    const lidMat = new THREE.MeshPhysicalMaterial({
      color: 0x8B4513,
      metalness: 0.5,
      roughness: 0.3,
      emissive: 0x5C2D0E,
      emissiveIntensity: 0.2,
    });
    const lid = new THREE.Mesh(lidGeo, lidMat);
    lid.position.y = 1.05;
    jarGroup.add(lid);

    const lidTopGeo = new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const lidTop = new THREE.Mesh(lidTopGeo, lidMat);
    lidTop.position.y = 1.2;
    jarGroup.add(lidTop);

    // Floating particles (honey drops)
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3;
      particleSizes[i] = Math.random() * 8 + 3;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("size", new THREE.BufferAttribute(particleSizes, 1));

    const particleMat = new THREE.PointsMaterial({
      color: 0xF5A623,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Bee model (simple geometric bee)
    const createBee = (x: number, y: number, z: number) => {
      const beeGroup = new THREE.Group();

      // Body
      const bodyGeo = new THREE.SphereGeometry(0.12, 16, 8);
      bodyGeo.scale(1, 0.7, 1.4);
      const bodyMat = new THREE.MeshPhysicalMaterial({ color: 0xF5A623, metalness: 0.2, roughness: 0.4 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      beeGroup.add(body);

      // Stripes
      for (let i = 0; i < 3; i++) {
        const stripeGeo = new THREE.TorusGeometry(0.085, 0.022, 8, 16);
        const stripeMat = new THREE.MeshPhysicalMaterial({ color: 0x1A1A00, metalness: 0.1, roughness: 0.5 });
        const stripe = new THREE.Mesh(stripeGeo, stripeMat);
        stripe.rotation.x = Math.PI / 2;
        stripe.position.z = -0.06 + i * 0.06;
        beeGroup.add(stripe);
      }

      // Wings
      const wingShape = new THREE.Shape();
      wingShape.moveTo(0, 0);
      wingShape.bezierCurveTo(0.1, 0.15, 0.25, 0.12, 0.2, 0);
      wingShape.bezierCurveTo(0.25, -0.12, 0.1, -0.1, 0, 0);

      const wingGeo = new THREE.ShapeGeometry(wingShape);
      const wingMat = new THREE.MeshPhysicalMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
        transmission: 0.8,
      });

      const wing1 = new THREE.Mesh(wingGeo, wingMat);
      wing1.position.set(0.1, 0.12, 0);
      wing1.rotation.z = -0.3;
      beeGroup.add(wing1);

      const wing2 = new THREE.Mesh(wingGeo, wingMat);
      wing2.position.set(-0.1, 0.12, 0);
      wing2.rotation.y = Math.PI;
      wing2.rotation.z = 0.3;
      beeGroup.add(wing2);

      beeGroup.position.set(x, y, z);
      return beeGroup;
    };

    const bees = [
      createBee(2.5, 1.5, 1),
      createBee(-2.0, 0.8, 0.5),
      createBee(1.0, -2.0, 0.8),
    ];
    bees.forEach((bee) => scene.add(bee));

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    const clock = new THREE.Clock();
    let animFrame: number;

    const animate = () => {
      animFrame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Rotate jar gently
      jarGroup.rotation.y = t * 0.3;
      jarGroup.position.y = Math.sin(t * 0.8) * 0.15;

      // Rotate hex group
      hexGroup.rotation.y = t * 0.08;
      hexGroup.rotation.x = Math.sin(t * 0.15) * 0.1;

      // Individual hex rotations
      hexMeshes.forEach((hex, i) => {
        hex.rotation.z = t * (0.3 + i * 0.05);
        hex.rotation.x = Math.sin(t * 0.4 + i) * 0.3;
        hex.position.y = hexPositions[i][1] + Math.sin(t * 0.6 + i * 0.7) * 0.2;
      });

      // Particles drift
      const posArray = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += 0.008;
        posArray[i * 3] += Math.sin(t * 0.5 + i) * 0.002;
        if (posArray[i * 3 + 1] > 5) posArray[i * 3 + 1] = -5;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Bee animation
      bees.forEach((bee, i) => {
        const speed = 0.4 + i * 0.15;
        const radius = 2.5 + i * 0.5;
        bee.position.x = Math.cos(t * speed + i * 2) * radius;
        bee.position.y = Math.sin(t * speed * 1.3 + i) * 1.2 + (i - 1) * 0.5;
        bee.position.z = Math.sin(t * speed * 0.7 + i) * 1.5;
        bee.rotation.y = -Math.atan2(
          bee.position.z - Math.cos(t * speed + i * 2 + 0.1) * radius,
          bee.position.x - Math.cos(t * speed + i * 2) * radius
        );
        // Wing flap
        if (bee.children[3] && bee.children[4]) {
          (bee.children[3] as THREE.Mesh).rotation.z = -0.3 + Math.sin(t * 20) * 0.5;
          (bee.children[4] as THREE.Mesh).rotation.z = 0.3 - Math.sin(t * 20) * 0.5;
        }
      });

      // Mouse parallax
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 1.0 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      // Light animation
      pointLight1.position.x = Math.sin(t * 0.7) * 4;
      pointLight1.position.y = Math.cos(t * 0.5) * 3;
      pointLight2.position.x = Math.cos(t * 0.6) * 3;
      pointLight2.position.y = Math.sin(t * 0.8) * 2;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
