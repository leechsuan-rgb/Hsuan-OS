import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FunFactsProps {
  t: any;
}

export default function FunFacts({ t }: FunFactsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="funfacts" className="bento-card border border-gray-100 shadow-sm flex flex-col h-full bg-white relative overflow-hidden">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-2">{t.funFacts.sub}</span>
      <h2 className="text-2xl font-black text-brand-dark mb-6 tracking-tighter">{t.funFacts.title}</h2>
      
      <div className="flex flex-col gap-3 mt-auto">
        {t.funFacts.items.map((item: any, index: number) => (
          <div 
            key={index} 
            className={`border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
              openIndex === index ? 'border-brand-blue/30 bg-brand-blue/5' : 'border-gray-100 bg-gray-50 hover:border-gray-200'
            }`}
            onClick={() => toggle(index)}
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-4 h-4 ${openIndex === index ? 'text-brand-blue' : 'text-gray-400'}`} />
                <span className={`text-sm font-bold ${openIndex === index ? 'text-brand-dark' : 'text-gray-600'}`}>
                  {item.q}
                </span>
              </div>
              <ChevronDown 
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </div>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-4 pb-4 pt-1 ml-7 flex items-center">
                    <span className="text-sm font-black text-brand-blue tracking-wider">{item.a}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
        <div className="text-[150px] font-black italic">?</div>
      </div>
    </div>
  );
}
