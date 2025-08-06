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
    <div className="w-full max-w-md md:max-w-sm mx-auto bg-white p-2 md:p-6 rounded-2xl shadow-2xl text-center min-h-[380px] flex flex-col justify-between">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">1st stage ends in:</h1>
      <div className="bg-[#7857ff] text-white rounded-full p-2 md:p-4 mb-1">
        <div className="flex justify-around items-center">
          {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
            <React.Fragment key={unit}>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold">
                  {String(countdown[unit]).padStart(2, "0")}
                </span>
                <span className="text-xs sm:text-sm opacity-75">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </span>
              </div>
              {idx < 3 && (
                <div className="h-14 w-px bg-white opacity-20 hidden sm:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#ff4081] to-[#ff6384] text-white text-base sm:text-lg font-bold py-2 sm:py-3 px-8 rounded-full shadow-lg hover:from-[#ff6384] hover:to-[#ff4081] transition-all duration-300 mb-2">
        Buy Token Now
      </button>
      <div className="flex justify-center space-x-4 sm:space-x-6 flex-wrap gap-3">
        <img src="https://bestwpware.com/html/tf/cryptohub/assets/img/visa.png" alt="Visa" className="w-[40px] h-8 rounded-lg shadow-md cursor-pointer" />
        <img src="https://bestwpware.com/html/tf/cryptohub/assets/img/mastercard.png" alt="MasterCard" className="w-[40px] h-8 rounded-lg shadow-md cursor-pointer" />
        <img src="https://bestwpware.com/html/tf/cryptohub/assets/img/bitcoin.png" alt="Bitcoin" className="w-[40px] h-8 rounded-lg shadow-md cursor-pointer" />
        <img src="https://bestwpware.com/html/tf/cryptohub/assets/img/ethereum.png" alt="Ethereum" className="w-[40px] h-8 rounded-lg shadow-md cursor-pointer" />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header
      className="relative flex items-center"
      style={{
        backgroundImage: "url('https://bestwpware.com/html/tf/cryptohub/assets/img/hero.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "900px",
        backgroundColor: "white",
      }}
      id="a"
    >
      {/* Centered container with equal side margins */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid md:grid-cols-2 gap-4 items-center w-full min-h-[900px]">
        {/* Left Side */}
        <div className="text-white text-center md:text-left flex flex-col justify-center">
          <h1
            className="font-bold"
            style={{
              color: "#fff",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: "62px",
            }}
          >
            The fastest way to follow markets.
          </h1>
          <p className="text-lg text-[16px] leading-relaxed max-w-lg mx-auto md:mx-0 mt-1">
            We offers users a fully operational long-term rental platform. It
            plans to leverages blockchain technology to ensure seamless rental
            experience.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
            <button className="bg-[rgba(255,0,102,0.85)] text-white font-semibold px-6 py-3 rounded-full transition duration-300 border-2 border-transparent hover:bg-transparent hover:border-white">
              Whitepaper
            </button>
            <button className="bg-[#7868e6] text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end items-center">
          <CountdownCard />
        </div>
      </div>
    </header>
  );
};

export default Header;
