"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "أحمد محمد العبدالله",
    role: "طبيب متخصص",
    city: "الرياض، السعودية",
    text: "أنصح جميع مرضاي بعسل السدر من عالم العسل. النتائج مذهلة في تقوية المناعة وعلاج الحساسية.",
    stars: 5,
    avatar: "👨‍⚕️",
  },
  {
    name: "فاطمة عبدالرحمن",
    role: "ربة منزل",
    city: "دبي، الإمارات",
    text: "منذ أن بدأت باستخدام عسل الطلح، تحسنت صحة أطفالي كثيراً. جودة ممتازة وتوصيل سريع.",
    stars: 5,
    avatar: "👩",
  },
  {
    name: "محمد خالد النجار",
    role: "رجل أعمال",
    city: "القاهرة، مصر",
    text: "أشتري منهم منذ ٣ سنوات. الجودة ثابتة ومضمونة دائماً. أفضل عسل جربته في حياتي.",
    stars: 5,
    avatar: "👨‍💼",
  },
  {
    name: "نورة السعيد",
    role: "خبيرة تغذية",
    city: "الكويت",
    text: "كخبيرة في التغذية، أؤكد أن هذا العسل يستحق ثمنه. مكوناته طبيعية ١٠٠٪ وفوائده لا تُعد.",
    stars: 5,
    avatar: "👩‍🔬",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      className="section-padding"
      style={{
        background: "var(--bg-mid)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial */}
      <div
        className="absolute"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", position: "relative" }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.3)",
              color: "#F5A623",
            }}
          >
            آراء عملائنا
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
            }}
          >
            <span className="text-gradient">ماذا يقول</span>{" "}
            <span style={{ color: "#fff" }}>عملاؤنا</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className="glass-card p-10 text-center"
          style={{ position: "relative" }}
        >
          {/* Quote mark */}
          <div
            style={{
              fontSize: "6rem",
              color: "rgba(245,166,35,0.15)",
              lineHeight: 0.5,
              marginBottom: "1rem",
              fontFamily: "serif",
            }}
          >
            &ldquo;
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(testimonials[current].stars)].map((_, i) => (
              <span key={i} style={{ color: "#F5A623", fontSize: "1.5rem" }}>
                ★
              </span>
            ))}
          </div>

          {/* Text */}
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.15rem",
              lineHeight: 2,
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            {testimonials[current].text}
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "rgba(245,166,35,0.15)", border: "2px solid rgba(245,166,35,0.3)" }}
            >
              {testimonials[current].avatar}
            </div>
            <div className="text-right">
              <div style={{ color: "#fff", fontWeight: 700 }}>
                {testimonials[current].name}
              </div>
              <div style={{ color: "#F5A623", fontSize: "0.85rem" }}>
                {testimonials[current].role}
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
                {testimonials[current].city}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === current ? "#F5A623" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
