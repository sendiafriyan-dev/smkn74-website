import React from 'react';

export default function ArtCycleTimeline({ navigateTo }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigateTo('home')} 
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-amber-600 transition cursor-pointer bg-slate-100 px-4 py-2 rounded-xl"
        >
          ← Kembali ke Beranda
        </button>

        <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">SMK NEGERI 74 JAKARTA</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900 mb-4">
          Timeline ARTCYCLE 74
        </h1>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          Jadwal dan tahapan kegiatan pengelolaan sampah sekolah.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-serif font-bold text-slate-900 mb-4">Jadwal Kegiatan</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Belum ada timeline kegiatan pilah sampah yang diinput melalui dashboard admin.
          </p>
        </div>
      </div>
    </div>
  );
}