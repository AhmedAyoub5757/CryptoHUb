import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MapSection = () => {
  return (
    <section className="relative w-full mt-16">
      {/* Embedded Map */}
      <div className="w-full h-[500px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.031021593726!2d74.3375178517566!3d31.520370124370203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd29c94327%3A0x9f3e93a8d2f75a70!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1660169602101!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Overlapping Cards */}
      <div className="absolute inset-x-0 -bottom-20 flex justify-center gap-6 flex-wrap px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-lg shadow-purple-400/30 rounded-xl p-8 w-80 text-center relative z-10">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white rounded-full p-5 shadow-lg shadow-purple-400/30">
            <FaPhoneAlt size={24} />
          </div>
          <h4 className="mt-8 font-semibold text-lg">Phone</h4>
          <p className="text-gray-600 mt-2">+1 (234) 567-890</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg shadow-purple-400/30 rounded-xl p-8 w-80 text-center relative z-10">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white rounded-full p-5 shadow-lg shadow-purple-400/30">
            <FaEnvelope size={24} />
          </div>
          <h4 className="mt-8 font-semibold text-lg">Email</h4>
          <p className="text-gray-600 mt-2">support@cryptohub.com</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg shadow-purple-400/30 rounded-xl p-8 w-80 text-center relative z-10">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white rounded-full p-5 shadow-lg shadow-purple-400/30">
            <FaMapMarkerAlt size={24} />
          </div>
          <h4 className="mt-8 font-semibold text-lg">Address</h4>
          <p className="text-gray-600 mt-2">123 Crypto Street, Blockchain City</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
