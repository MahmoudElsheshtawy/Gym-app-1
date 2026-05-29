import { useState } from "react";

const contacts = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: "WHATSAPP",
    value: "https://wa.me/201558864839",
    href: "https://wa.me/201558864839",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#e63946" stroke="none"/>
      </svg>
    ),
    label: "INSTAGRAM",
    value: "@mohmmed nabil",
    href: "https://www.instagram.com/mo_napil_22?igsh=bXM1Z3o3eG5sN2gy&utm_source=qr",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    label: "FACEBOOK",
    value: "@mohmmed nabil",
    href: "https://www.facebook.com/share/1LEiTjL4Ad/?mibextid=wwXIfr",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "BASE",
    value: "Alexandria, Egypt",
    href: null,
  },
];

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

export default function ConnectSection() {
  const [form, setForm] = useState({ name: "", email: "", objective: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", objective: "" });
  };

  return (
    <div style={{
      background: "#0a0a0a",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 2rem 3rem 2rem", // Increased top padding for better spacing
      fontFamily: "'Bebas Neue', 'Cairo', sans-serif",
      boxSizing: "border-box",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cairo:wght@400;600;700&display=swap');
        .contact-card { transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s; }
        .contact-card:hover { border-color: #e63946 !important; box-shadow: 0 0 20px rgba(230,57,70,0.2); transform: translateY(-2px); }
        .transmit-btn { transition: opacity 0.2s, transform 0.2s; }
        .transmit-btn:hover { opacity: 0.88; transform: scale(1.01); }
        input::placeholder, textarea::placeholder { color: #444; letter-spacing: 1px; }
        input:focus, textarea:focus { border-color: #e63946 !important; }
        
        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .contact-card {
            padding: 0.8rem !important;
          }
          .contact-card svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
        
        @media (max-width: 480px) {
          .contact-card div:last-child {
            font-size: 11px !important;
          }
        }
      `}</style>

      <div style={{ 
        display: "flex", 
        gap: "2rem", 
        width: "100%", 
        maxWidth: 1200, 
        flexWrap: "wrap", 
        alignItems: "flex-start",
        justifyContent: "center"
      }}>

        {/* LEFT */}
        <div style={{ flex: "1 1 340px", minWidth: 280 }}>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 10vw, 110px)",
            color: "#e63946",
            margin: "0 0 4px",
            lineHeight: 1,
            textShadow: "0 0 40px rgba(230,57,70,0.6), 0 0 80px rgba(230,57,70,0.3)",
            letterSpacing: 4,
          }}>
            CONNECT
          </h1>
          <p style={{ color: "#e63946", fontSize: 11, letterSpacing: 4, marginBottom: "1.5rem", opacity: 0.8 }}>
            READY FOR DEPLOYMENT?
          </p>

          {/* Contact cards grid - responsive grid */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", 
            gap: 12, 
            marginBottom: 16 
          }}>
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href || undefined}
                target={c.href ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-card"
                style={{
                  background: "#141414",
                  border: "1px solid #222",
                  borderRadius: 14,
                  padding: "1rem 1rem",
                  textDecoration: "none",
                  display: "block",
                  cursor: c.href ? "pointer" : "default",
                }}
              >
                <div style={{ marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 9, color: "#666", letterSpacing: 2, marginBottom: 4 }}>{c.label}</div>
                <div style={{ 
                  fontSize: 12, 
                  color: "#ddd", 
                  fontFamily: "'Cairo', sans-serif", 
                  fontWeight: 600, 
                  wordBreak: "break-all",
                  lineHeight: 1.3
                }}>
                  {c.value}
                </div>
              </a>
            ))}
          </div>

          {/* Quote */}
          <div style={{
            background: "#141414",
            border: "1px solid #222",
            borderRadius: 14,
            padding: "1rem",
          }}>
            <p style={{ 
              margin: 0, 
              color: "#777", 
              fontSize: 12, 
              fontStyle: "italic", 
              fontFamily: "'Cairo', sans-serif", 
              lineHeight: 1.6 
            }}>
              "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."
            </p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{
          flex: "1 1 380px",
          minWidth: 280,
          background: "#141414",
          border: "1px solid #2a2a2a",
          borderRadius: 18,
          padding: "1.5rem",
          boxShadow: "0 0 60px rgba(230,57,70,0.08), inset 0 0 60px rgba(230,57,70,0.03)",
        }}>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 24,
            color: "#e63946",
            textAlign: "center",
            letterSpacing: 3,
            margin: "0 0 1.5rem",
          }}>
            INQUIRY TERMINAL
          </h2>

          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontSize: 10, color: "#e63946", letterSpacing: 2, marginBottom: 6 }}>FULL NAME</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="IDENTIFY YOURSELF"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontSize: 10, color: "#e63946", letterSpacing: 2, marginBottom: 6 }}>EMAIL ADDRESS</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="COMMUNICATION FREQUENCY"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 10, color: "#e63946", letterSpacing: 2, marginBottom: 6 }}>OBJECTIVE</label>
            <textarea
              value={form.objective}
              onChange={(e) => setForm({ ...form, objective: e.target.value })}
              placeholder="DEFINE YOUR GOALS..."
              rows={4}
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
            />
          </div>

          <button
            className="transmit-btn"
            onClick={handleSubmit}
            style={{
              width: "100%",
              background: sent ? "#1a6b2a" : "#e63946",
              border: "none",
              borderRadius: 8,
              padding: "14px",
              color: "#fff",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 18,
              letterSpacing: 5,
              cursor: "pointer",
              transition: "background 0.4s, transform 0.2s",
            }}
          >
            {sent ? "✓ TRANSMITTED" : "TRANSMIT"}
          </button>
        </div>
      </div>
    </div>
  );
}