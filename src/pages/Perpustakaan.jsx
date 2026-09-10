import React, { useState, useEffect } from 'react';

export default function Perpustakaan({ navigateTo }) {
  // Data buku dikosongkan, siap dihubungkan ke backend/database
  const [bookList, setBookList] = useState([]);
  
  // State untuk indikator loading saat mengambil data dari backend nantinya
  const [loading, setLoading] = useState(false);

  // Contoh fungsi untuk mengambil data dari backend di masa depan:
  // useEffect(() => {
  //   setLoading(true);
  //   fetch('https://api-backend-sekolah.com/buku')
  //     .then(res => res.json())
  //     .then(data => {
  //       setBookList(data);
  //       setLoading(false);
  //     })
  //     .catch(err => setLoading(false));
  // }, []);

  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({
    namaSiswa: '',
    nis: '',
    kelas: '',
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleOpenForm = (book) => {
    setSelectedBook(book);
    setSuccessMessage(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitLoan = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    // Di sini nanti data peminjaman dikirim via API (POST) ke backend admin perpus
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigasi Kembali */}
        <button 
          onClick={() => navigateTo('home')} 
          className="text-xs font-semibold text-amber-600 hover:underline mb-6 inline-flex items-center gap-1 cursor-pointer"
        >
          ← Kembali ke Beranda
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">LAYANAN PERPUSTAKAAN</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-slate-900">
              Perpustakaan Digital SMKN 74 Jakarta
            </h2>
          </div>
          <p className="text-xs text-slate-600 mt-2 md:mt-0">
            Cari buku favoritmu, cek ketersediaan, dan ajukan peminjaman secara online.
          </p>
        </div>

        {/* Jika form pinjam sedang dibuka */}
        {selectedBook ? (
          <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg mb-12">
            <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-2.5 py-1 rounded-full">Form Peminjaman</span>
                <h3 className="text-base font-bold text-slate-900 mt-2">{selectedBook.title}</h3>
                <p className="text-xs text-slate-500">Penulis: {selectedBook.author}</p>
              </div>
              <button 
                onClick={() => setSelectedBook(null)}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 p-2 cursor-pointer"
              >
                ✕ Batal
              </button>
            </div>

            {successMessage ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-3">
                <h4 className="text-sm font-bold text-emerald-700">Peminjaman Berhasil Diajukan!</h4>
                <p className="text-xs text-slate-600">
                  Data peminjaman buku Anda telah masuk ke sistem **Admin Perpustakaan**. Silakan ambil buku di perpustakaan dengan menunjukkan kartu pelajar.
                </p>
                <button 
                  onClick={() => setSelectedBook(null)}
                  className="mt-2 px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold rounded-xl hover:bg-amber-400 transition cursor-pointer"
                >
                  Kembali ke Katalog
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitLoan} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nama Lengkap Siswa</label>
                  <input 
                    type="text" 
                    name="namaSiswa" 
                    required
                    value={formData.namaSiswa}
                    onChange={handleFormChange}
                    placeholder="Contoh: Rian Utama"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">NIS</label>
                    <input 
                      type="text" 
                      name="nis" 
                      required
                      value={formData.nis}
                      onChange={handleFormChange}
                      placeholder="Contoh: 20261099"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Kelas</label>
                    <input 
                      type="text" 
                      name="kelas" 
                      required
                      value={formData.kelas}
                      onChange={handleFormChange}
                      placeholder="Contoh: XI PPLG 1"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer mt-4"
                >
                  Konfirmasi Pinjam Buku
                </button>
              </form>
            )}
          </div>
        ) : null}

        {/* Tampilan Daftar Buku / Katalog */}
        {bookList.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center max-w-xl mx-auto my-12">
            <p className="text-sm font-semibold text-slate-700 mb-2">Katalog Buku Belum Tersedia</p>
            <p className="text-xs text-slate-500">
              Data buku perpustakaan sedang disiapkan atau menunggu sinkronisasi dari database server (backend).
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bookList.map((book) => (
              <div key={book.id} className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="h-48 overflow-hidden relative bg-slate-200">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                      {book.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-serif font-bold text-slate-900 mb-1 leading-snug line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3">Oleh: {book.author}</p>
                    <p className="text-[11px] text-emerald-600 font-semibold">
                      Stok Tersedia: <span className="font-bold">{book.stock} Eksemplar</span>
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button 
                    onClick={() => handleOpenForm(book)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow"
                  >
                    Pinjam Buku
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}