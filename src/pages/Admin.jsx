import React, { useState, useEffect } from 'react';

export default function Admin({ navigateTo }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('artcycleData'); // Kategori default
  const [savedList, setSavedList] = useState([]);

  // Ambil data setiap kali kategori diubah atau halaman dibuka
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(category) || '[]');
    setSavedList(data);
  }, [category]);

  // Fungsi untuk menyimpan data yang diketik Admin
  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !desc) return alert('Judul dan Deskripsi wajib diisi!');

    const newItem = { id: Date.now(), title, desc };
    const updatedList = [...savedList, newItem];
    
    // Simpan ke LocalStorage agar langsung tampil di frontend
    localStorage.setItem(category, JSON.stringify(updatedList));
    setSavedList(updatedList);
    setTitle('');
    setDesc('');
    alert('Data berhasil disimpan dan langsung tampil di website!');
  };

  // Fungsi untuk menghapus data
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus data ini?");
    if (confirmDelete) {
      const updatedList = savedList.filter(item => item.id !== id);
      localStorage.setItem(category, JSON.stringify(updatedList));
      setSavedList(updatedList);
    }
  };

  return (
    <div className="min-h-screen bg-[#070d1b] text-white p-6 sm:p-10 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Header Admin */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-800 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-amber-400">Dashboard Admin Panel</h1>
          <p className="text-xs text-slate-400 mt-1">Kelola konten website frontend SMKN 74 Jakarta.</p>
        </div>
        <button 
          onClick={() => navigateTo('home')} 
          className="bg-slate-800 text-slate-300 px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-700 hover:text-white transition cursor-pointer shadow-md border border-slate-700"
        >
          ← Kembali ke Website Utama
        </button>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Kolom Kiri: Form Input Data */}
        <div className="md:col-span-1 space-y-6">
          <form onSubmit={handleSave} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-amber-500 border-b border-slate-800 pb-3">
              Tambah Konten
            </h2>

            {/* Pilihan Kategori Halaman */}
            <div>
              <label className="block text-[11px] font-bold tracking-widest text-slate-400 mb-1.5 uppercase">Pilih Halaman</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="artcycleData">Program ARTCYCLE 74</option>
                <option value="urbanFarmingData">Program Urban Farming</option>
                <option value="pengumumanData">Pengumuman & Berita</option>
              </select>
            </div>

            {/* Input Judul */}
            <div>
              <label className="block text-[11px] font-bold tracking-widest text-slate-400 mb-1.5 uppercase">Judul</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Masukkan judul..." 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Input Deskripsi */}
            <div>
              <label className="block text-[11px] font-bold tracking-widest text-slate-400 mb-1.5 uppercase">Keterangan / Deskripsi</label>
              <textarea 
                rows="4" 
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} 
                placeholder="Tulis rincian konten di sini..." 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-lg">
              Simpan & Tampilkan
            </button>
          </form>
        </div>

        {/* Kolom Kanan: Daftar Data yang Sudah Masuk */}
        <div className="md:col-span-2">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl h-full">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
              <h2 className="text-sm font-bold tracking-wider uppercase text-amber-500">
                Daftar Konten Aktif
              </h2>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md uppercase tracking-wider font-bold">
                {category === 'artcycleData' ? 'ARTCYCLE' : category === 'urbanFarmingData' ? 'URBAN FARMING' : 'PENGUMUMAN'}
              </span>
            </div>
            
            {savedList.length === 0 ? (
              <div className="text-center py-12 bg-slate-950/50 rounded-xl border border-slate-800 border-dashed">
                <p className="text-sm text-slate-500 font-medium">Belum ada data di kategori ini.</p>
                <p className="text-xs text-slate-600 mt-1">Silakan tambah melalui form di sebelah kiri.</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {savedList.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 bg-[#050b18] p-4 rounded-xl border border-slate-700/60 shadow-inner">
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-line">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => handleDelete(item.id)} 
                      className="shrink-0 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition cursor-pointer self-start sm:self-center"
                    >
                      Hapus
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}