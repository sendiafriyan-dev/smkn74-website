import React from 'react';

export default function Sambutan({ navigateTo }) {
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
            <span className="text-white">SAMBUTAN KEPALA SEKOLAH</span>
          </div>

          <p className="text-xs font-bold tracking-widest uppercase text-amber-400/90 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            SALAM DARI KEPALA SEKOLAH
          </p>

          <h2 className="text-3xl lg:text-5xl font-serif font-normal text-white leading-[1.3] mb-10 max-w-4xl">
            "Sekolah ini bukan sekadar tempat belajar — ia adalah rumah tempat karakter dibentuk."
          </h2>

          <div className="flex items-center gap-4 pt-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-bold text-slate-950 text-sm shadow-lg">
              BS
            </div>
            <div>
              <h4 className="text-base font-bold text-white tracking-wide">Indah Nuhyatia, M.Pd</h4>
              <p className="text-[11px] text-slate-400 tracking-wider uppercase font-medium mt-0.5">
                KEPALA SMK NEGERI 74 · PERIODE 2025–SEKARANG
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Konten Utama Sambutan dengan Latar Belakang Putih & Layout Grid Modern */}
      <main className="py-24 px-8 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          
          {/* Kolom Kiri: Foto, Kotak "TENTANG", & "TAUTAN CEPAT" (Sticky Sidebar) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200/80 group">
              <img 
                src="/kepsek.jpg" 
                    alt="Indah Nuhyatia, M.Pd" 
                         className="w-full h-full object-cover object-top" 
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-lg text-center">
                <p className="text-xs font-bold text-slate-900">Indah Nuhyatia, M.Pd</p>
                <p className="text-[10px] text-amber-600 font-semibold tracking-wider uppercase">Kepala SMK Negeri 74 Jakarta</p>
              </div>
            </div>

            {/* Kotak Informasi "TENTANG" */}
            <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3.5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-amber-600">
                ✦ TENTANG KEPALA SEKOLAH
              </p>
              <div className="flex justify-between items-center text-sm border-b border-slate-200/60 pb-3">
                <span className="text-slate-500 font-medium">Nama Lengkap</span>
                <span className="text-slate-900 font-semibold text-right">Indah Nuhyatia, M.Pd</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200/60 pb-3">
                <span className="text-slate-500 font-medium">Jabatan</span>
                <span className="text-slate-900 font-semibold text-right">Kepala Sekolah</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200/60 pb-3">
                <span className="text-slate-500 font-medium">Masa Jabatan</span>
                <span className="text-slate-900 font-semibold text-right">2025 – Sekarang</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-1">
                <span className="text-slate-500 font-medium">Pendidikan</span>
                <span className="text-slate-900 font-semibold text-right">S2 Manajemen Pendidikan</span>
              </div>
            </div>

            {/* Kotak "TAUTAN CEPAT" */}
            <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3.5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-amber-600">
                ✦ TAUTAN PROFIL
              </p>
              <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                <li>
                  <a href="#visi" onClick={() => navigateTo('home')} className="flex justify-between items-center p-2.5 rounded-xl hover:bg-slate-200/50 hover:text-amber-600 transition group">
                    <span>Visi & Misi Sekolah</span> <span className="text-slate-400 group-hover:translate-x-1 transition">→</span>
                  </a>
                </li>
                <li>
                  <a href="#struktur" onClick={() => navigateTo('home')} className="flex justify-between items-center p-2.5 rounded-xl hover:bg-slate-200/50 hover:text-amber-600 transition group">
                    <span>Struktur Organisasi</span> <span className="text-slate-400 group-hover:translate-x-1 transition">→</span>
                  </a>
                </li>
                <li>
                  <a href="#pendidik" onClick={() => navigateTo('home')} className="flex justify-between items-center p-2.5 rounded-xl hover:bg-slate-200/50 hover:text-amber-600 transition group">
                    <span>Tenaga Pendidik & Kependidikan</span> <span className="text-slate-400 group-hover:translate-x-1 transition">→</span>
                  </a>
                </li>
                <li>
                  <a href="#sarana" onClick={() => navigateTo('home')} className="flex justify-between items-center p-2.5 rounded-xl hover:bg-slate-200/50 hover:text-amber-600 transition group">
                    <span>Sarana & Prasarana</span> <span className="text-slate-400 group-hover:translate-x-1 transition">→</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Isi Teks Sambutan Lengkap & Bagian Penutup */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">
                KATA SAMBUTAN
              </p>
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-slate-900 leading-snug">
                Bismillahirrahmanirrahim. Assalamu’alaikum warahmatullahi wabarakatuh.
              </h3>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed text-base lg:text-lg font-sans">
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Puji syukur kami panjatkan ke hadirat Allah SWT yang telah melimpahkan rahmat dan karunia-Nya, sehingga SMK Negeri 74 Jakarta dapat terus berdiri sebagai rumah belajar bagi generasi muda di Jagakarsa dan sekitarnya.
              </p>

              <p>
                Sebagai Kepala Sekolah, izinkan saya menyampaikan terima kasih dan apresiasi kepada seluruh keluarga besar SMKN 74 — guru, tenaga kependidikan, siswa, orang tua, alumni, serta mitra industri — atas dedikasi dan kepercayaan yang telah diberikan selama ini.
              </p>

              <p>
                Di era yang berubah cepat ini, kami percaya bahwa pendidikan kejuruan bukan sekadar tempat memperoleh keterampilan teknis. Ia adalah ruang di mana karakter dibentuk, di mana keingintahuan dijaga, dan di mana setiap anak dibimbing untuk menemukan jalannya sendiri.
              </p>

              {/* Kutipan Visi dengan Desain Kotak Eksklusif */}
              <div className="bg-amber-50/60 border-l-4 border-amber-500 p-6 rounded-r-2xl my-8 shadow-sm">
                <blockquote className="text-xl lg:text-2xl font-serif italic text-slate-900 leading-relaxed">
                  "Visi kami sederhana: melahirkan lulusan yang siap kerja, siap belajar lebih lanjut, dan — yang paling penting — siap menjadi manusia yang berintegritas."
                </blockquote>
              </div>

              <p>
                SMKN 74 menyelenggarakan empat konsentrasi keahlian di bidang seni — <span className="font-semibold text-slate-900 bg-amber-100/50 px-1 py-0.5 rounded">Tari, Musik, Karawitan, dan Teater</span> — sebagai jawaban atas kebutuhan industri kreatif Indonesia yang terus tumbuh. Kami juga membuka kelas-kelas industri (PKL), kolaborasi dengan DUDI, serta program kewirausahaan agar siswa kami tidak hanya menjadi pekerja yang baik, tetapi juga pencipta peluang.
              </p>

              <p>
                Kami berkomitmen menjadikan sekolah ini tempat yang aman, ramah, dan inklusif. Pintu kami terbuka untuk dialog dengan orang tua, dengan komunitas, dan dengan siapa pun yang ingin berkontribusi pada pendidikan anak-anak kita. Kotak saran, layanan surat-menyurat, dan kanal komunikasi digital kami sediakan agar setiap suara dapat didengar.
              </p>

              <p className="pt-2">
                Terakhir, kepada para siswa: percayalah pada prosesmu. Belajarlah dengan sungguh-sungguh, tetapi jangan lupa untuk bertanya, bermain, dan bermimpi. Sekolah ini ada untukmu — bukan untuk mencetak kalian menjadi sama, tetapi untuk membantu kalian menemukan suara yang khas: <span className="italic font-serif text-amber-700 font-semibold">suaramu sendiri</span>.
              </p>

              <p className="pt-2">
                Selamat datang di SMK Negeri 74 Jakarta. Mari bersama-sama menumbuhkan masa depan.
              </p>

              <p className="pt-4 font-serif italic text-slate-800">
                Wassalamu'alaikum warahmatullahi wabarakatuh.
              </p>

              {/* Hormat Kami & Tanda Tangan */}
              <div className="pt-10 border-t border-slate-200 mt-10 space-y-1">
                <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400">
                  HORMAT KAMI,
                </p>
                <h4 className="text-xl font-serif font-bold text-slate-900 pt-1">
                  Indah Nuhyatia, M.Pd
                </h4>
                <p className="text-xs text-amber-600 font-semibold tracking-wider">
                  Kepala SMK Negeri 74 Jakarta
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
}