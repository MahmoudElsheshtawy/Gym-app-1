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
    features: ["ملف تغذية", "نظام تدريب مخصص", "خصم مدة طويلة"],
  },
  {
    name: "عرض الصحاب",
    price: "2300",
    period: "For 2",
    features: ["ملف تغذية", "نظام تدريب مخصص"],
  },
];

const features = [
  { icon: "📋", title: "تصحيح الأداء", desc: "تحسين التقنية عبر فيديوهات" },
  { icon: "🏋️", title: "برنامج مخصص", desc: "حسب هدفك 100%" },
  { icon: "🥗", title: "تغذية", desc: "نظام غذائي مناسب لك" },
  { icon: "🧘", title: "إطالات", desc: "تحسين المرونة والتعافي" },
  { icon: "📅", title: "متابعة", desc: "تحديث أسبوعي مستمر" },
  { icon: "💬", title: "واتساب", desc: "دعم مباشر" },
];

function PlanCard({ plan }) {
  return (
    <div
      className={`relative rounded-2xl p-5 border transition duration-300 hover:scale-[1.02]
      ${
        plan.featured
          ? "border-red-500 bg-red-500/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-xs px-3 py-1 rounded-full font-bold">
          MOST VALUE
        </div>
      )}

      <h3 className="text-white font-bold text-lg">{plan.name}</h3>

      <div className="mt-2 text-3xl font-black text-white">
        {plan.price}{" "}
        <span className="text-sm text-white/50 font-normal">LE</span>
      </div>

      <p className="text-red-400 text-xs mt-1">{plan.note}</p>

      <div className="border-t border-white/10 my-3"></div>

      <div className="space-y-2">
        {plan.features.map((f, i) => (
          <div key={i} className="text-white/70 text-sm flex gap-2">
            <span className="text-red-500">✓</span> {f}
          </div>
        ))}
      </div>

      <button
        className={`w-full mt-5 py-2 rounded-lg font-bold transition
        ${
          plan.featured
            ? "bg-red-500 hover:bg-red-600"
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
    <div className="bg-[#050505] text-white min-h-screen px-4 sm:px-8 lg:px-20 py-16 font-[Cairo]">

      {/* Title */}
      <h1 className="text-center text-3xl font-black mb-2">
        CHOOSE YOUR <span className="text-red-500">PACKAGE</span>
      </h1>

      <p className="text-center text-white/50 text-sm mb-10">
        عروض تدريب أونلاين احترافية
      </p>

      {/* FEATURES */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
          >
            <div className="text-xl mb-2">{f.icon}</div>
            <h4 className="text-white font-bold text-sm">{f.title}</h4>
            <p className="text-white/50 text-xs mt-1">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* PLANS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {plans.map((p, i) => (
          <PlanCard key={i} plan={p} />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {plans2.map((p, i) => (
          <PlanCard key={i} plan={p} />
        ))}
      </div>
    </div>
  );
}