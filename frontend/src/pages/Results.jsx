// import { useState } from "react";

// // ضيف صورك هنا
// const images = [
//   { src: "/images/client1.jpg", alt: "Client 1" },
//   { src: "/images/client2.jpg", alt: "Client 2" },
//   { src: "/images/client3.jpg", alt: "Client 3" },
//   { src: "/images/client4.jpg", alt: "Client 4" },
//   { src: "/images/client5.jpg", alt: "Client 5" },
//   { src: "/images/client6.jpg", alt: "Client 6" },
//   { src: "/images/client7.jpg", alt: "Client 7" },
//   { src: "/images/client8.jpg", alt: "Client 8" },
// ];

// const VISIBLE = 4;

// export default function Results() {
//   const [current, setCurrent] = useState(0);
//   const total = images.length;

//   const prev = () => setCurrent((p) => (p - 1 + total) % total);
//   const next = () => setCurrent((p) => (p + 1) % total);

//   const getVisible = () => {
//     const result = [];
//     for (let i = 0; i < VISIBLE; i++) {
//       result.push(images[(current + i) % total]);
//     }
//     return result;
//   };

//   return (
//     <div
//       style={{
//         background: "#0d0d0d",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "3rem 1rem",
//         fontFamily: "'Cairo', sans-serif",
//       }}
//     >
//       <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />

//       {/* Header */}
//       <p style={{ color: "#e63946", fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
//         RESULTS
//       </p>
//       <h2
//         style={{
//           fontSize: "clamp(28px, 5vw, 52px)",
//           fontWeight: 900,
//           textTransform: "uppercase",
//           letterSpacing: 2,
//           marginBottom: "2.5rem",
//           textAlign: "center",
//         }}
//       >
//         <span style={{ color: "#fff" }}>CLIENT </span>
//         <span style={{ color: "#e63946" }}>TRANSFORMATIONS</span>
//       </h2>

//       {/* Slider */}
//       <div style={{ position: "relative", width: "100%", maxWidth: 1100, display: "flex", alignItems: "center" }}>
//         {/* Prev Button */}
//         <button
//           onClick={prev}
//           style={{
//             position: "absolute",
//             left: -20,
//             zIndex: 10,
//             width: 40,
//             height: 40,
//             borderRadius: "50%",
//             background: "#1a1a1a",
//             border: "1px solid #333",
//             color: "#fff",
//             fontSize: 18,
//             cursor: "pointer",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           ‹
//         </button>

//         {/* Images */}
//         <div style={{ display: "flex", gap: 14, width: "100%", overflow: "hidden" }}>
//           {getVisible().map((img, i) => (
//             <div
//               key={i}
//               style={{
//                 flex: "1 1 0",
//                 aspectRatio: "9/16",
//                 borderRadius: 16,
//                 overflow: "hidden",
//                 border: "2px solid #2a2a2a",
//                 background: "#1a1a1a",
//                 position: "relative",
//               }}
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//               />
//               {/* Red glow bottom */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   height: 80,
//                   background: "linear-gradient(to top, rgba(230,57,70,0.3), transparent)",
//                   pointerEvents: "none",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={next}
//           style={{
//             position: "absolute",
//             right: -20,
//             zIndex: 10,
//             width: 40,
//             height: 40,
//             borderRadius: "50%",
//             background: "#1a1a1a",
//             border: "1px solid #333",
//             color: "#fff",
//             fontSize: 18,
//             cursor: "pointer",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           ›
//         </button>
//       </div>

//       {/* Dots */}
//       <div style={{ display: "flex", gap: 6, marginTop: "1.5rem" }}>
//         {images.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setCurrent(i)}
//             style={{
//               width: i === current ? 20 : 8,
//               height: 8,
//               borderRadius: 4,
//               background: i === current ? "#e63946" : "#444",
//               cursor: "pointer",
//               transition: "all 0.3s",
//             }}
//           />
//         ))}
//       </div>

//       {/* Instagram Button */}
//       <a
//         href="https://instagram.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           marginTop: "2rem",
//           padding: "10px 28px",
//           border: "1px solid #555",
//           borderRadius: 30,
//           color: "#fff",
//           fontSize: 14,
//           textDecoration: "none",
//           background: "transparent",
//           cursor: "pointer",
//           letterSpacing: 1,
//           transition: "border-color 0.2s",
//         }}
//         onMouseOver={(e) => (e.target.style.borderColor = "#e63946")}
//         onMouseOut={(e) => (e.target.style.borderColor = "#555")}
//       >
//         See more on Instagram
//       </a>
//     </div>
//   );
// }
import { useRef, useState } from "react";

const images = [
  { src: "/images/client1.jpg", alt: "Client 1" },
  { src: "/images/client2.jpg", alt: "Client 2" },
  { src: "/images/client3.jpg", alt: "Client 3" },
  { src: "/images/client4.jpg", alt: "Client 4" },
  { src: "/images/client5.jpg", alt: "Client 5" },
  { src: "/images/client6.jpg", alt: "Client 6" },
  { src: "/images/client7.jpg", alt: "Client 7" },
  { src: "/images/client8.jpg", alt: "Client 8" },
];

export default function Results() {
  const scrollRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [selectedImage, setSelectedImage] = useState(null);

  // Drag start
  const startDrag = (e) => {
    setIsDown(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Drag move
  const onMove = (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.2;

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => setIsDown(false);

  return (
    <div className="bg-[#050505] min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white">

      {/* Title */}
      <p className="text-red-500 text-xs tracking-[4px] mb-2">
        RESULTS
      </p>

      <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
        CLIENT <span className="text-red-500">TRANSFORMATIONS</span>
      </h2>

      {/* Slider */}
      <div className="relative w-full max-w-6xl">

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide scroll-smooth"
          onMouseDown={startDrag}
          onMouseMove={onMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={startDrag}
          onTouchMove={onMove}
          onTouchEnd={stopDrag}
        >
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="min-w-[180px] md:min-w-[240px] aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0 relative cursor-pointer hover:scale-[1.03] transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />

              {/* glow */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-red-500/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* buttons */}
        <button
          onClick={() =>
            scrollRef.current.scrollBy({ left: -220, behavior: "smooth" })
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 border border-white/10 text-white text-xs hover:bg-red-500 transition"
        >
          ‹
        </button>

        <button
          onClick={() =>
            scrollRef.current.scrollBy({ left: 220, behavior: "smooth" })
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 border border-white/10 text-white text-xs hover:bg-red-500 transition"
        >
          ›
        </button>
      </div>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        className="mt-10 px-6 py-2 border border-white/20 rounded-full text-sm hover:border-red-500 transition"
      >
        See more on Instagram
      </a>

      {/* ================= MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* image */}
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border border-white/10"
          />

          {/* close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}