import React from 'react';

const ContactSection = () => {
  return (
    <section className="px-4 md:px-20 py-16 bg-gray-50" id='contact'>
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded-full"></div>
      </div>

      {/* Form */}
      <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-600 transition duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-600 transition duration-300"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-600 transition duration-300"
        />

        {/* Message */}
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none focus:border-blue-600 transition duration-300 resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[rgba(255,0,102,0.85)]  hover:bg-[rgba(119, 0, 255, 0.7)] 
 text-white py-3 rounded-md font-medium transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
