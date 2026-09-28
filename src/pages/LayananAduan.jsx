import React, { useState, useEffect } from 'react';

export default function LayananAduan({ navigateTo }) {
  const [contentData, setContentData] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);

  // State untuk form pengaduan
  const [formData, setFormData] = useState({
    nama: '',
    kelas: '',
    kategori: 'Bullying / Perundungan',
    pesan: '',
    isAnonim: false
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/content/layanan_aduan')
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setContentData(resData.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat data:", err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini nanti bisa dihubungkan ke endpoint POST backend jika ingin disimpan ke database MySQL
    setSubmitted(true);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-white text-slate-900 py-16 px-4 sm:px-8 lg:px-16 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        
        {/* Tombol Kembali */}
        <button 
          onClick={() => navigateTo('home')}
          className="group mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition duration-300 cursor-pointer shadow-sm"
        >
          <span className="group-hover:-translate-x-1 transition transform">←</span>
          <span>Kembali ke Beranda</span>
        </button>

        {/* Header Halaman */}
        <div className="mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600">SMK NEGERI 74 JAKARTA</p>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">Database Connected</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900 leading-tight">
            {loading ? "Memuat..." : (contentData.title || "Layanan Aduan")}
          </h1>
          <p className="text-sm text-slate-600 mt-2">Saluran pengaduan aman dan terpercaya bagi warga sekolah.</p>
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Informasi dari Admin & Form Pengaduan */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Info / Petunjuk dari Database Admin */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-base font-serif font-semibold text-slate-900 mb-3">Ketentuan Layanan Aduan</h3>
              <div className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {contentData.description || "Silakan isi form pengaduan di bawah ini dengan bijak, jujur, dan dapat dipertanggungjawabkan."}
              </div>
            </div>

            {/* Form Pengaduan Interaktif */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Formulir Pengaduan Online</h3>
              <p className="text-xs text-slate-500 mb-6">Identitas pelapor dijamin kerahasiaannya oleh Tim Bimbingan Konseling.</p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">✓</div>
                  <h4 className="text-base font-bold text-emerald-900">Aduan Berhasil Dikirim!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Terima kasih telah melapor. Tim BK kami akan segera meninjau dan menindaklanjuti laporan Anda secara profesional.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ nama: '', kelas: '', kategori: 'Bullying / Perundungan', pesan: '', isAnonim: false }); }}
                    className="mt-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-amber-500 hover:text-slate-950 transition"
                  >
                    Kirim Aduan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Checkbox Anonim */}
                  <div className="flex items-center gap-2 pb-2">
                    <input 
                      type="checkbox" 
                      id="anonim"
                      checked={formData.isAnonim}
                      onChange={(e) => setFormData({ ...formData, isAnonim: e.target.checked })}
                      className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
                    />
                    <label htmlFor="anonim" className="text-xs font-medium text-slate-700 cursor-pointer">
                      Kirim sebagai Anonim (Tanpa mencantumkan nama)
                    </label>
                  </div>

                  {!formData.isAnonim && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-medium text-slate-700 mb-1">NAMA LENGKAP</label>
                        <input 
                          type="text" 
                          required={!formData.isAnonim}
                          placeholder="Masukkan nama Anda" 
                          value={formData.nama}
                          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-700 mb-1">KELAS</label>
                        <input 
                          type="text" 
                          required={!formData.isAnonim}
                          placeholder="Contoh: XII PPLG 1" 
                          value={formData.kelas}
                          onChange={(e) => setFormData({ ...formData, kelas: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">KATEGORI PENGADUAN</label>
                    <select 
                      value={formData.kategori}
                      onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    >
                      <option value="Bullying / Perundungan">Bullying / Perundungan</option>
                      <option value="Kendala Akademik / Belajar">Kendala Akademik / Belajar</option>
                      <option value="Fasilitas & Sarpras Sekolah">Fasilitas & Sarpras Sekolah</option>
                      <option value="Kesehatan & Keamanan">Kesehatan & Keamanan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">ISI PESAN / LAPORAN</label>
                    <textarea 
                      rows="4" 
                      required
                      placeholder="Jelaskan detail kejadian atau permasalahan yang ingin dilaporkan secara jelas..." 
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow cursor-pointer"
                  >
                    Kirim Pengaduan Sekarang →
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Kolom Kanan: Sidebar Layanan BK */}
          <div className="space-y-6">
            <div className="bg-[#070d1b] text-white rounded-3xl p-6 shadow-xl border border-slate-800">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">LAYANAN BK</p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li onClick={() => navigateTo('program-bk')} className="hover:text-amber-400 transition cursor-pointer pb-2.5 border-b border-slate-800 flex justify-between items-center">
                  <span>Program BK</span><span>→</span>
                </li>
                <li onClick={() => navigateTo('layanan-aduan')} className="text-amber-400 font-semibold cursor-pointer pb-2.5 border-b border-slate-800 flex justify-between items-center">
                  <span>Layanan Aduan</span><span>→</span>
                </li>
                <li onClick={() => navigateTo('konseling-online')} className="hover:text-amber-400 transition cursor-pointer pt-1 flex justify-between items-center">
                  <span>Konseling Online</span><span>→</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}