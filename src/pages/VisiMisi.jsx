import React from 'react';

export default function VisiMisi({ navigateTo }) {
  const misiList = [
    {
      title: "Membentuk karakter",
      desc: "Menumbuhkan integritas, disiplin, dan semangat gotong-royong sebagai dasar setiap pembelajaran."
    },
    {
      title: "Menumbuhkan kreativitas",
      desc: "Membuka ruang ekspresi, eksperimen, dan kolaborasi lintas konsentrasi keahlian."
    },
    {
      title: "Membangun kemitraan",
      desc: "Bekerjasama dengan DUDI, komunitas seni, dan perguruan tinggi untuk jalur karier yang luas."
    },
    {
      title: "Mengembangkan keahlian",
      desc: "Menyiapkan lulusan terampil di bidang seni dan kreatif yang relevan dengan kebutuhan industri."
    },
    {
      title: "Mewujudkan lingkungan inklusif",
      desc: "Sekolah yang aman, ramah, dan menghargai setiap latar belakang dan ekspresi."
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-white text-slate-900 relative overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Banner Gelap Full Lebar di Bagian Atas */}
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
            <span className="text-white">VISI & MISI SEKOLAH</span>
          </div>

          <p className="text-xs font-bold tracking-widest uppercase text-amber-400/90 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            ARAH DAN KOMITMEN
          </p>

          <h2 className="text-3xl lg:text-5xl font-serif font-normal text-white leading-[1.3] max-w-4xl">
            Apa yang kami tuju, dan bagaimana kami menjalankannya setiap hari.
          </h2>

        </div>
      </div>

      {/* Konten Utama Visi & Misi */}
      <main className="py-24 px-8 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Bagian Visi */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Kolom Kiri: Judul & Deskripsi Singkat */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
                VISI
              </p>
              <h3 className="text-3xl lg:text-4xl font-serif font-normal text-slate-900 leading-tight">
                Satu kalimat, satu arah.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Visi sekolah adalah bintang penunjuk — sederhana, mudah diingat, dan menjadi rujukan setiap keputusan.
              </p>
            </div>

            {/* Kolom Kanan: Kotak Kartu Gelap Berisi Visi */}
            <div className="lg:col-span-7">
              <div className="bg-[#070d1b] text-white p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-6 relative z-10">
                  ✦ VISI SMKN 74
                </p>

                <h4 className="text-2xl lg:text-4xl font-serif font-normal text-white leading-relaxed relative z-10">
                  Mewujudkan generasi muda yang <span className="text-amber-400 font-medium">berkarakter, kreatif, dan kompeten</span> di bidang seni untuk berkontribusi pada Indonesia.
                </h4>
              </div>
            </div>

          </div>

          {/* Bagian Misi (Sesuai Desain Gambar Referensi) */}
          <div className="space-y-10 pt-12 border-t border-slate-200">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">
                MISI
              </p>
              <h3 className="text-3xl lg:text-4xl font-serif font-normal text-slate-900">
                Lima langkah, dijalankan bersama.
              </h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {misiList.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 rounded-3xl bg-[#f7f5f0] border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all duration-300 gap-6"
                >
                  <div className="flex items-start md:items-center gap-6">
                    <span className="text-3xl lg:text-4xl font-serif font-semibold text-amber-600/80">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-lg lg:text-xl font-serif font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition shrink-0 self-end md:self-center">
                    →
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