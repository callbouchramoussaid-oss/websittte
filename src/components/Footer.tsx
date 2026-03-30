export default function Footer() {
  return (
    <footer
      style={{
        background: "#050200",
        borderTop: "1px solid rgba(245,166,35,0.15)",
        padding: "3rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full text-xl"
                style={{ background: "linear-gradient(135deg, #F5A623, #D4850A)" }}
              >
                🍯
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  background: "linear-gradient(135deg, #FFD700, #F5A623)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                عالم العسل
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.8 }}>
              أجود أنواع العسل الطبيعي من أرقى المناحل العربية. طبيعي، أصيل، صحي.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "روابط سريعة",
              links: ["الرئيسية", "مميزاتنا", "منتجاتنا", "من نحن", "تواصل معنا"],
            },
            {
              title: "منتجاتنا",
              links: ["عسل السدر", "عسل الطلح", "عسل الشوكة", "عسل الزعتر", "خلطات خاصة"],
            },
            {
              title: "الدعم",
              links: ["الأسئلة الشائعة", "سياسة الإرجاع", "التوصيل والشحن", "سياسة الخصوصية"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4
                style={{
                  color: "#F5A623",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link, li) => (
                  <li key={li}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLAnchorElement).style.color = "#F5A623";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>
            © ٢٠٢٤ عالم العسل. جميع الحقوق محفوظة.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>
            صُنع بـ ❤️ وعسل طبيعي
          </p>
        </div>
      </div>
    </footer>
  );
}
