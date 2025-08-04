import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-gray-100 text-center py-12 px-4">
      {/* Title */}
      <h2 className="text-purple-400 text-2xl font-bold mt-20">Cryptohub</h2>

      {/* Language Dropdown */}
      <div className="mb-6">
        <select className="border-b border-gray-400 bg-transparent px-4 py-2 focus:outline-none">
          <option>English</option>
          <option>Deutsch</option>
          <option>Español - España</option>
          <option>Español - América Latina</option>
          <option>Français - France</option>
          <option>Bahasa Indonesia</option>
          <option>Italiano</option>
          <option>한국어</option>
          <option>Polski</option>
          <option>Português - Brasil</option>
          <option>Português - Portugal</option>
          <option>Türkçe</option>
        </select>
      </div>

      {/* Copyright */}
      <p className="text-gray-600 mb-6">© 2025 Cryptohub. All Rights Reserved.</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a href="#" className="bg-gray-300 hover:bg-purple-400 text-gray-800 p-3 rounded-full transition">
          <FaFacebookF />
        </a>
        <a href="#" className="bg-gray-300 hover:bg-purple-400 text-gray-800 p-3 rounded-full transition">
          <FaTwitter />
        </a>
        <a href="#" className="bg-gray-300 hover:bg-purple-400 text-gray-800 p-3 rounded-full transition">
          <FaInstagram />
        </a>
        <a href="#" className="bg-gray-300 hover:bg-purple-400 text-gray-800 p-3 rounded-full transition">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
