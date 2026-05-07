import { motion } from 'motion/react';
import Counter from './Counter';
import { Award, Building2, TrendingUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

interface BentoGridProps {
  t: any;
}

export default function BentoGrid({ t }: BentoGridProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-10 bg-brand-blue rounded-3xl text-white flex flex-col justify-between overflow-hidden relative group min-h-[400px]"
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-2xl relative bg-brand-dark/50"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    /* Fallback if user hasn't uploaded image yet */
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.hero.name)}&background=random&color=fff&size=128`;
                  }}
                />
              </motion.div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70 block">Executive Profile</span>
            </div>

            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/lcxuan" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white backdrop-blur-sm border border-white/10">
                <Linkedin size={18} />
              </a>
              <a href="mailto:leechsuan@gmail.com" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white backdrop-blur-sm border border-white/10">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter"
          >
            <div>{t.hero.name}</div>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-bold opacity-90"
          >
            {t.hero.tagline}
          </motion.p>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-4 relative z-10 w-full">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex-1 min-w-[150px]">
            <div className="text-3xl font-black mb-1">
              <Counter value={429032} prefix="USD " />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">{t.kpi.valuation}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex-1 min-w-[150px]">
            <div className="text-3xl font-black mb-1">
              <Counter value={20} suffix="+" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">{t.kpi.awards}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex-1 min-w-[150px]">
            <div className="text-3xl font-black mb-1">
              <Counter value={40} suffix="+" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">{t.kpi.brand}</div>
          </div>
        </div>
      </div>

      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
    </motion.div>
  );
}
