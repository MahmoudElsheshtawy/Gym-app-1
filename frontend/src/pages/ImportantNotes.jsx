const notes = [
  {
    num: "1",
    text: "بتبعت صورة تحويل اشتراكك فبيعتلك استمارة تكمل بياناتك من وزن وصور ومقاسات و بتبداء ع طول رجاء الالتزام وعدم المجادلة ف الانظمة + بعد الالتزامك بنزل صور التحول بتاعتك قبل وبعد الفورمة ضمن شغلي ولو ليك رغبه تنزل بدون وجهك مفيش مشاكل",
  },
  {
    num: "2",
    text: "لا يوجد استرداد الاشتراك تحت اي ظرف او ايقاف متابعة مؤقت للجادين فقط وتم تبليغك عشان او مش مناسبك ممنوع منعا باتا اظهار اي اعذار او ظروف في مسألة الاسترداد ومش باخد حق انظمة وابعت باق",
  },
];

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
        .note-card:hover { border-color: #e63946 !important; box-shadow: 0 0 18px rgba(230,57,70,0.15); }
      `}</style>

      {/* Top red line */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#e63946,transparent)" }} />

      {/* Title */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "2.5rem" }}>
        <span style={{ color: "#e63946", fontSize: 22 }}>ⓘ</span>
        <h1 style={{ margin: 0, fontSize: "clamp(22px,5vw,36px)", fontWeight: 900, letterSpacing: 3, textTransform: "uppercase" }}>
          <span style={{ color: "#fff" }}>IMPORTANT </span>
          <span style={{ color: "#e63946" }}>NOTES</span>
        </h1>
      </div>

      {/* Container */}
      <div style={{ width: "100%", maxWidth: 720, background: "#141414", border: "1px solid #222", borderRadius: 18, padding: "2rem 1.5rem", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Biohazard icon + dash */}
        <div style={{ textAlign: "center", fontSize: 28, marginBottom: 8 }}>
          ☣️ <span style={{ color: "#e63946", fontWeight: 900, fontSize: 20 }}>:-</span>
        </div>

        {notes.map((note, i) => (
          <div
            key={i}
            className="note-card"
            style={{
              background: "#0f0f0f",
              border: "1px solid #2a2a2a",
              borderRadius: 12,
              padding: "1.2rem 1.4rem",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            {/* Number Badge */}
            <div style={{
              flexShrink: 0,
              width: 26,
              height: 26,
              background: "#1565c0",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 900,
              color: "#fff",
              marginTop: 2,
            }}>
              {note.num}
            </div>

            <p style={{ margin: 0, fontSize: 14, color: "#ccc", lineHeight: 2, textAlign: "right" }}>
              {note.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}