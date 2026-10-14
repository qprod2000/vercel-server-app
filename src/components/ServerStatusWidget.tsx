import React, { useState } from 'react';
import { SERVER_STATS } from '../data/serverFacilities.ts';
import { Cpu, HardDrive, MemoryStick, Activity, Network, CheckCircle, RefreshCw } from 'lucide-react';

export const ServerStatusWidget: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [latencyMs, setLatencyMs] = useState(14);

  const simulatePing = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLatencyMs(Math.floor(10 + Math.random() * 8));
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <section id="status-server" className="py-16 bg-slate-950/80 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
              Telemetri &amp; Kesehatan Infrastruktur
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Status Server Cloud Real-Time
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Pemantauan beban perangkat keras dan ketersediaan layanan cloud secara transparan.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={simulatePing}
              disabled={isRefreshing}
              className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-400' : ''}`} />
              <span>Ping Server</span>
            </button>
            <div className="text-xs font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-slate-300">Latensi:</span>
              <span className="text-emerald-400 font-bold tabular-nums">{latencyMs} ms</span>
            </div>
          </div>
        </div>

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* CPU Card */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>Beban CPU</span>
                </span>
                <span className="font-mono text-emerald-400 font-bold">{SERVER_STATS.cpuLoad}%</span>
              </div>
              <div className="text-xl font-bold font-mono text-white mb-1 tabular-nums">
                {SERVER_STATS.cpuCores}
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden my-3">
                <div
                  className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${SERVER_STATS.cpuLoad}%` }}
                />
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Temperature: 42°C · Normal
            </div>
          </div>

          {/* RAM Card */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <MemoryStick className="w-4 h-4 text-cyan-400" />
                  <span>Memori RAM ECC</span>
                </span>
                <span className="font-mono text-cyan-400 font-bold">{SERVER_STATS.ramPercent}%</span>
              </div>
              <div className="text-xl font-bold font-mono text-white mb-1 tabular-nums">
                {SERVER_STATS.ramUsed} <span className="text-xs text-slate-400 font-normal">/ {SERVER_STATS.ramTotal}</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden my-3">
                <div
                  className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${SERVER_STATS.ramPercent}%` }}
                />
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Tersisa: ~20.6 GB Tersedia
            </div>
          </div>

          {/* NVMe Storage Card */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <HardDrive className="w-4 h-4 text-emerald-400" />
                  <span>Penyimpanan NVMe</span>
                </span>
                <span className="font-mono text-emerald-400 font-bold">{SERVER_STATS.storagePercent}%</span>
              </div>
              <div className="text-xl font-bold font-mono text-white mb-1 tabular-nums">
                {SERVER_STATS.storageUsed} <span className="text-xs text-slate-400 font-normal">/ {SERVER_STATS.storageTotal}</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden my-3">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${SERVER_STATS.storagePercent}%` }}
                />
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              RAID 10 Mirror · Zero Data Loss
            </div>
          </div>

          {/* Network & Uptime Card */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Network className="w-4 h-4 text-amber-400" />
                  <span>Jaringan &amp; Port</span>
                </span>
                <span className="font-mono text-emerald-400 font-bold">{SERVER_STATS.uptimePercent}</span>
              </div>
              <div className="text-xl font-bold font-mono text-white mb-1 tabular-nums">
                10 Gbps Port
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 my-3">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{SERVER_STATS.activeUsers} Akun Pengguna Aktif</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Proteksi Firewall &amp; Anti-DDoS Aktif
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
