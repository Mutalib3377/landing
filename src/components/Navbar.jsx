import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { id: "platform", label: "Platform Overview", href: "#platform" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "vision", label: "Our Vision", href: "#vision" },
  { id: "team", label: "Our Team", href: "#team" },
  { id: "faq", label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [active, setActive] = useState("platform");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-b border-white/40"
          : "bg-white border-b border-[#E2E8F0]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/Screenshot 2026-04-24 at 10.24.49 8.png"
              alt="Qarevo Health Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id)}
                className="relative flex flex-col items-center gap-[5px] text-[14px] transition-colors"
              >
                <span
                  className={
                    active === link.id
                      ? "text-navy font-semibold"
                      : "text-text-muted hover:text-navy font-medium"
                  }
                >
                  {link.label}
                </span>
                {active === link.id && (
                  <span className="w-1 h-1 rounded-full bg-accent" />
                )}
              </a>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden md:block">
            <a
              href="#enterprise"
              id="nav-cta"
              className="inline-flex items-center gap-2 bg-navy text-white text-[13.5px] font-semibold px-5 py-[10px] rounded-full hover:bg-[#1a3d7a] transition-colors"
            >
              Partner with Us
              <ArrowRight size={13} />
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-navy hover:bg-section-blue transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border-light px-6 pt-4 pb-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`block py-1.5 text-[14px] font-medium transition-colors ${active === link.id ? "text-navy" : "text-text-muted"
                }`}
              onClick={() => { setActive(link.id); setMenuOpen(false); }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enterprise"
            className="flex items-center justify-center gap-2 bg-navy text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Partner with Us
            <ArrowRight size={13} />
          </a>
        </div>
      )}
    </header>
  );
}
