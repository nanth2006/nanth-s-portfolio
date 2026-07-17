import useReveal from "../hooks/useReveal";
import { certifications } from "../data";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" className="section" style={{ background: "var(--bg-soft)" }} ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Verified Learning</div>
          <h2 className="section-title">
            <span className="glow-text">Certifications</span>
          </h2>
        </div>

        <div
          className="cert-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
          }}
        >
          {certifications.map((c, i) => (
            <div key={c.name} className="glass-card reveal" style={{ padding: "1.6rem", transitionDelay: `${i * 60}ms` }}>
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
                  color: "var(--pink)",
                  marginBottom: "1rem",
                }}
              >
                <i className={c.icon}></i>
              </div>
              <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>{c.name}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>{c.org}</p>
              {c.id && <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "0.2rem" }}>ID: {c.id}</p>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
