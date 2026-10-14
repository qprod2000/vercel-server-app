import React from 'react';
import { Layers, Rocket, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';

interface CapabilitiesBentoProps {
  onOpenAudit: () => void;
}

export const CapabilitiesBento: React.FC<CapabilitiesBentoProps> = ({ onOpenAudit }) => {
  return (
    <section id="fitur" className="py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Kapabilitas Inti
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Fondasi Lengkap untuk Web App yang Siap Bersaing di Tingkat Dunia
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Kombinasi Next.js 15 dan Vercel memberikan performa standar industri tanpa harus mengelola server Linux, konfigurasi Nginx rumit, atau sertifikat SSL manual.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 01: Next.js 15 App Router & Server Components (col-span-7) */}
          <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold font-mono text-indigo-400">01. Arsitektur Modern</span>
                <div className="text-xs text-slate-400 font-mono">React 19 & Next.js 15</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                React Server Components & Streaming SSR
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Render halaman secara asinkron langsung dari edge server. Komponen data berat dieksekusi di server, memangkas payload JavaScript klien hingga 90% dan mengeliminasi masalah loading spinner bertumpuk (waterfall loading).
              </p>

              {/* Code preview snippet */}
              <div className="rounded-lg bg-slate-950 p-4 border border-slate-800/80 font-mono text-xs text-slate-300 mb-6 overflow-x-auto">
                <div className="text-slate-400 mb-1">// app/dashboard/page.tsx (Server Component)</div>
                <div><span className="text-indigo-400">export default async function</span> DashboardPage() {'{'}</div>
                <div className="pl-4 text-emerald-400">const data = await getLiveMetrics(); // zero client waterfall</div>
                <div className="pl-4 text-slate-300">return &lt;<span className="text-cyan-400">DashboardView</span> metrics={'{'}data{'}'} /&gt;;</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <span>Zero-bundle Server Actions</span>
              <span aria-hidden="true">·</span>
              <span>Partial Prerendering (PPR)</span>
              <span aria-hidden="true">·</span>
              <span>Turbopack Engine</span>
            </div>
          </div>

          {/* Card 02: 1-Klik Deploy ke Vercel Edge (col-span-5 with Visual Image) */}
          <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden flex flex-col">
            <div className="relative h-48 sm:h-56 bg-slate-950 overflow-hidden">
              <img
                src="/src/assets/images/feature_edge_deployment_1791960894723.jpg"
                alt="Global Edge Server Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-xs font-bold text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                02. Global Edge CDN
              </div>
            </div>

            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  1-Klik Deploy Otomatis ke Vercel
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Cukup hubungkan repositori GitHub Anda. Setiap branch atau pull request langsung mendapatkan URL staging khusus dengan proteksi password dan SSL otomatis.
                </p>
              </div>

              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors pt-2"
              >
                <span>Lihat Panduan Integrasi Vercel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 03: Observabilitas & Kinerja Web Vitals (col-span-5 with Visual Image) */}
          <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden flex flex-col">
            <div className="relative h-48 sm:h-56 bg-slate-950 overflow-hidden">
              <img
                src="/src/assets/images/feature_modern_analytics_1791960894377.jpg"
                alt="Developer monitoring Web Vitals performance"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-xs font-bold text-emerald-300 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                03. Real-Time Telemetry
              </div>
            </div>

            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Core Web Vitals & Analytics Terintegrasi
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Lacak metrik LCP (Largest Contentful Paint), FID, dan CLS dari pengunjung asli secara real-time. Pantau bottleneck tanpa perlu memasang skrip pelacak pihak ketiga yang lambat.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-emerald-400 pt-4">
                <span>LCP: 0.8s</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span>CLS: 0.00</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span>INP: 28ms</span>
              </div>
            </div>
          </div>

          {/* Card 04: Keamanan & Skalabilitas Enterprise (col-span-7) */}
          <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold font-mono text-indigo-400">04. Keamanan & Skalabilitas</span>
                <div className="text-xs text-slate-400 font-mono">DDoS Protection & SOC2</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Infrastruktur Tanpa Server yang Siap Melejit
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Layanan menangani lonjakan trafik secara elastis tanpa risiko server down atau kehabisan memori. Dilengkapi perlindungan mitigasi bot jahat, firewall WAF di level edge, dan enkripsi TLS 1.3 default.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-200 mb-1">Skalabilitas Instan ke Nol</div>
                  <p className="text-xs text-slate-400">
                    Tidak ada biaya komputasi saat aplikasi tidak menerima request. Hemat biaya infrastruktur hingga 70%.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-200 mb-1">Isolasi Edge Serverless</div>
                  <p className="text-xs text-slate-400">
                    Setiap request dieksekusi dalam runtime V8 sandbox yang terisolasi ketat demi mencegah serangan injeksi.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-6 border-t border-slate-800/80 mt-6">
              <span>99.99% Uptime SLA</span>
              <span aria-hidden="true">·</span>
              <span>Proteksi DDoS Level 7</span>
              <span aria-hidden="true">·</span>
              <span>Sertifikat Wildcard Otomatis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
