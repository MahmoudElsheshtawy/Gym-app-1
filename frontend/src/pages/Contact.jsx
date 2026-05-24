import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#0a0a0a] text-white px-4 sm:px-8 md:px-16 lg:px-28 py-16 border-t border-white/10">

      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3">
          <p className="text-white/70 tracking-wide text-base sm:text-lg">
            CONTACT <span className="text-white font-semibold">US</span>
          </p>
          <div className="w-10 sm:w-12 h-[2px] bg-white/70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Image */}
        <img
          className="w-full max-w-md rounded-2xl shadow-2xl object-cover hover:scale-[1.02] transition duration-500 border border-white/10"
          src="https://images.unsplash.com/photo-1520975922284-3f7b3c6d3c0b"
          alt="Contact"
        />

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">

          {/* Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-white text-xl" />
              <p className="text-white/70">
                <span className="text-white font-medium">Location:</span>{" "}
                Cairo, Egypt
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-white text-xl" />
              <p className="text-white/70">
                <span className="text-white font-medium">Phone:</span>{" "}
                01092997107
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-white text-xl" />
              <p className="text-white/70 break-all">
                <span className="text-white font-medium">Email:</span>{" "}
                example@mail.com
              </p>
            </div>

          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/201103436285"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 text-white py-3 rounded-full font-medium hover:bg-green-600 transition duration-300 shadow-lg hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            تواصل عبر واتساب
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;