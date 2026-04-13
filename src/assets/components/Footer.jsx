import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import Logo_img from "../img/Logo_img_Bali.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1512] text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* KOLOM 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={Logo_img}
                alt="Victory Massage Logo"
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="font-serif text-xl tracking-[0.3em] text-white">
                VICTORY
              </span>
            </div>

            <p className="text-sm leading-relaxed text-stone-400">
              The ultimate massage experience in Bali. Bringing professional
              therapeutic treatments directly to your doorstep, hotel, or villa.
            </p>

            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/balivictorymassage?igsh=djhic2EyeXU5cXZv"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <FaInstagram size={18} className="text-white" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/balivictorymassage/"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <FaFacebook size={18} className="text-white" />
              </a>

              {/* WhatsApp (FIXED) */}
              <a
                href="https://wa.me/6285864305698"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* KOLOM 2 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-amber-500">
                  Guest Reviews
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-amber-500 cursor-pointer"
                  href="https://api.whatsapp.com/send/?phone=6285707751756&text=Hello+Bali+Victory+Massage+Canggu%2C+I+would+like+to+book+an+in-Call+massage.+Preferred+time%3A+___.&type=phone_number&app_absent=0"
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaPhone className="text-amber-600 mt-1" />
                <span>+62 858-6430-5698</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-amber-600 mt-1" />
                <span>victorymassagebali@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-amber-600 mt-1" />
                <span>Available Daily: 09:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>

          {/* KOLOM 4 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">
              Service Areas
            </h4>
            <p className="text-xs text-stone-400 mb-4 italic">
              Providing services to:
            </p>

            <div className="flex items-center gap-2 text-stone-400 mt-4">
              <FaMapMarkerAlt size={14} />
              <span className="text-xs">
                Main Studio: Jl. Bumbak No.122, Kerobokan, Kec. Kuta Utara,
                Kabupaten Badung, Bali 80361, Indonesia
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 text-center">
            © {currentYear} Bali Victory Massage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
