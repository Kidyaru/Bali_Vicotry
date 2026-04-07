import baliLogo from "../img/Bali-removebg-preview.png";
import Button from "./Button";

const Navbar = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-lg shadow-md py-4" // Saat di ServiceGrid (Putih agak transparan + Blur)
        : "bg-black/20 backdrop-blur-md py-6 border-b border-white/10" // Saat di Hero (Gelap transparan + Blur)
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-serif font-bold tracking-tighter transition-colors duration-300 ${
          isScrolled ? "text-gray-900" : "text-white"
        }`}>
          BALI VICTORY
        </div>

        {/* Menu Navigasi */}
        <div className={`hidden md:flex space-x-10 font-medium text-sm uppercase tracking-widest transition-colors duration-300 ${
          isScrolled ? "text-gray-800" : "text-white"
        }`}>
          <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#services" className="hover:text-amber-500 transition-colors">Treatments</a>
          <a href="#" className="hover:text-amber-500 transition-colors">About</a>
        </div>

        {/* Tombol Action */}
        <button className={`px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
          isScrolled 
            ? "bg-amber-600 text-white hover:bg-amber-700 shadow-lg" 
            : "border border-white/50 text-white hover:bg-white hover:text-black backdrop-blur-sm"
        }`}>
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;