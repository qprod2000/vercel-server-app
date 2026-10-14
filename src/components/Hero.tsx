import React from 'react';
import { UserPlus, ArrowRight, HardDrive, Database, Globe, Shield, Terminal } from 'lucide-react';
import { SERVER_STATS } from '../data/serverFacilities.ts';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreFacilities: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onExploreFacilities }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-900">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-indigo-900/15 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Unboxed Metadata Kicker (Anti-slop: clean text with dot separators) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Server Online</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>{SERVER_STATS.hostname}</span>
          <span aria-hidden="true">·</span>
          <span>Uptime: {SERVER_STATS.uptimePercent} ({SERVER_STATS.uptimeDays} hari)</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-300">{SERVER_STATS.location}</span>
        </div>

        {/* Main Title & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
            Halaman Muka &amp; Pusat Layanan Server Cloud Terpadu
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Daftarkan akun pengguna Anda untuk mendapatkan akses instan ke seluruh fasilitas yang beroperasi di server cloud ini: instalasi WordPress mandiri, penyimpanan Cloud Drive pribadi, database berkecepatan tinggi, dan runtime aplikasi.
          </p>
        </div>

        {/* Action Decision Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-98 rounded-lg shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Daftar Akun Pengguna Baru</span>
          </button>

          <button
            onClick={onExploreFacilities}
            className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Katalog Seluruh Fasilitas Server</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Integrated App Spotlight */}
        <div className="max-w-5xl mx-auto mb-8 p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300">
              Aplikasi Unggulan Terintegrasi: <span className="font-semibold text-white">Storyboard AI Studio</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="font-mono text-indigo-400 hidden sm:inline">storyboard-ai-taupe.vercel.app</span>
          </div>
          <a
            href="https://storyboard-ai-taupe.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1 shrink-0"
          >
            <span>Luncurkan Storyboard AI</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Primary Facilities Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/50 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 flex items-center justify-center mb-3">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-sm font-bold text-white mb-1">WordPress Hosting</div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Instalasi CMS 1-klik, SSL otomatis, PHP 8.3 &amp; Redis Object Cache.
              </div>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-3 pt-2 border-t border-slate-800">
              Status: Aktif &amp; Siap
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/50 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center mb-3">
                <HardDrive className="w-4 h-4" />
              </div>
              <div className="text-sm font-bold text-white mb-1">Cloud Drive &amp; WebDAV</div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Nextcloud storage terenkripsi, sinkronisasi file desktop &amp; smartphone.
              </div>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-3 pt-2 border-t border-slate-800">
              Status: Aktif &amp; Siap
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/50 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mb-3">
                <Database className="w-4 h-4" />
              </div>
              <div className="text-sm font-bold text-white mb-1">Database Engine</div>
              <div className="text-xs text-slate-400 leading-relaxed">
                MariaDB &amp; PostgreSQL dengan UI phpMyAdmin / pgAdmin.
              </div>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-3 pt-2 border-t border-slate-800">
              Status: Port 3306 / 5432
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/50 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-800/60 text-amber-400 flex items-center justify-center mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="text-sm font-bold text-white mb-1">Docker &amp; Node.js</div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Portainer Container manager, Next.js / Express, dan Git internal.
              </div>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-3 pt-2 border-t border-slate-800">
              Status: Runtime Siap
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
