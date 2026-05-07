import { Globe } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
  t: any;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl">
      <div className="bg-white rounded-full px-8 py-4 shadow-sm border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-brand-dark/10">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.hero.name)}&background=random&color=fff&size=128`;
              }}
            />
          </div>
          <span className="font-bold tracking-tight text-lg hidden sm:block">Hsuan OS</span>
        </div>
        
        <div className="flex items-center gap-8 font-semibold text-sm">
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="hover:text-brand-blue transition-colors uppercase tracking-widest">{t.nav.experience}</a>
            <a href="#capability" className="hover:text-brand-blue transition-colors uppercase tracking-widest">{t.nav.capability}</a>
            <a href="#contact" className="hover:text-brand-blue transition-colors uppercase tracking-widest">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 text-xs font-bold">
            <span 
              onClick={() => setLang('en')}
              className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-brand-blue' : 'text-gray-400 hover:text-gray-600'}`}
            >
              EN
            </span>
            <span className="text-gray-300">|</span>
            <span 
              onClick={() => setLang('zh')}
              className={`cursor-pointer transition-colors ${lang === 'zh' ? 'text-brand-blue' : 'text-gray-400 hover:text-gray-600'}`}
            >
              中
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
