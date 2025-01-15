import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://invitationcardbackend.onrender.com/api/contact",
        formData
      );
      alert(response.data.success);
      setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    } catch (error) {
      alert(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="flex justify-center items-center">
              <div className="relative w-full h-96">
                <img
                  src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Contact Us"
                  className="w-full h-full rounded-lg object-cover"
                />
                <h1 className="absolute top-11 left-11 font-manrope text-white text-2xl font-bold">
                  Contact us
                </h1>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-indigo-600 font-manrope text-2xl font-semibold mb-11">
                Send Us A Message
              </h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 bg-transparent text-lg px-4 mb-10 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 bg-transparent text-lg px-4 mb-10 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 text-gray-700 bg-transparent text-lg px-4 mb-10 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Message"
              />
              <button
                type="submit"
                className="w-full h-12 bg-indigo-600 text-white text-base font-semibold rounded-full transition-all duration-700 hover:bg-indigo-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Contact;
