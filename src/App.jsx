import { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import heroImg from "./assets/img/Gambar_Hero.png";
import Hero from "./assets/components/Hero";
import ServiceGrid from "./assets/components/ServiceGrid";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      <Navbar isScrolled={isScrolled} />
      
      {/* Tambahkan bg-fixed di sini. 
          bg-fixed akan membuat gambar background tetap diam saat konten di atasnya di-scroll.
      */}
      <div 
        className="h-screen bg-cover bg-center bg-fixed relative" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <Hero />
      </div>

      {/* Konten di bawah ini akan meluncur menutupi background fixed di atas */}
      <div id="services" className="relative z-10 bg-white">
        <ServiceGrid />
      </div>
      
      <section className="py-20 text-center bg-white" id="center">
        Hello World
      </section>
    </div>
  );
}

export default App;