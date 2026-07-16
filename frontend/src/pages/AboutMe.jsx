import { useState, useEffect, useRef } from "react";
import { assets } from "../assets/frontend_assets/assets";

const ACCENT = "#FFC107";

const posts = [
  {
    id: 1,
    avatar: "م",
    name: "محمد نبيل",
    handle: "@mohamednabilfit",
    time: "منذ يومين",
    content: `ليه تتدرب معايا؟\n\nالتدريب مش بس رفع أثقال، هو أسلوب حياة. أنا بساعدك توصل لهدفك بأسرع وقت ممكن مع برنامج مخصص ليك بالكامل.\n\nأنا مؤمن إن كل واحد عنده القدرة يغير جسمه، بس محتاج الطريق الصح والإرشاد الصح.\n\nأبدأ رحلتك معايا النهارده! 💪`,
    likes: 342, comments: 58, shares: 91,
  },

];

// تايم لاين معاد صياغتها من "قصتي" — مراحل مختصرة ومناسبة لشكل التايم لاين
const events = [
  {
    date: "البداية",
    icon: "🏋️",
    title: "شغف الجيم",
    desc: "دخلت الجيم لأول مرة كأي شاب، هدفي كان بس تحسين شكلي وبناء جسم أفضل.",
  },
  {
    date: "التحول",
    icon: "🔬",
    title: "من التمرين إلى الفضول العلمي",
    desc: "الاهتمام تحول من مجرد التمرين لفهم إزاي جسم الإنسان بيشتغل فعليًا.",
  },
  {
    date: "الاحتراف",
    icon: "🧑‍🏫",
    title: "العمل كمدرب",
    desc: "تعاملت مع فئات عمرية وأهداف مختلفة، من المبتدئين للرياضيين لكبار السن.",
  },
  {
    date: "الاستثمار",
    icon: "📚",
    title: "الدراسة والاعتمادات العلمية",
    desc: "سنوات من الدراسة الذاتية والدورات المتخصصة في التدريب والتغذية، داخل مصر وخارجها.",
  },
  {
    date: "اليوم",
    icon: "⚙️",
    title: "سيستم تدريبي متكامل",
    desc: "نظام أونلاين يجمع بين التدريب والتغذية والمتابعة المستمرة، مبني على العلم مش الاجتهاد.",
  },
];

const photos = [
  assets.tow, assets.nine, assets.one,
  assets.three, assets.fore, assets.five,
  assets.six, assets.seven, assets.egt,
];

/* ─── Reveal on scroll ─── */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Photo Modal ─── */
function PhotoModal({ src, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    const esc = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 280);
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: visible ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        transition: "background 0.28s ease",
      }}
    >
      <button
        onClick={handleClose}
        style={{
          position: "absolute", top: 16, right: 16,
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(255,193,7,0.15)", border: `1px solid ${ACCENT}`,
          color: ACCENT, fontSize: 18, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >✕</button>

      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "88vw",
          maxHeight: "86vh",
          objectFit: "contain",
          borderRadius: 14,
          border: `2px solid ${ACCENT}`,
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.9)",
          transition: "opacity 0.28s ease, transform 0.32s cubic-bezier(0.34, 1.4, 0.64, 1)",
        }}
      />
    </div>
  );
}

/* ─── Post Card ─── */
function PostCard({ post, delay }) {
  const [liked, setLiked] = useState(false);
  return (
    <Reveal delay={delay}>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-5 hover:border-white/20 transition">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black" style={{ background: ACCENT }}>
            {post.avatar}
          </div>
          <div className="flex-1">
            <div className="text-white font-bold text-sm">{post.name}</div>
            <div className="text-white/40 text-xs">{post.handle} • {post.time}</div>
          </div>
          <span className="text-white/30">⋯</span>
        </div>

        <div className="text-white/80 text-sm leading-7 whitespace-pre-line mb-4">{post.content}</div>

        {post.cta && (
          <div className="rounded-xl p-4 text-center mb-4" style={{ background: "rgba(255,193,7,0.08)", border: "1px solid rgba(255,193,7,0.2)" }}>
            <div className="text-white font-bold mb-1">{post.cta.text}</div>
            <div className="text-white/60 text-xs mb-3">{post.cta.sub}</div>
            <a href="https://wa.me/201558864839" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button className="px-5 py-2 rounded-full text-sm font-bold transition hover:opacity-90" style={{ background: ACCENT, color: "#1a1300" }}>
                {post.cta.btn}
              </button>
            </a>
          </div>
        )}

        <div className="flex items-center justify-between text-white/50 text-xs border-t border-white/10 pt-3">
          <button onClick={() => setLiked(!liked)} className="flex items-center gap-1 hover:text-yellow-400 transition">
            ❤️ {post.likes + (liked ? 1 : 0)}
          </button>
          <button className="hover:text-white transition">💬 {post.comments}</button>
          <button className="hover:text-white transition">↗ {post.shares}</button>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Timeline Item ─── */
function TimelineItem({ ev, isLast, delay }) {
  return (
    <Reveal delay={delay} className="relative pr-8">
      {/* الخط الواصل */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            right: 13,
            top: 30,
            bottom: -14,
            width: 2,
            background: "linear-gradient(to bottom, rgba(255,193,7,0.5), rgba(255,193,7,0.05))",
          }}
        />
      )}
      {/* دائرة الأيقونة */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "rgba(255,193,7,0.12)",
          border: `1.5px solid ${ACCENT}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          flexShrink: 0,
        }}
      >
        {ev.icon}
      </div>

      <div className="pb-5">
        <span
          className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5"
          style={{ background: "rgba(255,193,7,0.15)", color: ACCENT }}
        >
          {ev.date}
        </span>
        <div className="text-white font-bold text-sm">{ev.title}</div>
        <div className="text-white/45 text-xs leading-relaxed mt-0.5">{ev.desc}</div>
      </div>
    </Reveal>
  );
}

/* ─── Main Page ─── */
export default function TrainerProfile() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [headerMounted, setHeaderMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-[Cairo]">

      {/* ── COVER ── */}
      <div className="relative h-60 md:h-72 w-full overflow-hidden">
        <img
          src={assets.background}
          alt="cover"
          className="w-full h-full object-cover"
          style={{
            opacity: headerMounted ? 1 : 0,
            transform: headerMounted ? "scale(1)" : "scale(1.04)",
            transition: "opacity 0.7s ease, transform 0.9s ease",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4">

        {/* ── PROFILE HEADER ── */}
        <div
          className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-12 mb-6"
          style={{
            opacity: headerMounted ? 1 : 0,
            transform: headerMounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-[#050505] shadow-xl overflow-hidden flex-shrink-0">
            <img src={assets.bolbol} alt="profile" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <h1 className="text-xl font-bold flex items-center gap-2">
              محمد نبيل <span className="text-blue-400">●</span>
            </h1>
            <p className="text-white/40 text-xs mt-1">Online Fitness Coach • 6 Years Experience</p>
            <div className="flex gap-4 text-xs mt-2 text-white/60">
              <span><b className="text-white">4.5K</b> followers</span>
              <span><b className="text-white">9</b> following</span>
            </div>
          </div>

          <div className="flex gap-2">
            <a href="https://www.facebook.com/share/1LEiTjL4Ad/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 rounded-full text-sm font-bold transition hover:opacity-85" style={{ background: ACCENT, color: "#1a1300" }}>
                Follow
              </button>
            </a>
            <a href="https://wa.me/201558864839" target="_blank" rel="noopener noreferrer">
              <button className="border border-white/20 px-5 py-2 rounded-full text-sm hover:border-yellow-500 hover:text-yellow-500 transition">
                Message
              </button>
            </a>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-16">

          {/* ── LEFT SIDEBAR ── */}
          <div className="space-y-4">

            <Reveal delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="font-bold mb-2" style={{ color: ACCENT }}>About</h3>
                <p className="text-white/60 text-xs leading-6">
                  Online fitness coach helping clients transform their bodies with science-based training & nutrition.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="font-bold mb-3" style={{ color: ACCENT }}>Photos</h3>
                <div className="grid grid-cols-3 gap-2">
                  {photos.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setActivePhoto(src)}
                      className="rounded-lg overflow-hidden border border-white/10 cursor-pointer group relative"
                      style={{ aspectRatio: "4/5" }}
                    >
                      <img
                        src={src}
                        alt={`photo-${i + 1}`}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top center",
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                        <span className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200">🔍</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="font-bold mb-1" style={{ color: ACCENT }}>قصتي</h3>
                <p className="text-white/40 text-[11px] mb-4 leading-relaxed">
                  من شغف الجيم… إلى بناء سيستم تدريبي قائم على العلم
                </p>
                <div>
                  {events.map((ev, i) => (
                    <TimelineItem
                      key={i}
                      ev={ev}
                      isLast={i === events.length - 1}
                      delay={i * 90}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

          {/* ── FEED ── */}
          <div className="lg:col-span-2">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={100 + i * 100} />
            ))}
          </div>

        </div>
      </div>

      {/* ── MODAL ── */}
      {activePhoto && <PhotoModal src={activePhoto} onClose={() => setActivePhoto(null)} />}
    </div>
  );
}