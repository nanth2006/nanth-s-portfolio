import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.35s ease",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        background: scrolled ? "rgba(7,7,15,0.75)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.2rem",
          }}
        >
          Nanth<span className="glow-text">Kumar</span>
        </a>

        <ul
          style={{
            display: window.innerWidth > 860 ? "flex" : "none",
            gap: "2rem",
            fontSize: "0.92rem",
            fontWeight: 500,
            color: "var(--text-muted)",
          }}
          className="nav-links-desktop"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{ transition: "color 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-glow nav-cta" style={{ fontSize: "0.85rem", padding: "0.6rem 1.4rem" }}>
          Let's Talk
        </a>

        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--border)",
            borderRadius: 8,
            width: 40,
            height: 40,
            color: "var(--text)",
            fontSize: "1.2rem",
          }}
        >
          <i className={open ? "ri-close-line" : "ri-menu-3-line"}></i>
        </button>
      </nav>

      {open && (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1rem 1.5rem 1.5rem",
            background: "rgba(7,7,15,0.97)",
            borderBottom: "1px solid var(--border)",
          }}
          className="nav-links-mobile"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "0.6rem 0", color: "var(--text-muted)" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-burger { display: flex !important; align-items: center; justify-content: center; }
        }
        @media (min-width: 861px) {
          .nav-links-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
