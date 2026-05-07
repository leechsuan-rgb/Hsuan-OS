import { motion } from 'motion/react';

interface ExperienceProps {
  t: any;
}

export default function Experience({ t }: ExperienceProps) {
  return (
    <div id="experience" className="dark-card p-10 md:p-12 shadow-2xl h-full flex flex-col">
      <div className="flex flex-col mb-10">
         <span className="text-white/40 font-black tracking-widest text-[10px] uppercase mb-2 block">Professional Journey</span>
         <h2 className="text-3xl font-black text-white tracking-tighter">Work Experience</h2>
      </div>

      <div className="space-y-8 flex-grow">
        {t.experience.items.map((item: any, index: number) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`pl-6 border-l-2 ${index === 0 ? 'border-brand-blue' : 'border-gray-800'}`}
            >
              <div className="flex items-center gap-3 mb-1">
                {item.logo && (
                  <div className="w-8 h-8 rounded-md overflow-hidden bg-[#0B0B0F] shrink-0">
                    <img src={item.logo} alt={`${item.company} logo`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
                <h3 className="text-xl font-black">{item.company}</h3>
              </div>
              <p className={`${index === 0 ? 'text-brand-blue' : 'text-gray-400'} font-bold text-[10px] uppercase tracking-widest mb-3`}>{item.role}</p>
              <p className="text-gray-500 font-medium leading-relaxed text-xs">{item.desc}</p>
              {item.bullets && (
                <ul className="list-disc list-inside text-gray-500 text-xs mt-2 space-y-1 font-medium">
                  {item.bullets.map((bullet: string, i: number) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
              {item.capabilities && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.capabilities.map((cap: string, i: number) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-white/70 font-bold text-[9px] uppercase tracking-wider"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
