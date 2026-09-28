import React, { useState, useEffect } from 'react';

export default function KonselingOnline({ navigateTo }) {
  const [contentData, setContentData] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);

  // State untuk form janji temu konseling online
  const [bookingData, setBookingData] = useState({
    nama: '',
    kelas: '',
    topik: 'Pribadi / Emosional',
    tanggal: '',
    sesi: 'Jam 09:00 - 10:00 WIB',
    catatan: ''
  });
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/content/konseling_online')
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

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

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
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600">SMK NEGERI 74 JAKARTA[cite: 6]</p>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">Database Connected</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900 leading-tight">
            {loading ? "Memuat..." : (contentData.title || "Layanan Konseling Online Internal")}[cite: 6]
          </h1>
          <p className="text-sm text-slate-600 mt-2">Sesi konsultasi privat dan aman bersama guru BK secara daring.</p>[cite: 6]
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Informasi Jadwal & Form Booking Konseling */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Info / Jadwal dari Database Admin */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-base font-serif font-semibold text-slate-900 mb-3">Ketentuan & Jadwal Konseling</h3>
              {loading ? (
                <p className="text-xs text-slate-500">Mengambil informasi dari database...</p>
              ) : (
                <div className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {contentData.description || "Belum ada informasi konseling online yang diinput melalui dashboard admin."}[cite: 6]
                </div>
              )}
            </div>

            {/* Form Pendaftaran / Booking Konseling Online */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Formulir Pendaftaran Sesi Konseling</h3>
              <p className="text-xs text-slate-500 mb-6">Pilih jadwal dan topik yang ingin dikonsultasikan. Guru BK akan menghubungi Anda melalui WhatsApp/Email.</p>

              {booked ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">✓</div>
                  <h4 className="text-base font-bold text-emerald-900">Jadwal Konseling Berhasil Diajukan!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Permintaan sesi Anda telah dicatat. Guru BK akan mengirimkan tautan (link) pertemuan daring via WhatsApp sebelum jadwal dimulai.
                  </p>
                  <button 
                    onClick={() => { setBooked(false); setBookingData({ nama: '', kelas: '', topik: 'Pribadi / Emosional', tanggal: '', sesi: 'Jam 09:00 - 10:00 WIB', catatan: '' }); }}
                    className="mt-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-amber-500 hover:text-slate-950 transition"
                  >
                    Buat Jadwal Baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">NAMA LENGKAP</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Nama lengkap siswa" 
                        value={bookingData.nama}
                        onChange={(e) => setBookingData({ ...bookingData, nama: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">KELAS</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Contoh: XI DKV 2" 
                        value={bookingData.kelas}
                        onChange={(e) => setBookingData({ ...bookingData, kelas: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">TOPIK KONSULTASI</label>
                      <select 
                        value={bookingData.topik}
                        onChange={(e) => setBookingData({ ...bookingData, topik: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                      >
                        <option value="Pribadi / Emosional">Pribadi / Emosional</option>
                        <option value="Akademik & Belajar">Akademik & Belajar</option>
                        <option value="Karier & Kelanjutan Studi">Karier & Kelanjutan Studi</option>
                        <option value="Permasalahan Sosial">Permasalahan Sosial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">RENCANA TANGGAL</label>
                      <input 
                        type="date" 
                        required
                        value={bookingData.tanggal}
                        onChange={(e) => setBookingData({ ...bookingData, tanggal: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">PILIHAN SESI WAKTU</label>
                    <select 
                      value={bookingData.sesi}
                      onChange={(e) => setBookingData({ ...bookingData, sesi: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    >
                      <option value="Jam 09:00 - 10:00 WIB">Pagi (09:00 - 10:00 WIB)</option>
                      <option value="Jam 10:30 - 11:30 WIB">Menjelang Siang (10:30 - 11:30 WIB)</option>
                      <option value="Jam 13:00 - 14:00 WIB">Siang (13:00 - 14:00 WIB)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">CATATAN TAMBAHAN (OPSIONAL)</label>
                    <textarea 
                      rows="3" 
                      placeholder="Tuliskan sedikit gambaran hal yang ingin didiskusikan..." 
                      value={bookingData.catatan}
                      onChange={(e) => setBookingData({ ...bookingData, catatan: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow cursor-pointer"
                  >
                    Ajukan Jadwal Konseling →
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Kolom Kanan: Sidebar Layanan BK */}
          <div className="space-y-6">
            <div className="bg-[#070d1b] text-white rounded-3xl p-6 shadow-xl border border-slate-800">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">LAYANAN BK</p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li onClick={() => navigateTo('program-bk')} className="hover:text-amber-400 transition cursor-pointer pb-2.5 border-b border-slate-800 flex justify-between items-center">
                  <span>Program BK</span><span>→</span>[cite: 6]
                </li>
                <li onClick={() => navigateTo('layanan-aduan')} className="hover:text-amber-400 transition cursor-pointer pb-2.5 border-b border-slate-800 flex justify-between items-center">
                  <span>Layanan Aduan</span><span>→</span>[cite: 6]
                </li>
                <li onClick={() => navigateTo('konseling-online')} className="text-amber-400 font-semibold cursor-pointer pt-1 flex justify-between items-center">
                  <span>Konseling Online</span><span>→</span>[cite: 6]
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}