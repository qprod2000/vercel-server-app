import React, { useState } from 'react';
import { ACCESS_GUIDES } from '../data/serverFacilities.ts';
import { ChevronDown, BookOpen, HelpCircle } from 'lucide-react';

export const AccessGuideSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('wp-guide');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="panduan" className="py-20 border-b border-slate-900 bg-slate-950/70">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Dokumentasi &amp; Bantuan Teknis
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Panduan Menggunakan Fasilitas Server Cloud
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Instruksi cara mengakses situs WordPress, menghubungkan Cloud Drive, dan setting domain kustom.
          </p>
        </div>

        <div className="space-y-3.5">
          {ACCESS_GUIDES.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900/70 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
