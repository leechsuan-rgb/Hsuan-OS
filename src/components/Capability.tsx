import { motion } from 'motion/react';
import { Target, Zap, Waves } from 'lucide-react';

interface CapabilityProps {
  t: any;
}

export default function Capability({ t }: CapabilityProps) {
  return (
    <div id="capability" className="bento-card border border-gray-100 shadow-sm flex flex-col h-full">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Achievements</span>
      <h2 className="text-2xl font-black text-brand-dark mb-4 tracking-tighter">{t.honors.title}</h2>
      <p className="text-gray-600 font-medium leading-relaxed text-sm mb-6 flex-grow">{t.honors.desc}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
        {t.honors.items.map((item: any, index: number) => (
          <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-2">
            {item.image && (
              <div className="w-full h-32 md:h-40 overflow-hidden rounded-lg mb-1">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <span className="text-[11px] font-black tracking-widest uppercase text-brand-dark">
              {item.title}
            </span>
            <p className="text-gray-500 text-[11px] font-medium leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
