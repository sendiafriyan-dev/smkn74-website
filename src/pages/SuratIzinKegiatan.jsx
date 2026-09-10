import React, { useState } from 'react';

export default function SuratIzinKegiatan({ navigateTo }) {
  const [formData, setFormData] = useState({
    namaKegiatan: '',
    tanggalKegiatan: '',
    waktuKegiatan: '',
    tempatKegiatan: '',
    keterangan: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
        
        {/* Navigasi Kembali */}
        <button 
          onClick={() => navigateTo('home')} 
          className="text-xs font-semibold text-amber-600 hover:underline mb-6 inline-flex items-center gap-1 cursor-pointer"
        >
          ← Kembali ke Beranda
        </button>

        <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">LAYANAN KESISWAAN</p>
        <h2 className="text-2xl sm:text-3xl font-serif font-normal text-slate-900 mb-4">
          Permohonan Surat Izin Kegiatan
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed">
          Silakan isi detail kegiatan di bawah ini untuk mengajukan permohonan surat izin atau dispensasi kegiatan siswa.
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-4">
            <h3 className="text-lg font-bold text-emerald-700">Permohonan Izin Berhasil Dikirim!</h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Pengajuan izin kegiatan Anda telah tercatat dan akan segera diverifikasi oleh tim Pembina Kesiswaan SMKN 74 Jakarta.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 px-5 py-2.5 bg-amber-500 text-slate-950 text-xs font-bold rounded-xl hover:bg-amber-400 transition cursor-pointer"
            >
              Ajukan Permohonan Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Nama / Jenis Kegiatan</label>
              <input 
                type="text" 
                name="namaKegiatan" 
                required
                value={formData.namaKegiatan} 
                onChange={handleChange}
                placeholder="Contoh: Lomba Coding Antar Pelajar se-DKI"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Tanggal Pelaksanaan</label>
                <input 
                  type="date" 
                  name="tanggalKegiatan" 
                  required
                  value={formData.tanggalKegiatan} 
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Waktu / Jam Kegiatan</label>
                <input 
                  type="text" 
                  name="waktuKegiatan" 
                  required
                  value={formData.waktuKegiatan} 
                  onChange={handleChange}
                  placeholder="Contoh: 08.00 - 15.00 WIB"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Tempat / Lokasi Kegiatan</label>
              <input 
                type="text" 
                name="tempatKegiatan" 
                required
                value={formData.tempatKegiatan} 
                onChange={handleChange}
                placeholder="Contoh: Aula Utama SMKN 74 / Gedung Walikota Jaksel"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Keterangan Tambahan / Catatan</label>
              <textarea 
                name="keterangan" 
                rows="3"
                value={formData.keterangan} 
                onChange={handleChange}
                placeholder="Tuliskan keterangan singkat atau jumlah peserta jika diperlukan"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer"
              >
                Kirim Permohonan Izin Kegiatan
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}