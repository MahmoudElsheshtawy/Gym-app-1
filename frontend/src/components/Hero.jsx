import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

// توقيت وحركة الدخول التدريجي — نفس الإحساس لكل العناصر لكن بتأخير متزايد
const EASE = "cubic-bezier(0.16,1,0.3,1)";
const enterStyle = (mounted, delay = 0, distance = 22) => ({
  opacity: mounted ? 1 : 0,
  transform: mounted ? "translateY(0)" : `translateY(${distance}px)`,
  transition: `opacity 0.8s ${EASE} ${delay}ms, transform 0.8s ${EASE} ${delay}ms`,
});

export default function Hero() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // يشتغل من جديد في كل مرة الكومبوننت بيتحمل فيها — يعني هيتفعّل تاني مع كل ريفريش
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NUM = 120;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      accent: Math.random() < 0.12,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent
          ? `rgba(255,193,7,${p.alpha})`
          : `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / 80) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden px-4">

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">

        {/* Tag */}
        <p
          className="tracking-[6px] text-[#FFC107] mb-4 text-xs sm:text-sm font-semibold uppercase"
          style={enterStyle(mounted, 0)}
        >
          Online Fitness Coach
        </p>

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 uppercase"
          style={enterStyle(mounted, 140, 28)}
        >
          <span className="text-white">I'M </span>
          <span
            className="text-[#FFC107]"
            style={{
              textShadow:
                "0 0 30px rgba(255,193,7,0.6), 0 0 60px rgba(255,193,7,0.3)",
            }}
          >
            Mohammed Nabil
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-8 tracking-wide"
          style={enterStyle(mounted, 280)}
        >
          Help you reach your goal ....
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          style={enterStyle(mounted, 420)}
        >
          <Link
            to="/results-for-me"
            className="px-7 py-3 rounded-xl text-black font-bold text-sm transition-all duration-300"
            style={{
              background: "#FFC107",
              boxShadow: "0 0 20px rgba(255,193,7,0.5)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 35px rgba(255,193,7,0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 20px rgba(255,193,7,0.5)")
            }
          >
            My Transformations
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 rounded-xl text-white font-bold text-sm border border-[#444] hover:border-[#FFC107] transition-all duration-300 bg-transparent"
          >
            Get Started
          </Link>
        </div>

        {/* Social Icons */}
        <div
          className="flex justify-center gap-6 text-gray-500"
          style={enterStyle(mounted, 560)}
        >
          <a href="https://www.facebook.com/share/1LEiTjL4Ad/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@mohamed267_0?_r=1&_t=ZS-96ptQwU6T92" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/mo_napil_22?igsh=bXM1Z3o3eG5sN2gy&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
        style={enterStyle(mounted, 700, 10)}
      >
        <div className="w-7 h-11 border-2 border-[#444] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-[#FFC107] rounded-full" />
        </div>
      </div>

    </section>
  );
}