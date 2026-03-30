"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#features", label: "مميزاتنا" },
  { href: "#products", label: "منتجاتنا" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,5,0,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245,166,35,0.15)" : "none",
        padding: scrolled ? "0.75rem 2rem" : "1.5rem 2rem",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 text-decoration-none"
          style={{ textDecoration: "none" }}
        >
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full"
            style={{
              background: "linear-gradient(135deg, #F5A623, #D4850A)",
              fontSize: "1.2rem",
            }}
          >
            🍯
          </div>
          <span
            style={{
              fontFamily: "'Cairo', sans-serif",
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
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-300"
              style={{
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#F5A623";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full font-bold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #F5A623, #D4850A)",
              color: "#0A0500",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.transform = "scale(1.05)";
              (e.target as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(245,166,35,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.transform = "";
              (e.target as HTMLAnchorElement).style.boxShadow = "";
            }}
          >
            اطلب الآن
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: "#F5A623" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col items-center gap-4 py-6"
          style={{
            background: "rgba(10,5,0,0.98)",
            borderTop: "1px solid rgba(245,166,35,0.2)",
            marginTop: "0.5rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
