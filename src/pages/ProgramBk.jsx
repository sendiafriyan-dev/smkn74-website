import React, { useState, useEffect } from 'react';

export default function ProgramBk({ navigateTo }) {
  const [contentData, setContentData] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/content/program_bk')
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
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600">SMK NEGERI 74 JAKARTA[cite: 5]</p>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">Database Connected</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900 leading-tight">
            {loading ? "Memuat..." : (contentData.title || "Program Bimbingan Konseling")}[cite: 5]
          </h1>
          <p className="text-sm text-slate-600 mt-2">Layanan bimbingan dan pengembangan karakter peserta didik SMKN 74 Jakarta.</p>[cite: 5]
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Konten dari Database & Informasi Tambahan */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Kotak Konten Utama dari Database Admin */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">Detail Program & Layanan BK</h3>
              {loading ? (
                <div className="p-8 text-center"><p className="text-xs text-slate-500">Mengambil data dari database...</p></div>
              ) : (
                <div className="p-6 border border-slate-200 rounded-2xl bg-white text-slate-700 text-sm leading-relaxed whitespace-pre-line shadow-sm">
                  {contentData.description || "Belum ada program BK yang diinput melalui dashboard admin."}[cite: 5]
                </div>
              )}
            </div>

            {/* Kartu Informasi Pendukung (Pilar Layanan BK) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">Bimbingan Pribadi & Sosial</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Membantu siswa mengenali potensi diri, mengelola emosi, serta membangun hubungan sosial yang sehat di lingkungan sekolah.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">Bimbingan Karier & Studi</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Mengarahkan persiapan pemilihan jurusan, persiapan PKL, hingga perencanaan masa depan setelah lulus dari SMKN 74.</p>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Sidebar Menu Layanan BK */}
          <div className="space-y-6">
            <div className="bg-[#070d1b] text-white rounded-3xl p-6 shadow-xl border border-slate-800">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">LAYANAN BK</p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li onClick={() => navigateTo('program-bk')} className="text-amber-400 font-semibold cursor-pointer pb-2.5 border-b border-slate-800 flex justify-between items-center">
                  <span>Program BK</span><span>→</span>[cite: 5]
                </li>
                <li onClick={() => navigateTo('layanan-aduan')} className="hover:text-amber-400 transition cursor-pointer pb-2.5 border-b border-slate-800 flex justify-between items-center">
                  <span>Layanan Aduan</span><span>→</span>[cite: 5]
                </li>
                <li onClick={() => navigateTo('konseling-online')} className="hover:text-amber-400 transition cursor-pointer pt-1 flex justify-between items-center">
                  <span>Konseling Online</span><span>→</span>[cite: 5]
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}