import { useState, useEffect } from "react";

const ACCENT = "#FFC107";
const RECIPIENT = "elsheshtawym54@gmail.com";

const inputStyle = {
  width: "100%",
  background: "#1a1a1a",
  border: "1px solid #2a2a2a",
  borderRadius: 8,
  padding: "14px 16px",
  color: "#fff",
  fontSize: 13,
  letterSpacing: 1,
  fontFamily: "'Bebas Neue', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

function WhatsappIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4c-4.9 0-8.9 4-8.9 8.9 0 1.57.42 3.1 1.21 4.45L3 21l3.78-1.32a8.93 8.93 0 0 0 4.27 1.08h.01c4.9 0 8.9-4 8.9-8.9 0-2.38-.92-4.61-2.36-6.34zm-5.55 13.7a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-2.8.98.93-2.73-.18-.28a7.36 7.36 0 0 1-1.14-3.96c0-4.07 3.32-7.39 7.39-7.39 1.97 0 3.83.77 5.22 2.17a7.33 7.33 0 0 1 2.16 5.23c0 4.08-3.32 7.4-7.39 7.4h-.15zm4.05-5.54c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-1.49-.55-2.6-1.59-.85-.76-1.42-1.7-1.59-1.99-.16-.28-.02-.43.12-.58.13-.15.30-.39.45-.59.15-.2.2-.34.30-.56.1-.22.05-.41-.03-.56-.08-.16-.51-1.22-.69-1.69-.18-.45-.37-.39-.51-.39-.13-.01-.29-.01-.44-.01-.16 0-.41.06-.62.31-.22.25-.84.82-.84 1.99 0 1.17.85 2.31.97 2.47.12.16 1.62 2.48 3.94 3.38 2.32.9 2.32.6 2.74.56.42-.03 1.3-.53 1.49-1.04.18-.51.18-.94.13-1.04-.06-.1-.21-.16-.43-.27z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const contacts = [
  { Icon: WhatsappIcon, label: "WHATSAPP", value: "https://wa.me/201558864839", href: "https://wa.me/201558864839" },
  { Icon: InstagramIcon, label: "INSTAGRAM", value: "@mohmmed nabil", href: "https://www.instagram.com/mo_napil_22?igsh=bXM1Z3o3eG5sN2gy&utm_source=qr" },
  { Icon: FacebookIcon, label: "FACEBOOK", value: "@mohmmed nabil", href: "https://www.facebook.com/share/1LEiTjL4Ad/?mibextid=wwXIfr" },
  { Icon: PinIcon, label: "BASE", value: "Alexandria, Egypt", href: null },
];

export default function ConnectSection() {
  const [form, setForm] = useState({ name: "", email: "", objective: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setError("من فضلك أدخل الاسم والإيميل");
      return;
    }
    setError("");
    setLoading(true);

    const subject = encodeURIComponent(`رسالة جديدة من ${form.name}`);
    const body = encodeURIComponent(
      `الاسم: ${form.name}\nالإيميل: ${form.email}\n\nالهدف:\n${form.objective}`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;

    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", objective: "" });
  };

  return (
    <div style={{
      background: "#0a0a0a",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 2rem 3rem 2rem",
      fontFamily: "'Bebas Neue', 'Cairo', sans-serif",
      boxSizing: "border-box",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cairo:wght@400;600;700&display=swap');

        @keyframes riseIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }

        .anim-rise { opacity: 0; animation: riseIn 0.6s ease forwards; }
        .anim-scale { opacity: 0; animation: scaleIn 0.6s ease forwards; }

        .contact-card { transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s; }
        .contact-card:hover { border-color: ${ACCENT} !important; box-shadow: 0 0 18px rgba(255,193,7,0.18); transform: translateY(-3px); }
        .contact-card:hover .icon-wrap { background: rgba(255,193,7,0.15); color: ${ACCENT}; }

        .icon-wrap { transition: background 0.25s, color 0.25s; }

        .transmit-btn { transition: opacity 0.2s, transform 0.2s; }
        .transmit-btn:hover:not(:disabled) { opacity: 0.88; transform: scale(1.01); }

        input::placeholder, textarea::placeholder { color: #555; letter-spacing: 1px; }
        input:focus, textarea:focus { border-color: ${ACCENT} !important; }
      `}</style>

      <div style={{ display: "flex", gap: "2rem", width: "100%", maxWidth: 1200, flexWrap: "wrap", alignItems: "flex-start", justifyContent: "center" }}>

        {/* LEFT */}
        <div style={{ flex: "1 1 340px", minWidth: 280 }}>
          <h1
            className="anim-rise"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(48px, 10vw, 110px)",
              color: ACCENT,
              margin: "0 0 4px",
              lineHeight: 1,
              letterSpacing: 4,
              animationDelay: "0ms",
            }}
          >
            CONNECT
          </h1>
          <p
            className="anim-rise"
            style={{ color: ACCENT, fontSize: 11, letterSpacing: 4, marginBottom: "1.5rem", opacity: 0.8, animationDelay: "100ms" }}
          >
            READY FOR DEPLOYMENT?
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 16 }}>
            {contacts.map((c, i) => {
              const { Icon } = c;
              return (
                <a
                  key={i}
                  href={c.href || undefined}
                  target={c.href ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-card anim-rise"
                  style={{
                    background: "#141414",
                    border: "1px solid #222",
                    borderRadius: 14,
                    padding: "1rem",
                    textDecoration: "none",
                    display: "block",
                    cursor: c.href ? "pointer" : "default",
                    animationDelay: `${150 + i * 80}ms`,
                  }}
                >
                  <div
                    className="icon-wrap"
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "rgba(255,255,255,0.06)", color: "#999",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Icon />
                  </div>
                  <div style={{ fontSize: 9, color: "#666", letterSpacing: 2, marginBottom: 4 }}>{c.label}</div>
                  <div style={{ fontSize: 12, color: "#ddd", fontFamily: "'Cairo', sans-serif", fontWeight: 600, wordBreak: "break-all", lineHeight: 1.3 }}>
                    {c.value}
                  </div>
                </a>
              );
            })}
          </div>

          <div
            className="anim-rise"
            style={{ background: "#141414", border: "1px solid #222", borderRadius: 14, padding: "1rem", animationDelay: "500ms" }}
          >
            <p style={{ margin: 0, color: "#777", fontSize: 12, fontStyle: "italic", fontFamily: "'Cairo', sans-serif", lineHeight: 1.6 }}>
              "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."
            </p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div
          className="anim-scale"
          style={{
            flex: "1 1 380px",
            minWidth: 280,
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: 18,
            padding: "1.5rem",
            animationDelay: "250ms",
          }}
        >
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: ACCENT, textAlign: "center", letterSpacing: 3, margin: "0 0 1.5rem" }}>
            INQUIRY TERMINAL
          </h2>

          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontSize: 10, color: ACCENT, letterSpacing: 2, marginBottom: 6 }}>FULL NAME</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="IDENTIFY YOURSELF"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontSize: 10, color: ACCENT, letterSpacing: 2, marginBottom: 6 }}>EMAIL ADDRESS</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="COMMUNICATION FREQUENCY"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 10, color: ACCENT, letterSpacing: 2, marginBottom: 6 }}>OBJECTIVE</label>
            <textarea
              value={form.objective}
              onChange={(e) => setForm({ ...form, objective: e.target.value })}
              placeholder="DEFINE YOUR GOALS..."
              rows={4}
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
            />
          </div>

          {error && (
            <div style={{ color: "#ff5252", fontSize: 12, fontFamily: "'Cairo',sans-serif", marginBottom: 10, textAlign: "center" }}>
              {error}
            </div>
          )}

          <button
            className="transmit-btn"
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              background: sent ? "#1a6b2a" : ACCENT,
              border: "none",
              borderRadius: 8,
              padding: "14px",
              color: sent ? "#fff" : "#1a1300",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 18,
              letterSpacing: 5,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.4s",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {sent ? "✓ TRANSMITTED" : loading ? "SENDING..." : "TRANSMIT"}
          </button>

          <p style={{ textAlign: "center", fontSize: 10, color: "#555", fontFamily: "'Cairo',sans-serif", marginTop: 10 }}>
            الرسالة هتوصل على {RECIPIENT}
          </p>
        </div>
      </div>
    </div>
  );
}