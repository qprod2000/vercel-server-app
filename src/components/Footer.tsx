import React from 'react';
import { Server, Activity, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister, onOpenLogin }) => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 text-base font-bold text-white mb-3">
              <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
                <Server className="w-3.5 h-3.5 text-white" />
              </div>
              <span>CloudHub Portal</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Frontpage portal mandiri untuk pendaftaran akun dan akses terpadu seluruh fasilitas cloud server: hosting WordPress, penyimpanan file, dan database.
            </p>
            <div className="text-xs text-slate-300 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>9/9 Layanan Beroperasi Penuh</span>
            </div>
          </div>

          {/* Col 1: Fasilitas Utama */}
          <div>
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Fasilitas Cloud
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#fasilitas" className="hover:text-white transition-colors">
                  WordPress CMS Hosting
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white transition-colors">
                  Cloud Drive &amp; WebDAV
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white transition-colors">
                  Database MariaDB &amp; PostgreSQL
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white transition-colors">
                  Docker &amp; Portainer Manager
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white transition-colors">
                  Git Server (Gitea) &amp; Webmail
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Akses & Autentikasi */}
          <div>
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Akses &amp; Akun
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenRegister} className="hover:text-white transition-colors text-left">
                  Pendaftaran User Baru
                </button>
              </li>
              <li>
                <button onClick={onOpenLogin} className="hover:text-white transition-colors text-left">
                  Masuk Portal Server
                </button>
              </li>
              <li>
                <a href="#kuota" className="hover:text-white transition-colors">
                  Alokasi Kuota NVMe
                </a>
              </li>
              <li>
                <a href="#panduan" className="hover:text-white transition-colors">
                  Panduan Setting Domain Kustom
                </a>
              </li>
              <li>
                <a href="#status-server" className="hover:text-white transition-colors">
                  Uji Latensi Ping Server
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Informasi Sistem */}
          <div>
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Node Server Info
            </div>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div>Host: <span className="text-slate-200">cloud-node01.server.net</span></div>
              <div>OS: <span className="text-slate-200">Ubuntu 24.04 LTS (Kernel 6.8)</span></div>
              <div>Web Server: <span className="text-slate-200">Nginx + HTTP/2 + TLS 1.3</span></div>
              <div>Datacenter: <span className="text-slate-200">Equinix SG1 / Tier III</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} CloudHub Server Portal. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-3">
            <span>WordPress Ready</span>
            <span aria-hidden="true">·</span>
            <span>WebDAV</span>
            <span aria-hidden="true">·</span>
            <span>MariaDB</span>
            <span aria-hidden="true">·</span>
            <span>Docker Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
