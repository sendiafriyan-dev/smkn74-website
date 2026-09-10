import React from 'react';

export default function Kurikulum({ navigateTo }) {
  const pilarList = [
    {
      number: "01",
      title: "Mata Pelajaran Umum",
      desc: "Bahasa Indonesia, Matematika, Bahasa Inggris, Sejarah, PPKn, PJOK, dan Agama."
    },
    {
      number: "02",
      title: "Dasar Bidang Keahlian",
      desc: "Pengetahuan dasar seni, sejarah seni, apresiasi karya, dan estetika visual."
    },
    {
      number: "03",
      title: "Konsentrasi Keahlian",
      desc: "Spesialisasi Tari, Musik, Karawitan, atau Teater dengan fasilitas studio profesional."
    },
    {
      number: "04",
      title: "Projek Penguatan P5",
      desc: "Pengembangan Profil Pelajar Pancasila lewat projek kolaborasi lintas mata pelajaran."
    }
  ];

  const faseList = [
    {
      sem: "SEM 1-2 · KELAS X",
      title: "Fondasi & Eksplorasi",
      desc: "Pengenalan dasar umum, pengantar seni rupa & panggung, serta proyek P5 perdana.",
      highlight: "Tahun Pertama"
    },
    {
      sem: "SEM 3-4 · KELAS XI",
      title: "Spesialisasi & Kolaborasi",
      desc: "Pendalaman konsentrasi pilihan, magang awal industri, dan kolaborasi lintas seni.",
      highlight: "Tahun Kedua"
    },
    {
      sem: "SEM 5 · KELAS XII",
      title: "Industri & PKL",
      desc: "Praktik Kerja Lapangan (PKL) di mitra DUDI serta produksi karya tugas akhir.",
      highlight: "Tahun Akhir"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-50 text-slate-900 relative overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Banner Gelap Full Lebar di Bagian Atas */}
      <div className="bg-[#070d1b] text-white py-24 px-8 lg:px-24 w-full border-b border-slate-800/80 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
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
            <span className="text-white">KURIKULUM</span>
          </div>

          <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            CARA KAMI BELAJAR
          </p>

          <h2 className="text-3xl lg:text-6xl font-serif font-normal text-white leading-[1.2] max-w-4xl tracking-tight">
            Kurikulum Merdeka, dijalankan dengan ritme seni.
          </h2>

        </div>
      </div>

      {/* Konten Utama Kurikulum */}
      <main className="py-24 px-8 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Bagian Pengantar dengan Layout Modern */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-10 lg:p-14 rounded-3xl border border-slate-200/80 shadow-sm">
            <div className="lg:col-span-5 space-y-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Pendekatan Akademik
              </span>
              <h3 className="text-3xl lg:text-4xl font-serif font-normal text-slate-900 leading-tight">
                Menyeimbangkan teori dan ekspresi kreatif.
              </h3>
            </div>
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-10">
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                Di SMKN 74 Jakarta, Kurikulum Merdeka diimplementasikan secara fleksibel agar setiap siswa dapat mengeksplorasi potensi seninya secara mendalam. Kami percaya bahwa kompetensi teknis dan karakter luhur harus tumbuh beriringan melalui pengalaman belajar langsung di lapangan.
              </p>
            </div>
          </div>

          {/* Bagian Empat Pilar dengan Kartu Bergradasi Halus */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">
                  EMPAT PILAR
                </p>
                <h3 className="text-3xl lg:text-4xl font-serif font-normal text-slate-900">
                  Apa yang dipelajari setiap siswa.
                </h3>
              </div>
              <p className="text-sm text-slate-500 max-w-md">
                Fondasi pembelajaran komprehensif yang membentuk lulusan siap kerja, kompetitif, dan berjiwa seni tinggi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pilarList.map((pilar, index) => (
                <div 
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group space-y-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition"></div>
                  
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-3xl lg:text-4xl font-serif font-bold text-amber-600">
                      {pilar.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition">
                      ↗
                    </span>
                  </div>
                  <h4 className="text-xl lg:text-2xl font-serif font-semibold text-slate-900 relative z-10">
                    {pilar.title}
                  </h4>
                  <p className="text-slate-600 text-sm lg:text-base leading-relaxed relative z-10">
                    {pilar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bagian Perjalanan (Timeline Estetik Modern) */}
          <div className="space-y-12 bg-[#070d1b] text-white p-10 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400">
                PERJALANAN
              </p>
              <h3 className="text-3xl lg:text-4xl font-serif font-normal text-white">
                Tiga tahun, empat fase.
              </h3>
            </div>

            {/* Garis Waktu / Timeline Modern */}
            <div className="relative border-l-2 border-slate-700 ml-4 pl-8 space-y-12 relative z-10">
              {faseList.map((fase, index) => (
                <div key={index} className="relative space-y-3 group">
                  {/* Titik Lingkaran di Timeline */}
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#070d1b] border-4 border-amber-400 shadow-md group-hover:scale-125 transition"></div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                      {fase.sem}
                    </span>
                    <span className="bg-slate-800 text-slate-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-slate-700">
                      {fase.highlight}
                    </span>
                  </div>

                  <h4 className="text-2xl font-serif font-semibold text-white">
                    {fase.title}
                  </h4>
                  <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
                    {fase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}