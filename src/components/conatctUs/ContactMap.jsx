// // src/components/MapEmbed.jsx
// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

// const BRAND = {
//   primary: "#005BAC",
//   dark: "#0B2A4A",
// };

// export default function MapEmbed() {
//   const [loaded, setLoaded] = useState(false);

//   const MAP_SRC =
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.92581234893936!2d80.20851588050218!3d13.047572176799486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa605f31749ae702b%3A0xb08e4a750195c346!2sVel%20Infotech%20Software%20Training%20and%20Placement!5e0!3m2!1sen!2sin!4v1753702847607!5m2!1sen!2sin";

//   const GMAPS_LINK =
//     "https://maps.app.goo.gl/hUTPZSHPgUJAKbu39";

//   return (
//     <section className="w-full px-4">
//       {/* Header */}
//       <div className="mx-auto max-w-4xl text-center">
        
//         <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
//           Vel Infotech — Software Training & Placement
//         </h2>
//       </div>

//       {/* Map frame */}
//       <div className="mx-auto mt-5 max-w-4xl">
//         <div
//           className="relative rounded-[22px] p-[2px] shadow-lg"
//           style={{
//             background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.dark} 100%)`,
//           }}
//         >
//           <div className="relative rounded-[20px] overflow-hidden bg-white ring-1 ring-slate-200">
//             {/* Loading shimmer */}
//             {!loaded && (
//               <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 to-slate-200" />
//             )}

//             {/* Map */}
//             <iframe
//               title="Vel InfoTech Location"
//               src={MAP_SRC}
//               className="block w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px]"
//               style={{ border: 0 }}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               allowFullScreen
//               onLoad={() => setLoaded(true)}
//             />

//             {/* Overlay info card (bottom-left) */}
//             <div className="pointer-events-none absolute left-4 bottom-4">
//               <div className="pointer-events-auto rounded-xl bg-white/90 backdrop-blur px-4 py-3 shadow-md ring-1 ring-slate-200 max-w-[90%] sm:max-w-md">
//                 <div className="flex items-start gap-3">
//                   <div
//                     className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg"
//                     style={{ background: "#EEF5FF", color: BRAND.primary }}
//                   >
//                     <FaMapMarkerAlt />
//                   </div>
//                   <div className="text-sm">
//                     <p className="font-semibold text-slate-900">
//                       Vel Infotech Private Limited
//                     </p>
//                     <p className="text-slate-700">
//                       4/38, 2nd Main Rd, Kalaimagal Nagar, Ekkatuthangal,
//                       Chennai, Tamil Nadu 600032
//                     </p>
//                     <div className="mt-2 flex flex-wrap gap-2">
//                       <a
//                         href={GMAPS_LINK}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-[13px] font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
//                         aria-label="Open in Google Maps"
//                       >
//                         Open in Google Maps
//                         <FaExternalLinkAlt className="text-[11px]" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Small helper text */}
//         <p className="mx-auto mt-3 max-w-4xl text-center text-xs text-slate-500">
//           Tip: If the map doesn’t load in your network, use the button to open in Google Maps.
//         </p>
//       </div>
//     </section>
//   );
// }
