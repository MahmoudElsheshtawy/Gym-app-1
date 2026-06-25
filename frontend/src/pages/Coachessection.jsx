// const coaches = [
//   {
//     name: "الكوتش محمد نبيل",
//     role: "مدرب خاص - رجال",
//     experience: "8 سنوات خبرة في بناء الأجسام وتضخيم العضلات، وإعداد برامج تخسيس وتنشيف احترافية لأكثر من 500 متدرب.",
//     phone: "201001234567", // يرجى استبداله برقم الكوتش الفعلي (بصيغة دولية بدون + أو صفر)
//     initials: "م ن",
//   },
//   {
//     name: "الكوتش مديحة",
//     role: "مدربة خاصة - نساء",
//     experience: "6 سنوات خبرة في تدريب السيدات، متخصصة في برامج شد الجسم وتنسيق القوام والتغذية العلاجية.",
//     phone: "201009876543", // يرجى استبداله برقم الكوتشة الفعلي (بصيغة دولية بدون + أو صفر)
//     initials: "م",
//   },
// ];

// const ACCENT = "#FFC107";

// function WhatsAppIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.75-2.11 1.02-2.4c.26-.28.58-.35.77-.35.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.11.3.02.49-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.24 2.25 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.65-.17 1.33z"/>
//     </svg>
//   );
// }

// export default function CoachesSection() {
//   return (
//     <div style={{
//       background: "#0d0d0d",
//       minHeight: "60vh",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "3rem 1rem",
//       fontFamily: "'Cairo', sans-serif",
//       direction: "rtl",
//       overflow: "hidden",
//     }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(28px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes floatAvatar {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-6px); }
//         }
//         @keyframes spinRing {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes waPulse {
//           0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
//           70% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
//           100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
//         }
//         @keyframes shine {
//           0% { transform: translateX(-120%) skewX(-20deg); }
//           100% { transform: translateX(220%) skewX(-20deg); }
//         }

//         .coach-card {
//           animation: fadeInUp 0.7s cubic-bezier(.21,.9,.28,1) both;
//           transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
//         }
//         .coach-card:hover { border-color: ${ACCENT}; box-shadow: 0 0 20px rgba(255,193,7,0.18); transform: translateY(-4px); }

//         .avatar-ring {
//           animation: spinRing 6s linear infinite;
//         }
//         .avatar-inner {
//           animation: floatAvatar 3.2s ease-in-out infinite;
//         }

//         .wa-btn {
//           position: relative;
//           overflow: hidden;
//           animation: waPulse 2.4s ease-out infinite;
//           transition: transform 0.15s, filter 0.2s;
//         }
//         .wa-btn:hover { filter: brightness(1.08); }
//         .wa-btn:active { transform: scale(0.96); }
//         .wa-btn::after {
//           content: "";
//           position: absolute;
//           top: 0; bottom: 0;
//           width: 40%;
//           background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
//           animation: shine 2.8s ease-in-out infinite;
//         }

//         .coaches-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//         }
//         @media (max-width: 640px) {
//           .coaches-grid { gap: 10px; }
//           .coach-card { padding: 1.1rem 0.7rem !important; }
//           .coach-name { font-size: 14px !important; }
//           .coach-role { font-size: 11px !important; }
//           .coach-exp { font-size: 11.5px !important; line-height: 1.7 !important; }
//           .avatar-wrap { width: 64px !important; height: 64px !important; }
//           .avatar-inner { width: 58px !important; height: 58px !important; font-size: 18px !important; }
//           .wa-btn { font-size: 12px !important; padding: 9px 8px !important; }
//         }
//       `}</style>

//       {/* Top yellow line */}
//       <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />

//       {/* Title */}
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: "2.5rem", textAlign: "center" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <span style={{ color: ACCENT, fontSize: 22 }}>★</span>
//           <h1 style={{ margin: 0, fontSize: "clamp(20px,4.5vw,32px)", fontWeight: 900, letterSpacing: 1 }}>
//             <span style={{ color: "#fff" }}>اختر </span>
//             <span style={{ color: ACCENT }}>مدربك</span>
//           </h1>
//         </div>
//         <p style={{ margin: 0, color: "#999", fontSize: 14, maxWidth: 520, lineHeight: 1.8 }}>
//           اختر الكوتش المناسب ليك وتواصل معاه مباشرة عبر واتساب
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="coaches-grid" style={{ width: "100%", maxWidth: 760 }}>
//         {coaches.map((coach, i) => (
//           <div
//             key={i}
//             className="coach-card"
//             style={{
//               animationDelay: `${i * 0.15}s`,
//               background: "#141414",
//               border: "1px solid #222",
//               borderRadius: 18,
//               padding: "1.8rem 1.4rem",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               textAlign: "center",
//             }}
//           >
//             {/* Avatar with spinning ring + floating inner */}
//             <div
//               className="avatar-wrap"
//               style={{
//                 position: "relative",
//                 width: 88,
//                 height: 88,
//                 marginBottom: 16,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <div
//                 className="avatar-ring"
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   borderRadius: "50%",
//                   background: `conic-gradient(${ACCENT}, transparent 40%, transparent 60%, ${ACCENT})`,
//                   padding: 3,
//                   WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))",
//                   mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))",
//                 }}
//               />
//               <div
//                 className="avatar-inner"
//                 style={{
//                   width: 76,
//                   height: 76,
//                   borderRadius: "50%",
//                   background: `linear-gradient(145deg, ${ACCENT}, #7a5b00)`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: 24,
//                   fontWeight: 900,
//                   color: "#1a1300",
//                   border: "3px solid #141414",
//                 }}
//               >
//                 {coach.initials}
//               </div>
//             </div>

//             <h3 className="coach-name" style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 900, color: "#fff" }}>
//               {coach.name}
//             </h3>
//             <span className="coach-role" style={{ fontSize: 13, color: ACCENT, fontWeight: 700, marginBottom: 12 }}>
//               {coach.role}
//             </span>

//             <p className="coach-exp" style={{ margin: "0 0 20px", fontSize: 13.5, color: "#ccc", lineHeight: 1.9 }}>
//               {coach.experience}
//             </p>

//             <a
//               href={`https://wa.me/${coach.phone}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="wa-btn"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 8,
//                 background: "linear-gradient(135deg, #25D366, #128C7E)",
//                 color: "#fff",
//                 fontWeight: 800,
//                 fontSize: 14,
//                 padding: "12px 14px",
//                 borderRadius: 999,
//                 textDecoration: "none",
//               }}
//             >
//               <WhatsAppIcon />
//               تواصل واتساب
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }