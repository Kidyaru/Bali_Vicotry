import React from "react";
import { motion } from "framer-motion";

const PackageDetail = () => {
  const packages = [
    {
      title: "Massage & Scrub",
      description:
        "Enjoy our premium Massage & Scrub package in Bali, an in-call spa experience that combines a relaxing Balinese massage with a gentle body scrub treatment.",
      treatments: ["Balinese massage | 60 Minutes", "Body scrub | 60 Minutes"],
      buttonText: "Book Session",
    },
    {
      title: "Massage & Facial",
      description:
        "Indulge in our Massage & Facial package in Bali, a luxury in-call spa treatment designed to combine full-body relaxation with refreshing facial care.",
      treatments: ["Balinese massage | 60 Minutes", "Facial | 60 Minutes"],
      buttonText: "Book Session",
    },
  ];

  return (
    // Padding atas dikurangi dari py-20 menjadi pt-10 pb-20
    <section className="pt-10 pb-20 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER MENU - Margin bottom dikurangi dari mb-16 menjadi mb-8 */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <span className="text-amber-500 font-bold tracking-[0.4em] text-xs uppercase block mb-3">
            SPA MENU
          </span>
          <div className="relative flex items-center justify-center">
            <div className="hidden md:block flex-grow border-t border-amber-200/60"></div>
            <h2 className="mx-8 text-3xl md:text-5xl font-bold text-amber-950 tracking-tight">
              Best In-Call Spa Packages in Bali Only IDR 600k / 2 hours
            </h2>
            <div className="hidden md:block flex-grow border-t border-amber-200/60"></div>
          </div>
        </motion.div>

        {/* BUNGKUSAN UTAMA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-amber-950 border-2 border-amber-900 rounded-[3rem] p-6 md:p-12 shadow-2xl relative"
        >
          

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-stretch">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 md:p-10 flex flex-col items-center text-center rounded-[2.5rem] shadow-xl"
              >
                <h3 className="text-2xl font-bold text-amber-700 mb-4 tracking-tight uppercase">
                  {pkg.title}
                </h3>
                
                <p className="text-stone-500 italic leading-relaxed mb-6 text-sm md:text-base">
                  "{pkg.description}"
                </p>

                <div className="w-full mb-8">
                  <div className="bg-amber-50 py-1.5 mb-5 rounded-lg">
                    <span className="font-bold text-amber-950 tracking-[0.3em] uppercase text-[10px]">Treatments</span>
                  </div>
                  <ul className="space-y-3 text-stone-700 font-medium text-sm md:text-base mb-2">
                    {pkg.treatments.map((item, i) => (
                      <li key={i} className="border-b border-stone-100 pb-2 last:border-0 italic">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto w-full bg-[#301608] hover:bg-amber-600 text-white py-4 px-10 rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-lg"
                >
                  {pkg.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PackageDetail;