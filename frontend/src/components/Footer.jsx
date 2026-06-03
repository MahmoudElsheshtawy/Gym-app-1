import React, { useEffect, useState, useRef } from "react";
import {
  MapPin, Phone, Mail, Heart, Dumbbell,
  ArrowUp, Instagram, Facebook, Clock, Users, ChevronRight
} from "lucide-react";

const ACCENT = "#FFC107";

function TiktokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.82c-.83-.74-1.34-1.78-1.34-2.93h-3.1v13.65c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.27 0 .53.04.78.11V10.9c-.26-.04-.52-.06-.78-.06A5.83 5.83 0 0 0 3.62 16.66 5.83 5.83 0 0 0 9.44 22.5a5.83 5.83 0 0 0 5.82-5.83V9.42a8.16 8.16 0 0 0 4.74 1.5V7.83a4.85 4.85 0 0 1-3.4-2.01z"/>
    </svg>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @keyframes border-run {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes attention {
          0%, 100% { transform: scale(1);    color: ${ACCENT}; }
          15%       { transform: scale(1.12); color: #ffdb70; }
          30%       { transform: scale(1);    color: ${ACCENT}; }
          45%       { transform: scale(1.08); color: #ffdb70; }
          60%       { transform: scale(1);    color: ${ACCENT}; }
        }
        .creator-link {
          color: ${ACCENT};
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.5px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .creator-link:hover .creator-name {
          text-shadow: 0 0 10px ${ACCENT}, 0 0 22px rgba(255,193,7,0.5);
        }
        .creator-prefix {
          color: #555;
          font-size: 11px;
          font-weight: 400;
        }
        .creator-name {
          display: inline-block;
          color: ${ACCENT};
          animation: attention 2.5s ease-in-out infinite;
          transition: text-shadow 0.3s;
        }
        .top-run-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${ACCENT}, #ffdb70, ${ACCENT}, transparent);
          background-size: 200% 100%;
          animation: border-run 2.5s linear infinite;
        }
      `}</style>

      <footer
        className={`relative bg-gradient-to-b from-black via-gray-900 to-black shadow-2xl rounded-t-3xl pt-12 md:pt-16 pb-6 px-4 sm:px-6 md:px-12 lg:px-20 mt-20 md:mt-32 transition-all duration-1000 ease-out transform overflow-hidden border-t border-yellow-500/20 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated top line */}
        <div className="top-run-line" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 text-sm">

          {/* Logo + Description */}
          <Reveal delay={0} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl" style={{ background: ACCENT }}>
                <Dumbbell className="w-6 h-6" style={{ color: "#1a1300" }} />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold" style={{ color: ACCENT }}>
                MOHAMED NABIL GYM
              </h1>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Transform your body, transform your life. Join Mohamed Nabil Gym
              and experience world-class training facilities, expert coaches,
              and a community that pushes you to be your best.
            </p>
            <div className="mt-4 p-4 rounded-xl border" style={{ background: "rgba(255,193,7,0.08)", borderColor: "rgba(255,193,7,0.3)" }}>
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-white font-semibold text-sm">Opening Hours</span>
              </div>
              <p className="text-xs text-gray-300">Saturday - Friday: 6:00 AM - 10:00 PM</p>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={80} className="space-y-4">
            <h3 className="text-lg font-bold text-white relative inline-block">
              QUICK LINKS
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 rounded-full" style={{ background: ACCENT }}></span>
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              {['Home', 'Membership Plans', 'Personal Training', 'Classes', 'Success Stories', 'Contact Us'].map((item, i) => (
                <li key={i} className="cursor-pointer transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group hover:text-yellow-400">
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ACCENT }} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Programs */}
          <Reveal delay={160} className="space-y-4">
            <h3 className="text-lg font-bold text-white relative inline-block">
              OUR PROGRAMS
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 rounded-full" style={{ background: ACCENT }}></span>
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              {['Strength Training', 'Cardio & HIIT', 'Yoga & Meditation', 'CrossFit', 'Weight Loss Program', 'Bodybuilding'].map((item, i) => (
                <li key={i} className="cursor-pointer transition-all duration-300 hover:translate-x-2 flex items-center gap-2 hover:text-yellow-400">
                  <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal delay={240} className="space-y-4">
            <h3 className="text-lg font-bold text-white relative inline-block">
              GET IN TOUCH
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 rounded-full" style={{ background: ACCENT }}></span>
            </h3>
            <div className="space-y-3">
              {[
                { icon: <Phone className="w-4 h-4" style={{ color: ACCENT }} />, label: "Call Us", content: <a href="https://wa.me/201558864839" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors">+20 155 886 4839</a> },
                { icon: <Mail className="w-4 h-4" style={{ color: ACCENT }} />, label: "Email Us", content: <a href="mailto:mohamednapil@gmail.com" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors">mohamednapil@gmail.com</a> },
                { icon: <MapPin className="w-4 h-4" style={{ color: ACCENT }} />, label: "Visit Us", content: <p className="text-sm font-medium text-white">El Nobaria, Al Buhayrah, Egypt</p> },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <div className="p-2 rounded-lg" style={{ background: "rgba(255,193,7,0.15)" }}>{c.icon}</div>
                  <div><p className="text-xs text-gray-400">{c.label}</p>{c.content}</div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/mo_napil_22?igsh=bXM1Z3o3eG5sN2gy&utm_source=qr/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg transition-all duration-300 hover:scale-110" onMouseEnter={(e) => e.currentTarget.style.background = ACCENT} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.facebook.com/share/1LEiTjL4Ad/?mibextid=wwXIfr/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg transition-all duration-300 hover:scale-110" onMouseEnter={(e) => e.currentTarget.style.background = ACCENT} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.tiktok.com/@mohamed267_0?_r=1&_t=ZS-96ptQwU6T92" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg transition-all duration-300 hover:scale-110" onMouseEnter={(e) => e.currentTarget.style.background = ACCENT} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <TiktokIcon className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8 mb-6 border-y border-white/10">
            {[
              { icon: <Users className="w-5 h-5" style={{ color: ACCENT }} />, num: "100+", label: "Happy Members" },
              { icon: <Dumbbell className="w-5 h-5" style={{ color: ACCENT }} />, num: "200+", label: "Equipment Items" },
              { icon: <Clock className="w-5 h-5" style={{ color: ACCENT }} />, num: "6+", label: "Years Experience" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {s.icon}
                  <span className="text-2xl font-bold text-white">{s.num}</span>
                </div>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-b from-black via-gray-900 to-black text-xs text-gray-400">
              <Heart className="w-4 h-4 inline-block mx-1" style={{ color: ACCENT }} />
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-gray-600 text-xs">© {currentYear} All rights reserved</span>
          <a
            href="https://wa.me/201093482958"
            target="_blank"
            rel="noopener noreferrer"
            className="creator-link"
          >
            <span className="creator-prefix">Created by</span>
            <span className="creator-name">Mahmoud_Elsheshatwy</span>
          </a>
        </div>
      </footer>

      {/* Scroll to Top */}
     <button
  onClick={scrollToTop}
  className={`scroll-top-btn fixed bottom-8 right-8 z-50 p-3 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group ${
    showScrollButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
  }`}
  style={{ background: ACCENT, color: "#1a1300" }}
  aria-label="Scroll to top"
>
  <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
</button>
    </>
  );
};
<style>{`
  @keyframes floatGentle {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-4px); }
  }
  .scroll-top-btn {
    animation: floatGentle 2.2s ease-in-out infinite;
  }
  .scroll-top-btn:hover {
    animation-play-state: paused;
  }
`}</style>

export default Footer;