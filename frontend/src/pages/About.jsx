
// import React from "react";

// const About = () => {
//   return (
//     <div className="bg-gray-50 text-gray-700 px-4 sm:px-8 md:px-16 lg:px-28 py-4 sm:py-20">

//       {/* Section Title */}
//       <div className="text-center mb-5">
//         <div className="inline-flex items-center gap-3">
//           <p className="text-gray-500 tracking-wide text-base sm:text-lg">
//             ABOUT <span className="text-gray-800 font-semibold">US</span>
//           </p>
//           <div className="w-10 sm:w-12 h-[2px] bg-gray-700"></div>
//         </div>
//       </div>

//       {/* About Content */}
//       <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-20">
//         <img
//           className="w-full max-w-md md:max-w-[450px] rounded-2xl shadow-md object-cover"
//           src={assets.shamsstore}
//           alt="about shamsStore"
//         />
// <div className="flex flex-col gap-5 text-gray-600 md:w-3/5 text-right m-auto mt-1">
//   <p className="leading-loose text-sm sm:text-base" dir="rtl">
//     في <span className="font-semibold text-gray-800">Shams Store</span>،
//     إحنا مش بس بنقدّم ملابس رياضية وأحذية عصرية… إحنا بنخلق تجربة أناقة فريدة
//     وعصرية لكل عميل.
//   </p>

//   <p className="leading-loose text-sm sm:text-base" dir="rtl">
//     من أول التصميمات المبتكرة ولحد أعلى جودة في الخامات، هدفنا إن كل
//     قطعة تلبسها تكون انعكاس حقيقي لشخصيتك وأسلوبك الخاص.
//   </p>

//   <p className="leading-loose text-sm sm:text-base" dir="rtl">
//     منذ تأسيس <span className="font-semibold text-gray-800">Shams Store</span>، ركّزنا على الجمع بين الفخامة، الراحة، والأناقة،
//     مع اهتمام خاص بأدق التفاصيل اللي بتصنع الفرق.
//   </p>

//   <p className="leading-loose text-sm sm:text-base font-medium text-gray-800" dir="rtl">
//     Shams Store – حيث تلتقي الأناقة بأسلوبك
//   </p>
// </div>

//       </div>

//       {/* Why Choose Us Title */}
//       <div className="text-center mb-10">
//         <div className="inline-flex items-center gap-3">
//           <p className="text-gray-500 tracking-wide text-base sm:text-lg">
//             WHY <span className="text-gray-800 font-semibold">CHOOSE US</span>
//           </p>
//           <div className="w-10 sm:w-12 h-[2px] bg-gray-700"></div>
//         </div>
//       </div>

//       {/* Why Choose Us Boxes */}
//       <div
//         className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-sm"
//         dir="rtl"
//       >
//         <div className="bg-white border rounded-2xl shadow-sm p-8 sm:p-10 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300">
//           <b className="text-gray-800 text-base sm:text-lg">
//             جودة نثق بها
//           </b>
//           <p className="text-gray-600 leading-relaxed">
//             بنختار كل قطعة بعناية شديدة علشان نضمن أعلى مستوى من الجودة في
//             الخامات والتشطيب.
//           </p>
//         </div>

//         <div className="bg-white border rounded-2xl shadow-sm p-8 sm:p-10 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300">
//           <b className="text-gray-800 text-base sm:text-lg">
//             تجربة تسوّق سهلة
//           </b>
//           <p className="text-gray-600 leading-relaxed">
//             واجهة استخدام بسيطة، خطوات شراء سريعة، وتجربة مريحة من أول زيارة
//             لحد استلام الطلب.
//           </p>
//         </div>

//         <div className="bg-white border rounded-2xl shadow-sm p-8 sm:p-10 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300">
//           <b className="text-gray-800 text-base sm:text-lg">
//             دعم وخدمة مميزة
//           </b>
//           <p className="text-gray-600 leading-relaxed">
//             فريقنا دايمًا جاهز يساعدك ويضمن إن تجربتك مع SHAMS_STORE تكون
//             مثالية في كل خطوة.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import { assets } from "../assets/frontend_assets/assets";

export default function About() {
  return (
    <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-20 px-4">

      {/* Top red line */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]"
        style={{ background: "linear-gradient(to right, #e63946, transparent)" }}
      />

      {/* Red side glow */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#e63946]/40 blur-sm" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative flex justify-center md:justify-start">
          {/* Red border glow frame */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #e63946 0%, transparent 60%, #e63946 100%)",
              padding: "2px",
              borderRadius: "16px",
            }}
          />
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "2px solid #e63946",
              boxShadow:
                "0 0 30px rgba(230,57,70,0.35), inset 0 0 30px rgba(0,0,0,0.6)",
              maxWidth: "420px",
              width: "100%",
            }}
          >
            <img
              src={assets.bolbol}
              alt="Ahmed Shady"
              className="w-full h-full object-cover"
              style={{ display: "block", maxHeight: "560px", objectPosition: "center top" }}
            />
            {/* Dark overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          {/* Tag */}
          <p
            className="text-xs font-semibold tracking-[5px] uppercase"
            style={{ color: "#e63946" }}
          >
            About Me
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight">
            <span className="text-white">ONLINE </span>
            <span style={{ color: "#e63946" }}>COACH</span>
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
            <button
              className="px-8 py-3 rounded-xl font-bold text-white text-sm transition-all duration-300"
              style={{
                background: "#e63946",
                boxShadow: "0 0 20px rgba(230,57,70,0.4)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 35px rgba(230,57,70,0.75)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(230,57,70,0.4)")
              }
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Bottom red line */}
      <div
        className="absolute bottom-0 right-0 w-full h-[2px]"
        style={{ background: "linear-gradient(to left, #e63946, transparent)" }}
      />
    </section>
  );
}