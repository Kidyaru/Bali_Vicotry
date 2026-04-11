import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image Overlay agar text lebih pop-out */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-great-vibes text-white leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
          Bali Victory Massage
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white font-serif font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Premium Massage in Bali – Relax at Our Premium Spa
        </p>

        <p className="mt-4 font-serif text-gray-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Visit our spa and enjoy professional massage treatments in a peaceful,
          private, and luxurious setting.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="bg-amber-500 text-white px-9 py-3 rounded-full font-bold shadow-lg hover:bg-amber-600 transition-all active:scale-95"
          >
            Book Your Massage Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;