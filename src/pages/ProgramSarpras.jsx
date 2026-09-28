import React, { useState, useEffect } from 'react';

export default function ProgramSarpras({ navigateTo }) {
  const [contentData, setContentData] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);

  // Ambil data dari backend Node.js & MySQL saat halaman dibuka
  useEffect(() => {
    fetch('http://localhost:5000/api/content/program_sarpras')
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setContentData(resData.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat data dari database:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-white text-slate-900 py-16 px-4 sm:px-8 lg:px-16 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        
        {/* Tombol Navigasi Kembali */}
        <button 
          onClick={() => navigateTo('home')}
          className="group mb-8 inline-flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-xl hover:bg-amber-100 transition duration-300 cursor-pointer shadow-sm"
        >
          <span className="group-hover:-translate-x-1 transition transform">←</span>
          <span>Kembali ke Beranda</span>
        </button>

        {/* Header Halaman */}
        <div className="mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600">
              SARANA & PRASARANA SMKN 74 JAKARTA
            </p>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
              Database Connected
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black leading-tight">
            {loading ? "Memuat..." : (contentData.title || "Program SarPras")}
          </h1>
          <p className="text-sm text-black mt-2">
            Rancangan program kerja, pemeliharaan, serta pengembangan sarana dan prasarana sekolah.
          </p>
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Konten Utama (Dinamis dari Database MySQL) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-black mb-4">Daftar Program Kerja SarPras</h3>
              
              {loading ? (
                <div className="p-16 border-2 border-dashed border-slate-300 rounded-2xl bg-white text-center">
                  <p className="text-xs text-slate-500">Mengambil data dari database...</p>
                </div>
              ) : (
                <div className="p-6 border border-slate-200 rounded-2xl bg-white text-slate-700 text-sm leading-relaxed whitespace-pre-line shadow-sm">
                  {contentData.description || "Belum ada konten yang diinput melalui dashboard admin."}
                </div>
              )}
            </div>
          </div>

          {/* Kolom Samping (Sidebar Menu SarPras) */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">
                MENU SARANA & PRASARANA
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li onClick={() => navigateTo('program-sarpras')} className="border-b border-slate-800 pb-2.5 transition cursor-pointer flex justify-between items-center text-amber-400 font-semibold">
                  <span>Program SarPras</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('galeri-sarpras')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Galeri SarPras per Jurusan</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('layanan-sarpras')} className="hover:text-amber-400 transition cursor-pointer flex justify-between items-center pt-1">
                  <span>Layanan SarPras</span>
                  <span>→</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}