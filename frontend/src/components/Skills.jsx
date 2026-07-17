import useReveal from "../hooks/useReveal";
import { skills } from "../data";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-soft)" }} ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">My Toolbox</div>
          <h2 className="section-title">
            Skills & <span className="glow-text">Technologies</span>
          </h2>
          <p className="section-desc">
            Languages, frameworks and tools I use to build full stack, AI-powered web applications.
          </p>
        </div>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
        >
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="glass-card reveal"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                padding: "1.1rem 1.2rem",
                transitionDelay: `${(i % 8) * 60}ms`,
              }}
            >
              <i className={s.icon} style={{ fontSize: "1.35rem", color: "var(--cyan)" }}></i>
              <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
