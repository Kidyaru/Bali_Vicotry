import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import heroImg from "../img/About_Bg.png";
import profileImg from "../img/mr_heater.jpg";
import Footer from "../components/Footer";

const ClientTestimonial = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

 const testimonials = [
    {
      name: "Mr. Heather",
      location: "Seminyak, Bali",
      image: profileImg,
      text: "I had an amazing deep tissue massage experience. The therapist was highly professional, skilled, and made me feel completely relaxed. Highly recommended for anyone needing quality therapeutic massage in Bali.",
    },
    {
      name: "James Wilson",
      location: "Canggu, Bali",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      text: "The best on-call service! They arrived at my villa within 30 minutes. The Balinese massage technique was incredibly authentic and left me feeling completely rejuvenated.",
    },
    {
      name: "Sarah Jenkins",
      location: "Ubud, Bali",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      text: "Extremely professional and punctual. It's often hard to find high-quality, trustworthy therapy services, but Victory Massage truly exceeded my expectations.",
    },
    {
      name: "David Chen",
      location: "Nusa Dua, Bali",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      text: "After a long day of meetings, their aromatherapy massage was a total lifesaver. The therapist was very polite and came fully prepared with all the necessary equipment.",
    },
    {
      name: "Emma Thompson",
      location: "Sanur, Bali",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      text: "As a yoga instructor, I'm very selective about bodywork. Their deep tissue pressure was spot on for releasing chronic muscle tension. Truly impressive skill.",
    },
    {
      name: "Michael Rossi",
      location: "Kuta, Bali",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      text: "My wife and I booked a couples massage at our hotel. It was so convenient not having to deal with Kuta traffic. Truly a five-star service!",
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* HERO SECTION - Perubahan: h-[60vh] di mobile, h-[40vh] di desktop */}
      <div className="relative h-[80vh] md:h-[70vh] flex items-center justify-center bg-amber-950 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src={heroImg} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Testimonials Background"
        />
        {/* Container Teks: Memastikan w-full and text-center agar simetris di HP */}
        <div className="relative z-10 text-center w-full px-6 flex flex-col items-center justify-center">
          <motion.h1 
            {...fadeIn} 
            className="text-5xl md:text-7xl font-great-vibes text-white tracking-widest mb-4 text-center leading-tight"
          >
            Guest Reviews
          </motion.h1>
          <motion.div initial={{ width: 0 }} animate={{ width: 96 }} transition={{ delay: 0.5, duration: 0.8 }} className="h-1 bg-amber-500 mx-auto rounded-full" />
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-16">
          
          {/* KIRI: FORMULIR ULASAN */}
          <motion.div 
            {...fadeIn} 
            className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100 h-fit lg:sticky lg:top-28"
          >
            <h3 className="text-xl font-bold text-amber-950 mb-6 uppercase tracking-wider">Leave a Review</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-bold text-stone-400 uppercase mb-2 block">Your overall rating</label>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <button
                        type="button"
                        key={ratingValue}
                        className="transition-transform hover:scale-110"
                        onClick={() => setRating(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <Star 
                          className={`w-6 h-6 ${ratingValue <= (hover || rating) ? "fill-amber-400 text-amber-400" : "text-stone-200"}`} 
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-400 uppercase mb-2 block">Title of your review</label>
                <input type="text" placeholder="Summarize your review" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-400 uppercase mb-2 block">Your review</label>
                <textarea rows="4" placeholder="Tell people your review" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 resize-none"></textarea>
              </div>

              <div className="space-y-4">
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 text-sm focus:outline-none" />
                <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 text-sm focus:outline-none" />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" className="mt-1 accent-amber-600" id="policy" />
                <label htmlFor="policy" className="text-[11px] text-stone-500 leading-tight">
                  This review is based on my own experience and is my genuine opinion.
                </label>
              </div>

              <button type="submit" className="w-full bg-[#c28e8e] hover:bg-[#b07d7d] text-white font-bold py-4 rounded-xl shadow-lg transition-all uppercase tracking-widest text-xs">
                Submit Review
              </button>
            </form>
          </motion.div>

          {/* KANAN: LIST TESTIMONIALS */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-10 border-b border-stone-200 pb-6">
              <h2 className="text-2xl font-serif text-amber-950 italic">Guest Stories</h2>
              <div className="text-right">
                <div className="flex gap-1 justify-end mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">500+ Happy Guests</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <Quote className="w-8 h-8 text-amber-50 mb-4" />
                    <p className="text-stone-600 text-sm leading-relaxed italic mb-6">"{item.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={item.image} className="w-12 h-12 rounded-full object-cover border border-amber-100" alt={item.name} />
                    <div>
                      <h4 className="font-bold text-amber-950 text-xs uppercase tracking-wide">{item.name}</h4>
                      <p className="text-[10px] text-stone-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

              <Footer/>

    </div>
  );
};

export default ClientTestimonial;