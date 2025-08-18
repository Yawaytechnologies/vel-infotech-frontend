import { useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    designation: "",
    institute: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // ===== helpers =====
  const capFirst = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
  const onlyLettersSpaces = (s) =>
    s.replace(/[^A-Za-z ]+/g, "").replace(/\s{2,}/g, " ");
  const instituteClean = (s) =>
    s.replace(/[^A-Za-z0-9 .&-]+/g, "").replace(/\s{2,}/g, " ");
  const digits10 = (s) => s.replace(/\D+/g, "").slice(0, 10);

  // ===== validation =====
  const validateField = (name, value) => {
    const v = (value ?? "").trim();

    switch (name) {
      case "name":
        if (!v) return "Full name is required.";
        if (!/^[A-Za-z ]+$/.test(v)) return "Use letters and spaces only.";
        if (v.length < 2) return "Enter at least 2 characters.";
        return null;

      case "email":
        if (!v) return "Email is required.";
        // must include domain like .com/.org, letters-only or letters+numbers ok
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v))
          return "Enter a valid email with domain (e.g., example@gmail.com).";
        return null;

      case "phone":
        if (!v) return "Phone number is required.";
        if (!/^\d{10}$/.test(v)) return "Enter a valid 10-digit number.";
        return null;

      case "designation":
        if (!v) return "Designation is required.";
        if (!/^[A-Za-z ]+$/.test(v)) return "Use letters and spaces only.";
        if (v.length < 2) return "Enter at least 2 characters.";
        return null;

      case "institute":
        if (!v) return "Institute / Organization is required.";
        if (v.length < 2) return "Enter at least 2 characters.";
        return null;

      case "country":
        if (!v) return "Please select your country.";
        return null;

      case "subject":
        if (!v) return "Message is required.";
        if (v.length > 300) return "Max 300 characters.";
        return null;

      default:
        return null;
    }
  };

  const validateAll = (data) => {
    const fields = [
      "name",
      "email",
      "phone",
      "designation",
      "institute",
      "country",
      "subject",
    ];
    const next = {};
    fields.forEach((f) => {
      const err = validateField(f, data[f]);
      if (err) next[f] = err;
    });
    setErrors(next);
    return next;
  };

  // ===== input handlers =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newVal = value;

    if (name === "name") newVal = capFirst(onlyLettersSpaces(value));
    if (name === "designation") newVal = capFirst(onlyLettersSpaces(value));
    if (name === "institute") newVal = capFirst(instituteClean(value));
    if (name === "phone") newVal = digits10(value);
    if (name === "subject") {
      newVal = value.length ? value[0].toUpperCase() + value.slice(1) : value;
      newVal = newVal.slice(0, 300);
    }

    setFormData((prev) => ({ ...prev, [name]: newVal }));

    const msg = validateField(name, newVal);
    setErrors((prev) => {
      const next = { ...prev };
      if (msg) next[name] = msg;
      else delete next[name];
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const msg = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, ...(msg ? { [name]: msg } : { [name]: undefined }) }));
  };

  // ===== toast helpers (top-center, smooth, no close icon/progress) =====
  const tBase = {
    position: "top-center",
    autoClose: 2200,
    hideProgressBar: true,
    closeButton: false,
    draggable: false,
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    transition: Slide,
    theme: "colored",
    style: {
      borderRadius: "12px",
      padding: "10px 16px",
      minWidth: "280px",
      maxWidth: "360px",
      lineHeight: 1.25,
      fontSize: "14px",
      fontWeight: 600,
      boxShadow: "0 10px 24px rgba(0,0,0,.18)",
      color: "#fff",
    },
  };
  const toastSuccess = (m) =>
    toast(m, { ...tBase, style: { ...tBase.style, background: "#34d399", color: "#fff" } });
  const toastError = (m) =>
    toast(m, { ...tBase, style: { ...tBase.style, background: "#ef4444", color: "#fff" } });

  // ===== submit =====
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      phone: true,
      designation: true,
      institute: true,
      country: true,
    });

    const errs = validateAll(formData);
    if (Object.keys(errs).length) {
      // surface first error via toast
      const order = ["name", "email", "phone", "designation", "institute", "country", "subject"];
      const first = order.find((k) => errs[k]);
      toastError(errs[first] || "Please fix the highlighted fields.");
      return;
    }

    // Submit here (e.g., axios post). For now, just show toast:
    // await axios.post('/api/submit-data', formData)
    toastSuccess("Your message has been sent successfully!");

    // reset
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      designation: "",
      institute: "",
      country: "",
    });
    setErrors({});
    setTouched({});
  };

  // ===== UI classes =====
  const baseInput = "w-full p-2 border-b focus:outline-none transition-colors";
  const ok = "border-gray-400 focus:border-[#005EB8]";
  const bad = "border-red-500 focus:border-red-500";
  const help = "mt-1 text-[12px] text-red-600";

  return (
    <div className="w-100vw max-h-full bg-white">
      {/* Toasts pinned to top */}
      <ToastContainer newestOnTop />

      <div className="w-[85%] mx-auto px-4 sm:px-6 p-6 bg-white mt-10">
        <h2 className="text-4xl font-bold mb-8 text-center bg-[#005BAC] bg-clip-text text-transparent tracking-tight">
          Contact Form
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit} noValidate>
          {/* Left Column */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Full Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.name}
                className={`${baseInput} ${touched.name && errors.name ? bad : ok}`}
                required
              />
              {touched.name && errors.name && <p className={help}>{errors.name}</p>}
            </div>

            {/* Designation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="Enter your Designation"
                value={formData.designation}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.designation}
                className={`${baseInput} ${touched.designation && errors.designation ? bad : ok}`}
                required
              />
              {touched.designation && errors.designation && <p className={help}>{errors.designation}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.country}
                className={`${baseInput} ${touched.country && errors.country ? bad : ok}`}
                required
              >
                <option value="">Select your country</option>
                {[
                  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria",
                  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
                  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
                  "Cambodia","Cameroon","Canada","Chile","China","Colombia","Congo","Costa Rica","Croatia","Cuba",
                  "Cyprus","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia",
                  "Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
                  "Guatemala","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
                  "Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Laos","Latvia","Lebanon","Libya",
                  "Lithuania","Luxembourg","Madagascar","Malaysia","Maldives","Mali","Malta","Mexico","Moldova",
                  "Monaco","Mongolia","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand",
                  "Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Panama","Paraguay","Peru",
                  "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal",
                  "Serbia","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","Spain","Sri Lanka",
                  "Sudan","Sweden","Switzerland","Syria","Taiwan","Tanzania","Thailand","Togo","Trinidad and Tobago",
                  "Tunisia","Turkey","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States",
                  "Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
                ].map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {touched.country && errors.country && <p className={help}>{errors.country}</p>}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.email}
                className={`${baseInput} ${touched.email && errors.email ? bad : ok}`}
                required
              />
              {touched.email && errors.email && <p className={help}>{errors.email}</p>}
            </div>

            {/* Institute */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institute / Organization</label>
              <input
                type="text"
                name="institute"
                placeholder="Enter your Institute or Organization"
                value={formData.institute}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.institute}
                className={`${baseInput} ${touched.institute && errors.institute ? bad : ok}`}
                required
              />
              {touched.institute && errors.institute && <p className={help}>{errors.institute}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                pattern="\d*"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.phone}
                className={`${baseInput} ${touched.phone && errors.phone ? bad : ok}`}
                required
              />
              {touched.phone && errors.phone && <p className={help}>{errors.phone}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="subject"
              placeholder="Message"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.subject}
              className={`w-full p-2 border-b focus:outline-none resize-none transition-colors ${
                touched.subject && errors.subject
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-400 focus:border-[#005EB8]"
              }`}
              rows={4}
              required
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>First letter auto-caps</span>
              <span>{formData.subject.length}/300</span>
            </div>
            {touched.subject && errors.subject && <p className={help}>{errors.subject}</p>}
          </div>

          {/* Submit */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#005EB8] text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
