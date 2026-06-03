import { useState, useEffect, useRef } from "react";
import { assets } from "../assets/frontend_assets/assets";

const ACCENT = "#FFC107";

// ضيف صورك هنا — كل عنصر فيه before و after
const transformations = [
  { before: assets.blog, after: assets.b, flag: null },
  { before: assets.bolbol, after: assets.b, flag: null },
  { before: assets.bolbol, after: assets.b, flag: null },
  { before: assets.bolbol, after: assets.b, flag: null },
  { before: assets.b6a, after: assets.b, flag: null },
  { before: assets.b7a, after: assets.b, flag: "🇩🇪" },
  { before: assets.b8a, after: assets.b, flag: null },
  { before: assets.b9a, after: assets.b, flag: "🇸🇦" },
];

// Featured transformation (الكارد الكبير في الأعلى)
const featured = {
   images: [
    assets.home || "/fallback.jpg",
    assets.blog || "/fallback.jpg",
    assets.bolbol || "/fallback.jpg",
  ],
  title: "تحول جذري وشامل",
  subtitle: "قصة نجاح مميزة",
  desc: "الالتزام والاستمرارية مع نظام نبيل العلمي هو المفتاح لتحقيق النتائج المبهرة. هذا التحول هو مثال حي على أن المستقبل ممكن مع التوجيه الصحيح والإرادة القوية.",
  stats: ["خطة تغذية مخصصة 100٪", "برنامج تدريب مكثف", "متابعة يومية دقيقة"],
};

// Lazy Image component
function LazyImg({ src, alt, style }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "150px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", height: "100%", background: "#1a1a1a", overflow: "hidden", ...style }}>
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg,#1a1a1a 25%,#2a2a2a 50%,#1a1a1a 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.4s infinite",
        }} />
      )}
      {inView && (
        <img
          src={src} alt={alt}
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
            display: "block",
          }}
        />
      )}
    </div>
  );
}

// Animated card with intersection observer
function AnimatedCard({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "0px", threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function TransformCard({ item, delay }) {
  return (
    <AnimatedCard delay={delay} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #2a2a2a", background: "#141414", position: "relative", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" }}>
      {item.flag && (
        <div style={{ position: "absolute", top: 10, right: 10, zIndex: 10, fontSize: 24, background: "rgba(0,0,0,0.5)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
          {item.flag}
        </div>
      )}
      {item.label && (
        <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", zIndex: 10, background: "rgba(0,0,0,0.8)", color: "#fff", fontSize: 11, fontWeight: 800, padding: "4px 12px", borderRadius: 30, whiteSpace: "nowrap", backdropFilter: "blur(4px)", letterSpacing: 0.5 }}>
          {item.label}
        </div>
      )}
      <div style={{ display: "flex", height: "clamp(160px, 40vw, 200px)" }}>
        <div style={{ flex: 1, position: "relative" }}>
          <LazyImg src={item.before} alt="before" />
          <div style={{ position: "absolute", bottom: 8, left: 8, background: "rgba(0,0,0,0.75)", color: "#999", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 20, letterSpacing: 0.5 }}>قبل</div>
        </div>
        <div style={{ width: 3, background: `linear-gradient(to bottom, ${ACCENT}, #ffdb70)`, flexShrink: 0 }} />
        <div style={{ flex: 1, position: "relative" }}>
          <LazyImg src={item.after} alt="after" />
          <div style={{ position: "absolute", bottom: 8, right: 8, background: ACCENT, color: "#1a1300", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 20, letterSpacing: 0.5 }}>بعد</div>
        </div>
      </div>
    </AnimatedCard>
  );
}

export default function Resultsforme() {
  const [featIdx, setFeatIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFeatIdx((p) => (p + 1) % featured.images.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: "radial-gradient(circle at 20% 50%, #0a0a0a, #050505)", minHeight: "100vh", color: "#fff", fontFamily: "'Cairo', 'Segoe UI', sans-serif", direction: "rtl", padding: "5rem 1rem 3rem" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(30px)}
          to{opacity:1;transform:translateY(0)}
        }
        .transform-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(255,193,7,0.15);
          border-color: ${ACCENT} !important;
        }
        @media (max-width: 640px) {
          .featured-text { padding: 1rem !important; }
          .featured-stats { gap: 4px !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem", animation: "fadeUp 0.7s ease forwards", paddingTop: "1rem" }}>
        <div style={{ display: "inline-block", marginBottom: "0.5rem" }}>
          <div style={{ width: 50, height: 3, background: ACCENT, borderRadius: 2, margin: "0 auto" }} />
        </div>
        <h1 style={{ fontSize: "clamp(36px, 8vw, 60px)", fontWeight: 900, letterSpacing: 3, textTransform: "uppercase", color: ACCENT, margin: 0 }}>
          النتائج
        </h1>
        <p style={{ color: "#888", fontSize: 13, marginTop: 12, maxWidth: 500, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
          نتائج تحول العملاء • نماذج حقيقية من التغيير الجسدي والتفوق مع برنامج نبيل
        </p>
      </div>

      {/* Featured Card */}
      <AnimatedCard delay={100} style={{ maxWidth: 900, margin: "0 auto 2rem", background: "#121212", border: "1px solid #2a2a2a", borderRadius: 24, overflow: "hidden", display: "flex", flexWrap: "wrap", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
        {/* Images Slideshow */}
        <div style={{ position: "relative", width: "clamp(200px, 50%, 300px)", minWidth: 350, flexShrink: 0, background: "#00a0a0" }}>
          <div style={{ position: "absolute", top: 12, right: 12, zIndex: 10, background: ACCENT, color: "#1a1300", fontSize: 9, fontWeight: 900, letterSpacing: 2, padding: "4px 12px", borderRadius: 30, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
            مميز
          </div>
          {featured.images.map((src, i) => (
            <div
              key={i}
              style={{
                position: "absolute", inset: 0,
                opacity: i === featIdx ? 1 : 0,
                transition: "opacity 0.8s ease",
              }}
            >
              <LazyImg src={src} alt={`feat ${i}`} />
            </div>
          ))}
          <div style={{ paddingTop: "120%" }} />
          {/* Dots */}
          <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 10 }}>
            {featured.images.map((_, i) => (
              <div
                key={i}
                onClick={() => setFeatIdx(i)}
                style={{
                  width: i === featIdx ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === featIdx ? ACCENT : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="featured-text" style={{ flex: 1, padding: "1.2rem 1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 900, color: "#fff", margin: "0 0 4px" }}>{featured.title}</h2>
          <h3 style={{ fontSize: "clamp(14px, 3vw, 18px)", fontWeight: 700, color: ACCENT, margin: "0 0 10px" }}>{featured.subtitle}</h3>
          <p style={{ fontSize: 12, color: "#aaa", lineHeight: 1.7, marginBottom: 14 }}>{featured.desc}</p>
          <div className="featured-stats" style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 16 }}>
            {featured.stats.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#ccc" }}>
                <span style={{ color: ACCENT, fontSize: 12 }}>✦</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <button style={{ alignSelf: "flex-start", background: ACCENT, border: "none", color: "#1a1300", borderRadius: 40, padding: "8px 24px", fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit", letterSpacing: 1, transition: "transform 0.2s, opacity 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            عرض التفاصيل
          </button>
        </div>
      </AnimatedCard>

      {/* Grid */}
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, padding: "0 0.5rem" }}>
        {transformations.map((item, i) => (
          <div key={i} className="transform-card">
            <TransformCard item={item} delay={i * 60} />
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div style={{ textAlign: "center", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #2a2a2a", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
        <p style={{ fontSize: 10, color: "#666", letterSpacing: 0.5 }}>
          نتائج حقيقية لعملاء البرنامج • كل حالة فردية لها ظروفها الخاصة
        </p>
      </div>
    </div>
  );
}