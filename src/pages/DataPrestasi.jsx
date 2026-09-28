import React from 'react';

export default function DataPrestasi({ title = "Data Prestasi Siswa", navigateTo }) {
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
              KESISWAAN SMKN 74 JAKARTA
            </p>
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200">
              Backend Integration Ready
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black leading-tight">
            {title}
          </h1>
          <p className="text-sm text-black mt-2">
            Arsip penghargaan dan pencapaian membanggakan siswa-siswi SMKN 74 Jakarta. Area di bawah ini disiapkan kosong untuk backend atau dashboard admin.
          </p>
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Konten Utama (Kosong / Backend Ready) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-black mb-4">Daftar Prestasi & Penghargaan</h3>
              
              <div className="p-16 border-2 border-dashed border-slate-300 rounded-2xl bg-white text-center">
                <p className="text-sm font-semibold text-black mb-1">Area Konten Data Prestasi</p>
                <p className="text-xs text-black">Silakan diisi, dihubungkan endpoint API, atau dikelola melalui dashboard admin.</p>
              </div>
            </div>
          </div>

          {/* Kolom Samping (Sidebar Menu Kesiswaan) */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">
                MENU KESISWAAN
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li onClick={() => navigateTo('program-kesiswaan')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Program Kesiswaan</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('struktur-organisasi-kesiswaan')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Struktur Organisasi (MPK, OSIS, Ekskul)</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('data-prestasi-siswa')} className="border-b border-slate-800 pb-2.5 transition cursor-pointer flex justify-between items-center text-amber-400 font-semibold">
                  <span>Data Prestasi</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('timeline-kesiswaan')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Timeline Kegiatan Kesiswaan</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('galeri-kesiswaan')} className="hover:text-amber-400 transition cursor-pointer flex justify-between items-center pt-1">
                  <span>Galeri & Laporan Kegiatan</span>
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