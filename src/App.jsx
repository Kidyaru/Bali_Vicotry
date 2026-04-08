import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About"; // Ubah nama variabel jadi About agar sinkron
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
      {/* 1. ScrollToTop: Memastikan setiap pindah page, scroll balik ke nol */}
      <ScrollToTop />
      
      {/* 2. Navbar: Ada di luar Routes supaya selalu muncul */}
      <Navbar isScrolled={isScrolled} />
      
      {/* 3. Routes: Konten yang berubah-ubah sesuai URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;