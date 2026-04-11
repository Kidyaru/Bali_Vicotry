import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import ClientTestimonial from "./assets/pages/ClientTestimonial"; // 1. Impor komponen baru
import ScrollToTop from "./assets/components/ScrollToTop";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      {/* ScrollToTop: Memastikan setiap pindah page, scroll balik ke nol */}
      <ScrollToTop />
      
      {/* Navbar: Ada di luar Routes supaya selalu muncul */}
      <Navbar isScrolled={isScrolled} />
      
      {/* Routes: Konten yang berubah-ubah sesuai URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        {/* 2. Tambahkan Route untuk Testimonial */}
        <Route path="/testimonials" element={<ClientTestimonial />} />
      </Routes>
    </Router>
  );
}

export default App;