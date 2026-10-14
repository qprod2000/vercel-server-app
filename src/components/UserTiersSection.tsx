import React from 'react';
import { USER_TIERS, UserTier } from '../data/serverFacilities.ts';
import { Check, ArrowRight, HardDrive } from 'lucide-react';

interface UserTiersSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const UserTiersSection: React.FC<UserTiersSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="kuota" className="py-20 border-b border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Alokasi Sumber Daya Server
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pilihan Alokasi Kuota Pengguna
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Pilih alokasi ruang penyimpanan NVMe dan fasilitas yang sesuai dengan kebutuhan Anda saat mendaftar akun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USER_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                tier.recommended
                  ? 'border-2 border-indigo-500 bg-slate-900/90 shadow-xl shadow-indigo-950/40 relative'
                  : 'border border-slate-800 bg-slate-900/40'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Paling Banyak Dipilih
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm font-semibold mb-4">
                  <HardDrive className="w-4 h-4" />
                  <span>{tier.quotaStorage}</span>
                </div>

                <div className="text-xs text-slate-400 pb-4 border-b border-slate-800 mb-5">
                  Trafik Jaringan: <span className="text-slate-200 font-semibold">{tier.bandwidth}</span>
                </div>

                <div className="space-y-2.5 mb-8">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectTier(tier.id)}
                className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  tier.recommended
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                <span>Daftar dengan Kuota Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
