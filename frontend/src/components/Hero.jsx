import { useEffect, useRef } from "react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import About from "../pages/About";
import { Link } from "react-router-dom";

export default function Hero() {
  const canvasRef = useRef(null);

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
      red: Math.random() < 0.12,
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
        ctx.fillStyle = p.red
          ? `rgba(230,57,70,${p.alpha})`
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
        <p className="tracking-[6px] text-[#e63946] mb-4 text-xs sm:text-sm font-semibold uppercase">
          Online Fitness Coach
        </p>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 uppercase">
          <span className="text-white">I'M </span>
          <span
            className="text-[#e63946]"
            style={{
              textShadow:
                "0 0 30px rgba(230,57,70,0.8), 0 0 60px rgba(230,57,70,0.4)",
            }}
          >
           Mohammed Nabil
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-8 tracking-wide">
          Help you reach your goal ....
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Link to="/results-for-me" className="px-7 py-3 rounded-xl text-white font-bold text-sm transition-all duration-300"
            className="px-7 py-3 rounded-xl text-white font-bold text-sm transition-all duration-300"
            style={{
              background: "#e63946",
              boxShadow: "0 0 20px rgba(230,57,70,0.5)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 35px rgba(230,57,70,0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 20px rgba(230,57,70,0.5)")
            }
         
          >
            My Transformations
          </Link>
          <Link to="/contact" className="px-7 py-3 rounded-xl text-white font-bold text-sm border border-[#444] hover:border-[#e63946] transition-all duration-300 bg-transparent">
            Get Started
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-500">
        <a href={'https://www.facebook.com/share/1LEiTjL4Ad/?mibextid=wwXIfr'}>  <FaFacebook  className="text-2xl hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" /></a>
           <a href={'https://www.tiktok.com/@mohamed267_0?_r=1&_t=ZS-96ptQwU6T92'}> <FaTiktok className="text-2xl hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" /></a>
         <a href={'https://www.instagram.com/mo_napil_22?igsh=bXM1Z3o3eG5sN2gy&utm_source=qr'}><FaInstagram className="text-2xl hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" /></a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-7 h-11 border-2 border-[#444] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-[#e63946] rounded-full" />
        </div>
      </div>
      
    </section>
    
  );
}