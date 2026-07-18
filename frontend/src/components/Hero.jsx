import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 76,
      }}
    >
      <div
        className="orb"
        style={{
          width: 480,
          height: 480,
          background: "var(--purple)",
          top: "-10%",
          left: "-10%",
          animation: "float-a 14s ease-in-out infinite",
        }}
      />
      <div
        className="orb"
        style={{
          width: 420,
          height: 420,
          background: "var(--cyan)",
          bottom: "-15%",
          right: "-8%",
          animation: "float-b 16s ease-in-out infinite",
        }}
      />
      <div
        className="orb"
        style={{
          width: 300,
          height: 300,
          background: "var(--pink)",
          top: "35%",
          left: "45%",
          opacity: 0.2,
          animation: "float-a 18s ease-in-out infinite",
        }}
      />

      <div
        className="container hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <div>
          <div className="eyebrow">Hi, I'm {profile.name}</div>
          <h1
  style={{
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(3.2rem, 7.5vw, 6rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    marginBottom: "1.5rem",
  }}
>
            Full Stack <span className="glow-text">Developer</span>
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: 480, marginBottom: "2.2rem", fontSize: "1.05rem" }}>
            {profile.summary}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-glow">
              View Projects <i className="ri-arrow-right-line"></i>
            </a>
            <a href="#contact" className="btn-ghost">
              Get In Touch
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost">
              Download CV <i className="ri-download-2-line"></i>
            </a>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
            {[
              { href: `mailto:${profile.email}`, icon: "ri-mail-fill" },
              { href: profile.github, icon: "ri-github-fill" },
              { href: profile.linkedin, icon: "ri-linkedin-fill" },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              width: "78%",
              height: "78%",
              background: "var(--gradient)",
              filter: "blur(90px)",
              opacity: 0.3,
              borderRadius: "50%",
            }}
          />
          <img
            src="/profile.png"
            alt={profile.name}
            fetchpriority="high"
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 420,
              width: "100%",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 78%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 78%, transparent 100%)",
              filter: "drop-shadow(0 20px 45px rgba(0,0,0,0.5))",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child > div,
          .hero-grid > div:first-child .eyebrow {
            justify-content: center;
          }
          .hero-grid a.btn-glow, .hero-grid a.btn-ghost {
            margin-inline: auto;
          }
          .hero-grid > div:first-child > div[style*="display: flex"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
