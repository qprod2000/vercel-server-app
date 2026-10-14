import React, { useState } from 'react';
import { X, Copy, Check, Download, Server, Terminal, Globe, ArrowRight, ExternalLink, Cpu } from 'lucide-react';

interface HomelabExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentHostname: string;
}

export const HomelabExportModal: React.FC<HomelabExportModalProps> = ({
  isOpen,
  onClose,
  currentHostname
}) => {
  const [activeTab, setActiveTab] = useState<'build' | 'docker' | 'nginx' | 'vercel' | 'postgres'>('postgres');
  const [userDomain, setUserDomain] = useState('server.domain-anda.com');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sanitizedDomain = userDomain.trim() || 'server.domain-anda.com';

  const snippets = {
    postgres: `-- PANDUAN MENGHUBUNGKAN VERCEL KE DATABASE POSTGRESQL SERVER ANDA

-- LANGKAH 1: Buat Tabel Pengguna di PostgreSQL Server Anda (via psql atau pgAdmin):
CREATE TABLE IF NOT EXISTS server_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  quota_tier VARCHAR(50) DEFAULT 'developer',
  has_wordpress BOOLEAN DEFAULT TRUE,
  has_clouddrive BOOLEAN DEFAULT TRUE,
  has_webmail BOOLEAN DEFAULT TRUE,
  ssh_public_key TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- LANGKAH 2: Konfigurasi Environment Variable di Vercel
-- Buka Vercel Dashboard > Settings > Environment Variables:
-- Tambahkan:
DATABASE_URL="postgresql://user_db:password_db@${sanitizedDomain}:5432/nama_database?sslmode=prefer"

-- TIPS KEAMANAN KONEKSI KE SERVER ANDA:
-- 1. Buka port 5432 di firewall server (ufw allow 5432/tcp) hanya untuk IP Vercel atau via Cloudflare Tunnel.
-- 2. Edit /etc/postgresql/16/main/pg_hba.conf untuk mengizinkan user terautentikasi:
--    host  all  user_db  0.0.0.0/0  scram-sha-256
-- 3. Edit /etc/postgresql/16/main/postgresql.conf:
--    listen_addresses = '*'

-- OPSIONAL (Jika ingin database gratis di cloud tanpa membuka port server):
-- Anda bisa menggunakan Supabase (supabase.com) atau Neon (neon.tech) yang native di Vercel.
-- Connection string Supabase:
-- DATABASE_URL="postgresql://postgres:[PASSWORD]@db.xxxx.supabase.co:5432/postgres"`,

    build: `# 1. Download atau clone kode frontpage ini
git clone https://github.com/username/homelab-frontpage.git
cd homelab-frontpage

# 2. Install dependencies & build file statis
npm install
npm run build

# 3. File siap pakai akan berada di folder /dist/
# Folder 'dist' ini berisi index.html, JS, CSS yang 100% independen!
# Anda bisa langsung menyalin isi folder /dist/ ke web server homelab Anda:
sudo cp -r dist/* /var/www/html/`,

    docker: `# docker-compose.yml untuk homelab Anda (Portainer, CasaOS, Unraid, atau terminal)
version: '3.8'

services:
  homelab-portal:
    image: nginx:alpine
    container_name: homelab_frontpage
    restart: unless-stopped
    ports:
      - "8080:80"
    volumes:
      # Mount folder dist hasil build ke Nginx container
      - ./dist:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    environment:
      - VIRTUAL_HOST=${sanitizedDomain}
      - LETSENCRYPT_HOST=${sanitizedDomain}`,

    nginx: `# Konfigurasi Nginx Reverse Proxy (/etc/nginx/sites-available/${sanitizedDomain}.conf)
server {
    listen 80;
    server_name ${sanitizedDomain};
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ${sanitizedDomain};

    # Sertifikat SSL (Let's Encrypt / Cloudflare Origin)
    ssl_certificate /etc/letsencrypt/live/${sanitizedDomain}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${sanitizedDomain}/privkey.pem;

    root /var/www/homelab-frontpage/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy ke layanan internal jika diperlukan:
    # location /wp-admin { proxy_pass http://localhost:8000; }
    # location /drive    { proxy_pass http://localhost:8080; }
}`,

    vercel: `# Cara Termudah: Deploy ke Vercel lalu hubungkan Domain Homelab Anda

1. Upload kode ini ke repositori GitHub pribadi Anda.
2. Buka https://vercel.com/new dan import repositori Anda.
3. Framework akan otomatis terdeteksi (Vite / React). Klik "Deploy".
4. Setelah rilis, buka: Settings > Domains di Vercel.
5. Masukkan subdomain homelab Anda: "${sanitizedDomain}"
6. Tambahkan CNAME di DNS Cloudflare / Registrar Anda:
   - Name: ${sanitizedDomain.split('.')[0]}
   - Target: cname.vercel-dns.com
7. Website frontpage langsung aktif dengan SSL gratis global CDN tanpa membebani bandwidth upload internet rumah!`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Panduan Memindahkan Frontpage ke Homelab Anda</span>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                  100% Portable
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Pilih metode deployment yang paling cocok dengan arsitektur homelab Anda.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Domain input customizer */}
        <div className="px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-300 font-medium">
            Masukkan Nama Domain Homelab Anda:
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                value={userDomain}
                onChange={(e) => setUserDomain(e.target.value)}
                placeholder="misal: homelab.keluarga.id"
                className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-white placeholder:text-slate-600 w-64 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 px-6 pt-3 bg-slate-900/60 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('postgres')}
            className={`px-3.5 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'postgres'
                ? 'border-indigo-500 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            ★ Koneksi PostgreSQL
          </button>
          <button
            onClick={() => setActiveTab('build')}
            className={`px-3.5 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'build'
                ? 'border-indigo-500 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Static Build (dist)
          </button>
          <button
            onClick={() => setActiveTab('docker')}
            className={`px-3.5 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'docker'
                ? 'border-indigo-500 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Docker &amp; Portainer
          </button>
          <button
            onClick={() => setActiveTab('nginx')}
            className={`px-3.5 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'nginx'
                ? 'border-indigo-500 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Nginx / Proxy
          </button>
          <button
            onClick={() => setActiveTab('vercel')}
            className={`px-3.5 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'vercel'
                ? 'border-indigo-500 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            4. Vercel + Domain Homelab
          </button>
        </div>

        {/* Code Content */}
        <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
          <div className="px-5 py-2.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-400">
              {activeTab === 'postgres' && 'PostgreSQL Schema & Vercel Connection String'}
              {activeTab === 'build' && 'Terminal Command (Build)'}
              {activeTab === 'docker' && 'docker-compose.yml'}
              {activeTab === 'nginx' && `${sanitizedDomain}.conf`}
              {activeTab === 'vercel' && 'Vercel Custom Domain Setup'}
            </span>

            <button
              onClick={handleCopy}
              className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Konfigurasi</span>
                </>
              )}
            </button>
          </div>

          <pre className="flex-1 p-5 overflow-auto font-mono text-xs text-slate-300 leading-relaxed">
            <code>{snippets[activeTab]}</code>
          </pre>
        </div>

        {/* Footer Notes */}
        <div className="px-6 py-3.5 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            Data teks dan layanan dapat disesuaikan di file <code className="text-slate-200 font-mono">src/data/serverFacilities.ts</code>.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
