import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PackageDetail from "../components/PackageDetail";
import ServiceGrid from "../components/ServiceGrid";
import heroImg from "../img/Gambar_Hero.png"; // Naik 1 level ke assets, lalu masuk img

function Home() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <Hero />
      </div>

      <div id="services" className="relative z-10 bg-white">
        <ServiceGrid />
      </div>

      <PackageDetail />
      <Footer/>

      
    </>
  );
}

export default Home;