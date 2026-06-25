import { assets } from "../assets/frontend_assets/assets";
import { useState, useRef, useEffect } from "react";

export default function About() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Auto play/pause on scroll visibility
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          videoRef.current.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-20 px-4">

      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-[2px]"
        style={{ background: "linear-gradient(to right, #FFC107, transparent)" }} />

      {/* Side glow */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#FFC107]/40 blur-sm" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

        {/* ===== VIDEO ===== */}
        <div ref={containerRef} className="relative flex justify-center md:justify-start">
          <div
            className="relative rounded-2xl overflow-hidden w-full min-h-[420px]"
            style={{
              border: "2px solid #FFC107",
              boxShadow: "0 0 30px rgba(255,193,7,0.35)",
            }}
          >
            <video
              ref={videoRef}
              src={assets.myVideo}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ position: "absolute", inset: 0 }}
            />

            {/* Fade top */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/60 to-transparent" />

            {/* Fade bottom */}
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Controls */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-4 z-10">

              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                title={playing ? "إيقاف" : "تشغيل"}
                style={{
                  width: 44, height: 44,
                  borderRadius: "50%",
                  border: "none",
                  background: playing ? "#FFC107" : "rgba(255,193,7,0.25)",
                  backdropFilter: "blur(8px)",
                  color: playing ? "#1a1300" : "#FFC107",
                  fontSize: 18,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: playing ? "0 0 16px rgba(255,193,7,0.5)" : "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                {playing ? "⏸" : "▶"}
              </button>

              {/* Mute / Unmute */}
              <button
                onClick={toggleMute}
                title={muted ? "تشغيل الصوت" : "كتم الصوت"}
                style={{
                  width: 44, height: 44,
                  borderRadius: "50%",
                  border: "none",
                  background: !muted ? "#FFC107" : "rgba(255,193,7,0.25)",
                  backdropFilter: "blur(8px)",
                  color: !muted ? "#1a1300" : "#FFC107",
                  fontSize: 18,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: !muted ? "0 0 16px rgba(255,193,7,0.5)" : "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                {muted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="flex flex-col gap-6 justify-center">

          <p className="text-xs font-semibold tracking-[5px] uppercase" style={{ color: "#FFC107" }}>
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight">
            <span className="text-white">ONLINE </span>
            <span style={{ color: "#FFC107" }}>COACH</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
          I’m Mohamed Nabil, a Bachelor of Science (B.Sc.) graduate, an EREPS Registered International Fitness Coach, and a Certified Sports Nutrition Specialist.
          </p>

          <div>
            <a href="https://wa.me/201558864839" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button
                className="px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300"
                style={{
                  background: "#FFC107",
                  color: "#1a1300",
                  boxShadow: "0 0 20px rgba(255,193,7,0.4)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 35px rgba(255,193,7,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(255,193,7,0.4)")}
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 right-0 w-full h-[2px]"
        style={{ background: "linear-gradient(to left, #FFC107, transparent)" }} />
    </section>
  );
}