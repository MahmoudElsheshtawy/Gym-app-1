import { useState, useEffect, useRef } from "react";

const plans = [
  {
    name: "Fit Start",
    price: "1,200",
    originalPrice: "1,715",
    period: "/ 3 أشهر",
    discount: "خصم 30% طوال فترة الصيف",
    features: [
      "برنامج تغذية مخصص بالكامل حسب هدفك",
      "برنامج تدريب احترافي يناسب التمرين في الجيم أو المنزل",
      "استخدام تطبيق Fit With Nabil لمتابعة نظامك الغذائي وتمارينك",
      "متابعة أسبوعية عبر واتساب في يوم يتم تحديده بالتنسيق بيننا",
      "تعديل البرنامج الغذائي والتدريبي وفقًا لنتائج المتابعة",
    ],
  },
  {
    name: "Fit Pro",
    price: "1,999",
    originalPrice: "2,855",
    period: "/ 3 أشهر",
    discount: "خصم 30%",
    badge: "⭐ الأكثر مبيعًا",
    featured: true,
    features: [
      "تشمل جميع مميزات باقة Fit Start وأكثر",
      "متابعة يومية عبر واتساب (Chat)",
      "متابعة التحاليل الطبية وتقديم التوصيات المناسبة وفقًا لها",
      "مراجعة فيديوهات التمرين وتصحيح الأداء أسبوعيًا",
      "تعديل البرنامج الغذائي والتدريبي أولًا بأول وفقًا لتقدمك ونتائج المتابعة",
    ],
  },
  {
    name: "Fit Elite VIP",
    price: "2,999",
    originalPrice: "4,285",
    period: "/ 3 أشهر",
    discount: "خصم 30%",
    badge: "👑 التجربة الأكثر تميزًا",
    features: [
      "تشمل جميع مميزات باقة Fit Pro وأكثر",
      "مكالمة فيديو (Video Call) كل 15 يوم لمناقشة تقدمك والإجابة على استفساراتك",
      "أولوية كاملة في الرد والمتابعة طوال فترة الاشتراك",
      "مراجعة غير محدودة لفيديوهات التمرين مع تصحيح الأداء أولًا بأول",
      "متابعة شخصية شاملة مع تعديلات فورية على التغذية والتمرين لضمان أفضل النتائج",
    ],
  },
  {
    name: "Fit Transformation 180",
    price: "4,999",
    originalPrice: "7,140",
    period: "/ 180 يوم",
    discount: "خصم 30%",
    badge: "🏆 أفضل قيمة للتحول الكامل",
    features: [
      "تشمل جميع مميزات باقة Fit Elite VIP وأكثر",
      "متابعة شخصية كاملة لمدة 180 يوم لضمان تحقيق أفضل النتائج",
      "مكالمة فيديو (Video Call) كل 20 يوم لمراجعة التقدم والإجابة على استفساراتك",
      "إعادة تصميم البرنامج الغذائي والتدريبي بالكامل كلما تطلب تقدمك ذلك",
      "خطة مخصصة للحفاظ على النتائج (Maintenance Plan) قبل انتهاء الاشتراك",
    ],
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

const ACCENT = "#FFC107";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// أنيميشن هادئ: حركة بسيطة لأعلى مع فيد ناعم وتوقيت مريح للعين
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// هيدر موحّد لكل الأقسام
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <Reveal>
      <div className="text-center mb-7">
        {eyebrow && (
          <span
            className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.2em] mb-2 opacity-80"
            style={{ color: ACCENT }}
          >
            {eyebrow}
          </span>
        )}
        <h2 className="text-white font-bold text-lg sm:text-xl tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-white/45 text-xs sm:text-sm mt-1.5">{subtitle}</p>
        )}
        <div
          className="mx-auto mt-3 rounded-full"
          style={{ width: 36, height: 3, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
        />
      </div>
    </Reveal>
  );
}

function PlanCard({ plan, delay }) {
  const handleWhatsApp = () => {
    const phone = "201558864839";
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
    <Reveal delay={delay}>
      <div
        className="relative rounded-2xl p-4 sm:p-5 border transition-all duration-500 ease-out hover:scale-[1.015] hover:shadow-xl h-full flex flex-col"
        style={
          plan.featured
            ? { borderColor: ACCENT, background: "linear-gradient(135deg, rgba(255,193,7,0.12), rgba(255,193,7,0.03))" }
            : { borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }
        }
        onMouseEnter={(e) => { if (!plan.featured) e.currentTarget.style.borderColor = "rgba(255,193,7,0.35)"; }}
        onMouseLeave={(e) => { if (!plan.featured) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
      >
        {plan.badge && (
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs px-3 py-1 rounded-full font-bold whitespace-nowrap"
            style={{ background: ACCENT, color: "#1a1300" }}
          >
            {plan.badge}
          </div>
        )}

        <h3 className="text-white font-bold text-base sm:text-lg mb-2 mt-1">{plan.name}</h3>

        <div className="mt-2 flex items-baseline gap-2 flex-wrap">
          <span className="text-2xl sm:text-3xl font-black text-white">{plan.price}</span>
          <span className="text-xs sm:text-sm text-white/50 font-normal">جنيه</span>
          <span className="text-[10px] sm:text-xs text-white/40">{plan.period}</span>
        </div>

        {plan.originalPrice && (
          <div className="text-white/35 text-xs sm:text-sm line-through mt-0.5">
            {plan.originalPrice} جنيه
          </div>
        )}

        {plan.discount && (
          <p className="text-[11px] sm:text-xs mt-2 font-semibold" style={{ color: ACCENT }}>{plan.discount}</p>
        )}

        <div className="border-t border-white/10 my-3 sm:my-4"></div>

        <div className="space-y-2 flex-1">
          {plan.features.map((f, i) => (
            <div key={i} className="text-white/70 text-xs sm:text-sm flex gap-2 items-start">
              <span className="text-xs sm:text-sm mt-0.5 flex-shrink-0" style={{ color: ACCENT }}>✓</span>
              <span className="flex-1 leading-relaxed">{f}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full mt-4 sm:mt-5 py-2 sm:py-2.5 rounded-lg font-bold transition-all duration-300"
          style={
            plan.featured
              ? { background: ACCENT, color: "#1a1300" }
              : { border: `1px solid ${ACCENT}`, color: ACCENT, background: "transparent" }
          }
          onMouseEnter={(e) => {
            if (!plan.featured) { e.currentTarget.style.background = ACCENT; e.currentTarget.style.color = "#1a1300"; }
            else { e.currentTarget.style.opacity = "0.88"; }
          }}
          onMouseLeave={(e) => {
            if (!plan.featured) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ACCENT; }
            else { e.currentTarget.style.opacity = "1"; }
          }}
        >
          اشترك الآن
        </button>
      </div>
    </Reveal>
  );
}

export default function Packages() {
  return (
    <div
      className="bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-white min-h-screen px-4 sm:px-6 lg:px-20 pt-28 pb-16"
      style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Cairo:wght@700;900&display=swap');
        * { font-family: 'Tajawal', 'Cairo', sans-serif; }
      `}</style>

      {/* Title Section */}
      <Reveal>
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 rounded-full" style={{ background: ACCENT }}></div>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            اختر <span style={{ color: ACCENT }}>باقتك</span>
          </h1>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            عروض تدريب أونلاين احترافية تناسب أهدافك — خصم 30% طوال فترة الصيف
          </p>
        </div>
      </Reveal>

      {/* FEATURES */}
      <div className="mb-16">
        <SectionHeader eyebrow="لماذا تشترك معنا" title="المميزات" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {features.map((f, i) => (
            <Reveal key={i} delay={100 + i * 70}>
              <div
                className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center transition-all duration-500 ease-out hover:scale-[1.04] cursor-pointer group"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,193,7,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              >
                <div className="text-xl sm:text-2xl mb-2 transition-transform duration-500 ease-out group-hover:scale-110">{f.icon}</div>
                <h4 className="text-white font-bold text-xs sm:text-sm">{f.title}</h4>
                <p className="text-white/50 text-[10px] sm:text-xs mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* PLANS */}
      <div className="mb-4">
        <SectionHeader eyebrow="خطة الأسعار الجديدة" title="باقات الاشتراك" subtitle="اختر الباقة المناسبة لهدفك ومستوى المتابعة اللي محتاجه" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {plans.map((p, i) => (
            <PlanCard key={i} plan={p} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Bottom Trust Badge */}
      <Reveal>
        <div className="text-center pt-10 mt-10 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-white/40">
            <span className="flex items-center gap-1">✅ دعم فني 24/7</span>
            <span className="flex items-center gap-1">🔄 إلغاء في أي وقت</span>
            <span className="flex items-center gap-1">🔒 دفع آمن</span>
            <span className="flex items-center gap-1">📱 متابعة عبر واتساب</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}