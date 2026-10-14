export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
  metric: string;
  metricLabel: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Cocok untuk developer mandiri, riset prototipe, dan portofolio web app.',
    features: [
      'Next.js 15 App Router boilerplate',
      'Deploy otomatis ke Vercel Hobby tier',
      'Unlimited Preview Deployments per commit',
      'Dukungan Tailwind CSS v4 & TypeScript',
      'Core Web Vitals dasar & SSL Otomatis',
      'Komunitas pengembang Discord'
    ],
    ctaText: 'Mulai Gratis Sekarang'
  },
  {
    id: 'pro',
    name: 'Pro Builder',
    popular: true,
    badge: 'Paling Populer',
    monthlyPrice: 299000,
    annualPrice: 239000,
    description: 'Untuk tim startup dan aplikasi produksi komersial dengan trafik aktif.',
    features: [
      'Semua fitur pada paket Starter',
      'Custom domain tanpa batas dengan Edge CDN',
      'Vercel Edge Functions & Server Actions lanjutan',
      'Analytics performa real-time & error tracking',
      'Kapasitas build paralel 4x lebih cepat',
      'Dukungan teknis prioritas via email & Slack'
    ],
    ctaText: 'Coba Pro 14 Hari Gratis'
  },
  {
    id: 'enterprise',
    name: 'Scale Enterprise',
    monthlyPrice: 1499000,
    annualPrice: 1199000,
    description: 'Infrastruktur berskala tinggi untuk perusahaan dengan kepatuhan keamanan ketat.',
    features: [
      'Semua fitur pada paket Pro',
      'SLA Uptime 99.99% dengan garansi finansial',
      'Dedicated Edge caching & multi-region routing',
      'Audit log SOC2, SSO SAML & kontrol RBAC',
      'Dukungan migrasi Next.js terpandu oleh arsitek',
      'Account Manager khusus & respons darurat 1 jam'
    ],
    ctaText: 'Jadwalkan Konsultasi Tim'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'nextjs-vercel-fit',
    category: 'Arsitektur & Deploy',
    question: 'Mengapa kombinasi Next.js dan Vercel menjadi standar industri?',
    answer: 'Next.js dikembangkan oleh tim Vercel, sehingga setiap fitur modern seperti React Server Components (RSC), Incremental Static Regeneration (ISR), Server Actions, dan Edge Middleware dioptimalkan secara native untuk infrastruktur global Vercel tanpa konfigurasi rumit.'
  },
  {
    id: 'custom-domain',
    category: 'Infrastruktur',
    question: 'Bagaimana cara menghubungkan domain kustom (.id atau .com) di Vercel?',
    answer: 'Cukup buka dashboard proyek Vercel Anda, masuk ke Settings > Domains, masukkan nama domain Anda, lalu tambahkan A Record (@ ke 76.76.21.21) atau CNAME (www ke cname.vercel-dns.com) di registrar domain Anda. Sertifikat SSL gratis akan diterbitkan secara otomatis dalam 2 menit.'
  },
  {
    id: 'performance-seo',
    category: 'Performa & SEO',
    question: 'Apakah landing page ini menjamin skor 100 di Google Lighthouse?',
    answer: 'Ya, arsitektur yang digunakan memanfaatkan rendering sisi server, optimasi kompresi gambar modern (WebP/AVIF), font swap tanpa CLS, dan bundling Tailwind CSS efisien untuk memastikan skor 100/100 pada Performance, Accessibility, Best Practices, dan SEO.'
  },
  {
    id: 'code-export',
    category: 'Fleksibilitas',
    question: 'Bisakah saya mengunduh kode ini dan langsung push ke repositori GitHub saya?',
    answer: 'Tentu saja! Kami menyediakan fitur "Export Next.js Project" interaktif di mana Anda dapat menyalin file `app/page.tsx`, `next.config.ts`, `vercel.json`, dan konfigurasi terkait lainnya untuk langsung dijalankan di lokal (`npm run dev`) atau dideploy langsung via Vercel CLI / GitHub.'
  },
  {
    id: 'cost-pricing',
    category: 'Biaya',
    question: 'Apakah saya bisa mendeploy aplikasi ini di Vercel secara gratis selamanya?',
    answer: 'Ya, tier Vercel Hobby 100% gratis untuk proyek non-komersial dan personal, mencakup 100GB bandwidth bulanan, unlimited preview deployment, dan SSL gratis seumur hidup.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'Migrasi landing page kami ke Next.js yang dihosting di Vercel memangkas waktu load dari 3,8 detik menjadi 0,6 detik. Konversi pendaftaran trial kami melonjak hingga 48% dalam 30 hari pertama.',
    author: 'Reza Pratama',
    role: 'Head of Engineering',
    company: 'FinTrack Digital',
    avatarText: 'RP',
    metric: '+48%',
    metricLabel: 'Peningkatan Conversion Rate'
  },
  {
    quote: 'Setup CI/CD di Vercel dengan Next.js App Router benar-benar menghemat waktu tim kami. Kami bisa merilis fitur 5 kali sehari tanpa khawatir server downtime atau konfigurasi Nginx.',
    author: 'Annisa Nurulita',
    role: 'Principal Product Designer',
    company: 'Nusantara SaaS Studio',
    avatarText: 'AN',
    metric: '5x',
    metricLabel: 'Frekuensi Rilis Harian'
  },
  {
    quote: 'Skor Lighthouse kami kini konsisten di angka 99-100 di perangkat mobile. SEO organik kami naik drastis karena Google memprioritaskan Core Web Vitals kami yang luar biasa cepat.',
    author: 'Hendro Wicaksono',
    role: 'Founder & CEO',
    company: 'LogistikPintar ID',
    avatarText: 'HW',
    metric: '99/100',
    metricLabel: 'Rata-rata Skor Web Vitals'
  }
];

export const NEXTJS_STARTER_FILES = {
  'app/page.tsx': `// Next.js 15 App Router - app/page.tsx
import React from 'react';

export const metadata = {
  title: 'Veloce Web App – High Performance Next.js Landing Page',
  description: 'Built for extreme speed, instant hydration, and 1-click Vercel edge deployment.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-white">Veloce</div>
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#fitur" className="hover:text-white transition-colors">Fitur</a>
          <a href="#kinerja" className="hover:text-white transition-colors">Kinerja</a>
          <a href="#harga" className="hover:text-white transition-colors">Harga</a>
        </nav>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium text-white transition-all">
          Deploy Sekarang
        </button>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Platform Web App Cepat Siap Deploy di Vercel
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Dibangun dengan Next.js 15 Server Components, Tailwind CSS, dan optimasi Edge Network untuk performa maksimal.
        </p>
      </section>
    </main>
  );
}`,
  'vercel.json': `{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "buildCommand": "next build",
  "installCommand": "npm install",
  "regions": ["sin1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}`,
  'next.config.ts': `import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;`,
  'package.json': `{
  "name": "veloce-nextjs-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.546.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0"
  }
}`
};
