import React, { useState } from 'react';

export default function Navbar({ currentPage, navigateTo }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [bkDropdownOpen, setBkDropdownOpen] = useState(false);
  const [urbanDropdownOpen, setUrbanDropdownOpen] = useState(false);
  const [sampahDropdownOpen, setSampahDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [mobileSubSubOpen, setMobileSubSubOpen] = useState(null);

  // Link Ngrok aktif milik Alfin untuk Perpustakaan
  const NGROK_PERPUSTAKAAN_URL = 'https://bristle-petunia-rival.ngrok-free.dev';

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
      setActiveSubMenu(null);
    } else {
      setActiveDropdown(menu);
      setActiveSubMenu(null);
      setBkDropdownOpen(false);
      setUrbanDropdownOpen(false);
      setSampahDropdownOpen(false);
    }
  };

  const handleNavClick = (page, targetId = null) => {
    navigateTo(page);
    setActiveDropdown(null);
    setActiveSubMenu(null);
    setBkDropdownOpen(false);
    setUrbanDropdownOpen(false);
    setSampahDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileSubOpen(null);
    setMobileSubSubOpen(null);

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* Navbar Utama */}
      <nav className="bg-[#070d1b]/95 border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex justify-between items-center backdrop-blur-xl relative z-30">
        
        {/* Logo & Nama Sekolah */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center shadow-inner group-hover:border-amber-400/50 transition duration-300">
            <img 
              src="/logo-smk74.png" 
              alt="Logo SMKN 74 Jakarta" 
              className="w-7 h-7 object-contain drop-shadow" 
            />
          </div>
          <h1 className="text-sm sm:text-base font-bold tracking-wide text-white leading-tight">
            SMK NEGERI <br />
            <span className="text-amber-400 group-hover:text-amber-300 transition">74 Jakarta</span>
          </h1>
        </div>

        {/* Tombol Menu Hamburger untuk HP (Mobile) */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-xl bg-slate-800/50 border border-slate-700/60 focus:outline-none hover:border-amber-400 transition"
          aria-label="Toggle Mobile Menu"
        >
          <span className="text-xl font-bold">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>

        {/* Menu Desktop (Layar Besar) */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
          
          {/* Dropdown Profil Sekolah */}
          <div className="relative flex items-center gap-1">
            <button 
              onClick={() => handleNavClick('sambutan')}
              className={`transition py-1 px-2 rounded-lg cursor-pointer ${currentPage === 'sambutan' ? 'text-amber-400 font-semibold bg-slate-800/40' : 'hover:text-amber-400 hover:bg-slate-800/30'}`}
            >
              Profil Sekolah
            </button>
            <button 
              onClick={() => toggleDropdown('profil')}
              className={`p-1.5 transition-transform duration-200 cursor-pointer rounded-lg hover:bg-slate-800/40 ${activeDropdown === 'profil' ? 'rotate-180 text-amber-400' : 'hover:text-amber-400'}`}
              aria-label="Toggle Profil Dropdown"
            >
              <span className="text-[10px]">▼</span>
            </button>

            {activeDropdown === 'profil' && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 z-[100] backdrop-blur-2xl ring-1 ring-black/5">
                <button onClick={() => handleNavClick('sambutan')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">
                  Sambutan Kepala Sekolah
                </button>
                <button onClick={() => handleNavClick('visimisi')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">
                  Visi & Misi Sekolah
                </button>
                <button onClick={() => handleNavClick('sarana')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">
                  Sarana & Prasarana
                </button>
                <button onClick={() => handleNavClick('tenagapendidik')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium leading-snug">
                  Profil Tenaga Pendidik & Kependidikan
                </button>
              </div>
            )}
          </div>

          {/* Dropdown Berita */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('berita')}
              className={`flex items-center gap-1.5 transition py-1 px-2 rounded-lg cursor-pointer ${activeDropdown === 'berita' ? 'text-amber-400 font-semibold bg-slate-800/40' : 'hover:text-amber-400 hover:bg-slate-800/30'}`}
            >
              <span>Berita</span> <span className="text-[10px]">▼</span>
            </button>
            {activeDropdown === 'berita' && (
              <div className="absolute top-full left-0 mt-3 w-60 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 z-[100] backdrop-blur-2xl ring-1 ring-black/5">
                <button onClick={() => handleNavClick('pengumuman')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">
                  Informasi Sekolah
                </button>
                <button onClick={() => handleNavClick('agenda')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">
                  Agenda
                </button>
                <button onClick={() => handleNavClick('event')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">
                  Event
                </button>
                <button onClick={() => handleNavClick('prestasi')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">
                  Prestasi
                </button>
              </div>
            )}
          </div>

          {/* Dropdown Layanan */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('layanan')}
              className={`flex items-center gap-1.5 transition py-1 px-2 rounded-lg cursor-pointer ${activeDropdown === 'layanan' ? 'text-amber-400 font-semibold bg-slate-800/40' : 'hover:text-amber-400 hover:bg-slate-800/30'}`}
            >
              <span>Layanan</span> <span className="text-[10px]">▼</span>
            </button>

            {activeDropdown === 'layanan' && (
              <div className="absolute top-full right-0 mt-3 w-72 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 z-[100] backdrop-blur-2xl ring-1 ring-black/5">
                
                {/* Kurikulum */}
                <div className="relative">
                  <div onClick={() => setActiveSubMenu(activeSubMenu === 'kurikulum' ? null : 'kurikulum')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer font-medium ${activeSubMenu === 'kurikulum' ? 'text-amber-400 font-semibold bg-amber-400/10' : 'text-slate-200 hover:bg-amber-400/10 hover:text-amber-400'}`}>
                    <span>Kurikulum</span> <span className="text-xs">›</span>
                  </div>
                  {activeSubMenu === 'kurikulum' && (
                    <div className="absolute left-full top-0 ml-1.5 w-72 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 z-[110] backdrop-blur-2xl max-h-[75vh] overflow-y-auto">
                      <button onClick={() => handleNavClick('ksp')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">KSP</button>
                      <button onClick={() => handleNavClick('struktur-kurikulum')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Struktur kurikulum</button>
                      <button onClick={() => handleNavClick('program-kurikulum')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Program kurikulum</button>
                      <button onClick={() => handleNavClick('timeline')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Timeline</button>
                      <button onClick={() => handleNavClick('pelayanan-akademik')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Pelayanan Akademik</button>
                      <button onClick={() => handleNavClick('modul-ajar')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Modul Ajar</button>
                    </div>
                  )}
                </div>

                {/* Kesiswaan */}
                <div className="relative">
                  <div onClick={() => setActiveSubMenu(activeSubMenu === 'kesiswaan' ? null : 'kesiswaan')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer font-medium ${activeSubMenu === 'kesiswaan' ? 'text-amber-400 font-semibold bg-amber-400/10' : 'text-slate-200 hover:bg-amber-400/10 hover:text-amber-400'}`}>
                    <span>Kesiswaan</span> <span className="text-xs">›</span>
                  </div>
                  {activeSubMenu === 'kesiswaan' && (
                    <div className="absolute left-full top-0 ml-1.5 w-72 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 z-[110] backdrop-blur-2xl max-h-[75vh] overflow-y-auto">
                      <button onClick={() => handleNavClick('program-kesiswaan')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Program Kesiswaan</button>
                      <button onClick={() => handleNavClick('struktur-organisasi-kesiswaan')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium leading-snug">Struktur Organisasi MPK, OSIS, Ekskul</button>
                      <button onClick={() => handleNavClick('data-prestasi-siswa')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Data Prestasi</button>
                      <button onClick={() => handleNavClick('timeline-kesiswaan')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Timeline Kegiatan Kesiswaan</button>
                      <button onClick={() => handleNavClick('galeri-kesiswaan')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium leading-snug">Galeri kesiswaan terkait laporan kegiatan</button>
                    </div>
                  )}
                </div>

                {/* Humas & DUDI */}
                <div className="relative">
                  <div onClick={() => setActiveSubMenu(activeSubMenu === 'humas' ? null : 'humas')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer font-medium ${activeSubMenu === 'humas' ? 'text-amber-400 font-semibold bg-amber-400/10' : 'text-slate-200 hover:bg-amber-400/10 hover:text-amber-400'}`}>
                    <span>Humas & DUDI</span> <span className="text-xs">›</span>
                  </div>
                  {activeSubMenu === 'humas' && (
                    <div className="absolute left-full top-0 ml-1.5 w-72 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 z-[110] backdrop-blur-2xl max-h-[75vh] overflow-y-auto">
                      <button onClick={() => handleNavClick('program-humas')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Program Humas & DuDi</button>
                      <button onClick={() => handleNavClick('timeline-kehumasan')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Timeline Kehumasan</button>
                      <button onClick={() => handleNavClick('daftar-mitra')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Daftar mitra industri</button>
                      <button onClick={() => handleNavClick('mou-humas')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">MoU</button>
                      <button onClick={() => handleNavClick('kelas-industri')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Kelas Industri</button>
                      <button onClick={() => handleNavClick('permohonan-pkl')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">PKL</button>
                      <button onClick={() => handleNavClick('pelayanan-kehumasan')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Pelayanan Kehumasan</button>
                      <button onClick={() => handleNavClick('sertifikasi-uji')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium leading-snug">Sertifikasi Uji Kompetensi</button>
                      <button onClick={() => handleNavClick('bkk')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">BKK</button>
                      <button onClick={() => handleNavClick('traces-study')} className="w-full text-left px-5 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Traces Study</button>
                    </div>
                  )}
                </div>

                {/* Sarana & Prasarana */}
                <div className="relative">
                  <div onClick={() => setActiveSubMenu(activeSubMenu === 'sarana' ? null : 'sarana')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer font-medium ${activeSubMenu === 'sarana' ? 'text-amber-400 font-semibold bg-amber-400/10' : 'text-slate-200 hover:bg-amber-400/10 hover:text-amber-400'}`}>
                    <span>Sarana & Prasarana</span> <span className="text-xs">›</span>
                  </div>
                  {activeSubMenu === 'sarana' && (
                    <div className="absolute left-full top-0 ml-1.5 w-72 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 z-[110] backdrop-blur-2xl">
                      <button onClick={() => handleNavClick('program-sarpras')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Program SarPras</button>
                      <button onClick={() => handleNavClick('galeri-sarpras')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Galeri SarPras per Jurusan</button>
                      <button onClick={() => handleNavClick('layanan-sarpras')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition cursor-pointer font-medium">Layanan SarPras</button>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          {/* Dropdown Keuangan */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('keuangan')}
              className={`flex items-center gap-1.5 transition py-1 px-2 rounded-lg cursor-pointer ${activeDropdown === 'keuangan' ? 'text-amber-400 font-semibold bg-slate-800/40' : 'hover:text-amber-400 hover:bg-slate-800/30'}`}
            >
              <span>Info Keuangan</span> <span className="text-[10px]">▼</span>
            </button>
            {activeDropdown === 'keuangan' && (
              <div className="absolute top-full right-0 mt-3 w-60 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 z-[100] backdrop-blur-2xl ring-1 ring-black/5">
                <a href="#bop" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition font-medium">BOP</a>
                <a href="#bos" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition font-medium">BOS</a>
              </div>
            )}
          </div>

          {/* Layanan Kontak di Navbar Atas */}
          <button 
            onClick={() => handleNavClick('home', 'kontak-section')} 
            className="hover:text-amber-400 transition py-1 px-2 rounded-lg cursor-pointer hover:bg-slate-800/30 font-medium"
          >
            Layanan Kontak
          </button>
        </div>

        {/* Menu Dropdown Mobile */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#050914]/98 border-b border-slate-800 py-6 px-6 flex flex-col space-y-4 lg:hidden shadow-2xl backdrop-blur-2xl max-h-[85vh] overflow-y-auto z-50">
            
            {/* Profil Sekolah Mobile */}
            <div>
              <button onClick={() => setMobileSubOpen(mobileSubOpen === 'profil' ? null : 'profil')} className={`w-full flex justify-between items-center text-sm font-semibold py-2.5 px-3 rounded-xl border border-slate-800/80 transition ${mobileSubOpen === 'profil' ? 'text-amber-400 bg-slate-800/40 border-amber-400/30' : 'text-slate-200 bg-slate-900/40'}`}>
                <span>Profil Sekolah</span>
                <span className="text-xs">{mobileSubOpen === 'profil' ? '▲' : '▼'}</span>
              </button>
              {mobileSubOpen === 'profil' && (
                <div className="pl-4 py-2.5 flex flex-col space-y-2 bg-slate-900/60 rounded-xl mt-2 border border-slate-800">
                  <button onClick={() => handleNavClick('sambutan')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">Sambutan Kepala Sekolah</button>
                  <button onClick={() => handleNavClick('visimisi')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">Visi & Misi Sekolah</button>
                  <button onClick={() => handleNavClick('sarana')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">Sarana & Prasarana</button>
                  <button onClick={() => handleNavClick('tenagapendidik')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">Tenaga Pendidik & Kependidikan</button>
                </div>
              )}
            </div>

            {/* Berita & Informasi Mobile */}
            <div>
              <button onClick={() => setMobileSubOpen(mobileSubOpen === 'berita' ? null : 'berita')} className={`w-full flex justify-between items-center text-sm font-semibold py-2.5 px-3 rounded-xl border border-slate-800/80 transition ${mobileSubOpen === 'berita' ? 'text-amber-400 bg-slate-800/40 border-amber-400/30' : 'text-slate-200 bg-slate-900/40'}`}>
                <span>Berita & Informasi</span>
                <span className="text-xs">{mobileSubOpen === 'berita' ? '▲' : '▼'}</span>
              </button>
              {mobileSubOpen === 'berita' && (
                <div className="pl-4 py-2.5 flex flex-col space-y-2 bg-slate-900/60 rounded-xl mt-2 border border-slate-800">
                  <button onClick={() => handleNavClick('pengumuman')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">Informasi Sekolah / Pengumuman</button>
                  <button onClick={() => handleNavClick('agenda')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">Agenda</button>
                  <button onClick={() => handleNavClick('event')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">Event</button>
                  <button onClick={() => handleNavClick('prestasi')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">Prestasi</button>
                </div>
              )}
            </div>

            {/* Layanan Mobile */}
            <div>
              <button onClick={() => setMobileSubOpen(mobileSubOpen === 'layanan' ? null : 'layanan')} className={`w-full flex justify-between items-center text-sm font-semibold py-2.5 px-3 rounded-xl border border-slate-800/80 transition ${mobileSubOpen === 'layanan' ? 'text-amber-400 bg-slate-800/40 border-amber-400/30' : 'text-slate-200 bg-slate-900/40'}`}>
                <span>Layanan</span>
                <span className="text-xs">{mobileSubOpen === 'layanan' ? '▲' : '▼'}</span>
              </button>
              {mobileSubOpen === 'layanan' && (
                <div className="pl-4 py-2.5 flex flex-col space-y-3 bg-slate-900/60 rounded-xl mt-2 border border-slate-800">
                  
                  {/* Kurikulum Mobile */}
                  <div>
                    <button onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'kurikulum' ? null : 'kurikulum')} className={`w-full flex justify-between text-xs font-bold py-1 transition ${mobileSubSubOpen === 'kurikulum' ? 'text-amber-400' : 'text-slate-300'}`}>
                      <span>Kurikulum</span>
                      <span>{mobileSubSubOpen === 'kurikulum' ? '▲' : '▼'}</span>
                    </button>
                    {mobileSubSubOpen === 'kurikulum' && (
                      <div className="pl-3 py-1.5 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                        <button onClick={() => handleNavClick('ksp')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">KSP</button>
                        <button onClick={() => handleNavClick('struktur-kurikulum')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Struktur kurikulum</button>
                        <button onClick={() => handleNavClick('program-kurikulum')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Program kurikulum</button>
                        <button onClick={() => handleNavClick('timeline')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Timeline</button>
                        <button onClick={() => handleNavClick('pelayanan-akademik')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Pelayanan Akademik</button>
                        <button onClick={() => handleNavClick('modul-ajar')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Modul Ajar</button>
                      </div>
                    )}
                  </div>

                  {/* Kesiswaan Mobile */}
                  <div>
                    <button onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'kesiswaan' ? null : 'kesiswaan')} className={`w-full flex justify-between text-xs font-bold py-1 transition ${mobileSubSubOpen === 'kesiswaan' ? 'text-amber-400' : 'text-slate-300'}`}>
                      <span>Kesiswaan</span>
                      <span>{mobileSubSubOpen === 'kesiswaan' ? '▲' : '▼'}</span>
                    </button>
                    {mobileSubSubOpen === 'kesiswaan' && (
                      <div className="pl-3 py-1.5 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                        <button onClick={() => handleNavClick('program-kesiswaan')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Program Kesiswaan</button>
                        <button onClick={() => handleNavClick('struktur-organisasi-kesiswaan')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Struktur Organisasi MPK, OSIS, Ekskul</button>
                        <button onClick={() => handleNavClick('data-prestasi-siswa')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Data Prestasi</button>
                        <button onClick={() => handleNavClick('timeline-kesiswaan')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Timeline Kegiatan Kesiswaan</button>
                        <button onClick={() => handleNavClick('galeri-kesiswaan')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Galeri kesiswaan terkait laporan kegiatan</button>
                      </div>
                    )}
                  </div>

                  {/* Humas & DUDI Mobile */}
                  <div>
                    <button onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'humas' ? null : 'humas')} className={`w-full flex justify-between text-xs font-bold py-1 transition ${mobileSubSubOpen === 'humas' ? 'text-amber-400' : 'text-slate-300'}`}>
                      <span>Humas & DUDI</span>
                      <span>{mobileSubSubOpen === 'humas' ? '▲' : '▼'}</span>
                    </button>
                    {mobileSubSubOpen === 'humas' && (
                      <div className="pl-3 py-1.5 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                        <button onClick={() => handleNavClick('program-humas')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">Program Humas & DuDi</button>
                        <button onClick={() => handleNavClick('timeline-kehumasan')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">Timeline Kehumasan</button>
                        <button onClick={() => handleNavClick('daftar-mitra')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">Daftar mitra industri</button>
                        <button onClick={() => handleNavClick('mou-humas')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">MoU</button>
                        <button onClick={() => handleNavClick('kelas-industri')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">Kelas Industri</button>
                        <button onClick={() => handleNavClick('permohonan-pkl')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">PKL</button>
                        <button onClick={() => handleNavClick('pelayanan-kehumasan')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">Pelayanan Kehumasan</button>
                        <button onClick={() => handleNavClick('sertifikasi-uji')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">Sertifikasi Uji Kompetensi</button>
                        <button onClick={() => handleNavClick('bkk')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">BKK</button>
                        <button onClick={() => handleNavClick('traces-study')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer font-medium">Traces Study</button>
                      </div>
                    )}
                  </div>

                  {/* Sarana & Prasarana Mobile */}
                  <div>
                    <button onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'sarpras' ? null : 'sarpras')} className={`w-full flex justify-between text-xs font-bold py-1 transition ${mobileSubSubOpen === 'sarpras' ? 'text-amber-400' : 'text-slate-300'}`}>
                      <span>Sarana & Prasarana</span>
                      <span>{mobileSubSubOpen === 'sarpras' ? '▲' : '▼'}</span>
                    </button>
                    {mobileSubSubOpen === 'sarpras' && (
                      <div className="pl-3 py-1.5 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                        <button onClick={() => handleNavClick('program-sarpras')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Program SarPras</button>
                        <button onClick={() => handleNavClick('galeri-sarpras')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Galeri SarPras per Jurusan</button>
                        <button onClick={() => handleNavClick('layanan-sarpras')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 font-medium cursor-pointer">Layanan SarPras</button>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

            {/* Info Keuangan Mobile */}
            <div>
              <button onClick={() => setMobileSubOpen(mobileSubOpen === 'keuangan' ? null : 'keuangan')} className={`w-full flex justify-between items-center text-sm font-semibold py-2.5 px-3 rounded-xl border border-slate-800/80 transition ${mobileSubOpen === 'keuangan' ? 'text-amber-400 bg-slate-800/40 border-amber-400/30' : 'text-slate-200 bg-slate-900/40'}`}>
                <span>Info Keuangan</span>
                <span className="text-xs">{mobileSubOpen === 'keuangan' ? '▲' : '▼'}</span>
              </button>
              {mobileSubOpen === 'keuangan' && (
                <div className="pl-4 py-2.5 flex flex-col space-y-2 bg-slate-900/60 rounded-xl mt-2 border border-slate-800">
                  <a href="#bop" onClick={() => handleNavClick('home')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">BOP</a>
                  <a href="#bos" onClick={() => handleNavClick('home')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1 font-medium">BOS</a>
                </div>
              )}
            </div>

            {/* Menu Tombol Cepat Mobile */}
            <div className="flex flex-col space-y-2 pt-2">
              
              {/* Bimbingan Konseling Mobile */}
              <div>
                <button 
                  onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'mobile-bk' ? null : 'mobile-bk')} 
                  className="w-full p-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-left text-xs font-semibold text-slate-200 hover:text-white flex justify-between items-center shadow-sm"
                >
                  <span>Bimbingan Konseling</span>
                  <span className="text-[10px]">{mobileSubSubOpen === 'mobile-bk' ? '▲' : '▼'}</span>
                </button>
                {mobileSubSubOpen === 'mobile-bk' && (
                  <div className="pl-4 py-2 flex flex-col space-y-2 bg-[#0a1022] rounded-xl mt-1 border border-slate-700 shadow-md">
                    <button onClick={() => handleNavClick('program-bk')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium cursor-pointer">Program BK</button>
                    <button onClick={() => handleNavClick('layanan-aduan')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium cursor-pointer">Layanan Aduan</button>
                    <button onClick={() => handleNavClick('konseling-online')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium cursor-pointer">Layanan konseling online internal</button>
                  </div>
                )}
              </div>

              {/* Perpustakaan & PPDB */}
              <div className="grid grid-cols-2 gap-2">
                <a 
                  href={NGROK_PERPUSTAKAAN_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-center text-xs font-semibold text-slate-200 hover:text-white shadow-sm transition"
                >
                  Perpustakaan
                </a>
                <button 
                  onClick={() => handleNavClick('home', 'kontak-section')} 
                  className="p-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-center text-xs font-semibold text-slate-200 hover:text-white shadow-sm transition"
                >
                  PPDB
                </button>
              </div>

              {/* Urban Farming Mobile */}
              <div>
                <button 
                  onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'mobile-urban' ? null : 'mobile-urban')} 
                  className="w-full p-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-left text-xs font-semibold text-slate-200 hover:text-white flex justify-between items-center shadow-sm"
                >
                  <span>Urban Farming</span>
                  <span className="text-[10px]">{mobileSubSubOpen === 'mobile-urban' ? '▲' : '▼'}</span>
                </button>
                {mobileSubSubOpen === 'mobile-urban' && (
                  <div className="pl-4 py-2 flex flex-col space-y-2 bg-[#0a1022] rounded-xl mt-1 border border-slate-700 shadow-md">
                    <button onClick={() => handleNavClick('urban-farming-program')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium">Program</button>
                    <button onClick={() => handleNavClick('urban-farming-timeline')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium">Timeline</button>
                    <button onClick={() => handleNavClick('urban-farming-galeri')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium">Galeri Kegiatan</button>
                  </div>
                )}
              </div>

              {/* Pilah Sampah / ArtCycle Mobile */}
              <div>
                <button 
                  onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'mobile-sampah' ? null : 'mobile-sampah')} 
                  className="w-full p-2.5 bg-slate-900/90 border border-slate-700 rounded-xl text-left text-xs font-semibold text-slate-200 hover:text-white flex justify-between items-center shadow-sm"
                >
                  <span>Pilah, Olah, Pulih Sampah</span>
                  <span className="text-[10px]">{mobileSubSubOpen === 'mobile-sampah' ? '▲' : '▼'}</span>
                </button>
                {mobileSubSubOpen === 'mobile-sampah' && (
                  <div className="pl-4 py-2 flex flex-col space-y-2 bg-[#0a1022] rounded-xl mt-1 border border-slate-700 shadow-md">
                    <button onClick={() => handleNavClick('artcycle-program')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium">Program ARTCYCLE 74</button>
                    <button onClick={() => handleNavClick('artcycle-timeline')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium">Timeline</button>
                    <button onClick={() => handleNavClick('artcycle-galeri')} className="text-left text-xs text-slate-200 hover:text-amber-400 py-1 font-medium">Galeri Kegiatan</button>
                  </div>
                )}
              </div>

            </div>

            <button onClick={() => handleNavClick('home', 'kontak-section')} className="text-left text-sm font-semibold text-slate-200 hover:text-amber-400 py-2.5 px-3 rounded-xl border border-slate-800/80 bg-slate-900/40 transition">
              Layanan Kontak
            </button>
          </div>
        )}
      </nav>

      {/* Sub-Navbar Pintasan di Bawah Header (Desktop) */}
      <div className="hidden lg:block bg-[#050b18] border-b border-slate-800/90 px-8 py-3.5 shadow-xl relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        
          {/* 1. Bimbingan Konseling */}
          <div className="relative">
            <button 
              onClick={() => { setBkDropdownOpen(!bkDropdownOpen); setActiveDropdown(null); setUrbanDropdownOpen(false); setSampahDropdownOpen(false); }}
              className="px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/60 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Bimbingan Konseling</span> <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {bkDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 px-2 z-30 backdrop-blur-2xl">
                <button onClick={() => { handleNavClick('program-bk'); setBkDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium">
                  Program BK
                </button>
                <button onClick={() => { handleNavClick('layanan-aduan'); setBkDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium">
                  Layanan Aduan
                </button>
                <button onClick={() => { handleNavClick('konseling-online'); setBkDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium leading-snug">
                  Layanan konseling online internal
                </button>
              </div>
            )}
          </div>

          {/* 2. Perpustakaan Sekolah */}
          <a 
            href={NGROK_PERPUSTAKAAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/60 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Perpustakaan Sekolah</span>
          </a>

          {/* 3. PPDB */}
          <button 
            onClick={() => { handleNavClick('home', 'kontak-section'); setBkDropdownOpen(false); setUrbanDropdownOpen(false); setSampahDropdownOpen(false); }}
            className="px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/60 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>PPDB</span>
          </button>

          {/* 4. Urban Farming */}
          <div className="relative">
            <button 
              onClick={() => { setUrbanDropdownOpen(!urbanDropdownOpen); setBkDropdownOpen(false); setSampahDropdownOpen(false); setActiveDropdown(null); }}
              className="px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/60 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Urban Farming</span> <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {urbanDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 px-2 z-30 backdrop-blur-2xl">
                <button onClick={() => { handleNavClick('urban-farming-program'); setUrbanDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium">
                  Program
                </button>
                <button onClick={() => { handleNavClick('urban-farming-timeline'); setUrbanDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium">
                  Timeline
                </button>
                <button onClick={() => { handleNavClick('urban-farming-galeri'); setUrbanDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium">
                  Galeri Kegiatan
                </button>
              </div>
            )}
          </div>

          {/* 5. Pilah, Olah, Pulih Sampah (ArtCycle) */}
          <div className="relative">
            <button 
              onClick={() => { setSampahDropdownOpen(!sampahDropdownOpen); setBkDropdownOpen(false); setUrbanDropdownOpen(false); setActiveDropdown(null); }}
              className="px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/60 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Pilah, Olah, Pulih Sampah</span> <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {sampahDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#0a1022] border border-slate-700/80 rounded-2xl shadow-2xl py-3 px-2 z-30 backdrop-blur-2xl">
                <button onClick={() => { handleNavClick('artcycle-program'); setSampahDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium">
                  Program ARTCYCLE 74
                </button>
                <button onClick={() => { handleNavClick('artcycle-timeline'); setSampahDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium">
                  Timeline
                </button>
                <button onClick={() => { handleNavClick('artcycle-galeri'); setSampahDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-200 hover:bg-amber-400/10 hover:text-amber-400 transition rounded-xl cursor-pointer font-medium">
                  Galeri Kegiatan
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}