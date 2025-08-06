import React, { useEffect } from "react";
import { FaApple, FaGooglePlay, FaDownload, FaUserPlus, FaMobileAlt, FaSmile } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  { icon: <FaDownload className="text-blue-600 text-xl" />, text: "Download it for free" },
  { icon: <FaMobileAlt className="text-blue-600 text-xl" />, text: "Install app" },
  { icon: <FaUserPlus className="text-blue-600 text-xl" />, text: "Create profile" },
  { icon: <FaSmile className="text-blue-600 text-xl" />, text: "Enjoy this app" },
];

const AppInstallSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6 md:px-12 text-white"
      id="app"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left column */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Install Cryptohub app today</h2>
          <p className="mb-6 text-white/90">
            We offers users a fully operational long-term rental platform. It plans to leverages blockchain
            technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars tied up in rental.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* App buttons with fade-up */}
          <div className="flex flex-wrap gap-4">
            <button
              data-aos="fade-up"
              className="hover:scale-105 hover:bg-transparent hover:border-white border-2 border-transparent flex items-center gap-2 bg-[rgba(255,0,102,0.85)] text-white hover:bg-[rgba(255,0,102,0.7)] px-5 py-3 rounded-full font-semibold transition"
            >
              <FaApple className="text-xl" />
              App Store
            </button>
            <button
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex items-center gap-2 bg-[#7868e6] text-white px-5 py-3 rounded-full font-semibold hover:scale-105 transition hover:bg-white hover:text-black"
            >
              <FaGooglePlay className="text-xl" />
              Google Play
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://bestwpware.com/html/tf/cryptohub/assets/img/app-mockup.png"
            alt="App mockup"
            className="w-full max-w-sm mx-auto animate-bounce-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default AppInstallSection;
