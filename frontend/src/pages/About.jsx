import { assets } from "../assets/frontend_assets/assets";

export default function About() {
  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-20 px-4">

      {/* Top red line */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]"
        style={{ background: "linear-gradient(to right, #FFC107, transparent)" }}
      />

      {/* Red side glow */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#FFC107]/40 blur-sm" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

        {/* ================= IMAGE ================= */}
        <div className="relative flex justify-center md:justify-start">

          <div
            className="relative rounded-2xl overflow-hidden w-full h-full min-h-[420px]"
            style={{
              border: "2px solid #FFC107",
              boxShadow: "0 0 30px rgba(255,193,7,0.35), inset 0 0 30px rgba(0,0,0,0.6)",
            }}
          >
            <img
              src={assets.bolbol}
              alt="Ahmed Shady"
              className="w-full h-full object-cover object-top transition duration-500 hover:scale-105"
              style={{ position: "absolute", inset: 0 }}
            />

            {/* Fade top */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/70 to-transparent" />

            {/* Fade bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col gap-6 justify-center">

          {/* Tag */}
          <p
            className="text-xs font-semibold tracking-[5px] uppercase"
            style={{ color: "#FFC107" }}
          >
            About Me
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight">
            <span className="text-white">ONLINE </span>
            <span style={{ color: "#FFC107" }}>COACH</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
            I'm Ahmed Shady I've been in bodybuilding for some years now I have
            experience and I participated in tournaments let me help you I've
            helped a lot of people before you can see the transformations in my
            clients
          </p>

          {/* Button */}
          <div>
            <a
              href="https://wa.me/201558864839"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                className="px-8 py-3 rounded-xl font-bold text-white text-sm transition-all duration-300"
                style={{
                  background: "#FFC107",
                  boxShadow: "0 0 20px rgba(255,193,7,0.4)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 35px rgba(255,193,7,0.75)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 20px rgba(255,193,7,0.4)")
                }
              >
                Contact Me
              </button>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom red line */}
      <div
        className="absolute bottom-0 right-0 w-full h-[2px]"
        style={{ background: "linear-gradient(to left, #FFC107, transparent)" }}
      />
    </section>
  );
}