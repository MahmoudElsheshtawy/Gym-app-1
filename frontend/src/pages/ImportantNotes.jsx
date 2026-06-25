const sections = [
  {
    num: "1",
    title: "سياسة الدفع",
    text: "جميع المدفوعات غير قابلة للاسترداد بعد تأكيد الاشتراك. وفي الحالات الطارئة، يمكن تأجيل بدء الاشتراك لمدة تصل إلى 30 يومًا من تاريخ الدفع.",
  },
  {
    num: "2",
    title: "تأكيد الاشتراك",
    text: "بعد إتمام عملية الدفع، يرجى إرسال لقطة شاشة (Screenshot) لإيصال التحويل عبر واتساب، حتى يتم تأكيد وتفعيل اشتراكك.",
  },
  {
    num: "3",
    title: "إعداد برنامجك",
    text: "يتم إعداد برنامج التدريب والتغذية الخاص بك خلال 48 ساعة من استلام جميع بياناتك المطلوبة (وأي تقارير أو تحاليل طبية إن وجدت)، لضمان تصميم خطة مناسبة لحالتك وهدفك.",
  },
  {
    num: "4",
    title: "نظام الدفع",
    text: "جميع الباقات تُدفع بالكامل مقدمًا. ويتوفر نظام التقسيط لباقة 6 أشهر فقط.",
  },
  {
    num: "5",
    title: "الالتزام والمتابعة",
    text: "يعتمد تحقيق أفضل النتائج على مدى التزامك بتطبيق البرنامج، وإرسال المتابعات في مواعيدها، والالتزام بالتوجيهات المقدمة. ويتم تعديل الخطة بشكل مستمر وفقًا لتقدمك واحتياجاتك.",
  },
  {
    num: "6",
    title: "الحالات الصحية",
    text: "في حال وجود أي إصابة، أو مرض مزمن، أو تناول أدوية بشكل مستمر، أو أي حالة صحية خاصة، يجب الإفصاح عنها قبل بدء البرنامج، حتى يتم تصميم الخطة بما يتناسب مع حالتك. ويُعد البرنامج داعمًا لنمط حياة صحي، ولا يُغني عن استشارة الطبيب أو الالتزام بتعليماته عند الحاجة.",
  },
];

const ACCENT = "#FFC107";

export default function ImportantNotes() {
  return (
    <div style={{
      background: "#0d0d0d",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 1rem",
      fontFamily: "'Cairo', sans-serif",
      direction: "rtl",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
        .note-card { transition: border-color 0.25s, box-shadow 0.25s; }
        .note-card:hover { border-color: ${ACCENT} !important; box-shadow: 0 0 18px rgba(255,193,7,0.15); }
      `}</style>

      {/* Top yellow line */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />

      {/* Title */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: "2.5rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: ACCENT, fontSize: 22 }}>i</span>
          <h1 style={{ margin: 0, fontSize: "clamp(20px,4.5vw,32px)", fontWeight: 900, letterSpacing: 1 }}>
            <span style={{ color: "#fff" }}>ملاحظات هامة </span>
            <span style={{ color: ACCENT }}>قبل الاشتراك</span>
          </h1>
        </div>
        <p style={{ margin: 0, color: "#999", fontSize: 14, maxWidth: 520, lineHeight: 1.8 }}>
          يرجى قراءة النقاط التالية قبل إتمام الاشتراك لضمان بداية واضحة ومنظمة
        </p>
      </div>

      {/* Single card container */}
      <div className="note-card" style={{
        width: "100%",
        maxWidth: 720,
        background: "#141414",
        border: "1px solid #222",
        borderRadius: 18,
        padding: "2rem 1.5rem",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {sections.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                paddingBottom: i < sections.length - 1 ? 20 : 0,
                borderBottom: i < sections.length - 1 ? "1px solid #222" : "none",
              }}
            >
              {/* Number Badge */}
              <div style={{
                flexShrink: 0,
                width: 28,
                height: 28,
                background: ACCENT,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 900,
                color: "#1a1300",
                marginTop: 2,
              }}>
                {s.num}
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#fff", textAlign: "right" }}>
                  {s.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14, color: "#ccc", lineHeight: 2, textAlign: "right" }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}