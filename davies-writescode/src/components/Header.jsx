import React from "react";
import "./Header.css"; // Import the CSS file for styles
import { FaHtml5, FaReact, FaJs, FaCss3, FaNodeJs } from "react-icons/fa"; // Import FontAwesome tool icons

const Header = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b flex justify-center items-center flex-col from-pink-200 via-purple-50 to-blue-50 text-center p-5">
      {/* Header Title */}
      <h1 className="text-5xl font-bold text-black mb-2">Davies Gotosa</h1>

      {/* Subheading */}
      <h3 className="text-lg font-medium text-gray-600 mb-8">
        Crafting interactive and user-friendly web experiences
      </h3>

     
    </div>
  );
};

export default Header;
