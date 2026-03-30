"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HoneyScene3D = dynamic(() => import("./HoneyScene3D"), { ssr: false });

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Video */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.4) saturate(1.8) hue-rotate(10deg)" }}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
        {/* Honey overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,5,0,0.85) 0%, rgba(139,69,19,0.4) 50%, rgba(10,5,0,0.9) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--bg-dark))",
          }}
        />
      </div>

      {/* Hex pattern overlay */}
      <div className="hex-pattern absolute inset-0 z-1 opacity-30" />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <HoneyScene3D />
      </div>

      {/* Hero Content */}
      <div
        className="relative z-20 flex flex-col items-center justify-center"
        style={{ minHeight: "100vh", padding: "2rem" }}
      >
        {/* Badge */}
        <div
          className="mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span
            className="px-6 py-2 rounded-full text-sm font-bold tracking-wider"
            style={{
              background: "rgba(245,166,35,0.15)",
              border: "1px solid rgba(245,166,35,0.4)",
              color: "#F5A623",
              letterSpacing: "0.15em",
            }}
          >
            ✦ منتجات طبيعية 100% ✦
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-center mb-4 animate-fade-up"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className="text-gradient animate-glow-text">عالم</span>
          <br />
          <span style={{ color: "#fff" }}>العسل</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-center mb-8 animate-fade-up"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "600px",
            lineHeight: 1.8,
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          اكتشف سحر العسل الطبيعي الخام من أجود المناحل العربية.
          <br />
          <span style={{ color: "#F5A623" }}>طبيعي • أصيل • شفاء</span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex gap-4 flex-wrap justify-center animate-fade-up"
          style={{
            animationDelay: "0.8s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#products"
            className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 animate-pulse-glow"
            style={{
              background: "linear-gradient(135deg, #F5A623, #D4850A)",
              color: "#0A0500",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.transform = "translateY(-3px) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.transform = "";
            }}
          >
            اكتشف منتجاتنا
          </a>
          <a
            href="#about"
            className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: "transparent",
              border: "2px solid rgba(245,166,35,0.6)",
              color: "#F5A623",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLAnchorElement;
              el.style.background = "rgba(245,166,35,0.1)";
              el.style.borderColor = "#F5A623";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(245,166,35,0.6)";
              el.style.transform = "";
            }}
          >
            تعرّف علينا
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex gap-8 mt-16 flex-wrap justify-center animate-fade-up"
          style={{
            animationDelay: "1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {[
            { num: "+١٠٠", label: "نوع من العسل" },
            { num: "+٥٠٠٠", label: "عميل سعيد" },
            { num: "١٠٠%", label: "طبيعي خالص" },
            { num: "+١٥", label: "سنوات خبرة" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-gradient"
                style={{ fontSize: "2rem", fontWeight: 800 }}
              >
                {stat.num}
              </div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-20"
        style={{ transform: "translateX(-50%)" }}
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "2px solid rgba(245,166,35,0.5)" }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{
              background: "#F5A623",
              animation: "bounce 1.5s infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
