import React, { useState } from 'react';
import { Activity, Server, GitBranch, RefreshCw, Cpu, Check, Layers, Play } from 'lucide-react';

export const LivePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'edge' | 'rsc' | 'cicd'>('edge');
  
  // State for Edge Performance tab
  const [trafficScale, setTrafficScale] = useState<number>(50); // 10k to 500k req/min
  
  // State for CI/CD simulation
  const [deployStep, setDeployStep] = useState<number>(3); // 0 to 3
  const [isDeploying, setIsDeploying] = useState<boolean>(false);

  const runDeploySimulation = () => {
    setIsDeploying(true);
    setDeployStep(0);
    setTimeout(() => setDeployStep(1), 600);
    setTimeout(() => setDeployStep(2), 1400);
    setTimeout(() => {
      setDeployStep(3);
      setIsDeploying(false);
    }, 2200);
  };

  // State for RSC toggle
  const [rscMode, setRscMode] = useState<'server' | 'client'>('server');

  return (
    <section id="kinerja" className="py-20 border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Interaktif Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Uji Langsung Kecepatan Arsitektur Next.js & Edge Vercel
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Jalankan simulasi komputasi edge, bandingkan efisiensi bundle React Server Components, dan pantau pipeline deployment real-time.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-8 inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('edge')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                activeTab === 'edge'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Vercel Edge Network</span>
            </button>
            <button
              onClick={() => setActiveTab('rsc')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                activeTab === 'rsc'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Next.js 15 Server Components</span>
            </button>
            <button
              onClick={() => setActiveTab('cicd')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                activeTab === 'cicd'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>Simulasi CI/CD Deploy</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Edge Network Simulation */}
        {activeTab === 'edge' && (
          <div className="max-w-4xl mx-auto rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-indigo-400" />
                  <span>Distribusi Global & Respon Edge</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Konten dan Server Actions dijalankan di node CDN terdekat dari pengguna.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                <span className="text-xs text-slate-400">Cache Hit Ratio:</span>
                <span className="text-sm font-mono font-bold text-emerald-400">99.4%</span>
              </div>
            </div>

            {/* Interactive Slider for simulated load */}
            <div className="py-6">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="traffic-slider" className="text-xs font-medium text-slate-300">
                  Simulasi Volume Trafik Pengunjung:
                </label>
                <span className="text-xs font-mono font-bold text-indigo-400 tabular-nums">
                  {(trafficScale * 12).toLocaleString()} requests / menit
                </span>
              </div>
              <input
                id="traffic-slider"
                type="range"
                min="10"
                max="100"
                value={trafficScale}
                onChange={(e) => setTrafficScale(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>120k req/min (Normal)</span>
                <span>600k req/min (Spike)</span>
                <span>1.2M req/min (Viral Launch)</span>
              </div>
            </div>

            {/* Edge Node Latency Benchmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-2">
              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/90">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">Singapore (sin1)</span>
                  <span className="text-emerald-400 font-mono">Utama</span>
                </div>
                <div className="text-2xl font-bold font-mono tabular-nums text-white mt-1">
                  {Math.round(12 + trafficScale * 0.05)}ms
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">TTFB Rata-rata Indonesia & SEA</div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/90">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">Tokyo (hnd1)</span>
                  <span className="text-slate-400 font-mono">Edge Asia</span>
                </div>
                <div className="text-2xl font-bold font-mono tabular-nums text-white mt-1">
                  {Math.round(24 + trafficScale * 0.06)}ms
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Komputasi Edge Terdistribusi</div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/90">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">US East (iad1)</span>
                  <span className="text-slate-400 font-mono">Global</span>
                </div>
                <div className="text-2xl font-bold font-mono tabular-nums text-white mt-1">
                  {Math.round(38 + trafficScale * 0.08)}ms
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Smart Invalidation & CDN</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: RSC vs Traditional Client Component */}
        {activeTab === 'rsc' && (
          <div className="max-w-4xl mx-auto rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Next.js 15 Server Components vs SPA Tradisional
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Server Components me-render HTML murni di server tanpa mengirim bundle JavaScript berat ke browser.
                </p>
              </div>

              {/* Mode toggle */}
              <div className="inline-flex p-1 bg-slate-950 border border-slate-800 rounded-lg">
                <button
                  onClick={() => setRscMode('server')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded ${
                    rscMode === 'server'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Next.js 15 (Server Components)
                </button>
                <button
                  onClick={() => setRscMode('client')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded ${
                    rscMode === 'client'
                      ? 'bg-amber-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Client SPA Konvensional
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Ukuran Bundle JavaScript Awal</div>
                <div className="text-2xl font-bold font-mono tabular-nums text-white">
                  {rscMode === 'server' ? '18.4 KB' : '482.6 KB'}
                </div>
                <div className={`text-xs mt-1 font-medium ${rscMode === 'server' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {rscMode === 'server' ? 'Hemat 96% data download' : 'Beban berat di koneksi 4G/3G'}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">First Contentful Paint (FCP)</div>
                <div className="text-2xl font-bold font-mono tabular-nums text-white">
                  {rscMode === 'server' ? '0.35s' : '1.92s'}
                </div>
                <div className={`text-xs mt-1 font-medium ${rscMode === 'server' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {rscMode === 'server' ? 'Streaming HTML instan' : 'Menunggu eksekusi runtime JS'}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Indeks SEO & Google Bot</div>
                <div className="text-2xl font-bold font-mono tabular-nums text-white">
                  {rscMode === 'server' ? '100% Siap' : 'Bertahap'}
                </div>
                <div className={`text-xs mt-1 font-medium ${rscMode === 'server' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {rscMode === 'server' ? 'Langsung terbaca bot crawler' : 'Rentan delay indexing'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CI/CD Pipeline Simulator */}
        {activeTab === 'cicd' && (
          <div className="max-w-4xl mx-auto rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Simulasi Otomatisasi Deploy Vercel
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Tiap kali Anda push git commit, Vercel otomatis mem-build dan menyediakan URL preview instan.
                </p>
              </div>

              <button
                onClick={runDeploySimulation}
                disabled={isDeploying}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
              >
                {isDeploying ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Memproses Build...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Jalankan Uji Deploy</span>
                  </>
                )}
              </button>
            </div>

            {/* Stepper Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-6">
              <div className={`p-3.5 rounded-lg border transition-all ${
                deployStep >= 0 ? 'bg-slate-950 border-indigo-500/50' : 'bg-slate-950/40 border-slate-800 text-slate-500'
              }`}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono">01. Git Push</span>
                  {deployStep > 0 && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-xs text-slate-300 font-mono">commit #a83f9c</div>
                <div className="text-[11px] text-slate-400 mt-1">Trigger webhook otomatis</div>
              </div>

              <div className={`p-3.5 rounded-lg border transition-all ${
                deployStep >= 1 ? 'bg-slate-950 border-indigo-500/50' : 'bg-slate-950/40 border-slate-800 text-slate-500'
              }`}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono">02. Turbo Build</span>
                  {deployStep > 1 && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-xs text-slate-300 font-mono">next build (14.2s)</div>
                <div className="text-[11px] text-slate-400 mt-1">Kompilasi RSC & Route Trees</div>
              </div>

              <div className={`p-3.5 rounded-lg border transition-all ${
                deployStep >= 2 ? 'bg-slate-950 border-indigo-500/50' : 'bg-slate-950/40 border-slate-800 text-slate-500'
              }`}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono">03. Edge Propagate</span>
                  {deployStep > 2 && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-xs text-slate-300 font-mono">300+ Edge Nodes</div>
                <div className="text-[11px] text-slate-400 mt-1">Zero-downtime hot reload</div>
              </div>

              <div className={`p-3.5 rounded-lg border transition-all ${
                deployStep >= 3 ? 'bg-emerald-950/30 border-emerald-500/50' : 'bg-slate-950/40 border-slate-800 text-slate-500'
              }`}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono text-emerald-400">04. Live Ready</span>
                  {deployStep >= 3 && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-xs text-emerald-300 font-mono">app-production.vercel.app</div>
                <div className="text-[11px] text-slate-400 mt-1">Sertifikat SSL aktif otomatis</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
