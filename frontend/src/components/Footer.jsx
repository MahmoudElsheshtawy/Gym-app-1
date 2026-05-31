import React, { useEffect, useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Heart,
  Dumbbell,
  ArrowUp,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Clock,
  Award,
  Users,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer
        className={`bg-gradient-to-b from-black via-gray-900 to-black shadow-2xl rounded-t-3xl pt-12 md:pt-16 pb-6 px-4 sm:px-6 md:px-12 lg:px-20 mt-20 md:mt-32 transition-all duration-1000 ease-out transform border-t border-red-500/20 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 text-sm">
          
          {/* القسم الأول: Logo + Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-lg shadow-red-500/30">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                MOHAMED NABIL GYM
              </h1>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Transform your body, transform your life. Join Mohamed Nabil Gym 
              and experience world-class training facilities, expert coaches, 
              and a community that pushes you to be your best.
            </p>
            
            {/* Opening Hours */}
            <div className="mt-4 p-4 bg-gradient-to-r from-red-950/50 to-red-900/30 rounded-xl border border-red-500/30">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-4 h-4 text-red-500" />
                <span className="text-white font-semibold text-sm">Opening Hours</span>
              </div>
              <div className="space-y-1 text-xs text-gray-300">
                <p>Saturday  - Friday: 6:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* القسم الثاني: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white relative inline-block">
              QUICK LINKS
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              {['Home', 'Membership Plans', 'Personal Training', 'Classes', 'Success Stories', 'Contact Us'].map((item, index) => (
                <li 
                  key={index}
                  className="hover:text-red-500 cursor-pointer transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* القسم الثالث: Programs & Facilities */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white relative inline-block">
              OUR PROGRAMS
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              {['Strength Training', 'Cardio & HIIT', 'Yoga & Meditation', 'CrossFit', 'Weight Loss Program', 'Bodybuilding'].map((item, index) => (
                <li 
                  key={index}
                  className="hover:text-red-500 cursor-pointer transition-all duration-300 hover:translate-x-2 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* القسم الرابع: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white relative inline-block">
              GET IN TOUCH
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></span>
            </h3>
            
            {/* Contact Info Cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Phone className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <a href="https://wa.me/201558864839" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
                    +20 155 886 4839
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Mail className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <a href="mailto:mohamednapil@gmail.com" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
                    mohamednapil@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <MapPin className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Visit Us</p>
                  <p className="text-sm font-medium text-white"> El Nobaria, Al Buhayrah, Egypt</p>
                </div>
              </div>
            </div>
 
            {/* Social Media Links */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/mo_napil_22?igsh=bXM1Z3o3eG5sN2gy&utm_source=qr/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-red-500 transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5 text-white" />

                </a>
                <a href="https://www.facebook.com/share/1LEiTjL4Ad/?mibextid=wwXIfr/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-red-500 transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
               
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 mb-6 border-y border-white/10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-red-500" />
              <span className="text-2xl font-bold text-white">100+</span>
            </div>
            <p className="text-xs text-gray-400">Happy Members</p>
          </div>
          {/* <div className="text-center"> */}
            {/* <div className="flex items-center justify-center gap-2 mb-2"> */}
              {/* <Award className="w-5 h-5 text-red-500" /> */}
              {/* <span className="text-2xl font-bold text-white">50+</span> */}
            {/* </div> */}
            {/* <p className="text-xs text-gray-400">Expert Trainers</p> */}
          {/* </div> */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Dumbbell className="w-5 h-5 text-red-500" />
              <span className="text-2xl font-bold text-white">200+</span>
            </div>
            <p className="text-xs text-gray-400">Equipment Items</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="text-2xl font-bold text-white">6+</span>
            </div>
            <p className="text-xs text-gray-400">Years Experience</p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-b from-black via-gray-900 to-black text-xs text-gray-400">
              <Heart className="w-4 h-4 text-red-500 inline-block mx-1" />
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <a href=" https://wa.me/201093482958" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors text-xs">
             @{currentYear} Created by Mahmoud_Elsheshatwy
            </a>
        
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-110 group ${
          showScrollButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </>
  );
};

export default Footer;