import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { profile } from "../data";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-soft)" }} ref={ref}>
      <div className="container">
        <div className="section-head reveal" style={{ margin: "0 auto 3rem", textAlign: "center", maxWidth: 560 }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Contact Me
          </div>
          <h2 className="section-title">
            Let's build something <span className="glow-text">great together.</span>
          </h2>
          <p className="section-desc" style={{ margin: "1rem auto 0" }}>
            Have a project in mind or an opportunity to discuss? Send a message and I'll get back to you.
          </p>
        </div>

        <div
          className="contact-grid reveal"
          style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "2rem", maxWidth: 900, margin: "0 auto" }}
        >
          <div className="glass-card" style={{ padding: "2rem" }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
              Contact Info
            </h4>
            {[
              { icon: "ri-mail-fill", label: profile.email, href: `mailto:${profile.email}` },
              { icon: "ri-phone-fill", label: profile.phone, href: `tel:${profile.phone}` },
              { icon: "ri-map-pin-fill", label: profile.location, href: null },
              { icon: "ri-github-fill", label: "github.com/nanth2006", href: profile.github },
              { icon: "ri-linkedin-fill", label: "LinkedIn Profile", href: profile.linkedin },
            ].map((item) => (
              <div key={item.icon} style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.1rem" }}>
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--surface-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--cyan)",
                    fontSize: "0.95rem",
                    flexShrink: 0,
                  }}
                >
                  <i className={item.icon}></i>
                </span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    {item.label}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{item.label}</span>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="glass-card" style={{ padding: "2rem", display: "grid", gap: "1rem" }}>
            <input
              required
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              required
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button type="submit" className="btn-glow" disabled={status === "sending"} style={{ justifySelf: "start" }}>
              {status === "sending" ? "Sending..." : "Send Message"} <i className="ri-send-plane-fill"></i>
            </button>
            {status === "sent" && <p style={{ color: "var(--cyan)", fontSize: "0.85rem" }}>Message sent! I'll reply soon.</p>}
            {status === "error" && (
              <p style={{ color: "var(--pink)", fontSize: "0.85rem" }}>
                Couldn't reach the server. Make sure the backend is running.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: "0.92rem",
  outline: "none",
};
