// import { useState } from "react";

// const posts = [
//   {
//     id: 1,
//     avatar: "م",
//     name: "محمد نبيل",
//     handle: "@mohamednabilfit",
//     time: "منذ يومين",
//     content: `ليه تتدرب معايا؟\n\nالتدريب مش بس رفع أثقال، هو أسلوب حياة. أنا بساعدك توصل لهدفك بأسرع وقت ممكن مع برنامج مخصص ليك بالكامل.\n\nأنا مؤمن إن كل واحد عنده القدرة يغير جسمه، بس محتاج الطريق الصح والإرشاد الصح.\n\nأبدأ رحلتك معايا النهارده! 💪`,
//     likes: 342,
//     comments: 58,
//     shares: 91,
//     highlighted: true,
//   },
//   {
//     id: 2,
//     avatar: "م",
//     name: "محمد نبيل",
//     handle: "@mohamednabilfit",
//     time: "منذ أسبوع",
//     content: `في 2016 بدأت رحلتي مع الجيم، كنت شايف الناس بتتحول وأنا واقف في مكاني 😅 قررت أغير ده.\n\nفي 2019 وصلت لـ 620 متبع 🎉 وحسيت إن الوقت جه أشارك تجربتي.\n\nمن 2021 لحد دلوقتي عملت أكتر من 3000 عميل من مصر والخليج والمغرب، وكل يوم بيزيد العدد.\n\nالنتائج بتتكلم عن نفسها 💯`,
//     likes: 891,
//     comments: 134,
//     shares: 267,
//     highlighted: false,
//     cta: {
//       text: "أنت. تبدأ تكون من قصص النجاح؟",
//       sub: "أضغط الزرار اللي تحت وابدأ رحلتك.",
//       btn: "ابدأ التحول الآن",
//     },
//   },
// ];

// const photos = [
//   "#1a1a1a", "#222", "#1e1e1e", "#252525", "#1c1c1c", "#202020",
//   "#1a1a1a", "#222", "#1e1e1e",
// ];

// const events = [
//   { date: "2016", color: "#e63946", icon: "🏋️", title: "بدأ رحلتي مع الجيم", desc: "أول يوم في الصالة وقرار التغيير" },
//   { date: "90 يوم", color: "#e63946", icon: "💪", title: "أول 90 يوم من التحول", desc: "تغيير ملحوظ في الجسم والقوة" },
//   { date: "2019", color: "#e63946", icon: "📈", title: "ألف متابع", desc: "بداية تجربتي في التدريب الأونلاين" },
//   { date: "الآن", color: "#e63946", icon: "🏆", title: "أكثر من 3000 عميل", desc: "نتائج حقيقية في مصر والخليج" },
// ];

// function PostCard({ post }) {
//   const [liked, setLiked] = useState(false);
//   return (
//     <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 14, padding: "1.2rem", marginBottom: 16 }}>
//       <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
//         <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#e63946,#900)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
//           {post.avatar}
//         </div>
//         <div>
//           <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>{post.name}</div>
//           <div style={{ fontSize: 11, color: "#666" }}>{post.handle} · {post.time}</div>
//         </div>
//         <div style={{ marginRight: "auto", color: "#555", fontSize: 18, cursor: "pointer" }}>···</div>
//       </div>

//       <div style={{ fontSize: 13, color: "#ccc", lineHeight: 1.85, whiteSpace: "pre-line", marginBottom: 14 }}>
//         {post.content}
//       </div>

//       {post.cta && (
//         <div style={{ background: "linear-gradient(135deg,#e63946 0%,#7a0010 100%)", borderRadius: 10, padding: "1.2rem", textAlign: "center", marginBottom: 14 }}>
//           <div style={{ fontSize: 18, marginBottom: 6 }}>🤍</div>
//           <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 4 }}>{post.cta.text}</div>
//           <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>{post.cta.sub}</div>
//           <button style={{ background: "#fff", color: "#e63946", border: "none", borderRadius: 30, padding: "8px 24px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
//             {post.cta.btn}
//           </button>
//         </div>
//       )}

//       <div style={{ display: "flex", gap: 20, borderTop: "1px solid #222", paddingTop: 10 }}>
//         {[
//           { icon: liked ? "❤️" : "🤍", label: post.likes + (liked ? 1 : 0), action: () => setLiked(!liked) },
//           { icon: "💬", label: post.comments },
//           { icon: "↗", label: post.shares },
//         ].map((a, i) => (
//           <button key={i} onClick={a.action} style={{ background: "none", border: "none", color: "#777", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontFamily: "inherit" }}>
//             <span style={{ fontSize: 15 }}>{a.icon}</span> {a.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function TrainerProfile() {
//   const [activeTab, setActiveTab] = useState("posts");

//   return (
//     <div style={{ background: "#0d0d0d", minHeight: "100vh", color: "#fff", fontFamily: "'Cairo',sans-serif", direction: "rtl" }}>
//       <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />

//       {/* Cover */}
//       <div style={{ position: "relative", height: 200, background: "linear-gradient(160deg,#1a0000 0%,#3d0000 40%,#0d0d0d 100%)", overflow: "hidden" }}>
//         <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%,rgba(230,57,70,0.35) 0%,transparent 70%)" }} />
//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top,#0d0d0d,transparent)" }} />
//       </div>

//       {/* Avatar + Info */}
//       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1rem" }}>
//         <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginTop: -50, marginBottom: 16, flexWrap: "wrap" }}>
//           <div style={{ width: 90, height: 90, borderRadius: "50%", background: "linear-gradient(135deg,#e63946,#7a0010)", border: "3px solid #0d0d0d", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 900, flexShrink: 0 }}>
//             أ
//           </div>
//           <div style={{ flex: 1, paddingBottom: 8 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>أحمد شادي</h1>
//               <span style={{ color: "#4fc3f7", fontSize: 16 }}>●</span>
//             </div>
//             <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>خبير تربية رياضية · خبرة 10 سنوات · 23 سنة</div>
//             <div style={{ display: "flex", gap: 16, marginTop: 6 }}>
//               <span style={{ fontSize: 12, color: "#aaa" }}><strong style={{ color: "#fff" }}>3127</strong> متابِع</span>
//               <span style={{ fontSize: 12, color: "#aaa" }}><strong style={{ color: "#fff" }}>452</strong> يتابع</span>
//             </div>
//           </div>
//           <div style={{ display: "flex", gap: 8, paddingBottom: 8 }}>
//             <button style={{ background: "#e63946", border: "none", color: "#fff", borderRadius: 30, padding: "8px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>متابعة</button>
//             <button style={{ background: "transparent", border: "1px solid #444", color: "#fff", borderRadius: 30, padding: "8px 20px", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>رسالة</button>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #222", marginBottom: 20 }}>
//           {["posts", "about", "photos", "events"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               style={{
//                 background: "none", border: "none", color: activeTab === tab ? "#e63946" : "#666",
//                 borderBottom: activeTab === tab ? "2px solid #e63946" : "2px solid transparent",
//                 padding: "10px 20px", fontFamily: "inherit", fontSize: 13, fontWeight: 700,
//                 cursor: "pointer", transition: "all 0.2s",
//               }}
//             >
//               {{ posts: "المنشورات", about: "نبذة", photos: "الصور", events: "أحداث حياة" }[tab]}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>

//           {/* Sidebar */}
//           <div style={{ width: 280, flexShrink: 0 }}>

//             {/* About Card */}
//             <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 14, padding: "1.2rem", marginBottom: 14 }}>
//               <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: "#e63946" }}>نبذة</div>
//               <p style={{ fontSize: 12, color: "#aaa", lineHeight: 1.8, marginBottom: 12 }}>
//                 أنا أحمد شادي، كوتش متخصص في 10 سنوات. أساعدك توصل لهدفك في أقل وقت ممكن بأفضل نتيجة.
//               </p>
//               {[
//                 { icon: "🏅", text: "خبرة تربية رياضية (10 سنوات)" },
//                 { icon: "👥", text: "أكثر من 3000 عميل" },
//                 { icon: "📍", text: "الإسكندرية، مصر" },
//                 { icon: "📸", text: "@ahmedshadyfit" },
//                 { icon: "📘", text: "Ahmed Shady" },
//               ].map((item, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#aaa", padding: "4px 0" }}>
//                   <span>{item.icon}</span> {item.text}
//                 </div>
//               ))}
//             </div>

//             {/* Photos Card */}
//             <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 14, padding: "1.2rem", marginBottom: 14 }}>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
//                 <div style={{ fontWeight: 700, fontSize: 15, color: "#e63946" }}>الصور</div>
//                 <span style={{ fontSize: 11, color: "#e63946", cursor: "pointer" }}>عرض الكل</span>
//               </div>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4 }}>
//                 {photos.map((bg, i) => (
//                   <div key={i} style={{ aspectRatio: "1", borderRadius: 6, background: bg, border: "1px solid #333" }} />
//                 ))}
//               </div>
//             </div>

//             {/* Events Card */}
//             <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 14, padding: "1.2rem" }}>
//               <div style={{ fontWeight: 700, fontSize: 15, color: "#e63946", marginBottom: 10 }}>أحداث حياة</div>
//               {events.map((ev, i) => (
//                 <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 0", borderBottom: i < events.length - 1 ? "1px solid #222" : "none" }}>
//                   <div style={{ background: "#e63946", borderRadius: 8, padding: "4px 8px", fontSize: 10, fontWeight: 700, color: "#fff", flexShrink: 0, marginTop: 2 }}>{ev.date}</div>
//                   <div>
//                     <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{ev.icon} {ev.title}</div>
//                     <div style={{ fontSize: 11, color: "#777", marginTop: 2 }}>{ev.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Feed */}
//           <div style={{ flex: 1, minWidth: 280 }}>
//             {posts.map((post) => <PostCard key={post.id} post={post} />)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// 
const posts = [
  {
    id: 1,
    avatar: "م",
    name: "محمد نبيل",
    handle: "@mohamednabilfit",
    time: "منذ يومين",
    content: `ليه تتدرب معايا؟\n\nالتدريب مش بس رفع أثقال، هو أسلوب حياة. أنا بساعدك توصل لهدفك بأسرع وقت ممكن مع برنامج مخصص ليك بالكامل.\n\nأنا مؤمن إن كل واحد عنده القدرة يغير جسمه، بس محتاج الطريق الصح والإرشاد الصح.\n\nأبدأ رحلتك معايا النهارده! 💪`,
    likes: 342,
    comments: 58,
    shares: 91,
    highlighted: true,
  },
  {
    id: 2,
    avatar: "م",
    name: "محمد نبيل",
    handle: "@mohamednabilfit",
    time: "منذ أسبوع",
    content: `في 2016 بدأت رحلتي مع الجيم، كنت شايف الناس بتتحول وأنا واقف في مكاني 😅 قررت أغير ده.\n\nفي 2019 وصلت لـ 620 متبع 🎉 وحسيت إن الوقت جه أشارك تجربتي.\n\nمن 2021 لحد دلوقتي عملت أكتر من 3000 عميل من مصر والخليج والمغرب، وكل يوم بيزيد العدد.\n\nالنتائج بتتكلم عن نفسها 💯`,
    likes: 891,
    comments: 134,
    shares: 267,
    highlighted: false,
    cta: {
      text: "أنت. تبدأ تكون من قصص النجاح؟",
      sub: "أضغط الزرار اللي تحت وابدأ رحلتك.",
      btn: "ابدأ التحول الآن",
    },
  },
];

const photos = [
  "#1a1a1a", "#222", "#1e1e1e", "#252525", "#1c1c1c", "#202020",
  "#1a1a1a", "#222", "#1e1e1e",
];

const events = [
  { date: "2016", color: "#e63946", icon: "🏋️", title: "بدأ رحلتي مع الجيم", desc: "أول يوم في الصالة وقرار التغيير" },
  { date: "90 يوم", color: "#e63946", icon: "💪", title: "أول 90 يوم من التحول", desc: "تغيير ملحوظ في الجسم والقوة" },
  { date: "2019", color: "#e63946", icon: "📈", title: "ألف متابع", desc: "بداية تجربتي في التدريب الأونلاين" },
  { date: "الآن", color: "#e63946", icon: "🏆", title: "أكثر من 3000 عميل", desc: "نتائج حقيقية في مصر والخليج" },
];
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

// const posts = [/* نفس الداتا */];
// const photos = [/* نفس الداتا */];
// const events = [/* نفس الداتا */];

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-5 hover:border-white/20 transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-900 flex items-center justify-center font-bold">
          {post.avatar}
        </div>

        <div className="flex-1">
          <div className="text-white font-bold text-sm">{post.name}</div>
          <div className="text-white/40 text-xs">
            {post.handle} • {post.time}
          </div>
        </div>

        <span className="text-white/30">⋯</span>
      </div>

      <div className="text-white/80 text-sm leading-7 whitespace-pre-line mb-4">
        {post.content}
      </div>

      {post.cta && (
        <div className="bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/20 rounded-xl p-4 text-center mb-4">
          <div className="text-white font-bold mb-1">{post.cta.text}</div>
          <div className="text-white/60 text-xs mb-3">{post.cta.sub}</div>
          <button className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full text-sm font-bold">
            {post.cta.btn}
          </button>
        </div>
      )}

      <div className="flex items-center justify-between text-white/50 text-xs border-t border-white/10 pt-3">
        <button onClick={() => setLiked(!liked)} className="flex items-center gap-1 hover:text-red-400">
          ❤️ {post.likes + (liked ? 1 : 0)}
        </button>

        <button>💬 {post.comments}</button>
        <button>↗ {post.shares}</button>
      </div>
    </div>
  );
}

export default function TrainerProfile() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="bg-[#050505] min-h-screen text-white font-[Cairo]">

      {/* ================= COVER ================= */}
      <div className="relative h-60 md:h-72 w-full">
        <img
          src={assets.b}
          alt="cover"
          className="w-full h-full object-cover"
        />

        {/* overlay dark */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* ================= CONTAINER ================= */}
      <div className="max-w-6xl mx-auto px-4">

        {/* ================= PROFILE HEADER ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-12 mb-6">

          {/* PROFILE IMAGE OVER COVER */}
          <div className="relative">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-[#050505] shadow-xl overflow-hidden">
              <img
                src={assets.bolbol}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* INFO */}
          <div className="flex-1">
            <h1 className="text-xl font-bold flex items-center gap-2">
              محمد نبيل <span className="text-blue-400">●</span>
            </h1>

            <p className="text-white/40 text-xs mt-1">
              Online Fitness Coach • 10 Years Experience
            </p>

            <div className="flex gap-4 text-xs mt-2 text-white/60">
              <span><b className="text-white">3127</b> followers</span>
              <span><b className="text-white">452</b> following</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2">
            <button className="bg-red-500 px-5 py-2 rounded-full text-sm font-bold hover:bg-red-600">
              Follow
            </button>
            <button className="border border-white/20 px-5 py-2 rounded-full text-sm">
              Message
            </button>
          </div>
        </div>

        {/* ================= TABS ================= */}
        <div className="flex gap-6 border-b border-white/10 mb-6 text-sm">
          {["posts", "about", "photos", "events"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 transition ${
                activeTab === tab
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-white/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="space-y-4">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-red-500 font-bold mb-2">About</h3>
              <p className="text-white/60 text-xs leading-6">
                Online fitness coach helping clients transform their bodies with science-based training & nutrition.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-red-500 font-bold mb-3">Photos</h3>
              <div className="grid grid-cols-3 gap-2">
                {photos.map((bg, i) => (
                  <div key={i} className="aspect-square rounded-md bg-white/10 border border-white/10" />
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-red-500 font-bold mb-3">Timeline</h3>
              <div className="space-y-3">
                {events.map((ev, i) => (
                  <div key={i} className="text-xs border-l border-white/10 pl-3">
                    <div className="text-red-400 font-bold">{ev.date}</div>
                    <div className="text-white">{ev.title}</div>
                    <div className="text-white/40">{ev.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* FEED */}
          <div className="lg:col-span-2">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}