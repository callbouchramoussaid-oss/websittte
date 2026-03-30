"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "🌿",
    title: "طبيعي 100%",
    desc: "عسلنا خام وطبيعي تماماً، بدون أي إضافات أو مواد حافظة. مباشرة من الخلية إلى مائدتك.",
    color: "#4CAF50",
  },
  {
    icon: "🐝",
    title: "نحل صحي",
    desc: "نحلنا يعيش في بيئات نظيفة بعيدة عن الملوثات، مما يضمن جودة عسل استثنائية.",
    color: "#F5A623",
  },
  {
    icon: "🏆",
    title: "جودة مُعتمدة",
    desc: "حائزون على شهادات الجودة الدولية والعربية. كل دفعة تخضع لفحص دقيق قبل وصولها إليك.",
    color: "#9C27B0",
  },
  {
    icon: "💊",
    title: "فوائد طبية",
    desc: "غني بالمضادات الأكسدة والأنزيمات الطبيعية. شفاء لأمراض عدة وتعزيز للمناعة.",
    color: "#F44336",
  },
  {
    icon: "🌍",
    title: "من أجود المناطق",
    desc: "نختار مناحلنا في المناطق الجبلية والبرية النقية في الجزيرة العربية لضمان أفضل مذاق.",
    color: "#2196F3",
  },
  {
    icon: "📦",
    title: "توصيل سريع",
    desc: "نوصل طلبك في أسرع وقت ممكن مع ضمان الحفاظ على جودة المنتج وطزاجته.",
    color: "#FF9800",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll animations cleanup
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Animate feature cards on scroll
  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".feature-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    }
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding hex-pattern"
      style={{ background: "var(--bg-mid)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.3)",
              color: "#F5A623",
            }}
          >
            لماذا نحن؟
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            <span className="text-gradient">مميزاتنا</span>{" "}
            <span style={{ color: "#fff" }}>الفريدة</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.1rem",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            نحن نؤمن بأن العسل الحقيقي يجب أن يكون طبيعياً ونقياً وصحياً
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feat, i) => (
            <div
              key={i}
              className="feature-card glass-card p-8 transition-all duration-500 group"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-8px) scale(1.02)";
                el.style.borderColor = `${feat.color}55`;
                el.style.boxShadow = `0 20px 60px ${feat.color}22`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0) scale(1)";
                el.style.borderColor = "rgba(245,166,35,0.2)";
                el.style.boxShadow = "";
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{
                  background: `${feat.color}22`,
                  border: `1px solid ${feat.color}44`,
                }}
              >
                {feat.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                {feat.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                {feat.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-6 h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${feat.color}, transparent)`,
                  width: "60%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding hex-pattern"
      style={{ background: "var(--bg-mid)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.3)",
              color: "#F5A623",
            }}
          >
            لماذا نحن؟
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            <span className="text-gradient">مميزاتنا</span>{" "}
            <span style={{ color: "#fff" }}>الفريدة</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.1rem",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            نحن نؤمن بأن العسل الحقيقي يجب أن يكون طبيعياً ونقياً وصحياً
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feat, i) => (
            <div
              key={i}
              className="feature-card glass-card p-8 transition-all duration-500 group"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-8px) scale(1.02)";
                el.style.borderColor = `${feat.color}55`;
                el.style.boxShadow = `0 20px 60px ${feat.color}22`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0) scale(1)";
                el.style.borderColor = "rgba(245,166,35,0.2)";
                el.style.boxShadow = "";
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{
                  background: `${feat.color}22`,
                  border: `1px solid ${feat.color}44`,
                }}
              >
                {feat.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                {feat.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                {feat.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-6 h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${feat.color}, transparent)`,
                  width: "60%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  }, [featureCardRefs]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding hex-pattern"
      style={{ background: "var(--bg-mid)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.3)",
              color: "#F5A623",
            }}
          >
            لماذا نحن؟
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            <span className="text-gradient">مميزاتنا</span>{" "}
            <span style={{ color: "#fff" }}>الفريدة</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.1rem",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            نحن نؤمن بأن العسل الحقيقي يجب أن يكون طبيعياً ونقياً وصحياً
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
           {features.map((feat, i) => {
             // Create a ref for this specific card
             const cardRef = useRef<HTMLDivElement>(null);
             // Keep track of refs for GSAP animation
             if (featureCardRefs.current.length <= i) {
               featureCardRefs.current.push(null);
             }
             featureCardRefs.current[i] = cardRef;
             
             return (
               <div
                 ref={cardRef}
                 key={i}
                 className="feature-card glass-card p-8 transition-all duration-500 group"
                 style={{
                   opacity: 0,
                   transform: "translateY(40px)",
                   cursor: "pointer",
                 }}
                 onMouseEnter={(e) => {
                   const el = e.currentTarget;
                   el.style.transform = "translateY(-8px) scale(1.02)";
                   el.style.borderColor = `${feat.color}55`;
                   el.style.boxShadow = `0 20px 60px ${feat.color}22`;
                 }}
                 onMouseLeave={(e) => {
                   const el = e.currentTarget;
                   el.style.transform = "translateY(0) scale(1)";
                   el.style.borderColor = "rgba(245,166,35,0.2)";
                   el.style.boxShadow = "";
                 }}
               >
                 {/* Icon */}
                 <div
                   className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                   style={{
                     background: `${feat.color}22`,
                     border: `1px solid ${feat.color}44`,
                   }}
                 >
                   {feat.icon}
                 </div>

                 {/* Title */}
                 <h3
                   style={{
                     fontSize: "1.3rem",
                     fontWeight: 700,
                     color: "#fff",
                     marginBottom: "0.75rem",
                   }}
                 >
                   {feat.title}
                 </h3>

                 {/* Description */}
                 <p
                   style={{
                     color: "rgba(255,255,255,0.6)",
                     lineHeight: 1.8,
                     fontSize: "0.95rem",
                   }}
                 >
                   {feat.desc}
                 </p>

                 {/* Bottom accent */}
                 <div
                   className="mt-6 h-0.5 rounded-full"
                   style={{
                     background: `linear-gradient(90deg, ${feat.color}, transparent)`,
                     width: "60%",
                   }}
                 />
               </div>
             );
           })}
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{
                  background: `${feat.color}22`,
                  border: `1px solid ${feat.color}44`,
                }}
              >
                {feat.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                {feat.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                {feat.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-6 h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${feat.color}, transparent)`,
                  width: "60%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
