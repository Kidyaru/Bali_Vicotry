import React from "react";
import { Link } from "react-router-dom";
import Logo_img from "../img/Logo_img_Bali.png";

const Navbar = ({ isScrolled }) => {
  // Fungsi tambahan untuk paksa scroll ke atas
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Pakai "smooth" agar estetik, atau "auto" agar instan
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md py-3 md:py-4"
          : "bg-black/20 backdrop-blur-md py-4 md:py-6 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO SECTION - Tambahkan onClick */}
        <Link
          to="/"
          onClick={handleScrollToTop}
          className={`flex flex-col md:flex-row items-center transition-colors duration-300 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <img
            src={Logo_img}
            alt="Logo"
            className="h-12 md:h-10 w-auto object-contain block transition-all"
          />
          <span
            className={`font-serif leading-none antialiased
                        text-lg mt-1 tracking-[0.2em]
                        md:text-xl 
                        md:tracking-[0.4em] 
                        md:mt-0 
                        md:-ml-1 
                        transform md:translate-y-[6.5px]`}
          >
            VICTORY
          </span>
        </Link>

        {/* MENU NAVIGASI */}
        <div
          className={`hidden md:flex space-x-10 font-medium text-sm uppercase tracking-widest transition-colors duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {/* Link Home - Tambahkan onClick */}
          <Link 
            to="/" 
            onClick={handleScrollToTop} 
            className="hover:text-amber-500 transition-colors"
          >
            Home
          </Link>
          
          <a href="/#services" className="hover:text-amber-500 transition-colors">Treatments</a>
          
          <Link to="/about" className="hover:text-amber-500 transition-colors">About</Link>
          
          <a href="#" className="hover:text-amber-500 transition-colors">Client Testimonials</a>
        </div>

        {/* TOMBOL ACTION */}
        <button
          className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${
            isScrolled
              ? "bg-amber-600 text-white hover:bg-amber-700 shadow-lg"
              : "border border-white/50 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          }`}
        >
          Book Now
        </button>

      </div>
    </nav>
  );
};

export default Navbar;