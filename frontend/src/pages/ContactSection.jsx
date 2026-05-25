export default function ContactSection() {
  return (
    <div style={{
      background: "#0d0d0d",
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Cairo', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Bebas+Neue&display=swap');
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; box-shadow: 0 0 12px 2px #e63946; }
          50%       { opacity: 1;   box-shadow: 0 0 32px 8px #e63946; }
        }
        .contact-btn {
          background: #e63946;
          border: none;
          color: #fff;
          border-radius: 50px;
          padding: 14px 40px;
          font-size: 17px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 20px rgba(230,57,70,0.4);
        }
        .contact-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 36px rgba(230,57,70,0.7);
        }
      `}</style>

      {/* Top empty dark space */}
      <div style={{ flex: 1, minHeight: 120 }} />

      {/* Glowing red divider line */}
      <div style={{
        width: "100%",
        height: 2,
        background: "linear-gradient(90deg, transparent 0%, #e63946 20%, #ff1a2e 50%, #e63946 80%, transparent 100%)",
        animation: "glowPulse 2.5s ease-in-out infinite",
        marginBottom: 60,
      }} />

      {/* Content */}
      <div style={{ textAlign: "center", padding: "0 1rem 80px" }}>
        <p style={{ color: "#e63946", fontSize: 13, letterSpacing: 5, textTransform: "uppercase", marginBottom: 12 }}>
          GET IN TOUCH
        </p>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(56px, 12vw, 100px)",
          color: "#e63946",
          letterSpacing: 8,
          margin: "0 0 4px",
          textShadow: "0 0 40px rgba(230,57,70,0.5)",
        }}>
          elpolpol
        </h1>

        <p style={{ color: "#aaa", fontSize: 15, letterSpacing: 2, marginBottom: 36 }}>
          Online Coach
        </p>

        <a href="https://wa.me/20000000000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <button className="contact-btn">
            {/* Chat bubble icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Contact
          </button>
        </a>
      </div>

      {/* Bottom red line */}
      <div style={{
        width: "100%",
        height: 2,
        background: "linear-gradient(90deg, transparent 0%, #e63946 20%, #ff1a2e 50%, #e63946 80%, transparent 100%)",
        opacity: 0.4,
      }} />
    </div>
  );
}