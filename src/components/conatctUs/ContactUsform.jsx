import { useState } from "react";
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const { name, email, subject, phone } = formData;

  try {
    const response = await axios.post('/api/submit-data', {
      name,
      email,
      subject,
      phone
    });
    console.log('API response:', response.data);
    alert("Your message has been sent successfully!");
    setFormData({ name: '', email: '', subject: '', phone: '' });


    // Optionally reset the form or show a success message
  } catch (error) {
    console.error('Error submitting form:', error);
    alert(" message failed!");

    // Optionally show an error message
  }
};


  return (
    <>
    
    <div className="w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-0 p-6 bg-white rounded-lg mt-10 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.15),0_-8px_16px_-4px_rgba(0,0,0,0.1)]">

<h2 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-[#005BAC] to-[#003c6a] bg-clip-text text-transparent tracking-tight">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your Full Name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full max-w-sm mx-auto p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email Address"
          value={formData.email}
          onChange={handleChange}
          className="block w-full max-w-sm mx-auto p-2 border border-gray-300 rounded"
          required
        />
        
        <input
          type="tel"
          name="phone"
          placeholder="Enter your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="block w-full max-w-sm mx-auto p-2 border border-gray-300 rounded"
          required
        />
       <textarea
        id="subject"
        name="subject"
        placeholder="Message"
        value={formData.subject}
        onChange={handleChange}
        className="block w-full max-w-sm mx-auto p-2 border border-gray-300 rounded h-40 resize-none"
        required
/>

        
        <button
          type="submit"
          className="block w-full max-w-sm mx-auto bg-[#005EB8] text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
    

  </>);
}

export default ContactForm;
