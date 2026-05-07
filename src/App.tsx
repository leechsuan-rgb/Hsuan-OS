/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Capability from './components/Capability';
import ContactForm from './components/ContactForm';
import { translations } from './translations';

import FunFacts from './components/FunFacts';

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const t = translations[lang];

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main className="pt-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-dense gap-6">
          {/* Top Left: Hero Card (8 cols) */}
          <div className="md:col-span-8 md:row-span-1">
            <BentoGrid t={t} />
          </div>

          {/* About Me Section (8 cols) */}
          <div className="md:col-span-8 md:row-span-1">
            <AboutMe t={t} />
          </div>

          {/* Sidebar Right: Experience (4 cols, full height on md) - Note: row-span-4 to cover all 4 rows on the left */}
          <div className="md:col-span-4 md:row-span-4">
            <Experience t={t} />
          </div>

          {/* Row 3 on the Left: Capability */}
          <div className="md:col-span-8 md:row-span-1">
             <Capability t={t} />
          </div>
          
          {/* Row 4 on the Left: FunFacts & ContactForm */}
          <div className="md:col-span-5 md:row-span-1">
             <FunFacts t={t} />
          </div>
          <div className="md:col-span-3 md:row-span-1">
             <ContactForm t={t} />
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-bold text-gray-400 tracking-widest uppercase italic">
            © 2026 Cheng-Hsuan Lee. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="https://superlaty.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest text-brand-dark hover:text-brand-blue transition-colors">Superlaty</a>
            <a href="mailto:leechsuan@gmail.com" className="text-xs font-black uppercase tracking-widest text-brand-dark hover:text-brand-blue transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/lcxuan" target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest text-brand-dark hover:text-brand-blue transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
