import { useState } from "react";
import axios from 'axios';

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/submit-data', formData);
      console.log('API response:', response.data);
      alert("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        designation: "",
        institute: "",
        country: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Message failed to send!");
    }
  };

  return (
    <div className="w-100vw max-h-full bg-white">
    <div className="w-[85%] mx-auto px-4 sm:px-6 p-6 bg-white mt-10">
      <h2 className="text-4xl font-bold mb-8 text-center bg-[#005BAC] bg-clip-text text-transparent tracking-tight">
        Contact Form
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-400 focus:border-[#005EB8] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="Enter your Designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-400 focus:border-[#005EB8] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-400 focus:border-[#005EB8] focus:outline-none"
              required
            >
              <option value="">Select your country</option>
              {[
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
                "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
                "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
                "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba",
                "Cyprus", "Czech Republic", "Denmark", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia",
                "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
                "Guatemala", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
                "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Laos", "Latvia", "Lebanon", "Libya",
                "Lithuania", "Luxembourg", "Madagascar", "Malaysia", "Maldives", "Mali", "Malta", "Mexico", "Moldova",
                "Monaco", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand",
                "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Peru",
                "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal",
                "Serbia", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka",
                "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago",
                "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
                "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
              ].map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-400 focus:border-[#005EB8] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Institute / Organization</label>
            <input
              type="text"
              name="institute"
              placeholder="Enter your Institute or Organization"
              value={formData.institute}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-400 focus:border-[#005EB8] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border-b border-gray-400 focus:border-[#005EB8] focus:outline-none"
              required
            />
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
            className="w-full p-2 border-b border-gray-400 focus:border-[#005EB8] focus:outline-none resize-none"
            required
          />
        </div>

        {/* Submit Button */}
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
