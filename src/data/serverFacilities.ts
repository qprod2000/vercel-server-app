export interface ServerFacility {
  id: string;
  category: 'hosting' | 'storage' | 'database' | 'devops' | 'network';
  name: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  protocol: string;
  portOrEndpoint: string;
  status: 'online' | 'maintenance';
  actionLabel: string;
  loginUrlExample: string;
}

export interface UserTier {
  id: string;
  name: string;
  quotaStorage: string;
  bandwidth: string;
  features: string[];
  recommended?: boolean;
}

export const SERVER_STATS = {
  hostname: 'cloud-node01.server.net',
  location: 'Datacenter SG-01 (Singapore / ID Low Latency)',
  uptimeDays: 142,
  uptimePercent: '99.98%',
  cpuCores: '16 vCPU (AMD EPYC™)',
  cpuLoad: 18,
  ramTotal: '32 GB ECC DDR5',
  ramUsed: '11.4 GB',
  ramPercent: 35,
  storageTotal: '4.0 TB NVMe Gen4',
  storageUsed: '1.35 TB',
  storagePercent: 34,
  networkSpeed: '10 Gbps Port (Unmetered)',
  activeUsers: 84,
  totalServices: 11
};

export const SERVER_FACILITIES: ServerFacility[] = [
  {
    id: 'storyboard-ai',
    category: 'hosting',
    name: 'Storyboard AI Studio',
    badge: 'Aplikasi Unggulan Terintegrasi',
    shortDesc: 'Platform AI Storyboard generator untuk memvisualisasikan adegan, skrip, dan scene video secara instan.',
    fullDesc: 'Aplikasi web AI generasi visual yang telah aktif di Vercel (storyboard-ai-taupe.vercel.app). Mengubah naskah skenario menjadi storyboard visual, perancangan adegan film/animasi, dan dapat terhubung langsung ke database PostgreSQL server Anda.',
    specs: ['Deployed di Vercel Edge (Aktif)', 'AI Visual Scene Generator', 'Tersambung ke PostgreSQL Server', 'Ekspor Storyboard PDF & Image'],
    protocol: 'HTTPS',
    portOrEndpoint: 'storyboard-ai-taupe.vercel.app',
    status: 'online',
    actionLabel: 'Luncurkan Storyboard AI',
    loginUrlExample: 'https://storyboard-ai-taupe.vercel.app'
  },
  {
    id: 'llm-chat',
    category: 'hosting',
    name: 'LLM Chat & Dokumen',
    badge: 'Asisten AI Pribadi',
    shortDesc: 'Chat AI dengan banyak model gratis, mode jawaban terbaik, dan konteks dari dokumen yang Anda unggah.',
    fullDesc: 'Aplikasi chat LLM yang berjalan di Vercel. Mendukung model cadangan otomatis, mode "Jawaban terbaik" (beberapa model + penilai), unggah dokumen (PDF teks, txt, md, csv, json) sebagai konteks, dan server MCP untuk klien lain. Akses dilindungi kata sandi khusus aplikasi ini.',
    specs: ['Deployed di Vercel (Aktif)', 'Multi-model + Fallback Otomatis', 'Unggah Dokumen sebagai Konteks', 'Server MCP (/api/mcp)'],
    protocol: 'HTTPS',
    portOrEndpoint: 'llm-ten-delta.vercel.app',
    status: 'online',
    actionLabel: 'Buka LLM Chat',
    loginUrlExample: 'https://llm-ten-delta.vercel.app'
  },
  {
    id: 'nas-player',
    category: 'storage',
    name: 'NAS Player (Musik Cloud)',
    badge: 'Pemutar Musik Pribadi',
    shortDesc: 'Putar koleksi musik pribadi dari penyimpanan cloud, langsung di browser, dengan akses khusus pemilik.',
    fullDesc: 'Pemutar musik pribadi yang mengalirkan lagu dari penyimpanan cloud (Cloudflare R2). Mendukung seek dan putar otomatis ke lagu berikutnya. Akses dilindungi Cloudflare Access (login email dengan kode sekali pakai), dan tautan streaming bertanda tangan yang kedaluwarsa otomatis.',
    specs: ['Streaming dengan Range (seek)', 'Cloudflare Access (OTP Email)', 'URL Streaming Bertanda Tangan', 'Penyimpanan Cloudflare R2'],
    protocol: 'HTTPS',
    portOrEndpoint: 'play.adua.my.id',
    status: 'online',
    actionLabel: 'Buka NAS Player',
    loginUrlExample: 'https://play.adua.my.id'
  },
  {
    id: 'wordpress-cms',
    category: 'hosting',
    name: 'WordPress CMS Hosting',
    badge: 'Paling Banyak Digunakan',
    shortDesc: 'Instalasi WordPress instan dengan PHP 8.3, OPcache, dan Redis Object Cache.',
    fullDesc: 'Fasilitas hosting situs dan blog berbasis WordPress dengan instalasi 1-klik, sertifikat SSL gratis otomatis (Let\'s Encrypt), akses WP-CLI, dan auto-backup harian.',
    specs: ['PHP 8.3 + FPM', 'Redis Cache Terintegrasi', 'SSL Wildcard Otomatis', 'Auto-Backup Setiap Jam 02:00'],
    protocol: 'HTTPS',
    portOrEndpoint: '/wp-admin atau domain-anda.com',
    status: 'online',
    actionLabel: 'Buka WordPress',
    loginUrlExample: 'https://wp.cloud-node01.server.net/wp-login.php'
  },
  {
    id: 'cloud-drive',
    category: 'storage',
    name: 'Cloud Drive & File Manager',
    badge: 'Nextcloud Hub',
    shortDesc: 'Penyimpanan file pribadi cloud, sinkronisasi smartphone/PC, dan sharing tautan aman.',
    fullDesc: 'Layanan drive penyimpanan awan berbasis Nextcloud. Mendukung WebDAV untuk di-mount langsung sebagai Local Disk di Windows/macOS, kolaborasi dokumen online, dan cadangan foto otomatis.',
    specs: ['Protokol WebDAV & SFTP', 'Sinkronisasi iOS & Android', 'Enkripsi Data At-Rest', 'Pratinjau Dokumen & Media'],
    protocol: 'WebDAV / HTTPS',
    portOrEndpoint: '/cloud-drive (Port 443)',
    status: 'online',
    actionLabel: 'Buka Cloud Drive',
    loginUrlExample: 'https://drive.cloud-node01.server.net'
  },
  {
    id: 'database-engine',
    category: 'database',
    name: 'Database Engine (MySQL & PostgreSQL)',
    badge: 'phpMyAdmin & pgAdmin',
    shortDesc: 'Manajemen basis data relasional berkinerja tinggi untuk aplikasi dan website Anda.',
    fullDesc: 'Server database MariaDB 10.11 dan PostgreSQL 16 siap pakai dengan interface web phpMyAdmin dan pgAdmin. Dilengkapi dump backup harian dan proteksi firewall port database.',
    specs: ['MariaDB 10.11 (Port 3306)', 'PostgreSQL 16 (Port 5432)', 'phpMyAdmin Web UI', 'Koneksi Remote SSL'],
    protocol: 'TCP / SSL',
    portOrEndpoint: '/phpmyadmin & /pgadmin',
    status: 'online',
    actionLabel: 'Kelola Database',
    loginUrlExample: 'https://db.cloud-node01.server.net/phpmyadmin'
  },
  {
    id: 'docker-container',
    category: 'devops',
    name: 'Docker & Portainer App Manager',
    badge: 'Container Runtime',
    shortDesc: 'Jalankan microservices, bot Telegram/Discord, atau aplikasi kustom dalam kontainer.',
    fullDesc: 'Runtime Docker terisolasi dengan dashboard GUI Portainer. Anda dapat membuat container Nginx, Node.js, Python, n8n automasi, atau Redis sendiri tanpa mengganggu sistem inti server.',
    specs: ['Docker Engine v26.1', 'Portainer CE Dashboard', 'Isolated User Network (Bridge)', 'Resource Limiting per User'],
    protocol: 'HTTPS / Socket',
    portOrEndpoint: ':9443 (Portainer Web UI)',
    status: 'online',
    actionLabel: 'Buka Portainer',
    loginUrlExample: 'https://docker.cloud-node01.server.net:9443'
  },
  {
    id: 'nextjs-nodejs-runtime',
    category: 'hosting',
    name: 'Next.js & Node.js App Runtime',
    badge: 'PM2 / Reverse Proxy',
    shortDesc: 'Hosting aplikasi web modern berbasis Next.js 15, Vite, dan Express dengan reverse proxy.',
    fullDesc: 'Lingkungan eksekusi Node.js LTS dengan PM2 Process Manager dan reverse proxy Nginx. Mendukung deployment otomatis dari GitHub, environment variables terenkripsi, dan custom sub-domain.',
    specs: ['Node.js 20 & 22 LTS', 'PM2 Process Supervisor', 'Nginx Reverse Proxy & HTTP/2', 'Custom Sub-domain Instan'],
    protocol: 'HTTPS / WSS',
    portOrEndpoint: 'Custom Port (3000-8000)',
    status: 'online',
    actionLabel: 'Kelola Node.js Apps',
    loginUrlExample: 'https://apps.cloud-node01.server.net'
  },
  {
    id: 'git-server',
    category: 'devops',
    name: 'Git Server Internal (Gitea)',
    badge: 'Self-Hosted Git',
    shortDesc: 'Pusat repositori kode privat tim tanpa batasan ukuran atau biaya langganan pihak ketiga.',
    fullDesc: 'Layanan Git self-hosted berkecepatan tinggi mirip GitHub. Menyediakan issue tracking, code review, wiki, dan webhook untuk integrasi build/deploy otomatis langsung ke server ini.',
    specs: ['Git via SSH & HTTPS', 'Unlimited Private Repositories', 'Gitea Web Interface', 'Built-in Webhooks'],
    protocol: 'SSH / HTTPS',
    portOrEndpoint: '/git atau :3001',
    status: 'online',
    actionLabel: 'Buka Git Server',
    loginUrlExample: 'https://git.cloud-node01.server.net'
  },
  {
    id: 'mail-server',
    category: 'network',
    name: 'Webmail & Server Email',
    badge: 'Roundcube Webmail',
    shortDesc: 'Akun email bisnis dengan alamat domain server (misal: nama@domain-server.com).',
    fullDesc: 'Layanan email lengkap dengan protokol IMAP/SMTP/POP3, proteksi filter spam Rspamd, autoresponder, dan antarmuka webmail modern Roundcube yang ringan dan bersih.',
    specs: ['Protokol IMAP (993) & SMTP (465/587)', 'DKIM, SPF, & DMARC Ready', 'Roundcube Web Interface', 'Enkripsi TLS Enforced'],
    protocol: 'IMAP / SMTP / HTTPS',
    portOrEndpoint: '/webmail (Roundcube)',
    status: 'online',
    actionLabel: 'Buka Webmail',
    loginUrlExample: 'https://mail.cloud-node01.server.net'
  },
  {
    id: 'vpn-wireguard',
    category: 'network',
    name: 'WireGuard VPN Gateway',
    badge: 'Akses Intranet Aman',
    shortDesc: 'Koneksi terenkripsi untuk mengakses database dan konsol server secara privat dari luar.',
    fullDesc: 'Gateway VPN WireGuard modern berkecepatan tinggi dengan overhead rendah. Memberikan akses langsung ke IP lokal server dan mengamankan aktivitas browsing Anda saat berada di Wi-Fi publik.',
    specs: ['Protokol WireGuard Modern', 'Handshake Kriptografi ChaCha20', 'Konfigurasi QR-Code untuk HP', 'Zero Logging Policy'],
    protocol: 'UDP / WireGuard',
    portOrEndpoint: 'Port 51820',
    status: 'online',
    actionLabel: 'Unduh Konfigurasi VPN',
    loginUrlExample: 'https://vpn.cloud-node01.server.net'
  },
  {
    id: 'server-telemetry',
    category: 'hosting',
    name: 'Grafana & Server Telemetry',
    badge: 'Monitoring Terbuka',
    shortDesc: 'Transparansi pemantauan beban server, kecepatan jaringan, dan status layanan.',
    fullDesc: 'Dashboard observabilitas server menggunakan Prometheus dan Grafana. Pengguna dapat melihat grafik penggunaan memori, I/O disk, serta log insiden uptime secara transparan.',
    specs: ['Pembaruan Data Tiap 5 Detik', 'Grafik Metrik CPU, RAM, & NVMe', 'Status Riwayat Insiden', 'Alert Telegram Otomatis'],
    protocol: 'HTTPS',
    portOrEndpoint: '/monitoring (:3002)',
    status: 'online',
    actionLabel: 'Lihat Status Grafana',
    loginUrlExample: 'https://status.cloud-node01.server.net'
  }
];

export const USER_TIERS: UserTier[] = [
  {
    id: 'regular',
    name: 'Pengguna Cloud Biasa',
    quotaStorage: '30 GB NVMe Storage',
    bandwidth: 'Trafik Unmetered',
    features: [
      '1 Instalasi situs WordPress / Blog pribadi',
      'Akses Cloud Drive & sinkronisasi WebDAV',
      '1 Alamat Webmail pribadi (@domain-server)',
      'Backup harian otomatis',
      'Akses dashboard web frontpage'
    ]
  },
  {
    id: 'developer',
    name: 'Pengembang / Developer',
    quotaStorage: '120 GB NVMe Storage',
    bandwidth: 'Trafik Unmetered Prioritas',
    recommended: true,
    features: [
      'Semua fasilitas Akun Biasa',
      'Hingga 3 instalasi situs WordPress & Web Apps',
      '1 Database MySQL + 1 Database PostgreSQL',
      'Akses SFTP / SSH Key untuk upload kode',
      'Akses Git Server internal (Unlimited Repo)',
      'Akses WireGuard VPN Gateway'
    ]
  },
  {
    id: 'team',
    name: 'Tim / Proyek Khusus',
    quotaStorage: '500 GB NVMe Storage',
    bandwidth: 'Trafik Dedicated 1 Gbps',
    features: [
      'Semua fasilitas Akun Pengembang',
      'Multi-domain WordPress tanpa batas',
      'Hak akses Docker Container & Portainer',
      'Sub-domain kustom instan dengan SSL',
      'Alokasi CPU & RAM khusus untuk komputasi',
      'Dukungan admin langsung via Telegram / WhatsApp'
    ]
  }
];

export const ACCESS_GUIDES = [
  {
    id: 'wp-guide',
    title: 'Bagaimana Cara Mengakses & Mengelola WordPress di Server Ini?',
    content: 'Setelah mendaftar, akun Anda akan otomatis dibuatkan sub-folder atau domain untuk WordPress. Anda dapat langsung membuka alamat https://wp.cloud-node01.server.net/wp-admin atau domain kustom Anda. Masukkan username dan password yang Anda daftarkan di form pendaftaran frontpage ini.'
  },
  {
    id: 'file-guide',
    title: 'Bagaimana Cara Upload File ke Cloud Storage (WebDAV & SFTP)?',
    content: 'Anda dapat mengakses file langsung melalui browser di Cloud Drive, atau menghubungkannya ke aplikasi seperti FileZilla, Cyberduck, atau File Explorer Windows (Add Network Location) menggunakan alamat webdav.cloud-node01.server.net dengan port 443 dan kredensial akun server Anda.'
  },
  {
    id: 'custom-domain-guide',
    title: 'Bisakah Menggunakan Nama Domain Saya Sendiri (.id atau .com)?',
    content: 'Bisa! Cukup arahkan DNS A Record dari domain Anda ke IP server cloud ini (103.148.xxx.xxx). Setelah DNS terhubung, hubungi sistem melalui portal atau masukkan nama domain di pengaturan profil Anda untuk menerbitkan sertifikat SSL Let\'s Encrypt gratis secara otomatis.'
  },
  {
    id: 'security-rules',
    title: 'Aturan & Kebijakan Penggunaan Server Cloud',
    content: 'Server cloud ini disediakan untuk keperluan produktif (hosting web pribadi/organisasi, penyimpanan dokumen, pengembangan software). Dilarang keras menjalankan bot serangan DDoS, crypto mining, materi ilegal, atau spam massal. Akun yang melanggar akan ditangguhkan otomatis oleh firewall Fail2ban.'
  }
];
