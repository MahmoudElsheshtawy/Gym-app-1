
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
    content: `في 2021 بدأت رحلتي مع الجيم، كنت شايف الناس بتتحول وأنا واقف في مكاني 😅 قررت أغير ده.\n\nفي 2023 وصلت لـ 300 متبع 🎉 وحسيت إن الوقت جه أشارك تجربتي.\n\nمن 2021 لحد دلوقتي عملت أكتر من 300 عميل من مصر والخليج والمغرب، وكل يوم بيزيد العدد.\n\nالنتائج بتتكلم عن نفسها 💯`,
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
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg", 
  "photo7.jpg", 
  "photo8.jpg", 
  "photo9.jpg", 



          
];

const events = [
  { date: "2021", color: "#e63946", icon: "🏋️", title: "بدأ رحلتي مع الجيم", desc: "أول يوم في الصالة وقرار التغيير" },
  { date: "90 يوم", color: "#e63946", icon: "💪", title: "أول 90 يوم من التحول", desc: "تغيير ملحوظ في الجسم والقوة" },
  // { date: "2023", color: "#e63946", icon: "📈", title: "ألف متابع", desc: "بداية تجربتي في التدريب الأونلاين" },
  { date: "الآن", color: "#e63946", icon: "🏆", title: "أكثر من 300 عميل", desc: "نتائج حقيقية في مصر والخليج" },
];
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";


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
                  <a href="https://wa.me/201558864839" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> 
                  <button  className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full text-sm font-bold">
            {post.cta.btn}
            
          </button>
                  </a>

          {/* <button  className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full text-sm font-bold">
            {post.cta.btn}
            
          </button> */}
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
              Online Fitness Coach • 6 Years Experience
            </p>

            <div className="flex gap-4 text-xs mt-2 text-white/60">
              <span><b className="text-white">1K</b> followers</span>
              <span><b className="text-white">9</b> following</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2">
            <button className="bg-red-500 px-5 py-2 rounded-full text-sm font-bold hover:bg-red-600">
              Follow
              {/* go facebook */}
            </button>
            <button className="border border-white/20 px-5 py-2 rounded-full text-sm">
              Message
              {/* go watsapp */}
            </button>
          </div>
        </div>

        {/* ================= TABS ================= */}
        {/* <div className="flex gap-6 border-b border-white/10 mb-6 text-sm">
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
        </div> */}

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