// // ContactInfo.jsx
// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const BRAND = {
//   primary: "#005BAC", // Vel blue
//   accent: "#FF5800",  // Vel orange (used subtly)
//   surface: "#F4F8FF",
// };

// export default function ContactInfo() {
//   return (
//     <section
//       className="w-full px-4 py-12"
//       style={{
//         background:
//           "radial-gradient(900px 360px at 10% -10%, rgba(0,91,172,0.10), transparent 60%), radial-gradient(700px 320px at 95% 0%, rgba(255,88,0,0.06), transparent 55%), linear-gradient(180deg, #fff 0%, #F7FAFF 100%)",
//       }}
//     >
//       {/* Divider + Title */}
//       <div className="mx-auto max-w-6xl">
//         <div className="relative mx-auto mb-6 h-[3px] w-40 overflow-hidden rounded-full">
//           <div
//             className="h-full w-full"
//             style={{
//               background:
//                 "linear-gradient(90deg, rgba(0,91,172,0), rgba(0,91,172,0.9), rgba(0,91,172,0))",
//             }}
//           />
//         </div>

//         <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight"
//             style={{ color: BRAND.primary }}>
//           Reach Us Directly
//         </h1>
//       </div>

//       {/* Cards */}
//       <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
//         {/* Phone */}
//         <div className="group relative rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
//           <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
//                style={{ background: BRAND.surface, color: BRAND.primary }}>
//             <FaPhoneAlt className="text-2xl" />
//           </div>

//           <h2 className="text-xl font-bold text-slate-900 mb-2">Phone</h2>
//           <p className="text-slate-600">Please call us and we will be happy to assist you.</p>
//           <p className="text-slate-600">We work with you, not for you.</p>

//           <p className="mt-4 font-bold text-slate-900">
//             <a
//               href="tel:7667662428"
//               className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 transition focus:outline-none focus:ring-2"
//               style={{ color: BRAND.primary, background: "#EEF5FF" }}
//               aria-label="+91 9600593838"
//             >
//               +91 9600593838
//             </a>
//           </p>

//           {/* Accent ring on hover */}
//           <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-offset-0 transition group-hover:ring-2"
//                style={{ ringColor: BRAND.primary }} />
//         </div>

//         {/* Email */}
//         <div className="group relative rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
//           <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
//                style={{ background: "rgba(255,88,0,0.08)", color: BRAND.accent }}>
//             <FaEnvelope className="text-2xl" />
//           </div>

//           <h2 className="text-xl font-bold text-slate-900 mb-2">Email</h2>
//           <p className="text-slate-600">Please email contact form and we will be happy to assist you.</p>
//           <p className="text-slate-600">We work with you, not for you.</p>

//           <p className="mt-4 font-bold text-slate-900">
//             <a
//               href="mailto:info@velinfotech.com"
//               className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 transition focus:outline-none focus:ring-2"
//               style={{ color: BRAND.primary, background: "#EEF5FF" }}
//               aria-label="contact.velinfo@gmail.com"
//             >
//               contact.velinfo@gmail.com
//             </a>
//           </p>

//           <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-offset-0 transition group-hover:ring-2"
//                style={{ ringColor: BRAND.primary }} />
//         </div>

//         {/* Location */}
//         <div className="group relative rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
//           <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
//                style={{ background: "rgba(255,193,7,0.12)", color: "#E0A100" }}>
//             <FaMapMarkerAlt className="text-2xl" />
//           </div>

//           <h2 className="text-xl font-bold text-slate-900 mb-2">Location</h2>
//           <p className="text-slate-600">Vel Infotech Private Limited</p>
//           <p className="text-slate-600">4/38, 2nd Main Rd, Kalaimagal Nagar</p>
//           <p className="text-slate-600">Ekkatuthangal, Chennai, Tamil Nadu 600032</p>

//           <p className="mt-4 font-bold text-slate-900 underline">
//             <a
//               href="https://maps.app.goo.gl/hUTPZSHPgUJAKbu39"
//               className="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 transition focus:outline-none focus:ring-2"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: BRAND.primary, textDecorationColor: BRAND.primary }}
//             >
//               View On Google Map
//             </a>
//           </p>

//           <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-offset-0 transition group-hover:ring-2"
//                style={{ ringColor: BRAND.primary }} />
//         </div>
//       </div>
//     </section>
//   );
// }
