import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, ShieldCheck, Terminal, Globe, HardDrive, Database } from 'lucide-react';
import { ServerFacility } from '../data/serverFacilities.ts';

interface ServiceLaunchpadModalProps {
  facility: ServerFacility | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceLaunchpadModal: React.FC<ServiceLaunchpadModalProps> = ({
  facility,
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !facility) return null;

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText(facility.loginUrlExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800 mb-5">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-semibold">{facility.badge}</span>
            <h3 className="text-xl font-bold text-white mt-0.5">{facility.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {facility.fullDesc}
          </p>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-slate-400">Endpoint / URL Akses:</div>
            <div className="flex items-center justify-between gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-mono text-xs text-white">
              <span className="truncate">{facility.loginUrlExample}</span>
              <button
                onClick={handleCopyEndpoint}
                className="text-slate-400 hover:text-white p-1 rounded"
                title="Salin URL"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Protokol: {facility.protocol} · {facility.portOrEndpoint}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-900/50 flex items-start gap-2.5 text-xs text-indigo-200">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Petunjuk Login: </span>
              Gunakan username dan kata sandi yang telah Anda daftarkan di form pendaftaran frontpage ini untuk autentikasi SSO (Single Sign-On).
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Tutup
          </button>
          <a
            href={facility.loginUrlExample}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all"
          >
            <span>Kunjungi Halaman Layanan</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
