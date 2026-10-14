import React, { useState } from 'react';
import { PRICING_TIERS, PricingTier } from '../data/landingData.ts';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: PricingTier, isAnnual: boolean) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const formatRupiah = (val: number) => {
    if (val === 0) return 'Gratis';
    return `Rp ${val.toLocaleString('id-ID')}`;
  };

  return (
    <section id="harga" className="py-24 border-t border-slate-900 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Paket & Investasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Harga Transparan, Skalakan Sesuai Kebutuhan
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Mulai dari gratis untuk prototipe hingga paket enterprise dengan SLA kustom. Tidak ada biaya tersembunyi.
          </p>

          {/* Billing Switcher (Interactive Segmented Control) */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                !isAnnual
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tagihan Bulanan
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Tagihan Tahunan</span>
              <span className="text-[10px] bg-emerald-950/80 text-emerald-300 px-1.5 py-0.5 rounded font-mono font-bold border border-emerald-800/80">
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
            const isPopular = tier.popular;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'border-2 border-indigo-500 bg-slate-900/80 shadow-2xl shadow-indigo-950/50 relative'
                    : 'border border-slate-800 bg-slate-900/40'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Paling Direkomendasikan
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  </div>
                  
                  <p className="text-xs text-slate-400 min-h-[36px] mb-6">
                    {tier.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                        {formatRupiah(price)}
                      </span>
                      {price > 0 && (
                        <span className="text-xs text-slate-400">/ bulan</span>
                      )}
                    </div>
                    {isAnnual && price > 0 && (
                      <div className="text-[11px] text-slate-400 mt-1 font-mono">
                        Ditagih tahunan (Rp {(price * 12).toLocaleString('id-ID')} / tahun)
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Fasilitas Termasuk:
                    </div>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(tier, isAnnual)}
                  className={`w-full py-3 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    isPopular
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
