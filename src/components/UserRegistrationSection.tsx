import React, { useState, useEffect } from 'react';
import { UserPlus, CheckCircle2, Shield, Copy, Check, Download, Eye, EyeOff, Key, Globe, HardDrive, Mail, LogIn, ExternalLink } from 'lucide-react';
import { USER_TIERS } from '../data/serverFacilities.ts';

interface UserRegistrationProps {
  selectedTierId: string;
  onOpenLoginModal: () => void;
}

export const UserRegistrationSection: React.FC<UserRegistrationProps> = ({
  selectedTierId,
  onOpenLoginModal
}) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [tier, setTier] = useState(selectedTierId || 'developer');
  const [needWordPress, setNeedWordPress] = useState(true);
  const [needCloudDrive, setNeedCloudDrive] = useState(true);
  const [needWebmail, setNeedWebmail] = useState(true);
  const [needStoryboardAi, setNeedStoryboardAi] = useState(true);
  const [sshKey, setSshKey] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registeredAccount, setRegisteredAccount] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedInfo, setCopiedInfo] = useState(false);

  useEffect(() => {
    if (selectedTierId) {
      setTier(selectedTierId);
    }
  }, [selectedTierId]);

  const sanitizedUsername = username.toLowerCase().replace(/[^a-z0-9_-]/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!sanitizedUsername || sanitizedUsername.length < 3) {
      setErrorMsg('Username minimal 3 karakter (hanya huruf kecil, angka, garis bawah).');
      return;
    }

    if (!fullName.trim()) {
      setErrorMsg('Mohon masukkan nama lengkap Anda.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Mohon masukkan format email yang valid.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMsg('Kata sandi minimal 6 karakter.');
      return;
    }

    if (!agreeTerms) {
      setErrorMsg('Anda harus menyetujui aturan penggunaan server cloud.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setRegisteredAccount({
        username: sanitizedUsername,
        fullName,
        email,
        tier: USER_TIERS.find(t => t.id === tier)?.name || 'Pengguna Cloud',
        wpUrl: `https://wp.cloud-node01.server.net/~${sanitizedUsername}/`,
        wpAdmin: `https://wp.cloud-node01.server.net/~${sanitizedUsername}/wp-admin`,
        driveUrl: `https://drive.cloud-node01.server.net`,
        webdavHost: `webdav.cloud-node01.server.net/files/${sanitizedUsername}`,
        webmailAddress: `${sanitizedUsername}@cloud-node01.server.net`,
        databaseName: `db_${sanitizedUsername}`,
        hasStoryboardAi: needStoryboardAi,
        storyboardUrl: 'https://storyboard-ai-taupe.vercel.app',
        registeredAt: new Date().toLocaleDateString('id-ID', { dateStyle: 'full', timeStyle: 'short' })
      });
    }, 900);
  };

  const copyAccountSummary = () => {
    if (!registeredAccount) return;
    const summary = `=== KREDENSIAL AKUN CLOUD SERVER ===
Username: ${registeredAccount.username}
Nama Lengkap: ${registeredAccount.fullName}
Email Terdaftar: ${registeredAccount.email}
Alokasi Kuota: ${registeredAccount.tier}
URL WordPress: ${registeredAccount.wpUrl}
WordPress Admin: ${registeredAccount.wpAdmin}
Cloud Drive & WebDAV: ${registeredAccount.webdavHost}
Webmail: ${registeredAccount.webmailAddress}
Database: ${registeredAccount.databaseName}
Waktu Aktivasi: ${registeredAccount.registeredAt}
Status: AKTIF
====================================`;
    navigator.clipboard.writeText(summary);
    setCopiedInfo(true);
    setTimeout(() => setCopiedInfo(false), 2000);
  };

  const downloadAccountTxt = () => {
    if (!registeredAccount) return;
    const summary = `=== KREDENSIAL AKUN CLOUD SERVER ===\nUsername: ${registeredAccount.username}\nNama: ${registeredAccount.fullName}\nEmail: ${registeredAccount.email}\nPaket: ${registeredAccount.tier}\nWordPress Site: ${registeredAccount.wpUrl}\nWP-Admin: ${registeredAccount.wpAdmin}\nCloud Drive: ${registeredAccount.driveUrl}\nWebDAV Endpoint: ${registeredAccount.webdavHost}\nWebmail: ${registeredAccount.webmailAddress}\nWaktu Terdaftar: ${registeredAccount.registeredAt}\n\nSimpan dokumen ini dengan aman.`;
    const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kredensial-server-${registeredAccount.username}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="pendaftaran" className="py-24 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Pendaftaran Mandiri (Self-Service)
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pendaftaran Akun Pengguna Server Cloud
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Daftarkan akun Anda dalam 1 menit. Sistem akan otomatis mengalokasikan direktori penyimpanan, instalasi WordPress, dan kredensial database.
          </p>
        </div>

        {registeredAccount ? (
          /* Success Screen */
          <div className="rounded-3xl border border-emerald-500/40 bg-slate-900/90 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-emerald-400 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Akun Server Berhasil Diaktifkan!</h3>
                <p className="text-xs text-slate-400 font-mono">ID Pengguna: {registeredAccount.username} · Node SG-01</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Selamat datang, <span className="font-semibold text-white">{registeredAccount.fullName}</span>. Seluruh fasilitas yang Anda pilih telah dialokasikan dan siap digunakan langsung.
            </p>

            {/* Generated Access Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-1">
                  <Globe className="w-4 h-4" />
                  <span>Situs WordPress Anda</span>
                </div>
                <div className="text-xs font-mono text-white truncate">{registeredAccount.wpUrl}</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Admin: <a href={registeredAccount.wpAdmin} target="_blank" rel="noreferrer" className="text-indigo-400 underline">{registeredAccount.wpAdmin}</a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
                  <HardDrive className="w-4 h-4" />
                  <span>Cloud Storage &amp; WebDAV</span>
                </div>
                <div className="text-xs font-mono text-white truncate">{registeredAccount.webdavHost}</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Gunakan username &amp; password Anda di FileZilla / Explorer
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <Mail className="w-4 h-4" />
                  <span>Alamat Webmail Server</span>
                </div>
                <div className="text-xs font-mono text-white truncate">{registeredAccount.webmailAddress}</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Akses webmail di https://mail.cloud-node01.server.net
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                  <Shield className="w-4 h-4" />
                  <span>Alokasi Kuota &amp; Database</span>
                </div>
                <div className="text-xs font-mono text-white">{registeredAccount.tier}</div>
                <div className="text-[11px] text-slate-400 mt-1">
                  DB Name: <span className="font-mono text-slate-200">{registeredAccount.databaseName}</span> (Port 3306 / 5432)
                </div>
              </div>
            </div>

            {/* Featured App Integration Card */}
            {registeredAccount.hasStoryboardAi && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/70 to-slate-900 border border-indigo-500/40 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                    <span>Aplikasi Storyboard AI Siap Digunakan</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Akun Anda telah diizinkan untuk mengakses platform visual AI di <span className="font-mono text-white">storyboard-ai-taupe.vercel.app</span>
                  </div>
                </div>
                <a
                  href="https://storyboard-ai-taupe.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors shadow-md shadow-indigo-600/30"
                >
                  <span>Buka Storyboard AI</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={copyAccountSummary}
                className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                {copiedInfo ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Seluruh Kredensial</span>
                  </>
                )}
              </button>

              <button
                onClick={downloadAccountTxt}
                className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File Kredensial (.txt)</span>
              </button>

              <button
                onClick={() => setRegisteredAccount(null)}
                className="ml-auto px-4 py-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Daftar Akun Baru Lainnya
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 text-xs bg-rose-950/70 border border-rose-800 text-rose-300 rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Username Server (Tanpa Spasi) *
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="contoh: budi_cloud"
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                    />
                    <div className="text-[10px] text-slate-500 mt-1">
                      Akan digunakan untuk login SSH, SFTP, dan WebDAV.
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Budi Santoso"
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Alamat Email Aktif *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="budi@gmail.com"
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Kata Sandi Server *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Minimal 6 karakter"
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tier selection */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Pilihan Alokasi Kuota Ruang
                  </label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="regular">Pengguna Biasa (30 GB NVMe - 1 WordPress + Drive)</option>
                    <option value="developer">Developer (120 GB NVMe - 3 WordPress + DB + Git + SSH)</option>
                    <option value="team">Tim / Proyek Khusus (500 GB NVMe - Docker + Dedicated DB)</option>
                  </select>
                </div>

                {/* Initial Services Checkboxes */}
                <div className="pt-2">
                  <span className="block text-xs font-medium text-slate-300 mb-2">
                    Layanan yang Ingin Otomatis Diaktifkan Saat Pendaftaran:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                      <input
                        type="checkbox"
                        checked={needStoryboardAi}
                        onChange={(e) => setNeedStoryboardAi(e.target.checked)}
                        className="rounded accent-indigo-500"
                      />
                      <span className="font-semibold text-indigo-300">Storyboard AI Studio (Vercel)</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                      <input
                        type="checkbox"
                        checked={needWordPress}
                        onChange={(e) => setNeedWordPress(e.target.checked)}
                        className="rounded accent-indigo-500"
                      />
                      <span>WordPress CMS</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                      <input
                        type="checkbox"
                        checked={needCloudDrive}
                        onChange={(e) => setNeedCloudDrive(e.target.checked)}
                        className="rounded accent-indigo-500"
                      />
                      <span>Cloud Drive (WebDAV)</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                      <input
                        type="checkbox"
                        checked={needWebmail}
                        onChange={(e) => setNeedWebmail(e.target.checked)}
                        className="rounded accent-indigo-500"
                      />
                      <span>Webmail Domain</span>
                    </label>
                  </div>
                </div>

                {/* SSH Key Optional */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Key className="w-3.5 h-3.5 text-indigo-400" />
                      <span>SSH Public Key (Opsional untuk Developer / Git)</span>
                    </span>
                    <span className="text-[10px] text-slate-500">Opsional</span>
                  </label>
                  <textarea
                    rows={2}
                    value={sshKey}
                    onChange={(e) => setSshKey(e.target.value)}
                    placeholder="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... user@machine"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Agreement checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 text-xs text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-0.5 rounded accent-indigo-500"
                    />
                    <span>
                      Saya menyetujui aturan penggunaan server cloud (bebas aktivitas bot ilegal, mining, atau spam massal).
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white text-xs font-semibold rounded-lg shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Mengonfigurasi Server &amp; Akun...</span>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        <span>Selesaikan Pendaftaran &amp; Buat Akun</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Live Reactive Preview Column */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Pratinjau Kredensial Instan
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-900">
                    Auto-Provision
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  Saat Anda mendaftar, sistem otomatis menghubungkan direktori Anda dengan format endpoint berikut:
                </p>

                <div className="space-y-3.5 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-500 font-sans">URL WordPress Anda:</div>
                    <div className="text-indigo-300 truncate mt-0.5">
                      https://wp.cloud-node01.server.net/~{sanitizedUsername || 'username'}/
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-500 font-sans">Endpoint WebDAV Cloud Drive:</div>
                    <div className="text-cyan-300 truncate mt-0.5">
                      webdav.cloud-node01.server.net/files/{sanitizedUsername || 'username'}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-500 font-sans">Alamat Email Server:</div>
                    <div className="text-emerald-300 truncate mt-0.5">
                      {sanitizedUsername || 'username'}@cloud-node01.server.net
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-500 font-sans">Koneksi Database:</div>
                    <div className="text-amber-300 truncate mt-0.5">
                      db.cloud-node01.server.net : db_{sanitizedUsername || 'username'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Already have account footer trigger */}
              <div className="mt-8 pt-5 border-t border-slate-800 text-center">
                <span className="text-xs text-slate-400">Sudah memiliki akun terdaftar?</span>
                <button
                  type="button"
                  onClick={onOpenLoginModal}
                  className="ml-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Masuk ke Portal Server</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
