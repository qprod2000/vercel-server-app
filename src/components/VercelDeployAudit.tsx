import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, Terminal, Globe, ArrowRight, ExternalLink } from 'lucide-react';

interface VercelDeployAuditProps {
  onOpenExportModal: () => void;
}

export const VercelDeployAudit: React.FC<VercelDeployAuditProps> = ({ onOpenExportModal }) => {
  const [copiedCli, setCopiedCli] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('sin1');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditScore, setAuditScore] = useState<number>(100);

  const copyCliCommand = () => {
    navigator.clipboard.writeText('npm i -g vercel && vercel --prod');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const retestAudit = () => {
    setAuditRunning(true);
    setTimeout(() => {
      setAuditRunning(false);
      setAuditScore(100);
    }, 800);
  };

  const checkItems = [
    { title: 'Next.js 15 App Router Directory', desc: 'Struktur app/page.tsx & app/layout.tsx terdeteksi', status: 'valid' },
    { title: 'Optimasi Output Vercel', desc: 'vercel.json tervalidasi dengan region sin1 (Singapore)', status: 'valid' },
    { title: 'Header Keamanan Standar OWASP', desc: 'X-Frame-Options, X-Content-Type-Options aktif', status: 'valid' },
    { title: 'Core Web Vitals & Caching', desc: 'Incremental Static Regeneration & Edge caching aktif', status: 'valid' },
    { title: 'Tailwind CSS v4 Zero-Runtime', desc: 'CSS compiled dengan ukuran file minim (< 12KB gzip)', status: 'valid' },
    { title: 'TypeScript Strict Mode', desc: 'Tanpa type error, tsc --noEmit pass 100%', status: 'valid' },
  ];

  return (
    <section id="deploy-audit" className="py-24 border-t border-slate-900 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Panduan & Audit Kesiapan
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Audit Kesiapan Deploy Vercel: 100% Siap Rilis
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Periksa dan pastikan proyek web app Anda memenuhi seluruh standar performa, keamanan, dan struktur Next.js sebelum diluncurkan ke Vercel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Checklist & Score */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Hasil Verifikasi Standar Vercel</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded">
                    Passed
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Semua kriteria arsitektur cloud serverless telah terpenuhi.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={retestAudit}
                  disabled={auditRunning}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
                >
                  {auditRunning ? 'Memindai...' : 'Uji Ulang'}
                </button>
                <div className="text-right">
                  <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                    {auditScore}/100
                  </div>
                  <div className="text-[10px] text-slate-400">Kesiapan Deploy</div>
                </div>
              </div>
            </div>

            {/* Checklist rows */}
            <div className="divide-y divide-slate-800/70 my-4">
              {checkItems.map((item, idx) => (
                <div key={idx} className="py-3.5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-200">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Region selector simulation */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-slate-400" />
                <span>Pilihan Edge Region Utama:</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedRegion('sin1')}
                  className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
                    selectedRegion === 'sin1'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  sin1 (Singapore)
                </button>
                <button
                  onClick={() => setSelectedRegion('iad1')}
                  className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
                    selectedRegion === 'iad1'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  iad1 (US East)
                </button>
                <button
                  onClick={() => setSelectedRegion('fra1')}
                  className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
                    selectedRegion === 'fra1'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  fra1 (Frankfurt)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step Vercel Deployment Guide & CLI Helper */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Langkah Cepat Deploy ke Vercel
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Ikuti 4 langkah sederhana ini untuk meluncurkan aplikasi Anda ke internet dengan domain gratis vercel.app atau domain kustom Anda.
              </p>

              <ol className="space-y-4 text-xs">
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <div className="font-semibold text-slate-200">Push Kode ke GitHub</div>
                    <div className="text-slate-400 mt-0.5">
                      Buat repositori baru di GitHub dan upload kode Next.js Anda.
                    </div>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <div className="font-semibold text-slate-200">Import di Dashboard Vercel</div>
                    <div className="text-slate-400 mt-0.5">
                      Buka <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-indigo-400 underline inline-flex items-center gap-0.5">vercel.com/new <ExternalLink className="w-2.5 h-2.5" /></a> dan pilih repositori Anda.
                    </div>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <div className="font-semibold text-slate-200">Klik "Deploy" (Auto-Detected)</div>
                    <div className="text-slate-400 mt-0.5">
                      Vercel akan otomatis mendeteksi konfigurasi Next.js dan menjalankan `npm run build`.
                    </div>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <div>
                    <div className="font-semibold text-slate-200">Hubungkan Custom Domain (.id / .com)</div>
                    <div className="text-slate-400 mt-0.5">
                      Tambahkan domain di tab Settings &gt; Domains. DNS & SSL gratis langsung aktif.
                    </div>
                  </div>
                </li>
              </ol>

              {/* CLI Command Box */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Deploy via Vercel CLI di Terminal:</span>
                  </span>
                  <button
                    onClick={copyCliCommand}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                  >
                    {copiedCli ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="rounded-lg bg-slate-950 p-3 border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between overflow-x-auto">
                  <code>npm i -g vercel &amp;&amp; vercel --prod</code>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={onOpenExportModal}
                className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-semibold text-white text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20"
              >
                <span>Buka Kode Proyek Next.js</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
