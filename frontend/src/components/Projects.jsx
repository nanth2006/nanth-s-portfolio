import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { projects } from "../data";

const filters = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full Stack" },
  { key: "ai", label: "AI" },
  { key: "frontend", label: "Frontend" },
];

export default function Projects() {
  const ref = useReveal();
  const [active, setActive] = useState("all");

  const visible = active === "all" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div
          className="section-head reveal"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", maxWidth: "100%" }}
        >
          <div>
            <div className="eyebrow">Selected Work</div>
            <h2 className="section-title">
              My <span className="glow-text">Projects</span>
            </h2>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                style={{
                  padding: "0.5rem 1.1rem",
                  borderRadius: 999,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  border: "1px solid var(--border)",
                  background: active === f.key ? "var(--gradient)" : "transparent",
                  color: active === f.key ? "var(--bg)" : "var(--text-muted)",
                  transition: "0.25s",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {visible.map((p, i) => (
            <a
              key={p.name}
              href={p.link}
              target={p.link !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              className="glass-card reveal"
              style={{
                display: "block",
                padding: "2rem 1.6rem",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  background: "var(--gradient)",
                  color: "var(--bg)",
                  marginBottom: "1.3rem",
                }}
              >
                <i className={p.icon}></i>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                {p.name}
              </h3>
              <p style={{ color: "var(--cyan)", fontSize: "0.78rem", marginBottom: "0.8rem" }}>{p.tech}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.2rem" }}>{p.desc}</p>
              <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--pink)" }}>
                View Project <i className="ri-arrow-right-up-line"></i>
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
