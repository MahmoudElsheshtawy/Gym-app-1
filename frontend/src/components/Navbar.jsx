// import { useContext, useState, useEffect } from "react";
// import { assets } from "../assets/frontend_assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [scrollingDown, setScrollingDown] = useState(false);
//   const [cartAnim, setCartAnim] = useState(false);
//   const [cartColor, setCartColor] = useState("grayscale-0");

//   const {
//     setShowSearsh,
//     getCartCount,
//     navigate,
//     token,
//     setToken,
//     setCartItems,
//   } = useContext(ShopContext);

//   const logout = () => {
//     navigate("/login");
//     localStorage.removeItem("token");
//     localStorage.removeItem("cart");
//     setToken("");
//     setCartItems({});
//     toast.success("تم تسجيل الخروج بنجاح");
//   };

//   // Scroll behavior with blur effect
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrollingDown(true);
//     } else {
//       setScrollingDown(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Cart animation
//   useEffect(() => {
//     setCartAnim(true);
//     setCartColor("text-red-500");
//     const timer = setTimeout(() => {
//       setCartAnim(false);
//       setCartColor("text-gray-700");
//     }, 300);
//     return () => clearTimeout(timer);
//   }, [getCartCount()]);

//   return (
//     <>
//       {/* Navbar */}
//       <div
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//           scrollingDown
//             ? "bg-black/80 backdrop-blur-xl shadow-2xl"
//             : "bg-black/40 backdrop-blur-md shadow-lg"
//         }`}
//       >
//         <div className="flex items-center justify-between py-4 px-4 sm:px-[3%] font-medium">
//           {/* Logo - Mo Nabil on left */}
//           <Link
//             onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
//             to={"/"}
//             className="flex items-center gap-2"
//           >
//             <img
//               className="w-7 sm:w-8 md:w-10 transition-all duration-300 hover:scale-110 hover:rotate-12"
//               src={assets.bolbol}
//               alt="Logo"
//             />
//             <h1 className="font-extrabold select-none text-white text-sm sm:text-base md:text-lg tracking-tight">
//               Mo Nabil
//             </h1>
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden sm:flex gap-8 text-sm md:text-base">
//             {[
//               { name: "Home", path: "/" },
//               { name: "Products", path: "/collection" },
//               { name: "About", path: "/about" },
//               { name: "Contact", path: "/contact" },
//             ].map((item, idx) => (
//               <NavLink
//                 key={idx}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `relative py-2 text-white/80 hover:text-white transition-all duration-300 ${
//                     isActive ? "text-white font-semibold" : ""
//                   }`
//                 }
//               >
//                 <p className="transition-transform duration-300 hover:scale-105">
//                   {item.name}
//                 </p>
//                 <hr className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
//               </NavLink>
//             ))}
//           </ul>

//           {/* Right Icons */}
//           <div className="flex items-center gap-4 sm:gap-5">
//             {/* Search */}
//             <NavLink
//               onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
//               to={"/collection"}
//             >
//               <img
//                 onClick={() => setShowSearsh(true)}
//                 className="w-5 cursor-pointer brightness-0 invert transition-all duration-300 hover:scale-110"
//                 src={assets.search_icon}
//                 alt="Search"
//               />
//             </NavLink>

//             {/* Profile */}
//             <div className="group relative">
//               <img
//                 onClick={() => (token ? null : navigate("/login"))}
//                 className="w-5 sm:w-6 cursor-pointer brightness-0 invert transition-all duration-300 hover:scale-110"
//                 src={assets.profile_icon}
//                 alt="Profile"
//               />
//               {token && (
//                 <div className="z-10 absolute right-0 pt-2 hidden group-hover:block animate-fadeIn">
//                   <div className="flex flex-col gap-2 w-36 py-3 px-3 bg-white/95 backdrop-blur-md text-gray-700 rounded-xl shadow-2xl">
//                     <p
//                       onClick={() => navigate("/orders")}
//                       className="cursor-pointer hover:text-black transition-all duration-200 hover:translate-x-1"
//                     >
//                       My Orders
//                     </p>
//                     <p
//                       onClick={logout}
//                       className="cursor-pointer hover:text-black transition-all duration-200 hover:translate-x-1"
//                     >
//                       Logout
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Cart */}
//             <Link
//               onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
//               className="w-5 sm:w-6 relative"
//               to={"/cart"}
//             >
//               <img
//                 className={`brightness-0 invert transition-all duration-300 ${
//                   cartAnim ? "scale-125 animate-bounce" : "scale-100 hover:scale-110"
//                 } ${cartColor}`}
//                 src={assets.cart_icon}
//                 alt="Cart"
//               />
//               <p className="absolute bg-red-600 text-center w-5 bottom-[-8px] right-[-8px] leading-5 text-white aspect-square rounded-full text-[12px] font-bold shadow-lg animate-pulse">
//                 {getCartCount()}
//               </p>
//             </Link>

//             {/* Mobile Menu Toggle */}
//             <img
//               onClick={() => setShowSidebar(true)}
//               className="w-5 sm:hidden cursor-pointer brightness-0 invert transition-all duration-300 hover:scale-110"
//               src={assets.menu_icon}
//               alt="Menu"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-black/90 backdrop-blur-xl z-50 shadow-2xl transition-all duration-500 ease-out transform ${
//           showSidebar
//             ? "translate-x-0 opacity-100 w-full sm:w-80"
//             : "translate-x-full opacity-0 w-0"
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Close Button */}
//           <div
//             onClick={() => setShowSidebar(false)}
//             className="flex items-center justify-end p-6 cursor-pointer"
//           >
//             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:rotate-90">
//               <img
//                 className="h-5 rotate-180 brightness-0 invert"
//                 src={assets.dropdown_icon}
//                 alt="Close"
//               />
//             </div>
//           </div>

//           {/* Sidebar Links with Animation */}
//           <nav className="flex flex-col px-6 py-4 gap-3">
//             {[
//               { name: "Home", path: "/" },
//               { name: "Products", path: "/collection" },
//               { name: "About", path: "/about" },
//               { name: "Contact", path: "/contact" },
//             ].map((item, idx) => (
//               <NavLink
//                 key={idx}
//                 to={item.path}
//                 onClick={() => setShowSidebar(false)}
//                 className={({ isActive }) =>
//                   `relative py-4 px-6 rounded-xl font-medium text-lg
//                   transition-all duration-500 transform
//                   ${
//                     isActive
//                       ? "bg-white/20 text-white shadow-xl scale-105"
//                       : "text-white/70 hover:bg-white/10 hover:text-white hover:scale-105"
//                   }
//                   animate-slideIn`
//                 }
//                 style={{
//                   animationDelay: `${idx * 100}ms`,
//                   animationFillMode: "backwards",
//                 }}
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Add animation keyframes to your global CSS or tailwind config */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
        
//         .animate-slideIn {
//           animation: slideIn 0.4s ease-out forwards;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [showNavbar, setShowNavbar] = useState(true);

//   // Scroll behavior (hide/show)
//   const handleScroll = () => {
//     if (window.scrollY > lastScrollY) {
//       setShowNavbar(false); // scroll down
//     } else {
//       setShowNavbar(true); // scroll up
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <>
//       {/* Navbar */}
//       <div
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
//         bg-black/80 backdrop-blur-md text-white
//         ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
//       >
//         <div className="flex justify-between items-center px-6 py-4">

//           {/* Logo */}
//           <h1 className="text-xl font-extrabold tracking-widest text-red-500">
//             Mohamed Nabil
//           </h1>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 text-sm">
//             {[
//               { name: "Home", id: "home" },
//               { name: "About", id: "about" },
//               { name: "Results", id: "results" },
//               { name: "Plans", id: "plans" },
//               { name: "Contact", id: "contact" },
//             ].map((item, i) => (
//               <li key={i}>
//                 <a
//                   href={`/${item.id}`}
//                   className="hover:text-red-500 transition"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* CTA Button */}
//           <button className="hidden md:block border border-red-500 px-4 py-2 rounded-lg hover:bg-red-600/20 transition">
//             Join Now
//           </button>

//           {/* Mobile Menu Button */}
//           <div
//             onClick={() => setShowSidebar(true)}
//             className="md:hidden cursor-pointer text-xl"
//           >
//             ☰
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-black text-white z-50 transition-all duration-500 ${
//           showSidebar ? "w-64" : "w-0 overflow-hidden"
//         }`}
//       >
//         <div className="p-6 flex flex-col gap-6">

//           {/* Close */}
//           <button
//             onClick={() => setShowSidebar(false)}
//             className="text-right text-xl"
//           >
//             ✕
//           </button>

//           {/* Links */}
//           {[
//             "home",
//             "about",
//             "results",
//             "plans",
//             "contact",
//           ].map((item, i) => (
//             <a
//               key={i}
//               href={`#${item}`}
//               onClick={() => setShowSidebar(false)}
//               className="capitalize text-lg hover:text-red-500"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  const { navigate, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    setToken("");
    setCartItems({});
    toast.success("تم تسجيل الخروج بنجاح");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-me" },
    { name: "Results", path: "/results-for-me" },
    { name: "reviews", path: "/reviews" },
    { name: "packages", path: "/packages" },
    { name: "contact", path: "/Contact" },

  ];

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          scrolling
            ? "bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between py-5 px-4 sm:px-[3%]">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
              Mo Nabil
            </h1>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden sm:flex gap-8 text-white/80">
            {links.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className="relative group hover:text-white transition"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
              </NavLink>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4 text-white">

            {token && (
              <button
                onClick={logout}
                className="hidden sm:block hover:text-red-400 transition"
              >
                Logout
              </button>
            )}

            {/* Mobile Button */}
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

        {/* Links */}
        <div className="flex flex-col gap-6 px-8 mt-10">
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

          {token && (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="text-left text-red-400 mt-6"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;