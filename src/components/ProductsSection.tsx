"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "عسل السدر الملكي",
    subtitle: "من جبال اليمن والسعودية",
    price: "٢٨٠ ريال",
    oldPrice: "٣٥٠ ريال",
    badge: "الأكثر مبيعاً",
    badgeColor: "#F5A623",
    description: "أفضل أنواع العسل وأغلاها ثمناً. يُجمع من أزهار شجر السدر البري.",
    stars: 5,
    reviews: "٢٣٤",
    icon: "🌟",
    gradient: "linear-gradient(135deg, #F5A623 0%, #D4850A 100%)",
    features: ["مضاد للبكتيريا", "يقوي المناعة", "للمعدة والقولون"],
  },
  {
    name: "عسل الطلح البري",
    subtitle: "من صحاري نجد",
    price: "١٨٠ ريال",
    oldPrice: null,
    badge: "طازج",
    badgeColor: "#4CAF50",
    description: "يُجمع من أزهار شجر الطلح البري ذو المذاق الفريد والرائحة الزكية.",
    stars: 5,
    reviews: "١٨٧",
    icon: "🌸",
    gradient: "linear-gradient(135deg, #8B4513 0%, #D4850A 100%)",
    features: ["غني بالمعادن", "مفيد للكلى", "يصفي الدم"],
  },
  {
    name: "عسل الشوكة السوداء",
    subtitle: "عسل الأعشاب الجبلية",
    price: "٣٥٠ ريال",
    oldPrice: "٤٢٠ ريال",
    badge: "نادر",
    badgeColor: "#9C27B0",
    description: "يُجمع من مناطق جبلية نادرة على ارتفاع ٢٠٠٠ متر. نكهة استثنائية.",
    stars: 5,
    reviews: "٩٨",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #5C2D0E 0%, #8B4513 100%)",
    features: ["قوة خارقة", "للأمراض المزمنة", "نادر ونفيس"],
  },
  {
    name: "عسل قرفة وزنجبيل",
    subtitle: "خلطة صحية مميزة",
    price: "١٢٠ ريال",
    oldPrice: null,
    badge: "جديد",
    badgeColor: "#2196F3",
    description: "مزيج فريد من عسل المصاص الخام مع القرفة الأصيلة والزنجبيل الطازج.",
    stars: 4,
    reviews: "١٥٦",
    icon: "🌶️",
    gradient: "linear-gradient(135deg, #FF6B00 0%, #F5A623 100%)",
    features: ["يحرق الدهون", "للبرد والإنفلونزا", "مذاق لذيذ"],
  },
  {
    name: "عسل المصاص الخام",
    subtitle: "عسل قبل التصفية",
    price: "٩٠ ريال",
    oldPrice: null,
    badge: null,
    badgeColor: "",
    description: "عسل خام لم يمسه حرارة أو تصفية. يحتفظ بكل مكوناته الطبيعية.",
    stars: 4,
    reviews: "٣١٢",
    icon: "🍯",
    gradient: "linear-gradient(135deg, #D4850A 0%, #F5A623 100%)",
    features: ["كامل المكونات", "ليزيم طبيعي", "حبوب لقاح"],
  },
  {
    name: "عسل الزعتر الجبلي",
    subtitle: "من جبال عسير والطائف",
    price: "٢٢٠ ريال",
    oldPrice: "٢٨٠ ريال",
    badge: "خصم ٢١%",
    badgeColor: "#F44336",
    description: "عسل الزعتر البري له فوائد لا تحصى للجهاز التنفسي والمناعة.",
    stars: 5,
    reviews: "٢٠١",
    icon: "🌿",
    gradient: "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
    features: ["للجهاز التنفسي", "للحساسية", "مضاد للالتهابات"],
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".product-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding"
      style={{ background: "var(--bg-dark)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 2rem" }}>
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
            تشكيلة فاخرة
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            <span style={{ color: "#fff" }}>منتجاتنا </span>
            <span className="text-gradient">المميزة</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem" }}>
            أجود أنواع العسل الطبيعي من أرقى المناحل العربية
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((product, i) => (
            <div
              key={i}
              className="product-card rounded-3xl overflow-hidden transition-all duration-500"
              style={{
                opacity: 0,
                transform: "translateY(50px)",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(245,166,35,0.15)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                setHoveredIndex(i);
                const el = e.currentTarget;
                el.style.transform = "translateY(-12px)";
                el.style.boxShadow = "0 30px 80px rgba(245,166,35,0.2)";
                el.style.borderColor = "rgba(245,166,35,0.4)";
              }}
              onMouseLeave={(e) => {
                setHoveredIndex(null);
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "";
                el.style.borderColor = "rgba(245,166,35,0.15)";
              }}
            >
              {/* Product Image Area */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  height: "220px",
                  background: product.gradient,
                  overflow: "hidden",
                }}
              >
                {/* Animated circles */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "250px",
                    height: "250px",
                    background: "rgba(255,255,255,0.05)",
                    top: "-50px",
                    left: "-50px",
                  }}
                />
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "150px",
                    height: "150px",
                    background: "rgba(255,255,255,0.08)",
                    bottom: "-30px",
                    right: "-30px",
                  }}
                />

                {/* Product icon */}
                <div
                  className={`relative z-10 transition-transform duration-500 ${
                    hoveredIndex === i ? "scale-110" : ""
                  }`}
                  style={{ fontSize: "5rem" }}
                >
                  {product.icon}
                </div>

                {/* Badge */}
                {product.badge && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: product.badgeColor, color: "#fff" }}
                  >
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-1">
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#F5A623",
                      fontWeight: 500,
                    }}
                  >
                    {product.subtitle}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((f, fi) => (
                    <span
                      key={fi}
                      className="px-2 py-1 rounded-full text-xs"
                      style={{
                        background: "rgba(245,166,35,0.1)",
                        border: "1px solid rgba(245,166,35,0.25)",
                        color: "#F5A623",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, si) => (
                      <span
                        key={si}
                        style={{
                          color: si < product.stars ? "#F5A623" : "rgba(255,255,255,0.2)",
                          fontSize: "0.9rem",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.8rem",
                    }}
                  >
                    ({product.reviews} تقييم)
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "#F5A623",
                      }}
                    >
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(255,255,255,0.3)",
                          textDecoration: "line-through",
                          marginRight: "0.5rem",
                        }}
                      >
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    className="px-5 py-2 rounded-full font-bold transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #F5A623, #D4850A)",
                      color: "#0A0500",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLButtonElement).style.transform = "scale(1.08)";
                      (e.target as HTMLButtonElement).style.boxShadow = "0 5px 20px rgba(245,166,35,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLButtonElement).style.transform = "";
                      (e.target as HTMLButtonElement).style.boxShadow = "";
                    }}
                  >
                    أضف للسلة 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button
            className="px-12 py-4 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: "transparent",
              border: "2px solid rgba(245,166,35,0.5)",
              color: "#F5A623",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLButtonElement;
              el.style.background = "rgba(245,166,35,0.1)";
              el.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLButtonElement;
              el.style.background = "transparent";
              el.style.transform = "";
            }}
          >
            عرض جميع المنتجات ←
          </button>
        </div>
      </div>
    </section>
  );
}
