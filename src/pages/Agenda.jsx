import React, { useState, useEffect } from 'react';

export default function Agenda({ navigateTo }) {
  const [contentData, setContentData] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/content/agenda')
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
        
        {/* Tombol Navigasi Kembali */}
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
            {loading ? "Memuat..." : (contentData.title || "Agenda Sekolah")}
          </h1>
          <p className="text-sm text-slate-600 mt-2">Jadwal kegiatan dan agenda resmi SMK Negeri 74 Jakarta.</p>
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Konten */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">Daftar Agenda</h3>
              {loading ? (
                <div className="p-12 text-center">
                  <p className="text-xs text-slate-500">Mengambil data dari database...</p>
                </div>
              ) : (
                <div className="p-6 border border-slate-200 rounded-2xl bg-white text-slate-700 text-sm leading-relaxed whitespace-pre-line shadow-sm">
                  {contentData.description || "Belum ada agenda yang diinput melalui dashboard admin."}
                </div>
              )}
            </div>
          </div>

          {/* Kolom Sidebar Kategori */}
          <div className="space-y-6">
            <div className="bg-[#070d1b] text-white rounded-3xl p-6 shadow-xl border border-slate-800">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">KATEGORI BERITA</p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li onClick={() => navigateTo('agenda')} className="text-amber-400 font-semibold cursor-pointer pb-2.5 border-b border-slate-800 flex justify-between items-center">
                  <span>Agenda</span><span>→</span>
                </li>
                <li onClick={() => navigateTo('event')} className="hover:text-amber-400 transition cursor-pointer pb-2.5 border-b border-slate-800 flex justify-between items-center">
                  <span>Event</span><span>→</span>
                </li>
                <li onClick={() => navigateTo('prestasi')} className="hover:text-amber-400 transition cursor-pointer pt-1 flex justify-between items-center">
                  <span>Prestasi</span><span>→</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}