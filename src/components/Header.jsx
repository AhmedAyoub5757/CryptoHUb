import React, { useEffect, useState } from "react";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const targetDate = new Date("2025-12-31T23:59:59");
    const now = new Date();
    const difference = targetDate - now;
    const totalSeconds = Math.max(0, Math.floor(difference / 1000));
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  }

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-16 pb-32 px-8 lg:px-24 overflow-hidden ">
      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Left Column */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            The fastest way to follow markets.
          </h1>
          <p className="mb-6 text-lg text-white/90">
            We offers users a fully operational long-term rental platform. It
            plans to leverages blockchain technology to ensure seamless rental
            experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[rgba(255,0,102,0.85)] text-white font-semibold px-6 py-3 rounded-full transition duration-300 border-2 border-transparent hover:bg-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Whitepaper
            </button>
            <button className="bg-[#7868e6] text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center text-black">
          <h2 className="text-2xl font-semibold mb-4">1st Stage Ends In:</h2>
          <div className="flex justify-center gap-4 mb-6">
            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-xl p-4 w-20 text-center"
              >
                <div className="text-2xl font-bold">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </div>
                <div className="text-xs uppercase mt-1">{unit}</div>
              </div>
            ))}
          </div>
          <button className="bg-[rgba(255,0,102,0.85)] text-white px-6 py-4 rounded-full hover:bg-[rgba(178, 23, 209, 0.7)] transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 font-semibold">
            Buy Token Now
          </button>
          <div className="flex justify-center items-center gap-4 text-2xl mt-4">
            <span>💳</span>
            <span>₿</span>
            <span>💰</span>
            <span>🏦</span>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,138.7C672,149,768,139,864,128C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Header;
