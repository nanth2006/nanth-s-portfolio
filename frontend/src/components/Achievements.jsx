import useReveal from "../hooks/useReveal";
import { achievements } from "../data";

export default function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Milestones</div>
          <h2 className="section-title">
            Achievements & <span className="glow-text">Awards</span>
          </h2>
        </div>

        <div
          className="achieve-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
        >
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="glass-card reveal"
              style={{
                display: "flex",
                gap: "1.1rem",
                alignItems: "flex-start",
                padding: "1.5rem",
                transitionDelay: `${i * 70}ms`,
                borderColor: a.title.includes("LeetCode") ? "rgba(236,72,153,0.4)" : "var(--border)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: a.title.includes("LeetCode") ? "var(--gradient)" : "var(--surface-strong)",
                  color: a.title.includes("LeetCode") ? "var(--bg)" : "var(--pink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.15rem",
                }}
              >
                <i className={a.icon}></i>
              </span>
              <div>
                <h4 style={{ fontSize: "1.02rem", fontWeight: 600, marginBottom: "0.3rem" }}>{a.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.86rem" }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .achieve-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
