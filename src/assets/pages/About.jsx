import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Calendar, Smartphone } from "lucide-react";

const About = () => {
  const data = {
    aboutSession: {
      title: "Best Massage on Call Bali & Premium In-Call Spa - Bali Victory Massage",
      description: "Whether you choose to visit our premium in-call spa or book a massage on call in Bali, Bali Victory Massage delivers a luxury wellness experience tailored to your needs. Available across Seminyak, Canggu, Kuta, Ubud, Nusa Dua, and Sanur, our professional therapists provide authentic Balinese treatments, deep relaxation, and premium spa care for travelers and residents.",
      whyChooseUs: {
        title: "Why Choose Bali Victory Massage?",
        intro: "At Bali Victory Massage, we combine luxury spa comfort, professional therapists, and premium Balinese wellness treatments in one trusted service.",
        features: [
          {
            label: "Professional & Certified Therapists",
            text: "Trained in authentic Balinese, Deep Tissue, and Aromatherapy techniques.",
            icon: <CheckCircle className="w-5 h-5 text-amber-600" />
          },
          {
            label: "On-Demand Service",
            text: "We come to your villa, hotel, or home within minutes.",
            icon: <MapPin className="w-5 h-5 text-amber-600" />
          },
          {
            label: "High-Quality Oils & Aromas",
            text: "Experience soothing scents and natural oils for total relaxation.",
            icon: <CheckCircle className="w-5 h-5 text-amber-600" />
          },
          {
            label: "Flexible Booking",
            text: "Morning to late-night service, island-wide coverage across Bali.",
            icon: <Calendar className="w-5 h-5 text-amber-600" />
          }
        ]
      },
      howToBook: {
        title: "How to Book Your Massage",
        instruction: "Booking your massage in Bali is simple. Just message us on WhatsApp, choose your preferred treatment, location, date, and time, and our team will confirm your reservation quickly.",
        closing: "Let Bali Victory Massage turn your day into a peaceful spa escape in Bali."
      }
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* HERO SECTION - Background Gelap Agar Navbar Putih Terlihat */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-amber-950 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4af6b1d462a2?auto=format&fit=crop&w=1500&q=80" 
          alt="Victory Massage Bali" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-400 font-bold tracking-[0.4em] text-xs uppercase mb-4 block"
          >
            Since 2015
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase mb-6"
          >
            About Victory
          </motion.h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>
      </div>

      <section className="py-24 max-w-6xl mx-auto px-6">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-8 leading-tight">
              {data.aboutSession.title}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              {data.aboutSession.description}
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-amber-100 rounded-[3rem] p-4 rotate-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80" 
              className="rounded-[2.5rem] w-full h-full object-cover -rotate-2 shadow-2xl"
              alt="Spa Treatment"
            />
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-950 mb-4">{data.aboutSession.whyChooseUs.title}</h3>
            <p className="text-stone-500 italic">{data.aboutSession.whyChooseUs.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.aboutSession.whyChooseUs.features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-amber-100 hover:border-amber-400 transition-all flex gap-5 group">
                <div className="bg-amber-50 p-4 rounded-2xl h-fit group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-amber-950 mb-1">{f.label}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          className="bg-amber-950 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <Smartphone className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{data.aboutSession.howToBook.title}</h3>
            <p className="text-amber-100/70 mb-10 max-w-xl mx-auto leading-relaxed">{data.aboutSession.howToBook.instruction}</p>
            <a href="https://wa.me/your-number" className="inline-block bg-amber-600 hover:bg-amber-500 px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all">
              Book WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;