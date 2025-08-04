import React from "react";
import { FaPlay } from "react-icons/fa";

const PromoSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-24" id="promo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Display trends of cryptocurrency and other rapidly changing rates and numbers with Cryptohub template.
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
            It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars.
            <br /><br />
            We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars tied up in rental tenants deposits seamless rental.
          </p>

          <button className="inline-flex items-center gap-2 bg-[rgba(255,0,102,0.85)] hover:bg-[rgba(255,0,102,0.7)] 
          transition
          focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
          font-semibold text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            <FaPlay className="text-white" />
            Watch Video
          </button>
          
        </div>

        {/* Right Column */}
        <div className="relative">
          <img
            src="https://bestwpware.com/html/tf/cryptohub/assets/img/about2.png"
            alt="Crypto Trends"
            className="w-full max-w-md mx-auto animate-bounce-slow animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
