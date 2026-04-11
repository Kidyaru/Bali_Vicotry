import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import ikon
import { motion, AnimatePresence } from "framer-motion"; // Untuk animasi halus
import Logo_img from "../img/Logo_img_Bali.png";

const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTreatmentClick = (e) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("services");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      e.preventDefault();
      const element = document.getElementById("services");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", path: "/", action: handleScrollToTop },
    { name: "Treatments", path: "/", action: handleTreatmentClick },
    { name: "About", path: "/about", action: handleScrollToTop },
    { name: "Testimonials", path: "/testimonials", action: handleScrollToTop },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md py-3 md:py-4"
            : "bg-black/20 backdrop-blur-md py-4 md:py-6 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO SECTION */}
          <Link
            to="/"
            onClick={handleScrollToTop}
            className={`flex flex-col md:flex-row items-center transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <img src={Logo_img} alt="Logo" className="h-10 md:h-10 w-auto object-contain block" />
            <span className="font-serif text-lg tracking-[0.2em] md:text-xl md:tracking-[0.4em] transform md:translate-y-[6.5px]">
              VICTORY
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <div className={`hidden md:flex space-x-10 font-medium text-sm uppercase tracking-widest transition-colors ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={link.action} className="hover:text-amber-500 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* TOMBOL ACTION (Desktop & Mobile) */}
          <button className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all ${
            isScrolled ? "bg-amber-600 text-white hover:bg-amber-700 shadow-lg" : "border border-white/50 text-white hover:bg-white hover:text-black"
          }`}>
            Book Now
          </button>
        </div>
      </nav>

      {/* MOBILE FLOATING HAMBURGER MENU (POJOK KANAN BAWAH) */}
      <div className="md:hidden fixed bottom-8 right-8 z-[60]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="absolute bottom-20 right-0 bg-white shadow-2xl rounded-[2rem] p-6 w-64 border border-stone-100"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={link.action}
                    className="text-amber-950 font-bold uppercase tracking-widest text-xs p-3 hover:bg-stone-50 rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-amber-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Overlay saat menu terbuka */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;