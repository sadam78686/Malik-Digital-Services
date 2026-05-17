import { motion } from "motion/react";
import { MessageCircle, CheckCircle2, TrendingUp, ShieldCheck, DollarSign, Smartphone, XCircle, AlertCircle, Globe, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ff0050] rounded-lg flex items-center justify-center font-bold text-lg md:text-xl shadow-[2px_2px_0px_#00f2ea] md:shadow-[4px_4px_0px_#00f2ea]">M</div>
          <span className="text-lg md:text-2xl font-black tracking-tighter text-white uppercase italic">MALIK <span className="hidden xs:inline">DIGITAL</span> <span className="text-[#00f2ea]">SERVICES</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold text-white uppercase tracking-widest bg-white/5 py-2 px-6 rounded-full border border-white/10">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 
            Batch #04 Now Open
          </span>
        </div>
        <a 
          href="https://wa.me/923186512940"
          className="bg-[#00f2ea] text-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,242,234,0.3)]"
        >
          Rabta Karein
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#ff0050]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#00f2ea]/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-left"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-8 md:w-12 h-1 bg-[#00f2ea] rounded-full"></span>
            <span className="text-[#00f2ea] text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">Directly From Pakistan</span>
          </div>
          <h1 className="text-[42px] sm:text-[60px] md:text-[100px] font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter uppercase mb-6 md:mb-8 italic">
            TikTok Par <br className="md:hidden" /> Ghanton <br />
            <span className="text-[#ff0050]">Videos</span> Kyun <br />
            Dekhte Ho?
          </h1>
          <p className="text-xl md:text-4xl font-light text-white/80 max-w-3xl mb-8 md:mb-12 leading-tight border-l-4 border-[#00f2ea] pl-5 md:pl-8">
            Pakistan mae baith kar <span className="text-white font-black italic underline decoration-[#ff0050]">Mahana Hazaron Dollars</span> kamao. <span className="hidden sm:inline">Hum dein ge aap ko 100% Verified USA/UK Monetized Accounts.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#solutions"
              className="bg-[#00f2ea] text-black px-12 py-5 rounded-full font-black text-2xl uppercase italic tracking-tighter shadow-[0_0_40px_rgba(0,242,234,0.4)] hover:shadow-[0_0_60px_rgba(0,242,234,0.6)] transition-all flex items-center justify-center gap-3"
            >
              Learn More <TrendingUp className="w-6 h-6" />
            </motion.a>
            <div className="flex flex-col justify-center text-left">
              <span className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">WhatsApp Per Rabta</span>
              <span className="text-xl font-black text-white tracking-widest">03209486220</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[5%] hidden xl:block"
      >
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 flex items-center justify-center font-bold text-white text-xl">M</div>
            <div>
              <p className="text-white font-bold">TikTok Earning</p>
              <p className="text-green-400 text-sm font-mono tracking-tighter">+$2,450.00 this month</p>
            </div>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-gradient-to-r from-[#ff0050] to-[#00f2ea]"></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      icon: <Globe className="w-8 h-8 text-[#ff0050]" />,
      title: "Monetization Not Available",
      desc: "Pakistan se aam account par Creator Fund ya Creativity Program ka option nahi milta."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00f2ea]" />,
      title: "Shadowban Problems",
      desc: "VPN ka ghalat istemal aap ke account ki reach zero kar deta hai."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "Withdrawal Issues",
      desc: "Dollars bank mae laane ka sahi rasta na hona sab se barri rukawat hai."
    }
  ];

  return (
    <section id="problem" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
              Aap Ko Ye Maslay <br /> <span className="text-white/40 italic">Kyoun Pesh Aatay Hain?</span>
            </h2>
            <p className="text-white/60 text-lg">
              Aam tor par jab aap Pakistan se account banate hain, tu Monetization ka option nahi milta. 
              Hum in tamam mushkilaat ka hal faraham karte hain.
            </p>
          </div>
          <div className="text-right">
             <AlertCircle className="w-16 h-16 text-[#ff0050] inline-block opacity-20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ff0050]/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic">{p.title}</h3>
              <p className="text-white/50 leading-relaxed italic">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Verified Accounts",
      text: "Hum aap ko USA/UK Based 100% Verified TikTok Accounts bana kar dete hain jis par Creator Fund available hota hai."
    },
    {
      number: "02",
      title: "Professional Training",
      text: "Zero se lekar Content Strategy aur Dollar earning tak ki mukammal training faraham karte hain."
    },
    {
      number: "03",
      title: "Payout Guarantee",
      text: "Withdrawal setup hum khud karwaate hain aur dollars direct aap ke Pakistani bank account mae transfer hote hain."
    }
  ];

  return (
    <section id="solutions" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
            Malik Digital Ka <span className="text-[#00f2ea]">Solution</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
          {steps.map((step, i) => (
            <div key={i} className="relative p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
              <div className={`w-16 h-16 rounded-full mb-8 flex items-center justify-center text-2xl font-black italic mx-auto lg:mx-0 shadow-[4px_4px_0px_#fff] ${
                i === 0 ? 'bg-[#00f2ea] text-black shadow-[#ff0050]' : 
                i === 1 ? 'bg-[#ff0050] text-white shadow-[#00f2ea]' : 
                'bg-white text-black shadow-[#ff0050]'
              }`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#ff0050] via-black to-[#00f2ea] p-[1px] rounded-[40px]">
        <div className="bg-[#0a0a0a] rounded-[39px] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f2ea]/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff0050]/10 blur-[100px] rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">
              Abhi Hamara Naya <br /> Batch Shuru Ho Raha Hai!
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Customized support aur guaranteed results ke liye hamare pass seats limited hain. 
              Aaj hi apnay digital safar ka aghaz karein.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/923186512940"
              className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black text-xl uppercase tracking-tighter hover:bg-[#25D366] hover:text-white transition-all shadow-[0_20px_50px_rgba(37,211,102,0.2)]"
            >
              <MessageCircle className="w-8 h-8" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="p-8 bg-white/5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 gap-6">
      <div className="flex items-center gap-4">
        <span className="text-white italic">© 2026 Malik Digital Agency</span>
        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
        <span className="text-gray-600 italic">Pakistan's #1 TikTok Partner</span>
      </div>
      <div className="flex gap-4">
        <span className="text-[#00f2ea]">Monetize</span>
        <span className="text-gray-700">/</span>
        <span className="text-[#ff0050]">Create</span>
        <span className="text-gray-700">/</span>
        <span className="text-white">Earn</span>
      </div>
    </footer>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "Kya Pakistan mae account monetize hota hai?", a: "Ji haan! Lekin us ke liye USA ya UK ka verified account chahiye hota hai jo hum provide karte hain." },
    { q: "Withdrawal kaise milega?", a: "Withdrawal hum khud setup karwa kar dete hain aur aap ke Pakistani bank (like JazzCash/SadaPay/Bank) mae direct transfer hota hai." },
    { q: "Account shadowban tu nahi hoga?", a: "Nahi, kyunke hum VPN ki jagah dedicated setup recommend karte hain jo 100% safe hai." }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 uppercase italic underline decoration-[#ff0050] decoration-4 underline-offset-8">Aksar Puche Janay Walay Sawal</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-white/10 rounded-2xl p-6 bg-white/5 cursor-pointer hover:bg-white/10 transition-all">
              <summary className="list-none flex justify-between items-center font-bold text-lg italic uppercase tracking-tight">
                {faq.q}
                <span className="text-[#00f2ea] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-white/50 italic leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { title: "100% Safe Methods", desc: "Hum sirf wahi tarike istemal karte hain jo TikTok ki terms ke mutabiq hain.", icon: <ShieldCheck className="w-12 h-12" /> },
    { title: "24/7 Direct Support", icon: <MessageCircle className="w-12 h-12" />, desc: "Aap ko kabhi bhi masla ho, hamari team rabte ke liye hazir hai." },
    { title: "Verified Payouts", icon: <DollarSign className="w-12 h-12" />, desc: "Aap ke dollars safe Pakistani bank account mae lane ki zimaydari hamari." }
  ];

  return (
    <section className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">
            Hamain Hi Kyun <span className="text-[#00f2ea]">Chuna Jaye?</span>
          </h2>
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-[#ff0050] bg-white/5 p-4 rounded-2xl">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-2">{f.title}</h3>
                  <p className="text-white/40 leading-relaxed italic">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="aspect-square bg-gradient-to-br from-[#ff0050]/20 to-[#00f2ea]/20 rounded-full blur-[100px] absolute inset-0"></div>
          <div className="relative z-10 border-2 border-white/10 p-12 rounded-[50px] bg-black/40 backdrop-blur-xl">
             <div className="text-8xl font-black text-[#00f2ea] mb-4">98%</div>
             <p className="text-2xl font-black italic uppercase tracking-widest text-white leading-tight">Student Success Rate In Batch #03</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const cards = [
    { name: "Ahmed R.", amount: "$1,240", time: "2 Months", city: "Lahore" },
    { name: "Sara K.", amount: "$2,890", time: "4 Months", city: "Karachi" },
    { name: "Zain U.", amount: "$850", time: "1 Month", city: "Islamabad" }
  ];

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-[80px] font-black text-center italic uppercase leading-none mb-20 tracking-tighter">
          Hamare Students Ki <span className="text-[#00f2ea]">Earnings</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="bg-black border border-white/10 p-10 rounded-[40px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                 <TrendingUp className="w-24 h-24 text-[#00f2ea]" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ff0050] flex items-center justify-center font-black text-xl italic">{card.name[0]}</div>
                <div>
                   <h3 className="font-black italic text-lg uppercase">{card.name}</h3>
                   <p className="text-xs text-white/30 uppercase tracking-widest font-bold">{card.city}</p>
                </div>
              </div>
              <div className="text-5xl font-black text-[#00f2ea] mb-2 tracking-tighter">{card.amount}</div>
              <p className="text-white/40 font-bold uppercase text-xs tracking-[0.3em]">Total Profit In {card.time}</p>
              
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2">
                 <CheckCircle2 className="w-4 h-4 text-green-500" />
                 <span className="text-[10px] font-black text-white/30 uppercase tracking-widest italic">Verified by Malik Digital</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingPlans = () => {
  const plans = [
    { name: "Basic", price: "Contact Us", features: ["USA/UK Verified Account", "Secure Login Guide", "Basic Support"], color: "#fff", accent: "#333" },
    { name: "Professional", price: "Most Popular", features: ["Everything in Basic", "Monetization Training", "Content Growth Secrets", "Direct Payout Setup"], color: "#00f2ea", accent: "#000" },
    { name: "Master Class", price: "Full Agency", features: ["Everything in Pro", "Personal One-to-One Mentor", "Ad Revenue Strategy", "Priority Support"], color: "#ff0050", accent: "#fff" }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-5xl md:text-[100px] font-black italic uppercase leading-none tracking-tighter mb-4">Chunain Apna <span className="text-[#00f2ea]">Rasta</span></h2>
           <p className="text-white/40 uppercase tracking-[0.5em] font-bold">Har Budget Ke Liye Hal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[45px] ${i === 1 ? 'scale-105 shadow-[0_0_50px_rgba(0,242,234,0.2)]' : ''}`}>
              <div className="bg-black rounded-[44px] p-10 h-full flex flex-col">
                <h3 className="text-3xl font-black uppercase italic mb-2" style={{ color: plan.color }}>{plan.name}</h3>
                <div className="text-white/60 font-black uppercase text-xs tracking-widest mb-8">{plan.price}</div>
                <div className="space-y-4 mb-12 flex-1">
                   {plan.features.map((f, j) => (
                     <div key={j} className="flex gap-3 items-center text-sm italic font-medium text-white/70">
                       <CheckCircle2 className="w-5 h-5" style={{ color: plan.color }} /> {f}
                     </div>
                   ))}
                </div>
                <a 
                  href="https://wa.me/923186512940" 
                  className={`py-5 rounded-2xl font-black uppercase italic text-center transition-all ${i === 1 ? 'bg-[#00f2ea] text-black hover:scale-[1.02]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                >
                  Join Karain
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSteps = () => {
  const steps = [
    { title: "Rabta Karain", desc: "Aap humse WhatsApp par rabta karte hain aur apna plan select karte hain." },
    { title: "Setup Ka Aghaz", desc: "Hamari team aap ka verified account aur security setup mukammal karti hai." },
    { title: "Training Shuru", desc: "Aap ko hamari premium monetization training di jati hai taake content viral ho." },
    { title: "Earning Shuru", desc: "Monetization active hone ke baad aap ke account per dollars ana shuru ho jate hain." }
  ];

  return (
    <section className="py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-20 text-[#ff0050]">Kaam Kaise Shuru Karein?</h2>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
           {steps.map((step, i) => (
             <div key={i} className="relative group">
                <div className="text-6xl font-black text-white/5 italic mb-4 group-hover:text-[#00f2ea]/20 transition-colors">0{i+1}</div>
                <h3 className="text-2xl font-black uppercase italic mb-4 text-white">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed italic">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-[15%] -right-8 w-16 h-[2px] bg-white/5"></div>}
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#010101] text-white font-sans selection:bg-[#00f2ea] selection:text-black scroll-smooth flex flex-col relative border-[6px] border-[#00f2ea] md:border-[16px]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Batch Status Badge - Floating or in specific sections */}
        <div className="fixed bottom-24 right-5 md:right-10 z-40 hidden sm:block">
           <div className="flex flex-col gap-2 items-end">
              <div className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase rounded shadow-xl">Limited Seats</div>
              <div className="px-3 py-1 bg-[#ff0050] text-white text-[10px] font-black uppercase rounded shadow-xl animate-pulse">7 Slots Left</div>
           </div>
        </div>

        <ProblemSection />
        <WhyUs />
        <SolutionsSection />
        <ProcessSteps />

        {/* Training Section with Theme's aesthetic */}
        <section id="training" className="py-24 px-6 bg-white/5 backdrop-blur-sm relative overflow-hidden">
           {/* Design Background Blobs */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff0050] opacity-20 blur-[120px] rounded-full"></div>
           
           <div className="max-w-7xl mx-auto border-l-8 border-[#00f2ea] pl-8">
              <span className="text-[#00f2ea] font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Mukammal Rehnumai</span>
              <h2 className="text-5xl md:text-7xl font-black mb-12 italic uppercase tracking-tighter leading-none">
                Zero Se <span className="text-[#ff0050]">Dollar</span> <br /> Tak Ka Safar
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { icon: <Globe />, label: "USA/UK Accounts" },
                   { icon: <ShieldCheck />, label: "Security Setup" },
                   { icon: <GraduationCap />, label: "Expert Training" },
                   { icon: <TrendingUp />, label: "Growth Secrets" }
                 ].map((item, i) => (
                   <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col gap-4 p-8 bg-black border-2 border-white/10 hover:border-[#00f2ea] transition-all rounded-3xl"
                   >
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#00f2ea]">{item.icon}</div>
                      <span className="font-black text-lg tracking-tight uppercase italic">{item.label}</span>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        <SuccessStories />
        <PricingPlans />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
