import useReveal from "../hooks/useReveal";
import { profile } from "../data";

const stats = [
  { label: "Real-World Projects", value: "8+" },
  { label: "Certifications", value: "8" },
  { label: "LeetCode Problems", value: "180+" },
  { label: "Hackathon Wins", value: "2" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">About Me</div>
          <h2 className="section-title">
            From Nagapattinam, <span className="glow-text">building for the web.</span>
          </h2>
          <p className="section-desc">
            B.Tech Information Technology student at EGS Pillay Engineering College (2024–2028),
            active IAENG member, and multiple hackathon prize winner — always exploring how AI
            can make web applications smarter and more useful for real people.
          </p>
        </div>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass-card reveal"
              style={{ padding: "1.8rem 1.4rem", transitionDelay: `${i * 90}ms` }}
            >
              <div
                className="glow-text"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem" }}
              >
                {s.value}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.4rem" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .about-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
