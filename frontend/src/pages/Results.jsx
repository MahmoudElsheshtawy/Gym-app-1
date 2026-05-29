
import { useState, useRef, useEffect, useCallback } from "react";
import { assets } from "../assets/frontend_assets/assets";

const slides = [
  { src: assets.bolbol },

  { src: assets.blog },
  { src: assets.home },
  { src: assets.blog },
  { src: assets.b },
  { src: assets.home },
  { src: assets.bolbol },
  { src: assets.home },
  { src: assets.b },

];

const TOTAL = slides.length;

function LazyImg({ src }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "300px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0, background: "#1c1c1c" }}>
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg,#1c1c1c 25%,#2a2a2a 50%,#1c1c1c 75%)",
          backgroundSize: "400% 100%",
          animation: "shimmer 1.4s ease-in-out infinite",
        }} />
      )}
      {inView && (
        <img
          src={src} alt=""
          onLoad={() => setLoaded(true)}
          draggable={false}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: loaded ? 1 : 0, transition: "opacity 0.4s",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

export default function ClientTransformations() {
  const [idx, setIdx] = useState(0);
  const [modal, setModal] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const lockRef = useRef(false);
  const trackRef = useRef(null);
  const startXRef = useRef(null);
  const isDragRef = useRef(false);
  const dragMovedRef = useRef(false);

  const go = useCallback((dir) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setIdx((p) => (p + dir + TOTAL) % TOTAL);
    setTimeout(() => { lockRef.current = false; }, 450);
  }, []);

  // wheel
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const wLock = { v: false };
    const onWheel = (e) => {
      e.preventDefault();
      if (wLock.v) return;
      wLock.v = true;
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      go(d > 0 ? 1 : -1);
      setTimeout(() => { wLock.v = false; }, 550);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [go]);

  // keyboard
  useEffect(() => {
    const fn = (e) => {
      if (modal) { if (e.key === "Escape") setModal(false); return; }
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [go, modal]);

  // mouse drag
  const onMouseDown = (e) => {
    isDragRef.current = true;
    dragMovedRef.current = false;
    startXRef.current = e.clientX;
    setGrabbing(true);
  };
  const onMouseMove = (e) => {
    if (!isDragRef.current) return;
    if (Math.abs(e.clientX - startXRef.current) > 6) dragMovedRef.current = true;
  };
  const onMouseUp = (e) => {
    if (!isDragRef.current) return;
    isDragRef.current = false;
    setGrabbing(false);
    if (!dragMovedRef.current) return;
    const diff = startXRef.current - e.clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
  };
  const onMouseLeave = (e) => {
    if (!isDragRef.current) return;
    isDragRef.current = false;
    setGrabbing(false);
    const diff = startXRef.current - e.clientX;
    if (dragMovedRef.current && Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
  };

  // touch
  const onTouchStart = (e) => { startXRef.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
  };

  const prev = (idx - 1 + TOTAL) % TOTAL;
  const next = (idx + 1) % TOTAL;

  const handleCenterClick = () => {
    if (!dragMovedRef.current) setModal(true);
  };

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", fontFamily: "'Bebas Neue','Cairo',sans-serif", paddingBottom: "3rem" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cairo:wght@400;700&display=swap');
        @keyframes shimmer { 0%{background-position:100% 0} 100%{background-position:-100% 0} }
        @keyframes fadeSlide { from{opacity:0;transform:translateY(8px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes modalIn { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
        * { box-sizing: border-box; }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "3rem 1rem 2rem" }}>
        <p style={{ color: "#e63946", fontSize: 11, letterSpacing: 6, margin: "0 0 8px", textTransform: "uppercase" }}>RESULTS</p>
        <h2 style={{ margin: 0, fontSize: "clamp(28px,5.5vw,68px)", fontFamily: "'Bebas Neue',sans-serif", letterSpacing: 2, lineHeight: 1 }}>
          <span style={{ color: "#fff" }}>CLIENT </span>
          <span style={{ color: "#e63946" }}>TRANSFORMATIONS</span>
        </h2>
      </div>

      {/* Slider */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(8px, 2vw, 24px)",
          padding: "0 clamp(48px, 7vw, 90px)",
          cursor: grabbing ? "grabbing" : "grab",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        {/* Prev arrow */}
        <button onClick={() => go(-1)} style={{
          position: "absolute", left: "clamp(4px,1.5vw,24px)", zIndex: 10,
          width: 32, height: 32, borderRadius: "50%",
          background: "rgba(15,15,15,0.85)", border: "1px solid #2a2a2a",
          color: "#aaa", fontSize: 15, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>‹</button>

        {/* Left ghost */}
        <div onClick={() => go(-1)} style={{
          flexShrink: 0,
          width: "clamp(80px, 16vw, 200px)",
          aspectRatio: "3/4",
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          opacity: 0.45,
          transform: "scale(0.9)",
          cursor: "pointer",
          border: "1px solid #2a2a2a",
          transition: "opacity 0.3s",
        }}>
          <LazyImg src={slides[prev].src} />
        </div>

        {/* Center */}
        <div
          key={idx}
          onClick={handleCenterClick}
          style={{
            flexShrink: 0,
            width: "clamp(260px, 60vw, 380px)",
            aspectRatio: "3/4",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            border: "2px solid #e63946",
            boxShadow: "0 0 32px rgba(230,57,70,0.3), 0 8px 40px rgba(0,0,0,0.6)",
            animation: "fadeSlide 0.4s ease",
            cursor: "zoom-in",
          }}
        >
          <LazyImg src={slides[idx].src} />
        </div>

        {/* Right ghost */}
        <div onClick={() => go(1)} style={{
          flexShrink: 0,
          width: "clamp(80px, 16vw, 200px)",
          aspectRatio: "3/4",
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          opacity: 0.45,
          transform: "scale(0.9)",
          cursor: "pointer",
          border: "1px solid #2a2a2a",
          transition: "opacity 0.3s",
        }}>
          <LazyImg src={slides[next].src} />
        </div>

        {/* Next arrow */}
        <button onClick={() => go(1)} style={{
          position: "absolute", right: "clamp(4px,1.5vw,24px)", zIndex: 10,
          width: 32, height: 32, borderRadius: "50%",
          background: "rgba(15,15,15,0.85)", border: "1px solid #2a2a2a",
          color: "#aaa", fontSize: 15, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>›</button>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: "1.5rem", flexWrap: "wrap", padding: "0 1rem" }}>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              if (lockRef.current) return;
              lockRef.current = true;
              setIdx(i);
              setTimeout(() => { lockRef.current = false; }, 450);
            }}
            style={{
              width: i === idx ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === idx ? "#e63946" : "#333",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.93)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
            animation: "modalIn 0.25s ease",
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setModal(false); }}
            style={{
              position: "absolute", top: 16, right: 16,
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(230,57,70,0.15)", border: "1px solid #e63946",
              color: "#e63946", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 10,
            }}
          >✕</button>
          <img
            src={slides[idx].src}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 14,
              border: "2px solid #e63946",
              boxShadow: "0 0 60px rgba(230,57,70,0.3)",
              animation: "modalIn 0.25s ease",
            }}
          />
        </div>
      )}
    </div>
  );
}