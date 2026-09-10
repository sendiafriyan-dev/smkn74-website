import React from 'react';

export default function SaranaPrasarana({ navigateTo }) {
  const statsList = [
    { number: "24", label: "RUANG KELAS" },
    { number: "8", label: "STUDIO & LAB" },
    { number: "4", label: "KONSENTRASI" },
    { number: "1.5 ha", label: "LUAS LAHAN" }
  ];

  const facilitiesList = [
    {
      category: "PEMBELAJARAN",
      count: "24 RUANG",
      title: "Ruang Kelas",
      desc: "Kelas modern dilengkapi proyektor interaktif, AC pendingin, dan tata cahaya ramah belajar.",
      bg: "bg-gradient-to-br from-[#0b1329] to-[#04070f]",
      text: "text-white",
      subText: "text-slate-300",
      tagColor: "text-amber-400",
      border: "border-slate-800"
    },
    {
      category: "PRAKTIK SENI",
      count: "1 STUDIO",
      title: "Studio Tari",
      desc: "Studio lantai kayu profesional dengan cermin dinding penuh dan sistem audio terintegrasi.",
      bg: "bg-gradient-to-br from-amber-500 to-amber-600",
      text: "text-slate-950",
      subText: "text-slate-900",
      tagColor: "text-slate-950 font-bold",
      border: "border-amber-400"
    },
    {
      category: "PRAKTIK SENI",
      count: "2 STUDIO",
      title: "Studio Musik",
      desc: "Ruang peredam suara akustik premium lengkap dengan perangkat gamelan, drum, gitar, dan keyboard.",
      bg: "bg-gradient-to-br from-orange-700 to-amber-900",
      text: "text-white",
      subText: "text-orange-100",
      tagColor: "text-amber-300",
      border: "border-orange-600"
    },
    {
      category: "PRAKTIK SENI",
      count: "1 PANGGUNG",
      title: "Black Box Theater",
      desc: "Panggung teater eksperimental serbaguna dengan tata cahaya panggung dan tata suara profesional.",
      bg: "bg-gradient-to-br from-emerald-900 to-teal-950",
      text: "text-white",
      subText: "text-emerald-100",
      tagColor: "text-emerald-400",
      border: "border-emerald-800"
    },
    {
      category: "AKADEMIK",
      count: "+4.000 KOLEKSI",
      title: "Perpustakaan",
      desc: "Pusat literasi digital dan fisik dengan ribuan buku seni, jurnal ilmiah, serta ruang baca tenang.",
      bg: "bg-gradient-to-br from-slate-100 to-slate-200",
      text: "text-slate-900",
      subText: "text-slate-700",
      tagColor: "text-amber-700",
      border: "border-slate-300"
    },
    {
      category: "AKADEMIK",
      count: "2 LAB",
      title: "Lab Komputer",
      desc: "Workstation berspesifikasi tinggi untuk mendukung desain grafis, multimedia, dan animasi digital 3D.",
      bg: "bg-gradient-to-br from-[#0b1329] to-[#04070f]",
      text: "text-white",
      subText: "text-slate-300",
      tagColor: "text-amber-400",
      border: "border-slate-800"
    },
    {
      category: "OLAHRAGA",
      count: "1 LAPANGAN",
      title: "Lapangan Olahraga",
      desc: "Area terbuka serbaguna untuk kegiatan fisik, upacara bendera, dan pameran seni luar ruangan.",
      bg: "bg-gradient-to-br from-white to-slate-50",
      text: "text-slate-900",
      subText: "text-slate-700",
      tagColor: "text-slate-600",
      border: "border-slate-200"
    },
    {
      category: "PENUNJANG",
      count: "500 KAPASITAS",
      title: "Aula Serbaguna",
      desc: "Gedung pertemuan utama berkapasitas besar untuk acara pentas seni akbar dan wisuda siswa.",
      bg: "bg-gradient-to-br from-amber-200 to-amber-300",
      text: "text-slate-950",
      subText: "text-slate-900",
      tagColor: "text-amber-900",
      border: "border-amber-300"
    },
    {
      category: "PENUNJANG",
      count: "1 UNIT",
      title: "Masjid Sekolah",
      desc: "Sarana ibadah yang bersih, luas, dan nyaman untuk kegiatan kerohanian serta pembinaan karakter.",
      bg: "bg-gradient-to-br from-slate-50 to-emerald-50",
      text: "text-slate-900",
      subText: "text-slate-700",
      tagColor: "text-emerald-700",
      border: "border-emerald-200"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-white text-slate-900 relative overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Banner Gelap Full Lebar di Bagian Atas dengan Efek Cahaya Halus */}
      <div className="bg-[#070d1b] text-white py-20 px-8 lg:px-24 w-full border-b border-slate-800/80 shadow-2xl relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumb Interaktif */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-400 mb-6">
            <button 
              onClick={() => navigateTo('home')} 
              className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              BERANDA
            </button>
            <span>/</span>
            <span className="text-slate-400">PROFIL SEKOLAH</span>
            <span>/</span>
            <span className="text-white">SARANA & PRASARANA</span>
          </div>

          <p className="text-xs font-bold tracking-widest uppercase text-amber-400/90 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            FASILITAS SEKOLAH
          </p>

          <h2 className="text-3xl lg:text-5xl font-serif font-normal text-white leading-[1.3] max-w-4xl">
            Ruang untuk berlatih, berkarya, dan bertumbuh setiap hari.
          </h2>

        </div>
      </div>

      {/* Konten Utama Statistik & Daftar Fasilitas Modern */}
      <main className="py-24 px-8 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Grid Statistik Angka dengan Gaya Minimalis Modern */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-slate-200">
            {statsList.map((stat, index) => (
              <div key={index} className="space-y-2 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <h3 className="text-4xl lg:text-5xl font-serif font-normal text-slate-900">
                  {stat.number}
                </h3>
                <p className="text-xs font-bold tracking-widest uppercase text-amber-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bagian Daftar Fasilitas Kartu Modern */}
          <div className="space-y-12">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">
                DAFTAR FASILITAS
              </p>
              <h3 className="text-3xl lg:text-4xl font-serif font-normal text-slate-900">
                Setiap ruang punya tujuan.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilitiesList.map((item, index) => (
                <div 
                  key={index} 
                  className={`${item.bg} ${item.text} rounded-3xl p-8 flex flex-col justify-between shadow-xl border ${item.border} hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 min-h-[340px] group relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition duration-500"></div>

                  <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase relative z-10">
                    <span className={item.tagColor}>{item.category}</span>
                    <span className="opacity-75 bg-black/10 px-2.5 py-1 rounded-full text-[10px]">{item.count}</span>
                  </div>

                  <div className="my-auto py-8 space-y-3 relative z-10">
                    <h4 className="text-2xl font-serif font-normal group-hover:translate-x-1 transition duration-300">
                      {item.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${item.subText}`}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-current/10 flex justify-between items-center relative z-10">
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
                      SMKN 74 JAKARTA
                    </span>
                    <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      Jelajahi →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}