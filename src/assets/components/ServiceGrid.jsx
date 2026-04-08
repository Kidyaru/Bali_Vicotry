import React from "react";
import { motion } from "framer-motion";

// Import gambar (Pastikan path benar)
import aloe_vera_massage from "../img/paket/Aloe-Vera-Massage.jpg";
import traditional_massage from "../img/paket/balinese4.jpg";
import balinese_massage from "../img/paket/Balinesse-Massage.jpg";
import couples_massage from "../img/paket/couples-massage.jpg";
import deep_tissue_massage from "../img/paket/deep-tissue-massage.jpg";
import fourhands_massage from "../img/paket/fourhands-massage.jpg";
import hotstone_massage from "../img/paket/hotstone-massage.jpg";
import lomi_lomi_massage from "../img/paket/lomi-lomi-massage.jpg";
import lymphatic_drainage_massage from "../img/paket/Lymphatic-Drainage-Massage.jpg";
import prenatal_massage from "../img/paket/Preanatal-Massage.jpg";
import reflexology_massage from "../img/paket/reflexology-massage.jpeg";
import sport_massage from "../img/paket/sport-massage.jpg";
import swedish_massage from "../img/paket/swedish.jpg";
import thai_massage from "../img/paket/thai_massage.jpg";
import warmoil_massage from "../img/paket/warmoil.jpg";

function ServiceGrid() {
  const allPackages = [
    {
      category: "Soft Pressure Massage",
      services: [
        { id: 1, name: "Traditional Massage", image: traditional_massage, description: "Relaxing traditional massage using aromatic oils and gentle stretching.", prices: { "60 mins": "IDR 175K", "90 mins": "IDR 250K", "120 mins": "IDR 350K" } },
        { id: 2, name: "Aloe Vera Massage", image: aloe_vera_massage, description: "Cooling & hydrating massage, perfect for sun-exposed skin.", prices: { "60 mins": "IDR 250K", "90 mins": "IDR 350K", "120 mins": "IDR 500K" } },
        { id: 3, name: "Prenatal Massage", image: prenatal_massage, description: "Safe and gentle therapy for expecting mothers to reduce swelling.", prices: { "60 mins": "IDR 200K", "90 mins": "IDR 300K", "120 mins": "IDR 400K" } },
      ],
    },
    {
      category: "Medium Pressure Massage",
      services: [
        { id: 4, name: "Balinese Massage", image: balinese_massage, description: "Signature Bali treatment blending acupressure and skin rolling.", prices: { "60 mins": "IDR 200K", "90 mins": "IDR 300K", "120 mins": "IDR 400K" } },
        { id: 5, name: "Hot Stone Massage", image: hotstone_massage, description: "Heated river stones to melt away tension and promote deep healing.", prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" } },
        { id: 6, name: "Warm Oil Body Massage", image: warmoil_massage, description: "Soften muscles and ease tension with our premium warm oil.", prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" } },
      ],
    },
    {
      category: "Specialized Treatments",
      services: [
        { id: 7, name: "Massage for Two", image: couples_massage, description: "Perfect for couples or friends who want to relax together.", prices: { "60 mins": "IDR 400K", "90 mins": "IDR 600K", "120 mins": "IDR 800K" } },
        { id: 8, name: "Swedish Massage", image: swedish_massage, description: "Long strokes and gentle pressure to improve circulation.", prices: { "60 mins": "IDR 300K", "90 mins": "IDR 450K", "120 mins": "IDR 600K" } },
        { id: 9, name: "Lymphatic Drainage", image: lymphatic_drainage_massage, description: "Professional treatment to support detoxification and reduce swelling.", prices: { "60 mins": "IDR 350K", "90 mins": "IDR 475K", "120 mins": "IDR 700K" } },
      ],
    },
    {
      category: "Strong Pressure Options",
      services: [
        { id: 10, name: "Deep Tissue Massage", image: deep_tissue_massage, description: "Targets chronic muscle tension with firm, focused pressure.", prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" } },
        { id: 11, name: "Lomi-Lomi Massage", image: lomi_lomi_massage, description: "Hawaiian-inspired flowing strokes to restore natural balance.", prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" } },
        { id: 12, name: "Sport Massage", image: sport_massage, description: "Boost recovery and reduce soreness after intense activities.", prices: { "60 mins": "IDR 300K", "90 mins": "IDR 450K", "120 mins": "IDR 600K" } },
      ],
    },
    {
      category: "Other Specialized Treatments",
      services: [
        { id: 13, name: "Thai Massage", image: thai_massage, description: "Assisted stretching and body alignment for flexibility.", prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" } },
        { id: 14, name: "Reflexology", image: reflexology_massage, description: "Focus on pressure points on feet to restore overall wellness.", prices: { "60 mins": "IDR 200K", "90 mins": "IDR 300K", "120 mins": "IDR 400K" } },
        { id: 15, name: "Four Hands Massage", image: fourhands_massage, description: "Performed by two synchronized therapists for ultimate luxury.", prices: { "60 mins": "IDR 400K", "90 mins": "IDR 600K", "120 mins": "IDR 800K" } },
      ],
    },
  ];

  const smoothTransition = {
    type: "spring",
    stiffness: 80,
    damping: 15,
    mass: 1
  };

  const standardFadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-stone-200/20 to-transparent overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {allPackages.map((category, index) => (
          <motion.div
            key={index}
            variants={standardFadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-24"
          >
            {/* Header Kategori */}
            <div className="flex flex-col items-center mb-12">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-amber-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-4"
              >
                Spa Menu
              </motion.span>
              
              <div className="flex items-center w-full gap-4 md:gap-8">
                <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                <h2 className="text-xl md:text-2xl font-bold text-amber-950 text-center tracking-tight whitespace-nowrap uppercase">
                  {category.category}
                </h2>
                <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-amber-500/30 to-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {category.services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={standardFadeInVariants}
                  whileHover={{ 
                    y: -15, 
                    transition: smoothTransition 
                  }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden flex flex-col h-full border-2 border-amber-200/40 shadow-xl shadow-stone-200/50 hover:shadow-amber-900/10 hover:border-amber-400 transition-colors duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-amber-950 mb-2 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1 uppercase tracking-tight">
                      {service.name}
                    </h3>
                    
                    <p className="text-[11px] text-stone-500 mb-6 italic leading-relaxed line-clamp-2 h-[34px]">
                      "{service.description}"
                    </p>

                    {/* Price List */}
                    <div className="mt-auto space-y-2 mb-6 bg-stone-50 p-4 rounded-2xl border border-amber-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all duration-500">
                      {Object.entries(service.prices).map(([time, price]) => (
                        <div key={time} className="flex justify-between items-center text-[11px] py-1.5 border-b border-stone-200/60 last:border-0">
                          <span className="text-stone-500 font-medium uppercase tracking-tighter">
                            {time}
                          </span>
                          <span className="font-bold text-amber-900">
                            {price}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Button - PERHATIKAN BAGIAN INI */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://wa.me/?text=I%20want%20to%20book%20${encodeURIComponent(service.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-amber-950 hover:bg-amber-600 text-white text-center py-4 px-2 rounded-2xl font-bold uppercase tracking-[0.1em] text-[10px] transition-colors duration-300 shadow-lg shadow-amber-900/20 flex items-center justify-center min-h-[50px]"
                    >
                      BOOK {service.name}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServiceGrid;