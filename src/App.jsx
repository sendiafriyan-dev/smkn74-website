import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sambutan from './pages/Sambutan';
import VisiMisi from './pages/VisiMisi';
import SaranaPrasarana from './pages/SaranaPrasarana';
import Kurikulum from './pages/Kurikulum';
import Pengumuman from './pages/Pengumuman';
import TenagaPendidik from './pages/TenagaPendidik';
import PermohonanPkl from './pages/PermohonanPkl';
import Perpustakaan from './pages/Perpustakaan';
import SuratIzinKegiatan from './pages/SuratIzinKegiatan';
import { schoolInfo } from './config/schoolInfo';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      kicker: "GEDUNG SMK NEGERI 74",
      title: "Kreativitas yang tumbuh dari gedung ini.",
      bgImage: "/gedung-sekolah.jpg",
      hasCard: false
    },
    {
      kicker: "PESAN DARI KEPALA SEKOLAH",
      title: "Sekolah ini bukan sekadar tempat belajar — ia adalah rumah tempat karakter dibentuk.",
      bgImage: "/gedung-sekolah.jpg",
      cardImage: "/poto-kepsek.png",
      hasCard: true,
      cardTitle: "✦ SAMBUTAN KEPALA SEKOLAH",
      cardDesc: "Selamat datang di SMKN 74.\nSambutan, 2026"
    },
    {
      kicker: "KERJASAMA SMKN 74 & INSTITUT MEDIA DIGITAL EMTEK",
      title: "Kerjasama SMKN 74 dengan IMDE sebagai komitmen dalam bidang seni dan ekonomi kreatif",
      bgImage: "/gedung-sekolah.jpg",
      cardImage: "/kerjasama.jpg",
      hasCard: true,
      cardTitle: "PENANDATANGANAN MOU ANTARA SMKN 74 DENGAN IMDE",
      cardDesc: "Penandatanganan MoU antara SMKN 74 dengan IMDE sebagai komitmen bersama dalam akademik bidang seni dan ekonomi kreatif.\nKerjasama, 2026"
    },
    {
      kicker: "Siswa-siswa SMKN 74",
      title: "Meraih Harapan 2 Lomba Kreativitas Musik Tradisi Tingkat Kota Jakarta Selatan dalam FLS3N",
      bgImage: "/gedung-sekolah.jpg",
      cardImage: "/prestasi.jpg",
      hasCard: true,
      cardTitle: "✦ PRESTASI SISWA",
      cardDesc: "Meraih Harapan 2 Lomba Kreativitas Musik Tradisi Tingkat Kota Jakarta Selatan.\nPrestasi, 2026"
    }
  ];

  const newsList = [
    {
      id: 1,
      date: "07",
      month: "MEI",
      image: "/kerjasama.jpg",
      title: "Penandatanganan MoU SMKN 74 & Institut Media Digital Emtek",
      desc: "Penandatanganan MoU antara SMKN 74 dengan IMDE sebagai komitmen bersama dua instansi lembaga akademik bidang seni dan ekonomi kreatif melalui program inovatif. Semoga awal kolaborasi bisa saling bersinergi dan memberikan dampak positif.",
      link: "#baca-1"
    },
    {
      id: 2,
      date: "05",
      month: "MEI",
      image: "/mou.jpg",
      title: "MoU antara SMKN 74 dengan IKJ",
      desc: "Penandatanganan MoU antara SMKN 74 dengan IKJ sebagai komitmen bersama dua instansi lembaga akademik bidang seni dan ekonomi kreatif melalui program inovatif. Semoga awal kolaborasi bisa saling bersinergi dan memberikan dampak positif.",
      link: "#baca-2"
    },
    {
      id: 3,
      date: "04",
      month: "FEB",
      image: "/sosialisasi.jpg",
      title: "Sosialisasi Fast Beauty",
      desc: "Sosialisasi Fast Beauty yang sudah kita laksanakan hari ini Kamis, 5 Februari 2026. Acara keren yang membahas bagaimana cara merawat kulit untuk anak remaja, selain itu banyak hal baru yang didapatkan seperti menjadi konten kreator.",
      link: "#baca-3"
    }
  ];

  useEffect(() => {
    if (currentPage !== 'home') return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#070d1b] text-white font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />

      {currentPage === 'home' ? (
        <>
          {/* Hero Slider */}
          <header className="relative min-h-[calc(100vh-5rem)] py-12 flex items-center overflow-hidden w-full">
            <div className="absolute inset-0 z-0">
              <img 
                src={slides[currentSlide].bgImage} 
                alt="Background Sekolah" 
                className="w-full h-full object-cover object-center filter brightness-[0.55] transition-all duration-1000 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070d1b]/95 via-[#070d1b]/70 lg:to-transparent"></div>
            </div>

            <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-4 drop-shadow">
                  {slides[currentSlide].kicker}
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-normal mb-8 leading-[1.3] lg:leading-[1.2] text-white drop-shadow-md transition-all duration-500">
                  {slides[currentSlide].title}
                </h2>

                <div className="flex items-center gap-3 mt-8">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                        currentSlide === index ? 'w-10 bg-amber-400' : 'w-4 bg-slate-400/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {slides[currentSlide].hasCard && (
                <div 
                  onClick={() => {
                    if (currentSlide === 1) navigateTo('sambutan');
                  }}
                  className={`bg-[#070d1b]/85 border border-slate-700/60 p-4 rounded-2xl shadow-2xl backdrop-blur-md relative overflow-hidden justify-self-end w-full max-w-lg ${currentSlide === 1 ? 'cursor-pointer hover:border-amber-400 transition' : ''}`}
                >
                  <div className="absolute top-3 left-4 text-xs font-medium text-amber-300 tracking-wide uppercase z-10">
                    {slides[currentSlide].cardTitle}
                  </div>
                  <div className="mt-8 rounded-xl overflow-hidden shadow-inner relative h-56 sm:h-64">
                    <img src={slides[currentSlide].cardImage} alt="Card" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-xs text-slate-200 font-serif italic whitespace-pre-line">
                      {slides[currentSlide].cardDesc}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* Bagian Informasi & Sambutan Kepala Sekolah */}
          <section className="bg-white text-slate-900 py-16 lg:py-20 px-4 sm:px-8 lg:px-16 w-full border-b border-slate-100">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
                  INFORMASI
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-slate-900 mb-8">
                  Kabar terbaru dari sekolah
                </h3>

                <div className="space-y-4">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-900 text-white rounded-xl px-4 py-3 text-center shadow">
                        <span className="block text-lg font-bold">05</span>
                        <span className="block text-[10px] tracking-wider uppercase text-amber-400 font-semibold">APR</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                        Jadwal MPLS 2026 dan persiapan masuk
                      </h4>
                    </div>
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Baru
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-900 text-white rounded-xl px-4 py-3 text-center shadow">
                        <span className="block text-lg font-bold">02</span>
                        <span className="block text-[10px] tracking-wider uppercase text-amber-400 font-semibold">APR</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                        Pengumuman beasiswa siswa SMKN 74 tahun 2025/2026.
                      </h4>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-900 text-white rounded-xl px-4 py-3 text-center shadow">
                        <span className="block text-lg font-bold">28</span>
                        <span className="block text-[10px] tracking-wider uppercase text-amber-400 font-semibold">MAR</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                        Pekan Seni SMKN 74 — pendaftaran tim dibuka.
                      </h4>
                    </div>
                    <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Event
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={() => navigateTo('pengumuman')} className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition inline-flex items-center gap-1 cursor-pointer">
                    Lihat semua Pengumuman →
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
                  SAMBUTAN KEPALA SEKOLAH
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-slate-900 mb-8 leading-snug">
                  "Sekolah ini bukan sekadar tempat belajar — ia adalah rumah tempat karakter dibentuk."
                </h3>

                <div 
                  onClick={() => navigateTo('sambutan')}
                  className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative group bg-slate-100 cursor-pointer"
                >
                  <img 
                    src="/poto-kepsek.png" 
                    alt="Kepala Sekolah SMKN 74" 
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg font-bold pl-0.5 text-lg hover:scale-110 transition cursor-pointer">
                      ▶
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow">
                    Klik untuk Baca Selengkapnya
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Bagian Berita Terbaru */}
          <section className="bg-white text-slate-900 py-16 lg:py-20 px-4 sm:px-8 lg:px-16 w-full border-b border-slate-100">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
                  BERITA TERBARU
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-slate-900">
                  Cerita dari sekolah kami
                </h3>
              </div>
              <button onClick={() => navigateTo('pengumuman')} className="mt-4 md:mt-0 text-sm font-semibold text-amber-600 hover:text-amber-700 transition inline-flex items-center gap-1 cursor-pointer">
                Lihat semua Berita →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {newsList.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="relative h-60 sm:h-64 rounded-3xl overflow-hidden shadow-md bg-slate-200 group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 px-3 py-2 rounded-xl text-center shadow font-bold">
                      <span className="block text-base leading-tight">{item.date}</span>
                      <span className="block text-[10px] tracking-wider uppercase">{item.month}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col flex-1">
                    <h4 className="text-base sm:text-lg font-serif font-normal text-slate-900 leading-snug mb-3">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bagian Hubungi Kami, Peta & Kotak Saran */}
          <section id="kontak-section" className="bg-white text-slate-900 py-16 lg:py-20 px-4 sm:px-8 lg:px-16 w-full">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
                  HUBUNGI KAMI & SARAN
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-slate-900">
                  Datang, tanya, atau sampaikan suaramu.
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              
              {/* Kolom Kiri: Peta & Informasi Kontak */}
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-[280px] sm:h-[320px] relative bg-slate-100">
                  <iframe 
                    title="Lokasi SMKN 74 Jakarta"
                    src={schoolInfo.mapEmbedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="bg-[#070d1b] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                  <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">
                    INFORMASI SEKOLAH
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slate-800 pb-2.5">
                      <span className="text-slate-400">Telepon</span>
                      <span className="font-medium text-slate-200">{schoolInfo.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2.5">
                      <span className="text-slate-400">Email</span>
                      <span className="font-medium text-slate-200">{schoolInfo.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2.5">
                      <span className="text-slate-400">Jam Kerja</span>
                      <span className="font-medium text-slate-200">{schoolInfo.workingHours}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-400">PPDB</span>
                      <span className="font-medium text-amber-400">{schoolInfo.ppdbPeriod}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Form Kotak Saran */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">KOTAK SARAN</p>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Suaramu didengar.</h4>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Punya saran, kritik, atau apresiasi? Kirim secara anonim atau dengan nama. Kami membaca setiap pesan.
                  </p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert("Saran berhasil dikirim!"); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">NAMA (OPSIONAL)</label>
                      <input 
                        type="text" 
                        placeholder="Anonim" 
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">EMAIL (OPSIONAL)</label>
                      <input 
                        type="email" 
                        placeholder="kamu@email.com" 
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">KATEGORI</label>
                    <select className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500">
                      <option>Pilih kategori</option>
                      <option>Fasilitas & Sarpras</option>
                      <option>Akademik & Pembelajaran</option>
                      <option>Kesiswaan & Ekstrakurikuler</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">PESAN</label>
                    <textarea 
                      rows="3" 
                      placeholder="Tulis saran, kritik, atau apresiasi di sini..." 
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow cursor-pointer"
                  >
                    Kirim Saran →
                  </button>
                </form>
              </div>

            </div>
          </section>
        </>
      ) : currentPage === 'sambutan' ? (
        <Sambutan navigateTo={navigateTo} />
      ) : currentPage === 'visimisi' ? (
        <VisiMisi navigateTo={navigateTo} />
      ) : currentPage === 'sarana' ? (
        <SaranaPrasarana navigateTo={navigateTo} />
      ) : currentPage === 'kurikulum' ? (
        <Kurikulum navigateTo={navigateTo} />
      ) : currentPage === 'pengumuman' ? (
        <Pengumuman navigateTo={navigateTo} />
      ) : currentPage === 'tenagapendidik' ? (
        <TenagaPendidik navigateTo={navigateTo} />
      ) : currentPage === 'permohonan-pkl' ? (
        <PermohonanPkl navigateTo={navigateTo} />
      ) : currentPage === 'perpustakaan' ? (
        <Perpustakaan navigateTo={navigateTo} />
      ) : currentPage === 'surat-izin-kegiatan' ? (
        <SuratIzinKegiatan navigateTo={navigateTo} />
      ) : null}

      {/* Footer Full Width (Responsif & Sinkron HP/Web) */}
      <footer className="bg-[#070d1b] text-slate-300 w-full px-4 sm:px-8 lg:px-16 pt-16 pb-12 shadow-2xl border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
            
            {/* Kolom 1 */}
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
                <img 
                  src="/logo-smk74.png" 
                  alt="Logo SMKN 74 Jakarta" 
                  className="w-10 h-10 object-contain" 
                />
                <h2 className="text-sm font-bold tracking-wide text-white leading-tight">
                  SMK NEGERI <br />
                  <span className="text-amber-400">74 Jakarta</span>
                </h2>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-line">
                {schoolInfo.address}
              </p>
              <p className="text-xs text-slate-400">
                Telepon {schoolInfo.phone} • NPSN {schoolInfo.npsn}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-slate-800 text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded border border-slate-700">KEMENDIKDASMEN</span>
                <span className="bg-slate-800 text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded border border-slate-700">PEMPROV DKI</span>
              </div>
            </div>

            {/* Kolom 2: Profil */}
            <div className="space-y-3 text-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">PROFIL</p>
              <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                <li><button onClick={() => navigateTo('sambutan')} className="hover:text-amber-400 transition text-left cursor-pointer">Sambutan</button></li>
                <li><button onClick={() => navigateTo('visimisi')} className="hover:text-amber-400 transition text-left cursor-pointer">Visi & Misi</button></li>
                <li><button onClick={() => navigateTo('sarana')} className="hover:text-amber-400 transition text-left cursor-pointer">Sarana & Prasarana</button></li>
                <li><button onClick={() => navigateTo('kurikulum')} className="hover:text-amber-400 transition text-left cursor-pointer">Kurikulum</button></li>
                <li><button onClick={() => navigateTo('tenagapendidik')} className="hover:text-amber-400 transition text-left cursor-pointer">Tenaga Pendidik</button></li>
              </ul>
            </div>

            {/* Kolom 3: Akademik */}
            <div className="space-y-3 text-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">AKADEMIK</p>
              <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                <li><button onClick={() => navigateTo('kurikulum')} className="hover:text-amber-400 transition text-left cursor-pointer">Kurikulum</button></li>
                <li><a href="#konsentrasi" onClick={() => navigateTo('home')} className="hover:text-amber-400 transition">Konsentrasi Keahlian</a></li>
                <li><a href="#ppdb" onClick={() => navigateTo('home')} className="hover:text-amber-400 transition">PPDB</a></li>
              </ul>
            </div>

            {/* Kolom 4: Berita */}
            <div className="space-y-3 text-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">BERITA</p>
              <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                <li><button onClick={() => navigateTo('pengumuman')} className="hover:text-amber-400 transition text-left cursor-pointer">Pengumuman & Informasi</button></li>
                <li><a href="#agenda" onClick={() => navigateTo('home')} className="hover:text-amber-400 transition">Agenda Sekolah</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4 text-center sm:text-left">
            <p>© 2026 SMK Negeri 74 Jakarta.</p>
          </div>
        </div>
      </footer>

      {/* Tombol Melayang WhatsApp */}
      <a 
        href="https://wa.me/6281234567890?text=Halo%20Admin%20SMKN%2074%20Jakarta,%20saya%20ingin%20bertanya..." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
}