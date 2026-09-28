import React, { useState, useEffect } from 'react';

export default function Perpustakaan({ navigateTo }) {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({
    namaSiswa: '',
    nis: '',
    kelas: '',
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const NGROK_URL = 'https://bristle-petunia-rival.ngrok-free.dev';

  useEffect(() => {
    setLoading(true);
    
    const API_URL = `${NGROK_URL}/api/books`;

    fetch(API_URL, {
      headers: {
        'ngrok-skip-browser-warning': 'true',
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Gagal terhubung ke server perpustakaan.');
        }
        return res.json();
      })
      .then(data => {
        const actualData = Array.isArray(data) ? data : (data.books || data.data || []);
        setBookList(actualData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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
  };

  // Filter pencarian dan kategori secara real-time
  const filteredBooks = bookList.filter(book => {
    const matchesSearch = 
      (book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (book.author && book.author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (book.isbn && book.isbn.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen">
      
      {/* 1. HERO SECTION / HEADER BIRU GELAP KKHAS KATALOG OPAC */}
      <div className="bg-[#0b132b] text-white py-14 px-4 sm:px-8 lg:px-16 text-center shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400">LAYANAN LITERASI DIGITAL SMKN 74</p>
          <h1 className="text-2xl sm:text-4xl font-serif font-normal tracking-wide">
            Eksplorasi Ilmu & Referensi Seni Pertunjukan
          </h1>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Temukan koleksi naskah, modul pembelajaran kejuruan, dan literatur umum secara instan.
          </p>

          {/* Kotak Pencarian & Filter */}
          <div className="bg-white p-3 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-3 mt-6 max-w-2xl mx-auto">
            <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0 sm:pr-3">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-xs text-slate-700 font-medium focus:outline-none cursor-pointer"
              >
                <option value="all">Semua Kategori</option>
                <option value="Umum">Umum</option>
                <option value="Seni Musik">Seni Musik</option>
                <option value="Seni Tari">Seni Tari</option>
                <option value="Seni Teater">Seni Teater</option>
              </select>
            </div>
            
            <div className="w-full sm:w-2/3 flex items-center px-2">
              <svg className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input 
                type="text" 
                placeholder="Cari judul buku, penulis, ISBN..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-xs text-slate-800 focus:outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Tombol Navigasi */}
        <button 
          onClick={() => navigateTo('home')} 
          className="text-xs font-semibold text-amber-600 hover:underline mb-8 inline-flex items-center gap-1 cursor-pointer"
        >
          ← Kembali ke Beranda
        </button>

        {/* Jika Form Pinjam Dibuka */}
        {selectedBook ? (
          <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl mb-12">
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">Form Peminjaman</span>
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
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <h4 className="text-sm font-bold text-emerald-800">Peminjaman Berhasil Diajukan!</h4>
                <p className="text-xs text-slate-600">
                  Data peminjaman Anda telah tercatat. Silakan ambil buku di perpustakaan SMKN 74 Jakarta dengan menunjukkan kartu pelajar.
                </p>
                <button 
                  onClick={() => setSelectedBook(null)}
                  className="mt-2 px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold rounded-xl hover:bg-amber-400 transition cursor-pointer shadow"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
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

        {/* Loading */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-xs text-slate-500 font-medium animate-pulse">Memuat katalog perpustakaan...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="max-w-xl mx-auto bg-red-50 border border-red-200 text-red-600 p-6 rounded-3xl text-center shadow-sm my-12">
            <p className="font-bold text-sm mb-1">⚠️ Gagal Memuat Data Buku</p>
            <p className="text-xs text-slate-600 leading-relaxed">{error}</p>
          </div>
        )}

        {/* DAFTAR KARTU BUKU */}
        {!loading && !error && (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs font-semibold text-slate-500">
                Showing 1-{filteredBooks.length} of {filteredBooks.length} Results
              </p>
            </div>

            {filteredBooks.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-sm my-6">
                <p className="text-sm font-semibold text-slate-700 mb-1">Buku Tidak Ditemukan</p>
                <p className="text-xs text-slate-400">Coba kata kunci pencarian yang lain.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredBooks.map((book) => {
                  const rawImg = book.cover_image;
                  let imgSrc = '';
                  
                  if (rawImg) {
                    if (rawImg.startsWith('http://') || rawImg.startsWith('https://')) {
                      imgSrc = rawImg;
                    } else {
                      imgSrc = `${NGROK_URL}/uploads/${rawImg.replace(/^\/uploads\//, '')}?bypass-ngrok=true`;
                    }
                  }

                  const totalStok = book.available_stock ?? book.total_stock ?? 0;

                  return (
                    <div key={book.id} className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      
                      {/* Badge Tersedia di Pojok Kanan Atas Kartu */}
                      <span className="absolute top-4 right-5 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                        Tersedia ({totalStok})
                      </span>

                      <div className="flex items-start sm:items-center gap-5 w-full pt-6 sm:pt-0">
                        {/* Gambar Sampul Buku */}
                        <div className="w-20 h-28 sm:w-24 sm:h-32 flex-shrink-0 bg-slate-100 border border-slate-200 rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
                          {rawImg ? (
                            <img 
                              src={imgSrc} 
                              alt={book.title} 
                              className="w-full h-full object-cover" 
                            />
                          ) : (
                            <span className="text-[10px] text-slate-400 font-semibold p-2 text-center">No Cover</span>
                          )}
                        </div>

                        {/* Informasi Rinci Buku */}
                        <div className="space-y-1.5 flex-grow pr-16 sm:pr-0">
                          <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                            {book.title}
                          </h3>
                          <p className="text-xs text-slate-600 flex items-center gap-1 font-medium">
                            <span className="text-slate-400">👤</span> {book.author}
                          </p>
                          <p className="text-xs text-slate-500">
                            Klasifikasi: {book.classification || 'Umum'}
                          </p>
                          <p className="text-xs text-slate-500">
                            Penerbit: {book.publisher || 'Kompas'} - {book.year_published || '2024'} | ISBN: {book.isbn || '-'}
                          </p>
                          <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-100">
                            Kode Buku: {book.id} | Subjek: {book.category_name || 'Umum'} | Eksemplar: {book.total_stock || 5} | Tersimpan di Perpustakaan SMKN 74
                          </p>
                        </div>
                      </div>

                      {/* Tombol Pinjam */}
                      <div className="w-full sm:w-auto flex-shrink-0 mt-2 sm:mt-0">
                        <button 
                          onClick={() => handleOpenForm(book)}
                          className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-sm"
                        >
                          Pinjam Buku
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}