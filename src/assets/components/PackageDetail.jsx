import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react"; // Import ikon lokasi

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
    <section className="pt-10 pb-20 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER MENU */}
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
              Best Spa Packages in Bali Only IDR 600k / 2 hours
            </h2>
            <div className="hidden md:block flex-grow border-t border-amber-200/60"></div>
          </div>
        </motion.div>

        {/* BUNGKUSAN UTAMA PAKET */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-amber-950 border-2 border-amber-900 rounded-[3rem] p-6 md:p-12 shadow-2xl relative mb-12"
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

                <motion.a
                href="https://api.whatsapp.com/send/?phone=6285707751756&text=Hello+Bali+Victory+Massage+Canggu%2C+I+would+like+to+book+an+in-Call+massage.+Preferred+time%3A+___.&type=phone_number&app_absent=0"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto w-full bg-[#301608] hover:bg-amber-600 text-white py-4 px-10 rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-lg"
                >
                  {pkg.buttonText}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BAGIAN ALAMAT / GOOGLE MAPS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-center bg-stone-50 p-8 rounded-[3rem] border border-stone-100"
        >
          {/* Info Alamat */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3 text-amber-700">
              <MapPin className="w-6 h-6" />
              <h4 className="font-bold uppercase tracking-widest text-sm">Our Coverage Area</h4>
            </div>
            <p className="text-amber-950 font-serif text-2xl italic">Based in Kuta, serving all of Bali.</p>
            <div className="pt-2">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Address:</span>
              <p className="text-stone-700 text-sm font-medium">Jl. Bumbak Dauh No.122, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia</p>
            </div>
          </div>

          {/* Embed Google Maps */}
          <div className="md:col-span-2 h-[300px] w-full rounded-[2rem] overflow-hidden shadow-inner border-4 border-white">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31552.086322474806!2d115.14995685121653!3d-8.690584683271297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd245006ea3a143%3A0xdf6a2ce46ca61318!2sBali%20Victory%20Massage%20%26%20SPA!5e0!3m2!1sid!2sus!4v1775931595510!5m2!1sid!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31552.086322474806!2d115.14995685121653!3d-8.690584683271297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd245006ea3a143%3A0xdf6a2ce46ca61318!2sBali%20Victory%20Massage%20%26%20SPA!5e0!3m2!1sid!2sus!4v1775931595510!5m2!1sid!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

export default PackageDetail;