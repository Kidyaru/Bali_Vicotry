import { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import heroImg from "./assets/img/Gambar_Hero.png";
import Hero from "./assets/components/Hero";
import ServiceGrid from "./assets/components/ServiceGrid";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px (atau sesuaikan dengan tinggi Hero), set true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Kirim state isScrolled ke Navbar */}
      <Navbar isScrolled={isScrolled} />
      
      <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <Hero />
      </div>

      {/* ServiceGrid diletakkan di luar div h-screen supaya bisa di-scroll */}
      <div id="services">
        <ServiceGrid />
      </div>
      
      <section className="py-20 text-center" id="center">
        Hello World
      </section>
    </div>
  );
}

export default App;