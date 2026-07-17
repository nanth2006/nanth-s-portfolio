import { profile } from "../data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2.2rem 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          © 2026 {profile.name}. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "1rem" }}>
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
              style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}
            >
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
