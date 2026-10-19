import React, { useState } from 'react';
import { SERVER_FACILITIES, ServerFacility } from '../data/serverFacilities.ts';
import { Globe, HardDrive, Database, Terminal, Shield, ArrowUpRight, Check, Layers, ExternalLink } from 'lucide-react';

interface FacilitiesCatalogProps {
  onOpenLaunchpad: (facility: ServerFacility) => void;
  onRegisterClick: () => void;
}

export const FacilitiesCatalog: React.FC<FacilitiesCatalogProps> = ({ onOpenLaunchpad, onRegisterClick }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const countBy = (cat: string) => SERVER_FACILITIES.filter((f) => f.category === cat).length;

  const categories = [
    { id: 'all', label: 'Semua Fasilitas', count: SERVER_FACILITIES.length },
    { id: 'hosting', label: 'Web Apps & Hosting', count: countBy('hosting') },
    { id: 'storage', label: 'Storage & Drive', count: countBy('storage') },
    { id: 'database', label: 'Database Relasional', count: countBy('database') },
    { id: 'devops', label: 'DevOps & Docker', count: countBy('devops') },
    { id: 'network', label: 'Jaringan & Email', count: countBy('network') },
  ];

  const filteredFacilities = filterCategory === 'all'
    ? SERVER_FACILITIES
    : SERVER_FACILITIES.filter((f) => f.category === filterCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hosting':
        return <Globe className="w-4 h-4 text-indigo-400" />;
      case 'storage':
        return <HardDrive className="w-4 h-4 text-cyan-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'devops':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      default:
        return <Shield className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <section id="fasilitas" className="py-20 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Katalog Fasilitas Server
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Seluruh Layanan yang Beroperasi di Server Cloud
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Setiap user yang terdaftar memiliki kuota ruang dan akses langsung ke fasilitas di bawah ini tanpa konfigurasi teknis rumit.
            </p>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/20 self-start md:self-auto shrink-0 transition-all flex items-center gap-1.5"
          >
            <span>Daftar Akun untuk Membuka Akses</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Filter Category Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 ${
                filterCategory === cat.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-900'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                filterCategory === cat.id ? 'bg-indigo-800 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid of Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-indigo-500/40 transition-colors">
                    {getCategoryIcon(facility.category)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded">
                      Online
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-mono text-indigo-400">{facility.badge}</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{facility.name}</h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {facility.shortDesc}
                </p>

                {/* Specs list */}
                <div className="space-y-1.5 pt-3 pb-4 border-t border-slate-800/80 mb-4">
                  {facility.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Protocol & Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="text-[11px] font-mono text-slate-400 truncate">
                  {facility.protocol} · {facility.portOrEndpoint}
                </div>

                <button
                  onClick={() => onOpenLaunchpad(facility)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-indigo-600 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>{facility.actionLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
