// src/pages/TenagaPendidik.jsx
import React, { useState, useEffect } from 'react';

export default function TenagaPendidik({ navigateTo }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('SEMUA');
  
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mengambil URL dari file .env secara otomatis
    const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

    fetch(`${apiUrl}/api/tenaga-pendidik`)
      .then((res) => res.json())
      .then((response) => {
        const dataList = Array.isArray(response) ? response : (response.data || []);
        setStaffList(dataList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat data tenaga pendidik:", err);
        setLoading(false);
      });
  }, []);

  const categories = ['SEMUA', 'MANAJEMEN', 'GURU', 'KEPENDIDIKAN'];

  const filteredStaff = staffList.filter(item => {
    const name = item.name || '';
    const subject = item.subject || '';
    
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeTab === 'SEMUA' || 
      subject.toUpperCase().includes(activeTab) || 
      name.toUpperCase().includes(activeTab);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#070d1b] text-white relative overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      <div className="py-24 px-4 sm:px-8 lg:px-24 w-full border-b border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-400">
            <button onClick={() => navigateTo('home')} className="text-amber-400 hover:text-white transition cursor-pointer">BERANDA</button>
            <span>/</span>
            <span className="text-slate-400">PROFIL SEKOLAH</span>
            <span>/</span>
            <span className="text-white">TENAGA PENDIDIK & KEPENDIDIKAN</span>
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            ORANG-ORANG SEKOLAH
          </p>
          <h1 className="text-3xl lg:text-6xl font-serif font-normal text-white leading-[1.2] max-w-4xl tracking-tight">
            Guru, staf, dan pendamping <br />
            <span className="text-amber-400">setiap hari.</span>
          </h1>

          <div className="pt-8 flex flex-col md:flex-row items-center gap-4 max-w-4xl">
            <div className="relative w-full md:w-1/2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">🔍</span>
              <input 
                type="text" 
                placeholder="Cari nama guru atau staf..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0b1329] border border-slate-700/80 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition cursor-pointer ${
                    activeTab === cat ? 'bg-amber-400 text-slate-950 shadow-lg' : 'bg-[#0b1329] text-slate-300 border border-slate-700/60 hover:border-amber-400/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="py-16 px-4 sm:px-8 lg:px-24 bg-white text-slate-900 rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center pb-4 border-b border-slate-200">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">ANGGOTA</p>
              <h2 className="text-2xl lg:text-3xl font-serif font-normal text-slate-900 mt-1">Tenaga Pendidik & Kependidikan.</h2>
            </div>
            <p className="text-xs font-bold text-slate-500">Total: {filteredStaff.length} Personel</p>
          </div>

          {loading ? (
            <div className="text-center py-20 text-slate-500 font-medium">Memuat data dari database...</div>
          ) : filteredStaff.length === 0 ? (
            <div className="text-center py-20 text-slate-500 font-medium">Belum ada data guru yang ditayangkan.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredStaff.map((staff) => (
                <div key={staff.id} className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col group">
                  <div className="relative h-72 overflow-hidden bg-slate-200">
                    <img 
                      src={staff.photo ? `${import.meta.env.VITE_API_URL}/storage/${staff.photo}` : '/default-avatar.png'} 
                      alt={staff.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      GURU
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-serif font-semibold text-slate-900 group-hover:text-amber-600 transition">
                        {staff.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500">
                        {staff.subject}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-amber-600 font-bold">
                      <span>SMKN 74 Jakarta</span>
                      <span>NIP: {staff.nip || '-'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  ); 
}