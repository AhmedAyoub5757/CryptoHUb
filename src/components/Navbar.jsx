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
      } text-white px-12 lg:px-24 py-4 flex items-center justify-between`}
    >
      {/* Left side */}
      <div className="text-2xl font-bold">CryptoHub</div>

      {/* Right side */}
      <ul className="flex items-center gap-6 relative">
        {/* Dropdown */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-purple-900 transition">
            Home ▼
          </span>
          <ul className="absolute top-full left-0 mt-2 hidden group-hover:block bg-purple-100 text-black rounded shadow-md w-36 z-50">
            <li className="px-4 py-2 hover:bg-purple-200 cursor-pointer">Style 1</li>
            <li className="px-4 py-2 hover:bg-purple-200 cursor-pointer">Style 2</li>
            <li className="px-4 py-2 hover:bg-purple-200 cursor-pointer">Style 3</li>
          </ul>
        </li>

        {/* Static items */}
        <li className="hover:text-purple-900 transition"><a href="#promo">About</a></li>
        <li className="hover:text-purple-900 transition"><a href="#presale">Token Sale</a></li>
        <li className="hover:text-purple-900 transition"><a href="#roadmap">Roadmap</a></li>
        <li className="hover:text-purple-900 transition"><a href="#app">App</a></li>
        <li className="hover:text-purple-900 transition"><a href="#team">Team</a></li>
        <li className="hover:text-purple-900 transition"><a href="#faq">Faq</a></li>
        <li className="hover:text-purple-900 transition"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
