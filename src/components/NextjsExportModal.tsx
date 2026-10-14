import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Terminal, Download, ExternalLink } from 'lucide-react';
import { NEXTJS_STARTER_FILES } from '../data/landingData.ts';

interface NextjsExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FileKey = keyof typeof NEXTJS_STARTER_FILES;

export const NextjsExportModal: React.FC<NextjsExportModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<FileKey>('app/page.tsx');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const files: FileKey[] = ['app/page.tsx', 'vercel.json', 'next.config.ts', 'package.json'];
  const currentContent = NEXTJS_STARTER_FILES[selectedFile];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = selectedFile.split('/').pop() || 'file.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Next.js 15 App Router & Vercel Code Starter
              </h3>
              <p className="text-xs text-slate-400">
                Salin atau unduh file konfigurasi siap pakai untuk deploy langsung ke Vercel.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col sm:flex-row flex-1 overflow-hidden min-h-[420px]">
          {/* File Explorer Sidebar */}
          <div className="w-full sm:w-60 bg-slate-950/60 border-b sm:border-b-0 sm:border-r border-slate-800 p-3 space-y-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5">
              Struktur Proyek
            </div>
            {files.map((file) => (
              <button
                key={file}
                onClick={() => setSelectedFile(file)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                  selectedFile === file
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{file}</span>
              </button>
            ))}

            <div className="pt-6 px-3">
              <div className="text-[11px] text-slate-400 leading-relaxed">
                Telah disesuaikan untuk Node.js 20+, React 19, dan kompatibilitas Vercel Edge.
              </div>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
            <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-300 font-semibold">{selectedFile}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="px-2.5 py-1 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors flex items-center gap-1.5 text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh File</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 text-white bg-indigo-600 hover:bg-indigo-500 rounded transition-colors flex items-center gap-1.5 text-xs font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <pre className="flex-1 p-5 overflow-auto font-mono text-xs text-slate-300 leading-relaxed selection:bg-indigo-900">
              <code>{currentContent}</code>
            </pre>
          </div>
        </div>

        {/* Modal Footer Quick Commands */}
        <div className="px-6 py-3.5 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Jalankan di lokal:</span>
            <code className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-slate-200">
              npm install && npm run dev
            </code>
          </div>

          <a
            href="https://vercel.com/docs/frameworks/nextjs"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 font-semibold"
          >
            <span>Dokumentasi Resmi Vercel Next.js</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
