// // src/components/ContactHeader.jsx
// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const BRAND = {
//   primary: "#005BAC",
//   dark: "#0B2A4A",
//   surface: "#F4F8FF",
// };

// const UNSPLASH =
//   "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop";

// export default function ContactHeader() {
//   return (
//     <section
//       className="relative w-full overflow-hidden"
//       style={{
//         background:
//           "radial-gradient(1100px 460px at 10% -10%, rgba(0,91,172,0.12), transparent 60%), radial-gradient(800px 360px at 95% 0%, rgba(255,88,0,0.08), transparent 55%), linear-gradient(180deg, #fff 0%, #F7FAFF 100%)",
//       }}
//     >
//       {/* Decorative orb */}
//       <svg className="pointer-events-none absolute -top-24 -right-24 opacity-25" width="420" height="420" viewBox="0 0 420 420" fill="none" aria-hidden>
//         <defs>
//           <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#FF5800" />
//             <stop offset="100%" stopColor="#005BAC" />
//           </linearGradient>
//         </defs>
//         <circle cx="210" cy="210" r="210" fill="url(#g1)" />
//       </svg>

//       <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20">
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-center">
//           {/* LEFT: text + actions */}
//           <div>
//             <span
//               className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ring-1 ring-slate-200 bg-white text-slate-700"
//             >
//               We’d love to hear from you
//             </span>

//             <h1
//               className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
//               style={{ color: BRAND.primary }}
//             >
//               Contact Us
//             </h1>

//             <p className="mt-3 text-lg sm:text-xl text-slate-700 max-w-2xl">
//               Wanna share something with us? Please reach out, we would love to help you!
//             </p>

//            {/* Quick action chips */}
// <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
//   {/* Phone */}
//   <a
//     href="tel:9600593838"
//     className="group flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-slate-800 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:shadow-md transition min-w-0"
//   >
//     <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F4F8FF] text-[#005BAC] shrink-0">
//       {/* icon */}
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5v3a1.5 1.5 0 0 1-1.65 1.49 18 18 0 0 1-7.86-2.81 17.6 17.6 0 0 1-5.41-5.41A18 18 0 0 1 3 4.65 1.5 1.5 0 0 1 4.49 3h3A1.5 1.5 0 0 1 9 4.28c.1.7.27 1.38.51 2.03.15.42.05.9-.27 1.22l-1.3 1.3a14.5 14.5 0 0 0 5.24 5.24l1.3-1.3c.32-.32.8-.42 1.22-.27.65.24 1.33.41 2.03.51A1.5 1.5 0 0 1 21 16.5Z"/></svg>
//     </span>
//     <span className="flex-1 min-w-0 text-sm font-semibold truncate">
//       +91 9600593838
//     </span>
//   </a>

//   {/* Email — fix: allow truncation/wrap */}
//   <a
//     href="mailto:contact.velinfo@gmail.com"
//     className="group flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-slate-800 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:shadow-md transition min-w-0"
//     title="contact.velinfo@gmail.com"
//   >
//     <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600 shrink-0">
//       {/* icon */}
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
//     </span>
//     {/* small screens: ellipsis; md+: wrap nicely */}
//     <span className="flex-1 min-w-0 text-[13px] sm:text-sm font-semibold truncate md:whitespace-normal md:break-words">
//       contact.velinfo@gmail.com
//     </span>
//   </a>

//   {/* Map */}
//   <a
//     href="https://maps.app.goo.gl/hUTPZSHPgUJAKbu39"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-slate-800 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:shadow-md transition min-w-0"
//   >
//     <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
//       {/* icon */}
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
//     </span>
//     <span className="flex-1 min-w-0 text-sm font-semibold truncate">
//       View on Google Map
//     </span>
//   </a>
// </div>


//             {/* Address small print */}
//             <div className="mt-5 text-sm text-slate-600">
//               Vel Infotech Private Limited, 4/38, 2nd Main Rd, Kalaimagal Nagar, Ekkatuthangal, Chennai, Tamil Nadu 600032
//             </div>
//           </div>

//           {/* RIGHT: image card with gradient frame */}
//           <div className="relative">
//             <div
//               className="relative rounded-[28px] p-[2px] shadow-xl"
//               style={{
//                 background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.dark} 100%)`,
//               }}
//             >
//               <div className="rounded-[26px] overflow-hidden bg-white ring-1 ring-slate-200">
//                 <img
//                   src={UNSPLASH}
//                   alt="Friendly support team ready to help"
//                   className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover"
//                   loading="eager"
//                 />
//               </div>
//             </div>

//             {/* Floating badge */}
//             <div className="pointer-events-none absolute -bottom-4 left-4">
//               <div className="pointer-events-auto rounded-xl bg-white/90 backdrop-blur px-4 py-2 shadow-md ring-1 ring-slate-200">
//                 <p className="text-xs text-slate-600">Hours</p>
//                 <p className="text-sm font-semibold text-slate-900">Mon–Sat • 9:30 AM – 7:00 PM</p>
//               </div>
//             </div>

//             {/* Soft glow */}
//             <div
//               className="absolute inset-x-6 -bottom-8 h-10 blur-2xl rounded-full"
//               style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(0,91,172,0.35), transparent 70%)" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
