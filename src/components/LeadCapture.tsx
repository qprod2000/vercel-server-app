import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [frameworkInterest, setFrameworkInterest] = useState('nextjs-app-router');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Mohon isi nama lengkap Anda.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Mohon masukkan format email yang valid.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-24 border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div 
            className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" 
            aria-hidden="true" 
          />

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Pendaftaran Berhasil Terkirim!
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
                Terima kasih, <span className="text-white font-semibold">{name}</span>. Kami telah mengirimkan panduan arsitektur Next.js 15 dan checklist deploy Vercel ke email <span className="text-white font-mono">{email}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail('');
                  setName('');
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Kirim untuk Tim / Project Lain
              </button>
            </div>
          ) : (
            <div>
              <div className="max-w-2xl mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                  Siap Meluncurkan Aplikasi Anda?
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Mulai Rilis Web App Next.js di Vercel Hari Ini
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Dapatkan akses template awal, panduan konfigurasi domain kustom, serta bonus checklist audit performa gratis.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 text-xs bg-rose-950/70 border border-rose-800/80 text-rose-300 rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Nama Lengkap Anda
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="contoh: Budi Santoso"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Alamat Email Kerja / Personal
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="budi@startup.id"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Fokus Proyek yang Ingin Dideploy di Vercel
                  </label>
                  <select
                    value={frameworkInterest}
                    onChange={(e) => setFrameworkInterest(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="nextjs-app-router">Next.js 15 App Router & Server Components</option>
                    <option value="saas-dashboard">SaaS Web Application & User Auth</option>
                    <option value="ecommerce-web">E-Commerce & High-Traffic Storefront</option>
                    <option value="company-portfolio">Company Profile & High SEO Landing Page</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white text-xs font-semibold rounded-lg shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Mengirim Data...</span>
                    ) : (
                      <>
                        <span>Dapatkan Akses &amp; Panduan Deploy</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2">
                  <span>Privasi 100% terjaga</span>
                  <span aria-hidden="true">·</span>
                  <span>Tanpa kartu kredit</span>
                  <span aria-hidden="true">·</span>
                  <span>Bisa berhenti kapan saja</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
