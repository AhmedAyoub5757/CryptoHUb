import React, { useState, useEffect } from "react";

const CountdownCard = () => {
  const [countdown, setCountdown] = useState({
    days: 542,
    hours: 12,
    minutes: 46,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(timer);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-3xl shadow-2xl text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">
        1st stage ends in:
      </h1>
      <div className="bg-[#7857ff] text-white rounded-full p-4 md:p-6 mb-8 w-128">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-bold">
              {String(countdown.days).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base opacity-75">Days</span>
          </div>
          <div className="h-16 w-px bg-white opacity-20 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-bold">
              {String(countdown.hours).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base opacity-75">Hours</span>
          </div>
          <div className="h-16 w-px bg-white opacity-20"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-bold">
              {String(countdown.minutes).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base opacity-75">Minutes</span>
          </div>
          <div className="h-16 w-px bg-white opacity-20"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-bold">
              {String(countdown.seconds).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base opacity-75">Seconds</span>
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#ff4081] to-[#ff6384] text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-12 rounded-full shadow-lg hover:from-[#ff6384] hover:to-[#ff4081] transition-all duration-300">
        Buy Token Now
      </button>
      <div className="flex justify-center space-x-6 mt-8">
        <img
          src="https://placehold.co/60x40/fff/000?text=VISA"
          alt="Visa"
          className="w-16 h-10 rounded-lg shadow-md"
        />
        <img
          src="https://placehold.co/60x40/fff/000?text=MASTERCARD"
          alt="MasterCard"
          className="w-16 h-10 rounded-lg shadow-md"
        />
        <img
          src="https://placehold.co/60x40/fff/000?text=BTC"
          alt="Bitcoin"
          className="w-16 h-10 rounded-lg shadow-md"
        />
        <img
          src="https://placehold.co/60x40/fff/000?text=ETH"
          alt="Ethereum"
          className="w-16 h-10 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header
      className="relative px-4 md:px-12 flex items-center "
      style={{
        backgroundImage:
          "url('https://bestwpware.com/html/tf/cryptohub/assets/img/hero.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "900px",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 ml-8 mr-8 items-center w-full">
        {/* Left Side */}
        <div className="text-white text-center md:text-left px-8 mb-10 ">
          <h1 className="text-6xl md:text-5xl font-bold mb-4">
            The fastest way to follow markets.
          </h1>
          <p className="text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            We offers users a fully operational long-term rental platform. It
            plans to leverages blockchain technology to ensure seamless rental
            experience.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <button className="bg-[rgba(255,0,102,0.85)] text-white font-semibold px-6 py-3 rounded-full transition duration-300 border-2 border-transparent hover:bg-transparent hover:border-white">
              Whitepaper
            </button>
            <button className="bg-[#7868e6] text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Replaced with CountdownCard */}
        <CountdownCard />
      </div>
    </header>
  );
};

export default Header;
