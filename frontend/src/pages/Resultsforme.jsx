import { useState, useEffect, useRef } from "react";
import { assets } from "../assets/frontend_assets/assets";

// ضيف صورك هنا — كل عنصر فيه before و after
const transformations = [
  { before: assets.blog, after: assets.b, flag: null },
  { before: assets.bolbol, after: assets.b2b, flag: null },
  { before: assets.b3a, after: assets.b3b, label: "91 kg → 83 kg" },
  { before: assets.b4a, after: assets.b4b, flag: null },
  { before: assets.b5a, after: assets.b5b, flag: null },
  { before: assets.b6a, after: assets.b6b, flag: null },
  { before: assets.b7a, after: assets.b7b, flag: "🇩🇪" },
  { before: assets.b8a, after: assets.b8b, flag: null },
  { before: assets.b9a, after: assets.b9b, flag: "🇸🇦" },
];

// Featured transformation (الكارد الكبير في الأعلى)
const featured = {
  images: [{src: assets.home}, {src: assets.blog}, {src: assets.bolbol}], // صور مختلفة لنفس العميل تظهر في السلايدر
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
          background: "linear-gradient(90deg,#1a1a1a 25%,#222 50%,#1a1a1a 75%)",
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
    <AnimatedCard delay={delay} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #2a2a2a", background: "#161616", position: "relative" }}>
      {item.flag && (
        <div style={{ position: "absolute", top: 8, right: 8, zIndex: 10, fontSize: 22 }}>{item.flag}</div>
      )}
      {item.label && (
        <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", zIndex: 10, background: "rgba(0,0,0,0.75)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>
          {item.label}
        </div>
      )}
      <div style={{ display: "flex", height: 180 }}>
        <div style={{ flex: 1, position: "relative" }}>
          <LazyImg src={item.before} alt="before" />
          <div style={{ position: "absolute", bottom: 6, left: 6, background: "rgba(0,0,0,0.7)", color: "#aaa", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>BEFORE</div>
        </div>
        <div style={{ width: 2, background: "#e63946", flexShrink: 0 }} />
        <div style={{ flex: 1, position: "relative" }}>
          <LazyImg src={item.after} alt="after" />
          <div style={{ position: "absolute", bottom: 6, right: 6, background: "rgba(230,57,70,0.85)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>AFTER</div>
        </div>
      </div>
    </AnimatedCard>
  );
}

export default function Resultsforme() {
  const [featIdx, setFeatIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFeatIdx((p) => (p + 1) % featured.images.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", color: "#fff", fontFamily: "'Cairo',sans-serif", direction: "rtl", padding: "3rem 1rem" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem", animation: "fadeUp 0.7s ease forwards" }}>
        <h1 style={{ fontSize: "clamp(32px,6vw,56px)", fontWeight: 900, letterSpacing: 4, textTransform: "uppercase", color: "#e63946", margin: 0 }}>
          RESULTS
        </h1>
        <p style={{ color: "#888", fontSize: 13, marginTop: 8 }}>
          نتائج تحول العملاء • نماذج حقيقية من التغيير الجسدي والتفوق مع برنامج 
        </p>
      </div>

      {/* Featured Card */}
      <AnimatedCard delay={100} style={{ maxWidth: 760, margin: "0 auto 2.5rem", background: "#161616", border: "2px solid #2a2a2a", borderRadius: 18, overflow: "hidden", display: "flex", flexWrap: "wrap" }}>
        {/* Images Slideshow */}
        <div style={{ position: "relative", width: 280, minWidth: 220, flexShrink: 0, background: "#111" }}>
          <div style={{ position: "absolute", top: 10, right: 10, zIndex: 10, background: "#e63946", color: "#fff", fontSize: 9, fontWeight: 900, letterSpacing: 2, padding: "3px 10px", borderRadius: 20 }}>
            FEATURED RESULT
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
          <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5, zIndex: 10 }}>
            {featured.images.map((_, i) => (
              <div key={i} onClick={() => setFeatIdx(i)} style={{ width: i === featIdx ? 16 : 6, height: 6, borderRadius: 3, background: i === featIdx ? "#e63946" : "#555", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: 1, padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 4px" }}>{featured.title}</h2>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e63946", margin: "0 0 12px" }}>{featured.subtitle}</h3>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.85, marginBottom: 16 }}>{featured.desc}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
            {featured.stats.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#ccc" }}>
                <span style={{ color: "#e63946", fontSize: 16 }}>◆</span> {s}
              </div>
            ))}
          </div>
          <button style={{ alignSelf: "flex-start", background: "#e63946", border: "none", color: "#fff", borderRadius: 8, padding: "9px 22px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit", letterSpacing: 1 }}>
            FULL VIEW
          </button>
        </div>
      </AnimatedCard>

      {/* Grid */}
      <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14 }}>
        {transformations.map((item, i) => (
          <TransformCard key={i} item={item} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}