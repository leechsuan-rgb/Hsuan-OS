import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  t: any;
}

export default function ContactForm({ t }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div id="contact" className="bg-gray-50 bento-card border border-gray-200 shadow-inner overflow-hidden h-full">
      <AnimatePresence mode="wait">
        {status !== 'success' ? (
          <motion.div 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Collaboration</span>
            <h3 className="text-xl font-black text-brand-dark mb-4 italic tracking-tighter">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-3 mt-auto">
              <input required placeholder={t.contact.name} type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 font-bold" />
              <input required placeholder={t.contact.email} type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 font-bold" />
              <textarea placeholder={t.contact.message} rows={1} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 resize-none font-bold" />
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-brand-blue text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
              >
                {status === 'sending' ? '...' : t.contact.send}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center"
          >
            <CheckCircle className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-brand-dark">{t.contact.success}</h3>
            <button onClick={() => setStatus('idle')} className="text-xs font-bold text-brand-blue mt-4 uppercase">Reset</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
