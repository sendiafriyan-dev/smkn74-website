import React, { useState } from 'react';

export default function Pengumuman({ navigateTo }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('SEMUA');

  // Daftar pengumuman dikosongkan agar siap diisi oleh admin nantinya
  const pengumumanList = [];

  const categories = ['SEMUA', 'MPLS', 'BEASISWA', 'KESISWAAN', 'AKADEMIK'];

  const filteredPengumuman = pengumumanList.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'SEMUA' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-950 text-white relative overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Header Minimalis Berkelas */}
      <div className="pt-16 pb-12 px-8 lg:px-24 border-b border-slate-800/60 bg-gradient-to-b from-[#070d1b] to-slate-950">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-400">
            <button 
              onClick={() => navigateTo('home')} 
              className="text-amber-400 hover:text-white transition cursor-pointer"
            >
              BERANDA
            </button>
            <span>/</span>
            <span className="text-white">PENGUMUMAN & INFORMASI</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-4">
                Pusat Informasi Resmi
              </span>
              <h1 className="text-3xl lg:text-5xl font-serif font-normal tracking-tight text-white">
                Arsip Pengumuman Sekolah
              </h1>
            </div>

            {/* Input Pencarian Cepat */}
            <div className="w-full md:w-80">
              <input 
                type="text" 
                placeholder="Cari pengumuman..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition shadow-inner"
              />
            </div>
          </div>

          {/* Kategori Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' 
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Area Konten Kosong / Siap Diisi Admin */}
      <main className="py-16 px-8 lg:px-24 bg-white text-slate-900 rounded-t-[2.55rem] shadow-2xl min-h-[500px]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-100">
            <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
              Menampilkan 0 pengumuman aktif
            </p>
          </div>

          {filteredPengumuman.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPengumuman.map((item) => (
                <div 
                  key={item.id}
                  className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Kartu Item */}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-28 text-slate-400 space-y-3">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-2xl text-slate-400 mb-2">
                📂
              </div>
              <p className="text-xl font-serif text-slate-800">Belum ada pengumuman tersedia.</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Informasi dan arsip pengumuman resmi sekolah akan segera diperbarui oleh admin.
              </p>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}