import React from 'react';
import { TESTIMONIALS } from '../data/landingData.ts';
import { Quote } from 'lucide-react';

export const MetricsAndTestimonials: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Bukti & Dampak Nyata
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Dipercaya oleh Tim Engineering untuk Skalabilitas Produk Cepat
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Berikut adalah hasil nyata yang diraih oleh perusahaan yang beralih ke arsitektur Next.js di platform cloud modern.
          </p>
        </div>

        {/* Quantified Metrics Highlight Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <div className="text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mb-2">
              +48%
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">
              Peningkatan Konversi Pengunjung
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Hasil dari pengurangan Core Web Vitals LCP dari 3.8s ke 0.6s pada 30 hari pertama pasca-rilis.
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <div className="text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mb-2">
              5x
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">
              Frekuensi Rilis Fitur Baru
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Otomatisasi preview URL dari setiap GitHub pull request memangkas siklus review QA dari berhari-hari menjadi menit.
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <div className="text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mb-2">
              99.99%
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">
              Ketersediaan Layanan Tanpa Downtime
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Penyebaran multi-region global memastikan trafik dialihkan otomatis jika ada gangguan edge lokal.
            </div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-slate-800 bg-slate-900/30 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-indigo-400/60 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{item.author}</div>
                  <div className="text-xs text-slate-400">
                    {item.role} · {item.company}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-bold font-mono text-indigo-400 tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-[10px] text-slate-400">{item.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
