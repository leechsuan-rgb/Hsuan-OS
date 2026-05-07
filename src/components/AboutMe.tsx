import { motion } from 'motion/react';

interface AboutMeProps {
  t: any;
}

export default function AboutMe({ t }: AboutMeProps) {
  return (
    <div id="about" className="bento-card border border-gray-100 shadow-sm flex flex-col justify-center h-full">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 block">About Me</span>
      <p className="text-gray-600 font-medium leading-relaxed text-sm lg:text-base">
        {t.hero.intro}
      </p>
    </div>
  );
}
