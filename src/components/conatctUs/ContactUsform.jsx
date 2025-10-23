// // ContactForm.jsx
// import { useState } from "react";
// import { ToastContainer, toast, Slide } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     phone: "",
//     designation: "",
//     institute: "",
//     country: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [submitting, setSubmitting] = useState(false);

//   // ===== helpers =====
//   const capFirst = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
//   const onlyLettersSpaces = (s) =>
//     s.replace(/[^A-Za-z ]+/g, "").replace(/\s{2,}/g, " ");
//   const instituteClean = (s) =>
//     s.replace(/[^A-Za-z0-9 .&-]+/g, "").replace(/\s{2,}/g, " ");
//   const digits10 = (s) => s.replace(/\D+/g, "").slice(0, 10);

//   // ===== validation =====
//   const validateField = (name, value) => {
//     const v = (value ?? "").trim();

//     switch (name) {
//       case "name":
//         if (!v) return "Full name is required.";
//         if (!/^[A-Za-z ]+$/.test(v)) return "Use letters and spaces only.";
//         if (v.length < 2) return "Enter at least 2 characters.";
//         return null;
//       case "email":
//         if (!v) return "Email is required.";
//         if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v))
//           return "Enter a valid email with domain (e.g., example@gmail.com).";
//         return null;
//       case "phone":
//         if (!v) return "Phone number is required.";
//         if (!/^\d{10}$/.test(v)) return "Enter a valid 10-digit number.";
//         return null;
//       case "designation":
//         if (!v) return "Designation is required.";
//         if (!/^[A-Za-z ]+$/.test(v)) return "Use letters and spaces only.";
//         if (v.length < 2) return "Enter at least 2 characters.";
//         return null;
//       case "institute":
//         if (!v) return "Institute / Organization is required.";
//         if (v.length < 2) return "Enter at least 2 characters.";
//         return null;
//       case "country":
//         if (!v) return "Please select your country.";
//         return null;
//       case "subject":
//         if (!v) return "Message is required.";
//         if (v.length > 300) return "Max 300 characters.";
//         return null;
//       default:
//         return null;
//     }
//   };

//   const validateAll = (data) => {
//     const fields = [
//       "name",
//       "email",
//       "phone",
//       "designation",
//       "institute",
//       "country",
//       "subject",
//     ];
//     const next = {};
//     fields.forEach((f) => {
//       const err = validateField(f, data[f]);
//       if (err) next[f] = err;
//     });
//     setErrors(next);
//     return next;
//   };

//   // ===== input handlers =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let newVal = value;

//     if (name === "name") newVal = capFirst(onlyLettersSpaces(value));
//     if (name === "designation") newVal = capFirst(onlyLettersSpaces(value));
//     if (name === "institute") newVal = capFirst(instituteClean(value));
//     if (name === "phone") newVal = digits10(value);
//     if (name === "subject") {
//       newVal = value.length ? value[0].toUpperCase() + value.slice(1) : value;
//       newVal = newVal.slice(0, 300);
//     }

//     setFormData((prev) => ({ ...prev, [name]: newVal }));

//     const msg = validateField(name, newVal);
//     setErrors((prev) => {
//       const next = { ...prev };
//       if (msg) next[name] = msg;
//       else delete next[name];
//       return next;
//     });
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched((t) => ({ ...t, [name]: true }));
//     const msg = validateField(name, formData[name]);
//     setErrors((prev) => ({ ...prev, ...(msg ? { [name]: msg } : { [name]: undefined }) }));
//   };

//   // ===== toast helpers =====
//   const tBase = {
//     position: "top-center",
//     autoClose: 2200,
//     hideProgressBar: true,
//     closeButton: false,
//     draggable: false,
//     pauseOnHover: true,
//     pauseOnFocusLoss: false,
//     transition: Slide,
//     theme: "colored",
//     style: {
//       borderRadius: "12px",
//       padding: "10px 16px",
//       minWidth: "280px",
//       maxWidth: "360px",
//       lineHeight: 1.25,
//       fontSize: "14px",
//       fontWeight: 600,
//       boxShadow: "0 10px 24px rgba(0,0,0,.18)",
//       color: "#fff",
//     },
//   };
//   const toastSuccess = (m) =>
//     toast(m, { ...tBase, style: { ...tBase.style, background: "#059669" } });
//   const toastError = (m) =>
//     toast(m, { ...tBase, style: { ...tBase.style, background: "#DC2626" } });

//   // ===== submit =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setTouched({
//       name: true,
//       email: true,
//       subject: true,
//       phone: true,
//       designation: true,
//       institute: true,
//       country: true,
//     });

//     const errs = validateAll(formData);
//     if (Object.keys(errs).length) {
//       const order = ["name", "email", "phone", "designation", "institute", "country", "subject"];
//       const first = order.find((k) => errs[k]);
//       toastError(errs[first] || "Please fix the highlighted fields.");
//       return;
//     }

//     try {
//       setSubmitting(true);
//       // await axios.post('/api/contact', formData)
//       toastSuccess("Your message has been sent successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         phone: "",
//         designation: "",
//         institute: "",
//         country: "",
//       });
//       setErrors({});
//       setTouched({});
//     } catch {
//       toastError("Something went wrong. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // ===== UI helpers =====
//   const fieldRing = (key) =>
//     touched[key] && errors[key]
//       ? "ring-red-500 focus:ring-red-500"
//       : "ring-slate-300 focus:ring-[#005BAC]";

//   const labelColor = (key) =>
//     touched[key] && errors[key] ? "text-red-600" : "text-slate-600";

//   // Floating label base: lifts on focus OR when the field has value (not placeholder-shown)
//   const floatLabel = (key) =>
//     `absolute left-10 top-3 text-[13px] pointer-events-none transition-all
//      peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-slate-400
//      peer-focus:top-1 peer-focus:text-[12px]
//      peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-[12px] ${labelColor(key)}`;

//   const iconSpan = "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none";

//   const Icons = {
//     user: (
//       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14Z" />
//       </svg>
//     ),
//     mail: (
//       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
//       </svg>
//     ),
//     phone: (
//       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M21 16.5v3A1.5 1.5 0 0 1 19.35 21a18 18 0 0 1-7.86-2.81 17.6 17.6 0 0 1-5.41-5.41A18 18 0 0 1 3 4.65 1.5 1.5 0 0 1 4.49 3h3A1.5 1.5 0 0 1 9 4.28c.1.7.27 1.38.51 2.03.15.42.05.9-.27 1.22l-1.3 1.3a14.5 14.5 0 0 0 5.24 5.24l1.3-1.3c.32-.32.8-.42 1.22-.27.65.24 1.33.41 2.03.51A1.5 1.5 0 0 1 21 16.5Z" />
//       </svg>
//     ),
//     brief: (
//       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M10 4h4a2 2 0 0 1 2 2v2h4v12H4V8h4V6a2 2 0 0 1 2-2Zm4 4V6h-4v2h4Z" />
//       </svg>
//     ),
//     org: (
//       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M3 21h18v-2H3v2Zm2-4h14V5H5v12Zm2-2V7h10v8H7Z" />
//       </svg>
//     ),
//     globe: (
//       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm7.93 9h-3.08a15.64 15.64 0 0 0-1.31-5.06A8.023 8.023 0 0 1 19.93 11ZM8.46 6.94A13.48 13.48 0 0 0 7.15 11H4.07a8.023 8.023 0 0 1 4.39-5.06ZM4.07 13h3.08a13.48 13.48 0 0 0 1.31 4.06A8.023 8.023 0 0 1 4.07 13Zm7.93 7a13.68 13.68 0 0 1-2.4-6H14.4a13.68 13.68 0 0 1-2.4 6Zm-2.4-8a13.68 13.68 0 0 1 2.4-6 13.68 13.68 0 0 1 2.4 6h-4.8ZM14.85 17a13.48 13.48 0 0 0 1.31-4h3.08a8.023 8.023 0 0 1-4.39 4Z" />
//       </svg>
//     ),
//     message: (
//       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M4 4h16v12H7l-3 3V4Z" />
//       </svg>
//     ),
//   };

//   return (
//     <section
//       className="w-full px-4 py-10"
//       style={{
//         background:
//           "radial-gradient(900px 360px at 10% -10%, rgba(0,91,172,0.10), transparent 60%), radial-gradient(700px 320px at 95% 0%, rgba(255,88,0,0.06), transparent 55%), linear-gradient(180deg, #fff 0%, #F7FAFF 100%)",
//       }}
//     >
//       <ToastContainer newestOnTop />

//       <div className="mx-auto max-w-5xl">
//         <div
//           className="rounded-[26px] p-[2px] shadow-xl"
//           style={{ background: "linear-gradient(135deg, #005BAC 0%, #0B2A4A 100%)" }}
//         >
//           <div className="rounded-[24px] bg-white ring-1 ring-slate-200 overflow-hidden">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-[#F4F8FF] to-white px-6 sm:px-10 py-8">
//               <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#005BAC]">
//                 Contact Form
//               </h2>
//               <p className="mt-1 text-slate-600">
//                 Tell us a bit about you and what you need—we’ll get back within one business day.
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} noValidate className="px-6 sm:px-10 py-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       placeholder=" "
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       aria-invalid={!!errors.name}
//                       className={`peer w-full rounded-xl bg-white px-10 py-3 text-[15px] leading-6 ring-1 outline-none transition placeholder-transparent ${fieldRing(
//                         "name"
//                       )}`}
//                       required
//                     />
//                     <span className={iconSpan}>{Icons.user}</span>
//                     <label htmlFor="name" className={floatLabel("name")}>
//                       Full Name
//                     </label>
//                   </div>
//                   {touched.name && errors.name && (
//                     <p className="mt-1 text-[12px] text-red-600">{errors.name}</p>
//                   )}
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       placeholder=" "
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       aria-invalid={!!errors.email}
//                       className={`peer w-full rounded-xl bg-white px-10 py-3 text-[15px] leading-6 ring-1 outline-none transition placeholder-transparent ${fieldRing(
//                         "email"
//                       )}`}
//                       required
//                     />
//                     <span className={iconSpan}>{Icons.mail}</span>
//                     <label htmlFor="email" className={floatLabel("email")}>
//                       Email Address
//                     </label>
//                   </div>
//                   {touched.email && errors.email && (
//                     <p className="mt-1 text-[12px] text-red-600">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <input
//                       type="tel"
//                       name="phone"
//                       id="phone"
//                       inputMode="numeric"
//                       pattern="\d*"
//                       placeholder=" "
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       aria-invalid={!!errors.phone}
//                       className={`peer w-full rounded-xl bg-white px-10 py-3 text-[15px] leading-6 ring-1 outline-none transition placeholder-transparent ${fieldRing(
//                         "phone"
//                       )}`}
//                       required
//                     />
//                     <span className={iconSpan}>{Icons.phone}</span>
//                     <label htmlFor="phone" className={floatLabel("phone")}>
//                       Phone Number
//                     </label>
//                   </div>
//                   {touched.phone && errors.phone && (
//                     <p className="mt-1 text-[12px] text-red-600">{errors.phone}</p>
//                   )}
//                 </div>

//                 {/* Designation */}
//                 <div>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="designation"
//                       id="designation"
//                       placeholder=" "
//                       value={formData.designation}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       aria-invalid={!!errors.designation}
//                       className={`peer w-full rounded-xl bg-white px-10 py-3 text-[15px] leading-6 ring-1 outline-none transition placeholder-transparent ${fieldRing(
//                         "designation"
//                       )}`}
//                       required
//                     />
//                     <span className={iconSpan}>{Icons.brief}</span>
//                     <label htmlFor="designation" className={floatLabel("designation")}>
//                       Designation
//                     </label>
//                   </div>
//                   {touched.designation && errors.designation && (
//                     <p className="mt-1 text-[12px] text-red-600">{errors.designation}</p>
//                   )}
//                 </div>

//                 {/* Institute */}
//                 <div>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="institute"
//                       id="institute"
//                       placeholder=" "
//                       value={formData.institute}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       aria-invalid={!!errors.institute}
//                       className={`peer w-full rounded-xl bg-white px-10 py-3 text-[15px] leading-6 ring-1 outline-none transition placeholder-transparent ${fieldRing(
//                         "institute"
//                       )}`}
//                       required
//                     />
//                     <span className={iconSpan}>{Icons.org}</span>
//                     <label htmlFor="institute" className={floatLabel("institute")}>
//                       Institute / Organization
//                     </label>
//                   </div>
//                   {touched.institute && errors.institute && (
//                     <p className="mt-1 text-[12px] text-red-600">{errors.institute}</p>
//                   )}
//                 </div>

//                 {/* Country (select needs a different trick) */}
//                 <div>
//                   <div className="relative">
//                     <select
//                       name="country"
//                       id="country"
//                       value={formData.country}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       aria-invalid={!!errors.country}
//                       className={`peer w-full appearance-none rounded-xl bg-white px-10 py-3 text-[15px] leading-6 ring-1 outline-none transition ${fieldRing(
//                         "country"
//                       )}`}
//                       required
//                     >
//                       <option value="" hidden></option>
//                       {[
//                         "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria",
//                         "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
//                         "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
//                         "Cambodia","Cameroon","Canada","Chile","China","Colombia","Congo","Costa Rica","Croatia","Cuba",
//                         "Cyprus","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia",
//                         "Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
//                         "Guatemala","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
//                         "Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Laos","Latvia","Lebanon","Libya",
//                         "Lithuania","Luxembourg","Madagascar","Malaysia","Maldives","Mali","Malta","Mexico","Moldova",
//                         "Monaco","Mongolia","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand",
//                         "Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Panama","Paraguay","Peru",
//                         "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal",
//                         "Serbia","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","Spain","Sri Lanka",
//                         "Sudan","Sweden","Switzerland","Syria","Taiwan","Tanzania","Thailand","Togo","Trinidad and Tobago",
//                         "Tunisia","Turkey","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States",
//                         "Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
//                       ].map((c) => (
//                         <option key={c} value={c}>{c}</option>
//                       ))}
//                     </select>
//                     <span className={iconSpan}>{Icons.globe}</span>
//                     {/* For <select>, Tailwind's placeholder-shown doesn't apply, so use an arbitrary variant */}
//                     <label
//                       htmlFor="country"
//                       className={`absolute left-10 top-3 text-[13px] pointer-events-none transition-all
//                         peer-focus:top-1 peer-focus:text-[12px]
//                         ${formData.country ? "top-1 text-[12px]" : "peer-[:where(&)]:top-3"}
//                         ${labelColor("country")}`}
//                     >
//                       Country
//                     </label>
//                     <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
//                       ▾
//                     </span>
//                   </div>
//                   {touched.country && errors.country && (
//                     <p className="mt-1 text-[12px] text-red-600">{errors.country}</p>
//                   )}
//                 </div>

//                 {/* Message */}
//                 <div className="sm:col-span-2">
//                   <div className="relative">
//                     <textarea
//                       name="subject"
//                       id="subject"
//                       placeholder=" "
//                       value={formData.subject}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       aria-invalid={!!errors.subject}
//                       rows={4}
//                       className={`peer w-full rounded-xl bg-white px-10 py-3 text-[15px] leading-6 ring-1 outline-none transition placeholder-transparent resize-none ${fieldRing(
//                         "subject"
//                       )}`}
//                       required
//                     />
//                     <span className="absolute left-3 top-3 text-slate-400 pointer-events-none">
//                       {Icons.message}
//                     </span>
//                     <label htmlFor="subject" className={floatLabel("subject")}>
//                       Message
//                     </label>
//                     <div className="mt-1 flex justify-between text-[12px] text-slate-500">
//                       <span>First letter auto-caps</span>
//                       <span>{formData.subject.length}/300</span>
//                     </div>
//                   </div>
//                   {touched.subject && errors.subject && (
//                     <p className="mt-1 text-[12px] text-red-600">{errors.subject}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Submit */}
//               <div className="mt-8">
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="w-full inline-flex items-center justify-center rounded-xl bg-[#005BAC] px-5 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005BAC] disabled:opacity-60 disabled:cursor-not-allowed"
//                 >
//                   {submitting ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;
