import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Dumbbell } from "lucide-react";

const ACCENT = "#FFC107";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-me" },
    { name: "Results", path: "/results-for-me" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
    { name: "Calories Calculator", path: "/calories-calculator" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          scrolling
            ? "bg-black/30 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between py-5 px-4 sm:px-[3%]">

          {/* Logo with Icon */}
          <Link onClick={scrollToTop} to="/" className="flex items-center gap-2 group">
            <div
              className="p-1.5 rounded-xl shadow-lg transition-all duration-300"
              style={{ background: ACCENT, boxShadow: "0 0 16px rgba(255,193,7,0.25)" }}
            >
              <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#1a1300" }} />
            </div>
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
              Mo Nabil
            </h1>
          </Link>

          {/* Desktop Links */}
          <ul onClick={scrollToTop} className="hidden text-lg sm:flex gap-8 text-white/80 ml-auto">
            {links.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className="relative group hover:text-white transition"
              >
                {item.name}
                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition origin-left"
                  style={{ background: ACCENT }}
                ></span>
              </NavLink>
            ))}
          </ul>

          {/* Actions */}
          <div onClick={scrollToTop} className="flex items-center gap-4 text-white">
            <button
              onClick={() => setOpen(true)}
              className="sm:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[320px] bg-black/90 backdrop-blur-xl z-[1001] shadow-2xl transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Mobile Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="p-1.5 rounded-xl" style={{ background: ACCENT }}>
            <Dumbbell className="w-5 h-5" style={{ color: "#1a1300" }} />
          </div>
          <h1 className="text-white text-xl font-extrabold">Mo Nabil</h1>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-8 mt-4">
          {links.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-white/80 text-lg hover:text-white transition"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;