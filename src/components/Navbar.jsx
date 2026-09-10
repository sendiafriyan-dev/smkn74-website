import React, { useState } from 'react';

export default function Navbar({ currentPage, navigateTo }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [mobileSubSubOpen, setMobileSubSubOpen] = useState(null);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
      setActiveSubMenu(null);
    } else {
      setActiveDropdown(menu);
      setActiveSubMenu(null);
    }
  };

  const handleNavClick = (page, targetId = null) => {
    navigateTo(page);
    setActiveDropdown(null);
    setActiveSubMenu(null);
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
    <nav className="bg-[#070d1b]/95 border-b border-slate-800/80 px-4 sm:px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg backdrop-blur-md">
      {/* Logo & Nama Sekolah */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
        <img 
          src="/logo-smk74.png" 
          alt="Logo SMKN 74 Jakarta" 
          className="w-10 h-10 object-contain" 
        />
        <h1 className="text-sm sm:text-base font-bold tracking-wide text-white leading-tight">
          SMK NEGERI <br />
          <span className="text-amber-400">74 Jakarta</span>
        </h1>
      </div>

      {/* Tombol Menu Hamburger untuk HP (Mobile) */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white p-2 focus:outline-none hover:text-amber-400 transition"
        aria-label="Toggle Mobile Menu"
      >
        <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
      </button>

      {/* Menu Desktop (Layar Besar) */}
      <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-300">
        
        {/* Dropdown Profil Sekolah */}
        <div className="relative flex items-center gap-1">
          <button 
            onClick={() => handleNavClick('sambutan')}
            className={`transition py-1 cursor-pointer ${currentPage === 'sambutan' ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'}`}
          >
            Profil Sekolah
          </button>
          <button 
            onClick={() => toggleDropdown('profil')}
            className={`p-1 transition-transform duration-200 cursor-pointer ${activeDropdown === 'profil' ? 'rotate-180 text-amber-400' : 'hover:text-amber-400'}`}
            aria-label="Toggle Profil Dropdown"
          >
            <span className="text-xs">▼</span>
          </button>

          {activeDropdown === 'profil' && (
            <div className="absolute top-full left-0 mt-3 w-72 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
              <button onClick={() => handleNavClick('sambutan')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition cursor-pointer">
                Sambutan Kepala Sekolah
              </button>
              <button onClick={() => handleNavClick('visimisi')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition cursor-pointer">
                Visi & Misi Sekolah
              </button>
              <button onClick={() => handleNavClick('sarana')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition cursor-pointer">
                Sarana & Prasarana
              </button>
              <button onClick={() => handleNavClick('tenagapendidik')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition cursor-pointer leading-snug">
                Profil Tenaga Pendidik & Kependidikan
              </button>
              <button onClick={() => handleNavClick('kurikulum')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition cursor-pointer">
                Kurikulum
              </button>
            </div>
          )}
        </div>

        {/* Dropdown Berita */}
        <div className="relative">
          <button 
            onClick={() => toggleDropdown('berita')}
            className={`flex items-center gap-1.5 transition py-1 cursor-pointer ${activeDropdown === 'berita' ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'}`}
          >
            <span>Berita</span> <span className="text-xs">▼</span>
          </button>
          {activeDropdown === 'berita' && (
            <div className="absolute top-full left-0 mt-3 w-60 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
              <button onClick={() => handleNavClick('pengumuman')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition cursor-pointer">
                Informasi Sekolah
              </button>
              <a href="#agenda" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">Agenda</a>
              <a href="#event" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">Event</a>
            </div>
          )}
        </div>

        {/* Dropdown Layanan */}
        <div className="relative">
          <button 
            onClick={() => toggleDropdown('layanan')}
            className={`flex items-center gap-1.5 transition py-1 cursor-pointer ${activeDropdown === 'layanan' ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'}`}
          >
            <span>Layanan</span> <span className="text-xs">▼</span>
          </button>

          {activeDropdown === 'layanan' && (
            <div className="absolute top-full right-0 mt-3 w-72 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
              
              {/* Akademik */}
              <div className="relative">
                <div onClick={() => setActiveSubMenu(activeSubMenu === 'akademik' ? null : 'akademik')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer ${activeSubMenu === 'akademik' ? 'text-amber-400 font-semibold bg-slate-800/60' : 'text-slate-200 hover:bg-slate-800/80 hover:text-amber-400'}`}>
                  <span>Akademik</span> <span className="text-xs">›</span>
                </div>
                {activeSubMenu === 'akademik' && (
                  <div className="absolute left-full top-0 ml-1 w-72 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
                    <a href="#surat-akademik" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition leading-snug">Permohonan Penerbitan Surat Akademik</a>
                    <a href="#izin-masuk" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">Surat Ijin Tidak Masuk Sekolah</a>
                  </div>
                )}
              </div>

              {/* Kesiswaan */}
              <div className="relative">
                <div onClick={() => setActiveSubMenu(activeSubMenu === 'kesiswaan' ? null : 'kesiswaan')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer ${activeSubMenu === 'kesiswaan' ? 'text-amber-400 font-semibold bg-slate-800/60' : 'text-slate-200 hover:bg-slate-800/80 hover:text-amber-400'}`}>
                  <span>Kesiswaan</span> <span className="text-xs">›</span>
                </div>
                {activeSubMenu === 'kesiswaan' && (
                  <div className="absolute left-full top-0 ml-1 w-72 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
                    <a href="#surat-kesiswaan" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition leading-snug">Permohonan Penerbitan Surat Kesiswaan</a>
                    <button onClick={() => handleNavClick('surat-izin-kegiatan')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition cursor-pointer">Surat Ijin Kegiatan</button>
                  </div>
                )}
              </div>

              {/* Humas & DUDI */}
              <div className="relative">
                <div onClick={() => setActiveSubMenu(activeSubMenu === 'humas' ? null : 'humas')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer ${activeSubMenu === 'humas' ? 'text-amber-400 font-semibold bg-slate-800/60' : 'text-slate-200 hover:bg-slate-800/80 hover:text-amber-400'}`}>
                  <span>Humas & DUDI</span> <span className="text-xs">›</span>
                </div>
                {activeSubMenu === 'humas' && (
                  <div className="absolute left-full top-0 ml-1 w-80 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
                    <a href="#surat-humas" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition leading-snug">Permohonan Penerbitan Surat HUMAS & DUDI</a>
                    <button onClick={() => handleNavClick('permohonan-pkl')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition leading-snug cursor-pointer">Permohonan Melaksanakan Kelas Industri / PKL</button>
                  </div>
                )}
              </div>

              {/* Sarana & Prasarana */}
              <div className="relative">
                <div onClick={() => setActiveSubMenu(activeSubMenu === 'sarana' ? null : 'sarana')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer ${activeSubMenu === 'sarana' ? 'text-amber-400 font-semibold bg-slate-800/60' : 'text-slate-200 hover:bg-slate-800/80 hover:text-amber-400'}`}>
                  <span>Sarana & Prasarana</span> <span className="text-xs">›</span>
                </div>
                {activeSubMenu === 'sarana' && (
                  <div className="absolute left-full top-0 ml-1 w-60 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
                    <a href="#peminjaman-sarpras" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">Peminjaman Sarpras</a>
                    <a href="#inventaris" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">Data Inventaris</a>
                  </div>
                )}
              </div>

              {/* Bimbingan Konseling */}
              <div className="relative">
                <div onClick={() => setActiveSubMenu(activeSubMenu === 'bk' ? null : 'bk')} className={`flex justify-between items-center px-5 py-2.5 text-sm transition cursor-pointer ${activeSubMenu === 'bk' ? 'text-amber-400 font-semibold bg-slate-800/60' : 'text-slate-200 hover:bg-slate-800/80 hover:text-amber-400'}`}>
                  <span>Bimbingan Konseling</span> <span className="text-xs">›</span>
                </div>
                {activeSubMenu === 'bk' && (
                  <div className="absolute left-full top-0 ml-1 w-60 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
                    <a href="#konseling-online" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">Konseling Online</a>
                    <a href="#layanan-bk" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">Jadwal Layanan BK</a>
                  </div>
                )}
              </div>

              <button onClick={() => handleNavClick('perpustakaan')} className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition cursor-pointer">Perpustakaan</button>
            </div>
          )}
        </div>

        {/* Dropdown Keuangan */}
        <div className="relative">
          <button 
            onClick={() => toggleDropdown('keuangan')}
            className={`flex items-center gap-1.5 transition py-1 cursor-pointer ${activeDropdown === 'keuangan' ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'}`}
          >
            <span>Info Keuangan</span> <span className="text-xs">▼</span>
          </button>
          {activeDropdown === 'keuangan' && (
            <div className="absolute top-full right-0 mt-3 w-60 bg-[#0b1329] border border-slate-700/80 rounded-xl shadow-2xl py-3 z-50 backdrop-blur-md">
              <a href="#bop" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">BOP</a>
              <a href="#bos" onClick={() => handleNavClick('home')} className="block px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition">BOS</a>
            </div>
          )}
        </div>

        <button onClick={() => handleNavClick('home')} className="hover:text-amber-400 transition cursor-pointer">Daftar PPDB</button>
        <button onClick={() => handleNavClick('home', 'kontak-section')} className="hover:text-amber-400 transition cursor-pointer">Kontak</button>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#070d1b] border-b border-slate-800 py-6 px-6 flex flex-col space-y-4 lg:hidden shadow-2xl backdrop-blur-xl max-h-[85vh] overflow-y-auto">
          
          {/* Profil Sekolah */}
          <div>
            <button onClick={() => setMobileSubOpen(mobileSubOpen === 'profil' ? null : 'profil')} className={`w-full flex justify-between items-center text-sm font-semibold py-2 border-b border-slate-800/60 transition ${mobileSubOpen === 'profil' ? 'text-amber-400' : 'text-slate-200'}`}>
              <span>Profil Sekolah</span>
              <span>{mobileSubOpen === 'profil' ? '▲' : '▼'}</span>
            </button>
            {mobileSubOpen === 'profil' && (
              <div className="pl-4 py-2 flex flex-col space-y-2 bg-slate-900/50 rounded-xl mt-2">
                <button onClick={() => handleNavClick('sambutan')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">Sambutan Kepala Sekolah</button>
                <button onClick={() => handleNavClick('visimisi')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">Visi & Misi Sekolah</button>
                <button onClick={() => handleNavClick('sarana')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">Sarana & Prasarana</button>
                <button onClick={() => handleNavClick('tenagapendidik')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">Tenaga Pendidik & Kependidikan</button>
                <button onClick={() => handleNavClick('kurikulum')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">Kurikulum</button>
              </div>
            )}
          </div>

          {/* Berita & Informasi */}
          <div>
            <button onClick={() => setMobileSubOpen(mobileSubOpen === 'berita' ? null : 'berita')} className={`w-full flex justify-between items-center text-sm font-semibold py-2 border-b border-slate-800/60 transition ${mobileSubOpen === 'berita' ? 'text-amber-400' : 'text-slate-200'}`}>
              <span>Berita & Informasi</span>
              <span>{mobileSubOpen === 'berita' ? '▲' : '▼'}</span>
            </button>
            {mobileSubOpen === 'berita' && (
              <div className="pl-4 py-2 flex flex-col space-y-2 bg-slate-900/50 rounded-xl mt-2">
                <button onClick={() => handleNavClick('pengumuman')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">Informasi Sekolah / Pengumuman</button>
                <a href="#agenda" onClick={() => handleNavClick('home')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">Agenda</a>
                <a href="#event" onClick={() => handleNavClick('home')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">Event</a>
              </div>
            )}
          </div>

          {/* Layanan */}
          <div>
            <button onClick={() => setMobileSubOpen(mobileSubOpen === 'layanan' ? null : 'layanan')} className={`w-full flex justify-between items-center text-sm font-semibold py-2 border-b border-slate-800/60 transition ${mobileSubOpen === 'layanan' ? 'text-amber-400' : 'text-slate-200'}`}>
              <span>Layanan</span>
              <span>{mobileSubOpen === 'layanan' ? '▲' : '▼'}</span>
            </button>
            {mobileSubOpen === 'layanan' && (
              <div className="pl-4 py-2 flex flex-col space-y-3 bg-slate-900/50 rounded-xl mt-2">
                
                {/* Akademik Mobile */}
                <div>
                  <button onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'akademik' ? null : 'akademik')} className={`w-full flex justify-between text-xs font-bold py-1 transition ${mobileSubSubOpen === 'akademik' ? 'text-amber-400' : 'text-slate-300'}`}>
                    <span>Akademik</span>
                    <span>{mobileSubSubOpen === 'akademik' ? '▲' : '▼'}</span>
                  </button>
                  {mobileSubSubOpen === 'akademik' && (
                    <div className="pl-3 py-1 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                      <a href="#surat-akademik" onClick={() => handleNavClick('home')} className="text-[11px] text-slate-300 hover:text-amber-400">Permohonan Surat Akademik</a>
                      <a href="#izin-masuk" onClick={() => handleNavClick('home')} className="text-[11px] text-slate-300 hover:text-amber-400">Surat Ijin Tidak Masuk Sekolah</a>
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
                    <div className="pl-3 py-1 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                      <a href="#surat-kesiswaan" onClick={() => handleNavClick('home')} className="text-[11px] text-slate-300 hover:text-amber-400">Permohonan Surat Kesiswaan</a>
                      <button onClick={() => handleNavClick('surat-izin-kegiatan')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer">Surat Ijin Kegiatan</button>
                    </div>
                  )}
                </div>

                {/* Humas Mobile */}
                <div>
                  <button onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'humas' ? null : 'humas')} className={`w-full flex justify-between text-xs font-bold py-1 transition ${mobileSubSubOpen === 'humas' ? 'text-amber-400' : 'text-slate-300'}`}>
                    <span>Humas & DUDI</span>
                    <span>{mobileSubSubOpen === 'humas' ? '▲' : '▼'}</span>
                  </button>
                  {mobileSubSubOpen === 'humas' && (
                    <div className="pl-3 py-1 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                      <a href="#surat-humas" onClick={() => handleNavClick('home')} className="text-[11px] text-slate-300 hover:text-amber-400">Permohonan Surat Humas</a>
                      <button onClick={() => handleNavClick('permohonan-pkl')} className="text-left text-[11px] text-slate-300 hover:text-amber-400 py-1 cursor-pointer">Permohonan Kelas Industri / PKL</button>
                    </div>
                  )}
                </div>

                {/* Sarpras Mobile */}
                <div>
                  <button onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'sarpras' ? null : 'sarpras')} className={`w-full flex justify-between text-xs font-bold py-1 transition ${mobileSubSubOpen === 'sarpras' ? 'text-amber-400' : 'text-slate-300'}`}>
                    <span>Sarana & Prasarana</span>
                    <span>{mobileSubSubOpen === 'sarpras' ? '▲' : '▼'}</span>
                  </button>
                  {mobileSubSubOpen === 'sarpras' && (
                    <div className="pl-3 py-1 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                      <a href="#peminjaman-sarpras" onClick={() => handleNavClick('home')} className="text-[11px] text-slate-300 hover:text-amber-400">Peminjaman Sarpras</a>
                      <a href="#inventaris" onClick={() => handleNavClick('home')} className="text-[11px] text-slate-300 hover:text-amber-400">Data Inventaris</a>
                    </div>
                  )}
                </div>

                {/* BK Mobile */}
                <div>
                  <button onClick={() => setMobileSubSubOpen(mobileSubSubOpen === 'bk' ? null : 'bk')} className={`w-full flex justify-between text-xs font-bold py-1 transition ${mobileSubSubOpen === 'bk' ? 'text-amber-400' : 'text-slate-300'}`}>
                    <span>Bimbingan Konseling</span>
                    <span>{mobileSubSubOpen === 'bk' ? '▲' : '▼'}</span>
                  </button>
                  {mobileSubSubOpen === 'bk' && (
                    <div className="pl-3 py-1 flex flex-col space-y-1.5 border-l border-slate-700 ml-1">
                      <a href="#konseling-online" onClick={() => handleNavClick('home')} className="text-[11px] text-slate-300 hover:text-amber-400">Konseling Online</a>
                      <a href="#layanan-bk" onClick={() => handleNavClick('home')} className="text-[11px] text-slate-300 hover:text-amber-400">Jadwal Layanan BK</a>
                    </div>
                  )}
                </div>

                <button onClick={() => handleNavClick('perpustakaan')} className="text-xs font-bold text-slate-300 hover:text-amber-400 py-1 text-left block w-full cursor-pointer">Perpustakaan</button>

              </div>
            )}
          </div>

          {/* Info Keuangan */}
          <div>
            <button onClick={() => setMobileSubOpen(mobileSubOpen === 'keuangan' ? null : 'keuangan')} className={`w-full flex justify-between items-center text-sm font-semibold py-2 border-b border-slate-800/60 transition ${mobileSubOpen === 'keuangan' ? 'text-amber-400' : 'text-slate-200'}`}>
              <span>Info Keuangan</span>
              <span>{mobileSubOpen === 'keuangan' ? '▲' : '▼'}</span>
            </button>
            {mobileSubOpen === 'keuangan' && (
              <div className="pl-4 py-2 flex flex-col space-y-2 bg-slate-900/50 rounded-xl mt-2">
                <a href="#bop" onClick={() => handleNavClick('home')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">BOP</a>
                <a href="#bos" onClick={() => handleNavClick('home')} className="text-left text-xs text-slate-300 hover:text-amber-400 py-1">BOS</a>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick('home')} className="text-left text-sm font-semibold text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800/60">
            Daftar PPDB
          </button>
          
          <button onClick={() => handleNavClick('home', 'kontak-section')} className="text-left text-sm font-semibold text-slate-200 hover:text-amber-400 py-2">
            Kontak Sekolah
          </button>
        </div>
      )}
    </nav>
  );
}