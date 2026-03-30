import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    // Revert any existing ScrollTrigger animations to avoid conflicts
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    return () => {
      // Cleanup on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export const fadeInUp = (ref: React.RefObject<HTMLElement>, delay = 0) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const animation = gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay,
      ease: "power3.out",
    });
    
    return () => {
      animation.kill();
    };
  }, [ref, delay]);
};

export const staggerFadeInUp = (
  refs: React.RefObject<HTMLElement>[],
  staggerAmount = 0.1
) => {
  useEffect(() => {
    const elements = refs.map((ref) => ref.current).filter(Boolean) as HTMLElement[];
    
    if (elements.length === 0) return;
    
    const animation = gsap.from(elements, {
      scrollTrigger: {
        trigger: elements[0],
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: staggerAmount,
      ease: "power3.out",
    });
    
    return () => {
      animation.kill();
    };
  }, [refs, staggerAmount]);
};

export const scaleIn = (ref: React.RefObject<HTMLElement>, delay = 0) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const animation = gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay,
      ease: "back.out(1.7)",
    });
    
    return () => {
      animation.kill();
    };
  }, [ref, delay]);
};

export const honeyDripAnimation = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current) return;
    
    // Create a honey drip effect
    const drip = document.createElement("div");
    drip.style.position = "absolute";
    drip.style.top = "0";
    drip.style.left = "50%";
    drip.style.transform = "translateX(-50%)";
    drip.style.width = "4px";
    drip.style.height = "20px";
    drip.style.background = "linear-gradient(to bottom, #F5A623, #D4850A)";
    drip.style.borderRadius = "50%";
    drip.style.pointerEvents = "none";
    drip.style.zIndex = "10";
    
    ref.current.style.position = "relative";
    ref.current.appendChild(drip);
    
    const animateDrip = () => {
      gsap.to(drip, {
        height: "40px",
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        repeat: -1,
        yoyo: true,
      });
      
      gsap.to(drip, {
        backgroundPosition: "0px 20px",
        duration: 2,
        repeat: -1,
        ease: "none",
      });
    };
    
    animateDrip();
    
    return () => {
      gsap.killTweensOf(drip);
      if (drip.parentNode) {
        drip.parentNode.removeChild(drip);
      }
    };
  }, [ref]);
};