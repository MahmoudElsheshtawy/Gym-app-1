import { useState, useEffect, useRef } from "react";

const ACCENT = "#FFC107";

const activityLevels = [
  { id: "sedentary", label: "قليل الحركة", desc: "عمل مكتبي، بدون رياضة", factor: 1.2 },
  { id: "light", label: "نشاط خفيف", desc: "رياضة 1-3 أيام أسبوعياً", factor: 1.375 },
  { id: "moderate", label: "نشاط متوسط", desc: "رياضة 3-5 أيام أسبوعياً", factor: 1.55 },
  { id: "active", label: "نشاط عالي", desc: "رياضة 6-7 أيام أسبوعياً", factor: 1.725 },
  { id: "very_active", label: "نشاط مكثف", desc: "تمرين يومي شاق أو عمل بدني", factor: 1.9 },
];

const goals = [
  { id: "lose", label: "خسارة وزن", adj: -500 },
  { id: "maintain", label: "ثبات الوزن", adj: 0 },
  { id: "gain", label: "زيادة وزن", adj: 500 },
];

function useCountUp(target, duration = 800) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const fromRef = useRef(0);

  useEffect(() => {
    fromRef.current = value;
    startRef.current = null;
    let raf;
    const step = (ts) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(fromRef.current + (target - fromRef.current) * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return value;
}

export default function CalorieCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const calculate = () => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);

    const newErrors = {};
    if (!age || !a || a <= 0) newErrors.age = true;
    if (!weight || !w || w <= 0) newErrors.weight = true;
    if (!height || !h || h <= 0) newErrors.height = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Mifflin-St Jeor
    let bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const activityFactor = activityLevels.find((x) => x.id === activity).factor;
    const tdee = bmr * activityFactor;
    const goalAdj = goals.find((x) => x.id === goal).adj;
    const target = tdee + goalAdj;

    const protein = w * 2; // grams
    const fat = (target * 0.25) / 9;
    const carbs = (target - protein * 4 - fat * 9) / 4;

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target: Math.round(target),
      protein: Math.round(protein),
      fat: Math.round(fat),
      carbs: Math.round(Math.max(carbs, 0)),
    });
    setShowResult(false);
    requestAnimationFrame(() => setShowResult(true));
  };

  const animatedTarget = useCountUp(result ? result.target : 0);
  const animatedProtein = useCountUp(result ? result.protein : 0);
  const animatedCarbs = useCountUp(result ? result.carbs : 0);
  const animatedFat = useCountUp(result ? result.fat : 0);
  const animatedBmr = useCountUp(result ? result.bmr : 0);
  const animatedTdee = useCountUp(result ? result.tdee : 0);

  const inputStyle = {
    width: "100%",
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: 10,
    padding: "12px 14px",
    color: "#fff",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
  };

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Cairo', sans-serif",
        direction: "rtl",
        padding: "3rem 1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes barFill {
          from { width: 0%; }
        }
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shakeError {
          0%, 100% { transform: translateX(0); }
          20%      { transform: translateX(-4px); }
          40%      { transform: translateX(4px); }
          60%      { transform: translateX(-3px); }
          80%      { transform: translateX(3px); }
        }

        .anim-rise { opacity: 0; }
        .anim-rise.mounted { animation: riseIn 0.55s ease forwards; }

        .calc-input:focus { border-color: ${ACCENT} !important; box-shadow: 0 0 0 3px rgba(255,193,7,0.15); }
        .calc-input::placeholder { color: #555; }
        .calc-input.error {
          border-color: #ff5252 !important;
          box-shadow: 0 0 0 3px rgba(255,82,82,0.15);
          animation: shakeError 0.4s ease;
        }
        .error-dot {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ff5252;
          box-shadow: 0 0 0 2px #141414;
        }
        .field-wrap { position: relative; }

        .pill-btn {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          color: #999;
          border-radius: 10px;
          padding: 10px 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .pill-btn.active {
          background: ${ACCENT};
          border-color: ${ACCENT};
          color: #1a1300;
        }
        .pill-btn:hover:not(.active) { border-color: #444; color: #ccc; }

        .calc-btn {
          width: 100%;
          background: ${ACCENT};
          border: none;
          color: #1a1300;
          border-radius: 10px;
          padding: 15px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.2s;
          font-family: inherit;
          box-shadow: 0 0 0 rgba(255,193,7,0);
        }
        .calc-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(255,193,7,0.25); }
        .calc-btn:active { transform: translateY(0); }

        .result-card {
          animation: popIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .macro-bar-fill {
          animation: barFill 0.8s ease forwards;
        }

        select.calc-input { appearance: none; }
      `}</style>

      <div style={{ width: "100%", maxWidth: 460 }}>

        {/* Header */}
        <div className={`anim-rise ${mounted ? "mounted" : ""}`} style={{ textAlign: "center", marginBottom: "2rem", animationDelay: "0ms" }}>
          <p style={{ color: ACCENT, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", margin: "0 0 8px" }}>
            حساب فوري
          </p>
          <h1 style={{ fontSize: "clamp(24px,5vw,34px)", fontWeight: 900, margin: 0 }}>
            حاسبة السعرات الحرارية
          </h1>
          <p style={{ color: "#888", fontSize: 13, marginTop: 8 }}>
            احسب احتياجك اليومي من السعرات والماكروز
          </p>
        </div>

        {/* Form Card */}
        <div className={`anim-rise ${mounted ? "mounted" : ""}`} style={{ background: "#141414", border: "1px solid #222", borderRadius: 18, padding: "1.5rem", marginBottom: "1.5rem", animationDelay: "120ms" }}>

          {/* Gender */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: "#999", marginBottom: 8, display: "block", fontWeight: 600 }}>الجنس</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <button className={`pill-btn ${gender === "male" ? "active" : ""}`} onClick={() => setGender("male")}>ذكر</button>
              <button className={`pill-btn ${gender === "female" ? "active" : ""}`} onClick={() => setGender("female")}>أنثى</button>
            </div>
          </div>

          {/* Age / Weight / Height */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
            <div className="field-wrap">
              <label style={{ fontSize: 11, color: "#999", marginBottom: 6, display: "block", fontWeight: 600 }}>السن</label>
              <input
                className={`calc-input ${errors.age ? "error" : ""}`}
                style={inputStyle}
                type="number"
                placeholder="25"
                value={age}
                onChange={(e) => { setAge(e.target.value); if (errors.age) setErrors({ ...errors, age: false }); }}
              />
              {errors.age && <span className="error-dot" />}
            </div>
            <div className="field-wrap">
              <label style={{ fontSize: 11, color: "#999", marginBottom: 6, display: "block", fontWeight: 600 }}>الوزن (كجم)</label>
              <input
                className={`calc-input ${errors.weight ? "error" : ""}`}
                style={inputStyle}
                type="number"
                placeholder="70"
                value={weight}
                onChange={(e) => { setWeight(e.target.value); if (errors.weight) setErrors({ ...errors, weight: false }); }}
              />
              {errors.weight && <span className="error-dot" />}
            </div>
            <div className="field-wrap">
              <label style={{ fontSize: 11, color: "#999", marginBottom: 6, display: "block", fontWeight: 600 }}>الطول (سم)</label>
              <input
                className={`calc-input ${errors.height ? "error" : ""}`}
                style={inputStyle}
                type="number"
                placeholder="175"
                value={height}
                onChange={(e) => { setHeight(e.target.value); if (errors.height) setErrors({ ...errors, height: false }); }}
              />
              {errors.height && <span className="error-dot" />}
            </div>
          </div>

          {/* Activity Level */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: "#999", marginBottom: 8, display: "block", fontWeight: 600 }}>مستوى النشاط</label>
            <select
              className="calc-input"
              style={{ ...inputStyle, cursor: "pointer" }}
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              {activityLevels.map((a) => (
                <option key={a.id} value={a.id} style={{ background: "#1a1a1a" }}>
                  {a.label} — {a.desc}
                </option>
              ))}
            </select>
          </div>

          {/* Goal */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 12, color: "#999", marginBottom: 8, display: "block", fontWeight: 600 }}>الهدف</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {goals.map((g) => (
                <button
                  key={g.id}
                  className={`pill-btn ${goal === g.id ? "active" : ""}`}
                  onClick={() => setGoal(g.id)}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {Object.keys(errors).length > 0 && (
            <p style={{ color: "#ff5252", fontSize: 12, textAlign: "center", margin: "0 0 12px" }}>
              من فضلك اكمل الحقول المحددة باللون الأحمر
            </p>
          )}

          <button className="calc-btn" onClick={calculate}>
            احسب السعرات الآن
          </button>
        </div>

        {/* Result */}
        {result && (
          <div key={result.target} className="result-card" style={{ background: "#141414", border: `1px solid rgba(255,193,7,0.3)`, borderRadius: 18, padding: "1.5rem" }}>

            {/* Main target */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <p style={{ fontSize: 12, color: "#999", margin: "0 0 6px" }}>احتياجك اليومي للهدف المحدد</p>
              <div style={{ fontSize: "clamp(36px,8vw,48px)", fontWeight: 900, color: ACCENT, lineHeight: 1 }}>
                {animatedTarget.toLocaleString()}
                <span style={{ fontSize: 16, color: "#888", fontWeight: 600 }}> سعرة / يوم</span>
              </div>
            </div>

            {/* BMR / TDEE row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: "1.5rem" }}>
              <div style={{ background: "#1a1a1a", borderRadius: 12, padding: "12px", textAlign: "center" }}>
                <p style={{ fontSize: 10, color: "#888", margin: "0 0 4px", letterSpacing: 1 }}>BMR</p>
                <p style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{animatedBmr.toLocaleString()}</p>
              </div>
              <div style={{ background: "#1a1a1a", borderRadius: 12, padding: "12px", textAlign: "center" }}>
                <p style={{ fontSize: 10, color: "#888", margin: "0 0 4px", letterSpacing: 1 }}>TDEE</p>
                <p style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{animatedTdee.toLocaleString()}</p>
              </div>
            </div>

            {/* Macros */}
            <p style={{ fontSize: 12, color: "#999", marginBottom: 10, fontWeight: 600 }}>توزيع الماكروز المقترح</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "بروتين", value: animatedProtein, raw: result.protein, max: result.protein * 1.3, color: ACCENT },
                { label: "كارب", value: animatedCarbs, raw: result.carbs, max: result.carbs * 1.3 || 1, color: "#80cbc4" },
                { label: "دهون", value: animatedFat, raw: result.fat, max: result.fat * 1.3, color: "#ce93d8" },
              ].map((m, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                    <span style={{ color: "#ccc" }}>{m.label}</span>
                    <span style={{ color: "#fff", fontWeight: 700 }}>{m.value} جم</span>
                  </div>
                  <div style={{ background: "#1a1a1a", borderRadius: 6, height: 6, overflow: "hidden" }}>
                    <div
                      className="macro-bar-fill"
                      style={{
                        height: "100%",
                        borderRadius: 6,
                        background: m.color,
                        width: `${Math.min((m.raw / m.max) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}