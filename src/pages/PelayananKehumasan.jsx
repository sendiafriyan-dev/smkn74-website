import React from 'react';

export default function PelayananKehumasan({ navigateTo }) {
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
              HUMAS & DUDI SMKN 74 JAKARTA
            </p>
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200">
              Backend Integration Ready
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black leading-tight">
            Pelayanan Kehumasan
          </h1>
          <p className="text-sm text-black mt-2">
            Pusat informasi layanan administrasi, pengaduan, dan permohonan layanan kehumasan sekolah. Area di bawah ini disiapkan kosong untuk backend atau dashboard admin.
          </p>
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Konten Utama (Kosong / Backend Ready) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-black mb-4">Layanan & Informasi Kehumasan</h3>
              
              <div className="p-16 border-2 border-dashed border-slate-300 rounded-2xl bg-white text-center">
                <p className="text-sm font-semibold text-black mb-1">Area Konten Pelayanan Kehumasan</p>
                <p className="text-xs text-black">Silakan diisi, dihubungkan endpoint API, atau dikelola melalui dashboard admin.</p>
              </div>
            </div>
          </div>

          {/* Kolom Samping (Sidebar Menu Humas & DUDI) */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">
                MENU HUMAS & DUDI
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li onClick={() => navigateTo('program-humas')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Program Humas & DuDi</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('timeline-kehumasan')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Timeline Kehumasan</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('daftar-mitra')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Daftar Mitra Industri</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('mou-humas')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>MoU</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('kelas-industri')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Kelas Industri</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('permohonan-pkl')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>PKL</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('pelayanan-kehumasan')} className="border-b border-slate-800 pb-2.5 transition cursor-pointer flex justify-between items-center text-amber-400 font-semibold">
                  <span>Pelayanan Kehumasan</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('sertifikasi-uji')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>Sertifikasi Uji Kompetensi</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('bkk')} className="border-b border-slate-800 pb-2.5 hover:text-amber-400 transition cursor-pointer flex justify-between items-center">
                  <span>BKK</span>
                  <span>→</span>
                </li>
                <li onClick={() => navigateTo('traces-study')} className="hover:text-amber-400 transition cursor-pointer flex justify-between items-center pt-1">
                  <span>Traces Study</span>
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