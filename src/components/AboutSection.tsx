"use client";

import { useEffect, useRef } from "react";

const timeline = [
  {
    year: "٢٠١٠",
    title: "بداية الرحلة",
    desc: "بدأنا رحلتنا بمنحل صغير في جبال عسير مع ١٠٠ خلية نحل.",
  },
  {
    year: "٢٠١٤",
    title: "التوسع والنمو",
    desc: "توسعنا لنشمل مناطق متعددة في السعودية واليمن والمغرب.",
  },
  {
    year: "٢٠١٨",
    title: "الجودة الدولية",
    desc: "حصلنا على شهادات الجودة الدولية ISO وشهادة المنتج العضوي.",
  },
  {
    year: "٢٠٢٤",
    title: "عالم العسل اليوم",
    desc: "أكثر من ٥٠٠٠ خلية نحل وتوصيل لأكثر من ٢٠ دولة عربية.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".about-item");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateX(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, var(--bg-mid) 0%, var(--bg-dark) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", position: "relative" }}
      >
        {/* Header */}
        <div className="text-center mb-16 about-item" style={{ opacity: 0, transform: "translateX(-30px)" }}>
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.3)",
              color: "#F5A623",
            }}
          >
            قصتنا
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            <span style={{ color: "#fff" }}>من </span>
            <span className="text-gradient">نحن</span>
          </h2>
        </div>

        {/* Content */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left - Text */}
          <div>
            <div
              className="about-item"
              style={{ opacity: 0, transform: "translateX(-40px)", marginBottom: "2rem" }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                شغفنا بالعسل الطبيعي
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 2,
                  fontSize: "1.05rem",
                  marginBottom: "1.5rem",
                }}
              >
                نحن عائلة عربية تمتد جذورها في عالم النحل منذ أجيال. ورثنا هذا الشغف عن أجدادنا
                الذين عرفوا أسرار العسل وفوائده قبل آلاف السنين.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 2,
                  fontSize: "1.05rem",
                }}
              >
                هدفنا إيصال أجود العسل الطبيعي لكل بيت عربي، مع الحفاظ على التقاليد الأصيلة
                ومعايير الجودة العالمية.
              </p>
            </div>

            {/* Mission & Vision */}
            {[
              {
                icon: "🎯",
                title: "رسالتنا",
                text: "نوفر أجود العسل الطبيعي للأسرة العربية",
              },
              {
                icon: "👁️",
                title: "رؤيتنا",
                text: "أن نكون الخيار الأول للعسل الطبيعي في العالم العربي",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="about-item glass-card p-5 flex items-start gap-4 mb-4"
                style={{ opacity: 0, transform: "translateX(-40px)" }}
              >
                <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                <div>
                  <h4 style={{ color: "#F5A623", fontWeight: 700, marginBottom: "0.3rem" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Timeline */}
          <div>
            <div
              className="about-item"
              style={{ opacity: 0, transform: "translateX(-30px)", marginBottom: "2rem" }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "2rem",
                }}
              >
                مسيرتنا عبر السنين
              </h3>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute"
                style={{
                  right: "28px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: "linear-gradient(180deg, #F5A623, transparent)",
                }}
              />

              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="about-item flex gap-6 mb-8"
                  style={{
                    opacity: 0,
                    transform: "translateX(-30px)",
                    position: "relative",
                    paddingRight: "70px",
                  }}
                >
                  {/* Dot */}
                  <div
                    className="absolute flex items-center justify-center rounded-full font-bold text-xs"
                    style={{
                      right: "8px",
                      top: "4px",
                      width: "40px",
                      height: "40px",
                      background: "linear-gradient(135deg, #F5A623, #D4850A)",
                      color: "#0A0500",
                      zIndex: 1,
                    }}
                  >
                    {item.year.slice(-2)}
                  </div>

                  <div className="glass-card p-4 flex-1">
                    <div style={{ color: "#F5A623", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                      {item.year}
                    </div>
                    <h4
                      style={{ color: "#fff", fontWeight: 700, marginBottom: "0.5rem" }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Numbers */}
        <div
          className="about-item grid mt-16 rounded-3xl p-10"
          style={{
            opacity: 0,
            transform: "translateX(-30px)",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            background: "rgba(245,166,35,0.05)",
            border: "1px solid rgba(245,166,35,0.2)",
          }}
        >
          {[
            { num: "٥٠٠٠+", label: "خلية نحل", icon: "🐝" },
            { num: "٢٠+", label: "دولة نصدر إليها", icon: "🌍" },
            { num: "١٥+", label: "سنة خبرة", icon: "🏆" },
            { num: "١٠٠٠+", label: "طن سنوياً", icon: "🍯" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>{stat.icon}</div>
              <div
                className="text-gradient"
                style={{ fontSize: "2.5rem", fontWeight: 800 }}
              >
                {stat.num}
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
