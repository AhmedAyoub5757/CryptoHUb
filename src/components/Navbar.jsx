import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 ${
        scrolled ? "bg-[#7868e6] shadow-md" : "bg-transparent"
      } text-white py-4`}
    >
      {/* Centered container with max-width */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex items-center justify-between">
        {/* Left side */}
        <div className="text-2xl font-bold cursor-pointer">CryptoHub</div>

        {/* Right side */}
        <ul className="hidden md:flex items-center gap-6 relative">
          {/* Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer select-none"><a href="#a">Home ▼</a></span>
            <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-purple-200 text-black rounded shadow-md w-36 z-50">
              <li className="px-4 py-2 cursor-pointer text-white bg-[#a586dd]">Style 1</li>
              <li className="px-4 py-2 cursor-pointer text-white bg-[#a586dd]">Style 2</li>
              <li className="px-4 py-2 cursor-pointer text-white bg-[#a586dd]">Style 3</li>
            </ul>
          </li>

          {/* Static items */}
          <li className="cursor-pointer"><a href="#promo">About</a></li>
          <li className="cursor-pointer"><a href="#presale">Token Sale</a></li>
          <li className="cursor-pointer"><a href="#roadmap">Roadmap</a></li>
          <li className="cursor-pointer"><a href="#app">App</a></li>
          <li className="cursor-pointer"><a href="#team">Team</a></li>
          <li className="cursor-pointer"><a href="#faq">Faq</a></li>
          <li className="cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden cursor-pointer">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
