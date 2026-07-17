import useReveal from "../hooks/useReveal";
import { education } from "../data";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Academic Background</div>
          <h2 className="section-title">
            <span className="glow-text">Education</span>
          </h2>
        </div>

        <div className="edu-timeline" style={{ maxWidth: 760, position: "relative" }}>
          {education.map((e, i) => (
            <div
              key={e.degree}
              className="glass-card reveal edu-item"
              style={{
                padding: "1.6rem 1.8rem",
                marginBottom: i === education.length - 1 ? 0 : "1.25rem",
                transitionDelay: `${i * 90}ms`,
                display: "flex",
                alignItems: "flex-start",
                gap: "1.2rem",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: "var(--surface-strong)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  color: "var(--cyan)",
                  flexShrink: 0,
                }}
              >
                <i className={e.icon}></i>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700 }}>
                    {e.degree}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      color: "var(--cyan)",
                      background: "var(--surface-strong)",
                      padding: "0.3rem 0.7rem",
                      borderRadius: 999,
                    }}
                  >
                    {e.period}
                  </span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.35rem" }}>
                  {e.institute}
                  {e.score ? ` · ${e.score}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
