import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PricingTier } from '../data/landingData.ts';

interface PlanModalProps {
  plan: PricingTier | null;
  isAnnual: boolean;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const PlanModal: React.FC<PlanModalProps> = ({
  plan,
  isAnnual,
  isOpen,
  onClose,
  onConfirm
}) => {
  if (!isOpen || !plan) return null;

  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <h3 className="text-lg font-bold text-white">Konfirmasi Paket Pilihan</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
            <div>
              <div className="text-base font-bold text-white">{plan.name}</div>
              <div className="text-xs text-slate-400">{isAnnual ? 'Paket Tahunan (Diskon 20%)' : 'Paket Bulanan'}</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold font-mono text-emerald-400">
                {price === 0 ? 'Gratis' : `Rp ${price.toLocaleString('id-ID')}`}
              </div>
              <div className="text-[11px] text-slate-400">{price === 0 ? 'Selamanya' : '/ bulan'}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-300">Termasuk dalam paket ini:</div>
            {plan.features.slice(0, 4).map((f, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-900/50 text-xs text-indigo-300 leading-relaxed">
            Deployment Vercel dapat langsung dikonfigurasi setelah pendaftaran atau menggunakan akun GitHub yang telah ada.
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Kembali
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all"
          >
            <span>Lanjutkan Setup Proyek</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
