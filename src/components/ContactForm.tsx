import { useState, FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  t: any;
}

export default function ContactForm({ t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const scriptUrl =
        'https://script.google.com/macros/s/AKfycbz8LwFVpaG406kksSDYliFthXc5VT13GoaRbcJCpqdyn9VvyZszfyNWLTuhGftR1iPm/exec';

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      setStatus('success');

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('發送失敗，請稍後再試或直接聯絡 leechsuan@gmail.com');
      setStatus('idle');
    }
  };

  return (
    <div
      id="contact"
      className="bg-gray-50 bento-card border border-gray-200 shadow-inner overflow-hidden h-full"
    >
      <AnimatePresence mode="wait">
        {status !== 'success' ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">
              Collaboration
            </span>

            <h3 className="text-xl font-black text-brand-dark mb-4 italic tracking-tighter">
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 mt-auto">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.contact.name}
                type="text"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 font-bold"
              />

              <input
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.contact.email}
                type="email"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 font-bold"
              />

              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.contact.message}
                rows={3}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 resize-none font-bold"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-brand-blue text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : t.contact.send}
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

            <h3 className="text-xl font-bold text-brand-dark">
              {t.contact.success}
            </h3>

            <button
              onClick={() => setStatus('idle')}
              className="text-xs font-bold text-brand-blue mt-4 uppercase"
            >
              Reset
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}