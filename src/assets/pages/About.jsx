import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Calendar, Smartphone, XCircle, ShieldCheck, Quote } from "lucide-react";
import heroImg from "../img/About_Bg.png";
import profileImg from "../img/mr_heater.jpg";

const About = () => {
  // Variabel animasi standar untuk elemen tunggal
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Variabel animasi untuk grup poin agar muncul BERSAMAAN
  const revealTogether = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const data = {
    aboutSession: {
      title: "Best Massage on Call Bali & Premium In-Call Spa - Bali Victory Massage",
      description: "Whether you choose to visit our premium in-call spa or book a massage on call in Bali, Bali Victory Massage delivers a luxury wellness experience tailored to your needs. Available across Seminyak, Canggu, Kuta, Ubud, Nusa Dua, and Sanur, our professional therapists provide authentic Balinese treatments, deep relaxation, and premium spa care for travelers and residents.",
      whyChooseUs: {
        title: "Why Choose Bali Victory Massage?",
        intro: "At Bali Victory Massage, we combine luxury spa comfort, professional therapists, and premium Balinese wellness treatments in one trusted service.",
        features: [
          { label: "Professional & Certified Therapists", text: "Trained in authentic Balinese, Deep Tissue, and Aromatherapy techniques.", icon: <CheckCircle className="w-5 h-5 text-amber-600" /> },
          { label: "On-Demand Service", text: "We come to your villa, hotel, or home within minutes.", icon: <MapPin className="w-5 h-5 text-amber-600" /> },
          { label: "High-Quality Oils & Aromas", text: "Experience soothing scents and natural oils for total relaxation.", icon: <CheckCircle className="w-5 h-5 text-amber-600" /> },
          { label: "Flexible Booking", text: "Morning to late-night service, island-wide coverage across Bali.", icon: <Calendar className="w-5 h-5 text-amber-600" /> }
        ]
      },
      testimonial: {
        quote: "I had an amazing deep tissue massage experience. The therapist was highly professional, skilled, and made me feel completely relaxed. Highly recommended for anyone needing quality therapeutic massage in Bali.",
        author: "Mrs. Heather",
        role: "Guest"
      },
      policy: {
        title: "Bali Victory Massage Service Policy & Guest Guidelines",
        intro: "At Bali Victory Massage, we are committed to providing professional therapeutic massage services in a safe, respectful, and relaxing environment for both guests and therapists.",
        whatWeOffer: [
          "Professional therapeutic massage treatments only",
          "Relaxation, wellness, and body recovery therapies",
          "Licensed and experienced massage therapists",
          "Home, villa, hotel, and in-call spa services in Bali",
          "Respectful, safe, and professional service standards"
        ],
        whatWeDoNotProvide: [
          "Sensual massage", "Erotic or sexual services", "\"Special service\" or similar requests", "Therapist photos or personal pictures"
        ],
        footerNote: "Any requests related to inappropriate services, photos, or behavior will not be accepted. Thank you for respecting our therapists and choosing a professional massage service in Bali."
      },
      howToBook: {
        title: "How to Book Your Massage",
        instruction: "Booking your massage in Bali is simple. Just message us on WhatsApp, choose your preferred treatment, location, date, and time, and our team will confirm your reservation quickly.",
      }
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-amber-950 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src={heroImg} 
          alt="Victory Massage Bali" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1 {...fadeIn} transition={{ delay: 0.2 }} className="text-5xl md:text-8xl font-great-vibes text-white tracking-widest  mb-3">
            About Victory
          </motion.h1>
          <motion.div initial={{ width: 0 }} animate={{ width: 96 }} transition={{ delay: 0.5, duration: 0.8 }} className="h-1 bg-amber-500 mx-auto rounded-full" />
        </div>
      </div>

      <section className="py-24 max-w-6xl mx-auto px-6">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-8 leading-tight">
              {data.aboutSession.title}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">{data.aboutSession.description}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1, rotate: 2 }} viewport={{ once: true }} className="bg-amber-100 rounded-[3rem] p-4 shadow-xl">
            <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80" className="rounded-[2.5rem] w-full h-full object-cover -rotate-2" alt="Spa" />
          </motion.div>
        </div>

        {/* TESTIMONIAL SECTION */}
        <motion.div {...fadeIn} className="mb-32 flex flex-col items-center text-center">
          <Quote className="w-12 h-12 text-amber-200 mb-6" />
          <p className="text-xl md:text-2xl font-serif text-stone-700 italic max-w-4xl mb-8">"{data.aboutSession.testimonial.quote}"</p>
          <div className="flex items-center gap-4 text-left">
            <img src={profileImg} className="w-20 h-20 rounded-full object-cover border-2 border-amber-200 shadow-lg" alt="Client" />
            <div>
              <h4 className="font-bold text-amber-950">{data.aboutSession.testimonial.author}</h4>
              <p className="text-sm text-stone-500">{data.aboutSession.testimonial.role}</p>
            </div>
          </div>
        </motion.div>

        {/* POLICY SECTION - Poin Muncul Bersamaan */}
        <motion.div {...fadeIn} className="mb-32 bg-stone-100 rounded-[3rem] overflow-hidden border border-stone-200 shadow-sm">
          <div className="bg-amber-950 py-4 px-8 text-center text-white font-serif tracking-widest uppercase italic text-sm md:text-base">
            <h3>{data.aboutSession.policy.title}</h3>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-stone-600 mb-10 text-center max-w-4xl mx-auto italic">{data.aboutSession.policy.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-serif">
              {/* Offer Group */}
              <motion.div {...revealTogether}>
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="text-emerald-600 w-6 h-6" />
                  <h4 className="font-bold text-stone-800 text-lg">What We Offer</h4>
                </div>
                <ul className="space-y-3">
                  {data.aboutSession.policy.whatWeOffer.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                      <span className="text-emerald-500 font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              {/* Deny Group */}
              <motion.div {...revealTogether}>
                <div className="flex items-center gap-2 mb-6">
                  <XCircle className="text-red-600 w-6 h-6" />
                  <h4 className="font-bold text-stone-800 text-lg">What We Do NOT Provide</h4>
                </div>
                <ul className="space-y-3">
                  {data.aboutSession.policy.whatWeDoNotProvide.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                      <span className="text-red-500 font-bold">×</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us - Semua Card Muncul Bersamaan */}
        <div className="mb-32">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-950 mb-4">{data.aboutSession.whyChooseUs.title}</h3>
            <p className="text-stone-500 italic">{data.aboutSession.whyChooseUs.intro}</p>
          </motion.div>
          <motion.div 
            {...revealTogether}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {data.aboutSession.whyChooseUs.features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-amber-100 flex gap-5 group shadow-sm">
                <div className="bg-amber-50 p-4 rounded-2xl h-fit  group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-amber-950 mb-1">{f.label}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div {...fadeIn} className="bg-amber-950 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <Smartphone className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{data.aboutSession.howToBook.title}</h3>
            <p className="text-amber-100/70 mb-10 max-w-xl mx-auto">{data.aboutSession.howToBook.instruction}</p>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/your-number" className="inline-block bg-amber-600 px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs">
              Book WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;