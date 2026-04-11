import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import ClientTestimonial from "./assets/pages/ClientTestimonial";
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
    // Kita tidak butuh basename kalau pakai HashRouter
    <Router>
      <ScrollToTop />
      <Navbar isScrolled={isScrolled} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/testimonials" element={<ClientTestimonial />} />
        {/* Jika user nyasar atau halaman kosong, paksa balik ke Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;