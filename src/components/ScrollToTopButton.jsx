// src/components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[rgba(255,0,102,0.85)] text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-black transition z-50"
      aria-label="Scroll to top"
    >
      <FiArrowUp className="w-5 h-5" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
