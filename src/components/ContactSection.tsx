"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.875rem 1.25rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(245,166,35,0.25)",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "'Cairo', sans-serif",
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--bg-dark)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
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
            نحن هنا لمساعدتك
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
            }}
          >
            <span style={{ color: "#fff" }}>تواصل </span>
            <span className="text-gradient">معنا</span>
          </h2>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              معلومات التواصل
            </h3>

            {[
              { icon: "📍", title: "العنوان", info: "الرياض، المملكة العربية السعودية" },
              { icon: "📞", title: "الهاتف", info: "+966 50 123 4567" },
              { icon: "📧", title: "البريد الإلكتروني", info: "info@alasalworld.com" },
              { icon: "⏰", title: "ساعات العمل", info: "السبت - الخميس: ٩ صباحاً - ١٠ مساءً" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-5 flex items-start gap-4 mb-4 transition-all duration-300"
                style={{ cursor: "default" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,166,35,0.4)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(-5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,166,35,0.2)";
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.3)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: "#F5A623", fontWeight: 600, marginBottom: "0.2rem" }}>
                    {item.title}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                    {item.info}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="mt-6">
              <div style={{ color: "rgba(255,255,255,0.5)", marginBottom: "1rem", fontSize: "0.9rem" }}>
                تابعنا على
              </div>
              <div className="flex gap-3">
                {[
                  { icon: "📘", label: "فيسبوك" },
                  { icon: "📸", label: "انستغرام" },
                  { icon: "🐦", label: "تويتر" },
                  { icon: "▶️", label: "يوتيوب" },
                ].map((s, i) => (
                  <button
                    key={i}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "rgba(245,166,35,0.08)",
                      border: "1px solid rgba(245,166,35,0.25)",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                    }}
                    title={s.label}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(245,166,35,0.2)";
                      (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(245,166,35,0.08)";
                      (e.currentTarget as HTMLButtonElement).style.transform = "";
                    }}
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              أرسل لنا رسالة
            </h3>

            {submitted ? (
              <div
                className="text-center py-12"
                style={{
                  color: "#4CAF50",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    style={{
                      display: "block",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "0.5rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="أدخل اسمك"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#F5A623";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(245,166,35,0.25)";
                    }}
                  />
                </div>

                <div
                  className="grid"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: "rgba(255,255,255,0.7)",
                        marginBottom: "0.5rem",
                        fontSize: "0.9rem",
                      }}
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "#F5A623";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(245,166,35,0.25)";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: "rgba(255,255,255,0.7)",
                        marginBottom: "0.5rem",
                        fontSize: "0.9rem",
                      }}
                    >
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      placeholder="+966 5x xxx xxxx"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "#F5A623";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(245,166,35,0.25)";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "0.5rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    رسالتك *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="اكتب رسالتك هنا..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "#F5A623";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "rgba(245,166,35,0.25)";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #F5A623, #D4850A)",
                    color: "#0A0500",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                    (e.target as HTMLButtonElement).style.boxShadow = "0 10px 30px rgba(245,166,35,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.transform = "";
                    (e.target as HTMLButtonElement).style.boxShadow = "";
                  }}
                >
                  إرسال الرسالة 📨
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
