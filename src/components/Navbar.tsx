import React, { useState } from 'react';
import { Server, UserPlus, LogIn, Menu, X, Shield, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
  onOpenHomelabGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenLogin, onOpenHomelabGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/90 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 border border-indigo-400/40 flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:bg-indigo-500 transition-colors">
            <Server className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="leading-none font-bold text-white tracking-tight">CloudHub</span>
            <span className="text-[10px] text-slate-400 font-mono tracking-normal leading-tight mt-0.5">Server Portal</span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#status-server" className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Status Server</span>
          </a>
          <a href="#fasilitas" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Fasilitas &amp; Layanan
          </a>
          <a href="#kuota" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Pilihan Kuota
          </a>
          <a href="#panduan" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Panduan Akses
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenHomelabGuide}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900/60 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Cara memindahkan frontpage ini ke homelab server Anda"
          >
            <Server className="w-3.5 h-3.5" />
            <span>Pindahkan ke Homelab</span>
          </button>

          <button
            onClick={onOpenLogin}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <LogIn className="w-3.5 h-3.5 text-slate-400" />
            <span>Masuk Portal</span>
          </button>

          <button
            onClick={onOpenRegister}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg shadow-md shadow-indigo-600/30 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Daftar User Baru</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 focus:outline-none"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-5 space-y-3">
          <a
            href="#status-server"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Status Server
          </a>
          <a
            href="#fasilitas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Fasilitas &amp; Layanan
          </a>
          <a
            href="#kuota"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Pilihan Kuota
          </a>
          <a
            href="#panduan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Panduan Akses
          </a>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHomelabGuide();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800 rounded-lg"
            >
              <Server className="w-3.5 h-3.5" />
              <span>Panduan Pindahkan ke Homelab</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Masuk Portal Server</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
