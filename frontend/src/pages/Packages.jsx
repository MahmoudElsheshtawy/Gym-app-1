import { useState } from "react";

const plans = [
  {
    name: "باقة الشهر",
    price: "700",
    period: "/Month",
    note: "ادفع شهرياً 700",
    features: ["ملف تغذية", "نظام تدريب مخصص", "تغذية راجعة أسبوعية"],
  },
  {
    name: "باقة الشهرين",
    price: "1050",
    period: "/Month",
    note: "ادفع شهرياً 1050",
    features: ["ملف تغذية", "نظام تدريب مخصص", "تغذية راجعة أسبوعية"],
  },
  {
    name: "عرض 3 شهور",
    price: "1400",
    period: "/Month",
    note: "أفضل قيمة 🔥",
    featured: true,
    features: ["ملف تغذية", "نظام تدريب مخصص", "متابعة أسبوعية"],
  },
];

const plans2 = [
  {
    name: "عرض 6 شهور",
    price: "1999",
    period: "/Month",
    note: "وفر 15%",
    features: ["ملف تغذية", "نظام تدريب مخصص", "خصم مدة طويلة", "متابعة شهرية"],
  },
  {
    name: "عرض الصحاب",
    price: "2300",
    period: "For 2",
    note: "اشترك مع صديقك",
    features: ["ملف تغذية للشخصين", "نظام تدريب مخصص", "تحديات جماعية"],
  },
];

const features = [
  { icon: "📋", title: "تصحيح الأداء", desc: "تحسين التقنية عبر فيديوهات" },
  { icon: "🏋️", title: "برنامج مخصص", desc: "حسب هدفك 100%" },
  { icon: "🥗", title: "تغذية", desc: "نظام غذائي مناسب لك" },
  { icon: "🧘", title: "إطالات", desc: "تحسين المرونة والتعافي" },
  { icon: "📅", title: "متابعة", desc: "تحديث أسبوعي مستمر" },
  { icon: "💬", title: "واتساب", desc: "دعم مباشر 24/7" },
];

function PlanCard({ plan }) {
  const handleWhatsApp = () => {
    const phone = "201558864839"; // 🔴 غير الرقم هنا

    const message = `
مرحباً كابتن،

أرغب في الاشتراك في الباقة التالية:

📦 الباقة: ${plan.name}
💰 السعر: ${plan.price} جنيه ${plan.period}

📋 المميزات:
${plan.features.map((f) => `✔ ${f}`).join("\n")}
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className={`relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
      ${
        plan.featured
          ? "border-red-500 bg-gradient-to-br from-red-500/15 to-red-500/5 shadow-red-500/10"
          : "border-white/10 bg-white/5 hover:border-red-500/30"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-500 text-white text-[11px] sm:text-xs px-3 py-1 rounded-full font-bold shadow-lg whitespace-nowrap">
          🔥 BEST VALUE
        </div>
      )}

      <h3 className="text-white font-bold text-base sm:text-lg mb-2">{plan.name}</h3>

      <div className="mt-2">
        <span className="text-2xl sm:text-3xl font-black text-white">{plan.price}</span>
        <span className="text-xs sm:text-sm text-white/50 font-normal"> LE</span>
        <span className="text-[10px] sm:text-xs text-white/40 ml-1">{plan.period}</span>
      </div>

      {plan.note && (
        <p className="text-red-400 text-[11px] sm:text-xs mt-2 font-semibold">{plan.note}</p>
      )}

      <div className="border-t border-white/10 my-3 sm:my-4"></div>

      <div className="space-y-2 min-h-[120px] sm:min-h-[140px]">
        {plan.features.map((f, i) => (
          <div key={i} className="text-white/70 text-xs sm:text-sm flex gap-2 items-start">
            <span className="text-red-500 text-xs sm:text-sm mt-0.5 flex-shrink-0">✓</span>
            <span className="flex-1 leading-relaxed">{f}</span>
          </div>
        ))}
      </div>

      {/* ✅ هنا التعديل */}
      <button
        onClick={handleWhatsApp}
        className={`w-full mt-4 sm:mt-5 py-2 sm:py-2.5 rounded-lg font-bold transition-all duration-300
        ${
          plan.featured
            ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg shadow-red-500/30"
            : "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        }`}
      >
        اشترك الآن
      </button>
    </div>
  );
}

export default function Packages() {
  return (
    <div className="bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-white min-h-screen px-4 sm:px-6 lg:px-20 pt-28 pb-16 font-[Cairo]">

      {/* Title Section with top spacing */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-red-500 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight">
          CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">PACKAGE</span>
        </h1>
        <p className="text-white/50 text-sm max-w-md mx-auto">
          عروض تدريب أونلاين احترافية تناسب أهدافك
        </p>
      </div>

      {/* FEATURES - Responsive Grid */}
      <div className="mb-14">
        <h2 className="text-center text-lg sm:text-xl font-bold mb-6 text-white/80">
          <span className="text-red-500">★</span> المميزات <span className="text-red-500">★</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-red-500/30 cursor-pointer group"
            >
              <div className="text-xl sm:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h4 className="text-white font-bold text-xs sm:text-sm">{f.title}</h4>
              <p className="text-white/50 text-[10px] sm:text-xs mt-1 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PLANS Section 1 */}
      <div className="mb-10">
        <h2 className="text-center text-base sm:text-lg font-semibold mb-5 text-white/70">
          🎯 باقات البداية
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {plans.map((p, i) => (
            <PlanCard key={i} plan={p} />
          ))}
        </div>
      </div>

      {/* PLANS Section 2 */}
      <div>
        <h2 className="text-center text-base sm:text-lg font-semibold mb-5 text-white/70">
          ⭐ عروض خاصة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {plans2.map((p, i) => (
            <PlanCard key={i} plan={p} />
          ))}
        </div>
      </div>

      {/* Bottom Trust Badge */}
      <div className="text-center pt-10 mt-6 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-white/40">
          <span className="flex items-center gap-1">✅ دعم فني 24/7</span>
          <span className="flex items-center gap-1">🔄 إلغاء في أي وقت</span>
          <span className="flex items-center gap-1">🔒 دفع آمن</span>
          <span className="flex items-center gap-1">📱 متابعة عبر واتساب</span>
        </div>
      </div>
    </div>
  );
}