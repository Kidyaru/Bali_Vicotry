import React from "react";
import { motion } from "framer-motion";

// Import semua gambar sesuai struktur folder kamu
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
        {
          id: 1,
          name: "Traditional Massage",
          image: traditional_massage,
          description: "Relaxing traditional massage using aromatic oils and gentle stretching.",
          prices: { "60 mins": "IDR 175K", "90 mins": "IDR 250K", "120 mins": "IDR 350K" },
        },
        {
          id: 2,
          name: "Aloe Vera Massage",
          image: aloe_vera_massage,
          description: "Cooling & hydrating massage, perfect for sun-exposed skin.",
          prices: { "60 mins": "IDR 250K", "90 mins": "IDR 350K", "120 mins": "IDR 500K" },
        },
        {
          id: 3,
          name: "Prenatal Massage",
          image: prenatal_massage,
          description: "Safe and gentle therapy for expecting mothers to reduce swelling.",
          prices: { "60 mins": "IDR 200K", "90 mins": "IDR 300K", "120 mins": "IDR 400K" },
        },
      ],
    },
    {
      category: "Medium Pressure Massage",
      services: [
        {
          id: 4,
          name: "Balinese Massage",
          image: balinese_massage,
          description: "Signature Bali treatment blending acupressure and skin rolling.",
          prices: { "60 mins": "IDR 200K", "90 mins": "IDR 300K", "120 mins": "IDR 400K" },
        },
        {
          id: 5,
          name: "Hot Stone Massage",
          image: hotstone_massage,
          description: "Heated river stones to melt away tension and promote deep healing.",
          prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" },
        },
        {
          id: 6,
          name: "Warm Oil Body Massage",
          image: warmoil_massage,
          description: "Soften muscles and ease tension with our premium warm oil.",
          prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" },
        },
      ],
    },
    {
      category: "Specialized Treatments",
      services: [
        {
          id: 7,
          name: "Massage for Two",
          image: couples_massage,
          description: "Perfect for couples or friends who want to relax together.",
          prices: { "60 mins": "IDR 400K", "90 mins": "IDR 600K", "120 mins": "IDR 800K" },
        },
        {
          id: 8,
          name: "Swedish Massage",
          image: swedish_massage,
          description: "Long strokes and gentle pressure to improve circulation.",
          prices: { "60 mins": "IDR 300K", "90 mins": "IDR 450K", "120 mins": "IDR 600K" },
        },
        {
          id: 9,
          name: "Lymphatic Drainage",
          image: lymphatic_drainage_massage,
          description: "Professional treatment to support detoxification and reduce swelling.",
          prices: { "60 mins": "IDR 350K", "90 mins": "IDR 475K", "120 mins": "IDR 700K" },
        },
      ],
    },
    {
      category: "Strong Pressure Options",
      services: [
        {
          id: 10,
          name: "Deep Tissue Massage",
          image: deep_tissue_massage,
          description: "Targets chronic muscle tension with firm, focused pressure.",
          prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" },
        },
        {
          id: 11,
          name: "Lomi-Lomi Massage",
          image: lomi_lomi_massage,
          description: "Hawaiian-inspired flowing strokes to restore natural balance.",
          prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" },
        },
        {
          id: 12,
          name: "Sport Massage",
          image: sport_massage,
          description: "Boost recovery and reduce soreness after intense activities.",
          prices: { "60 mins": "IDR 300K", "90 mins": "IDR 450K", "120 mins": "IDR 600K" },
        },
      ],
    },
    {
      category: "Other Specialized Treatments",
      services: [
        {
          id: 13,
          name: "Thai Massage",
          image: thai_massage,
          description: "Assisted stretching and body alignment for flexibility.",
          prices: { "60 mins": "IDR 250K", "90 mins": "IDR 375K", "120 mins": "IDR 500K" },
        },
        {
          id: 14,
          name: "Reflexology",
          image: reflexology_massage,
          description: "Focus on pressure points on feet to restore overall wellness.",
          prices: { "60 mins": "IDR 200K", "90 mins": "IDR 300K", "120 mins": "IDR 400K" },
        },
        {
          id: 15,
          name: "Four Hands Massage",
          image: fourhands_massage,
          description: "Performed by two synchronized therapists for ultimate luxury.",
          prices: { "60 mins": "IDR 400K", "90 mins": "IDR 600K", "120 mins": "IDR 800K" },
        },
      ],
    },
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {allPackages.map((category, index) => (
          <div key={index} className="mb-16">
            {/* Judul Kategori Muncul dari Bawah */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-amber-500 inline-block pb-2"
            >
              {category.category}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <motion.div
                  key={service.id}
                  // Animasi per card: Dari bawah (y: 50) ke posisi asli (y: 0)
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ y: -10 }} // Efek melayang saat kursor di atas card
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-1 italic">
                      "{service.description}"
                    </p>

                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                      {Object.entries(service.prices).map(([time, price]) => (
                        <div key={time} className="flex justify-between text-sm py-1 border-b border-gray-200 last:border-0">
                          <span className="text-gray-500">{time}</span>
                          <span className="font-bold text-amber-700">{price}</span>
                        </div>
                      ))}
                    </div>

                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      href={`https://wa.me/628123456789?text=I%20want%20to%20book%20${encodeURIComponent(service.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-lg font-bold transition-colors uppercase tracking-tight text-xs"
                    >
                      Book {service.name} via WhatsApp
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceGrid;