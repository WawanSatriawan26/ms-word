/* ==========================================================================
   DATA.JS — Konten MPI Microsoft Word
   Guru dapat mengedit isi teks di file ini tanpa menyentuh logika (app.js).
   ========================================================================== */

/* ---------- IDENTITAS SEKOLAH ---------- */
const SEKOLAH = {
  nama: "MTsN 1 Alor",
  mapel: "Informatika",
  kelas: "IX",
  fase: "D",
  kurikulum: "Kurikulum Merdeka",
  materi: "Microsoft Word",
  guru: "Guru Informatika"
};

/* ---------- 12 TUJUAN PEMBELAJARAN ---------- */
const TUJUAN = [
  {judul:"Menjelaskan fungsi Microsoft Word",kompetensi:"Literasi digital",contoh:"Menjelaskan Word sebagai aplikasi pengolah kata untuk membuat dan menyunting dokumen.",aktivitas:"Membaca pengantar Microsoft Word."},
  {judul:"Mengenali bagian antarmuka Microsoft Word",kompetensi:"Literasi digital",contoh:"Menunjukkan Ribbon, tab, area dokumen, dan status bar.",aktivitas:"Mengamati bagian-bagian jendela Word."},
  {judul:"Menggunakan tab dan Ribbon",kompetensi:"Keterampilan aplikasi",contoh:"Memilih tab Home, Insert, Layout, dan Review sesuai kebutuhan.",aktivitas:"Menjelajahi tab Microsoft Word."},
  {judul:"Memformat karakter teks",kompetensi:"Keterampilan aplikasi",contoh:"Mengatur jenis, ukuran, warna, tebal, miring, dan garis bawah huruf.",aktivitas:"Memformat teks contoh pada materi."},
  {judul:"Mengatur paragraf",kompetensi:"Keterampilan aplikasi",contoh:"Mengatur perataan, indentasi, spasi, bullets, dan numbering.",aktivitas:"Merapikan paragraf latihan."},
  {judul:"Menyisipkan objek ke dokumen",kompetensi:"Kreativitas digital",contoh:"Menambahkan tabel, gambar, bentuk, atau nomor halaman.",aktivitas:"Memilih perintah yang tepat pada tab Insert."},
  {judul:"Mengatur tata letak halaman",kompetensi:"Keterampilan aplikasi",contoh:"Mengatur margin, ukuran kertas, dan orientasi halaman.",aktivitas:"Mencoba pengaturan pada tab Layout."},
  {judul:"Menyimpan dokumen Word",kompetensi:"Kemandirian belajar",contoh:"Menyimpan file menggunakan nama dan lokasi yang sesuai.",aktivitas:"Mengenali fungsi Save dan Save As."},
  {judul:"Membuka dan mencetak dokumen",kompetensi:"Keterampilan aplikasi",contoh:"Membuka kembali dokumen dan menyiapkannya untuk dicetak.",aktivitas:"Mempelajari menu File dan Print."},
  {judul:"Menggunakan fitur pemeriksaan dokumen",kompetensi:"Berpikir kritis",contoh:"Meninjau ejaan dan memberi komentar sebelum dokumen dibagikan.",aktivitas:"Menjelajahi tab Review."},
  {judul:"Menggunakan pintasan keyboard",kompetensi:"Efisiensi kerja",contoh:"Memakai Ctrl+B, Ctrl+S, Ctrl+C, dan Ctrl+V untuk bekerja lebih cepat.",aktivitas:"Mencocokkan pintasan dengan fungsinya."},
  {judul:"Membuat dokumen sederhana dengan rapi",kompetensi:"Kreativitas digital",contoh:"Menyusun dokumen dengan judul, paragraf, dan tata letak yang sesuai.",aktivitas:"Merancang dokumen sederhana di Microsoft Word."}
];

/* ---------- 8 BAB MATERI ---------- */
const MATERI = [
  {id:"bab1",judul:"BAB 1 · Pengenalan Microsoft Word",ic:"📝",pengertian:"Microsoft Word adalah aplikasi pengolah kata yang digunakan untuk membuat, menyunting, memformat, menyimpan, dan mencetak dokumen.",contoh:["Membuat surat dan laporan.","Mengetik tugas sekolah.","Menyusun cerita atau dokumen kegiatan."],manfaat:["Memudahkan pembuatan dokumen.","Menyediakan fitur penyuntingan dan pemformatan.","Dokumen dapat disimpan dan diperbaiki kembali."],contohNyata:"Siswa dapat membuat laporan tugas Informatika dengan judul, paragraf, dan gambar menggunakan Microsoft Word.",flow:["Membuat dokumen","Mengetik isi","Memformat","Menyimpan atau mencetak"],aktivitas:"Sebutkan dokumen yang dapat dibuat menggunakan Microsoft Word.",pertanyaan:{q:"Microsoft Word terutama digunakan untuk…",opsi:["Mengolah kata dan dokumen","Mengedit video","Menghitung data dalam tabel","Membuat animasi"],jawaban:0,penjelasan:"Microsoft Word adalah aplikasi pengolah kata untuk membuat dan menyunting dokumen."}},
  {id:"bab2",judul:"BAB 2 · Mengenal Antarmuka Word",ic:"🖥️",pengertian:"Antarmuka Word terdiri atas bagian-bagian yang membantu pengguna mengelola dokumen dan menemukan perintah.",contoh:["Title Bar menampilkan nama dokumen.","Ribbon berisi tab dan kumpulan perintah.","Area dokumen adalah tempat mengetik."],manfaat:["Memudahkan menemukan fitur.","Membantu mengatur dokumen secara terarah.","Mempercepat pekerjaan."],contohNyata:"Saat ingin mengubah jenis huruf, pengguna dapat mencari perintahnya pada tab Home di Ribbon.",flow:["Title Bar","Quick Access Toolbar","Ribbon","Area dokumen dan status bar"],aktivitas:"Kenali fungsi Ribbon, area dokumen, dan status bar.",pertanyaan:{q:"Kumpulan tab dan perintah pada bagian atas jendela Word disebut…",opsi:["Ribbon","Status Bar","Scroll Bar","Title Page"],jawaban:0,penjelasan:"Ribbon memuat tab seperti Home, Insert, Layout, dan Review beserta perintahnya."}},
  {id:"bab3",judul:"BAB 3 · Memformat Teks",ic:"🔤",pengertian:"Pemformatan teks mengubah tampilan huruf agar dokumen lebih jelas, rapi, dan mudah dibaca.",contoh:["Bold untuk menebalkan teks.","Italic untuk memiringkan teks.","Underline untuk memberi garis bawah."],manfaat:["Membedakan judul dan isi.","Menekankan informasi penting.","Meningkatkan keterbacaan dokumen."],contohNyata:"Judul laporan dapat dibuat tebal dan berukuran lebih besar daripada paragraf isi.",flow:["Pilih teks","Buka tab Home","Pilih format huruf","Periksa hasilnya"],aktivitas:"Tentukan format yang tepat untuk judul dan isi dokumen.",pertanyaan:{q:"Perintah untuk menebalkan teks adalah…",opsi:["Bold","Italic","Underline","Subscript"],jawaban:0,penjelasan:"Bold membuat karakter yang dipilih tampil tebal. Pintasannya Ctrl+B."}},
  {id:"bab4",judul:"BAB 4 · Mengatur Paragraf",ic:"📃",pengertian:"Pengaturan paragraf mengatur posisi dan jarak teks dalam sebuah paragraf.",contoh:["Align Left untuk rata kiri.","Align Center untuk rata tengah.","Bullets dan Numbering untuk membuat daftar."],manfaat:["Membuat isi dokumen terstruktur.","Membantu pembaca mengikuti informasi.","Menjaga tampilan dokumen konsisten."],contohNyata:"Daftar langkah kerja lebih mudah dibaca jika disusun dengan numbering.",flow:["Pilih paragraf","Atur perataan","Atur spasi atau indentasi","Gunakan daftar jika diperlukan"],aktivitas:"Pilih pengaturan paragraf yang sesuai dengan contoh dokumen.",pertanyaan:{q:"Fitur untuk membuat daftar berpoin adalah…",opsi:["Bullets","WordArt","Margins","Find"],jawaban:0,penjelasan:"Bullets digunakan untuk membuat daftar berpoin."}},
  {id:"bab5",judul:"BAB 5 · Menyisipkan Objek",ic:"🖼️",pengertian:"Tab Insert menyediakan perintah untuk menambahkan objek ke dalam dokumen.",contoh:["Menyisipkan tabel.","Menambahkan gambar.","Memasukkan nomor halaman."],manfaat:["Melengkapi informasi dalam dokumen.","Menyajikan data dengan lebih jelas.","Membuat dokumen lebih informatif."],contohNyata:"Laporan kegiatan dapat dilengkapi tabel jadwal dan foto dokumentasi.",flow:["Pilih tab Insert","Pilih jenis objek","Atur objek","Periksa tata letaknya"],aktivitas:"Tentukan tab yang digunakan untuk menambahkan tabel atau gambar.",pertanyaan:{q:"Tab yang digunakan untuk menambahkan gambar ke dokumen adalah…",opsi:["Insert","Home","Review","View"],jawaban:0,penjelasan:"Tab Insert memuat perintah untuk menambahkan gambar, tabel, bentuk, dan objek lainnya."}},
  {id:"bab6",judul:"BAB 6 · Tata Letak Halaman",ic:"📐",pengertian:"Tab Layout digunakan untuk mengatur tampilan halaman, seperti margin, ukuran kertas, dan orientasi.",contoh:["Portrait untuk halaman tegak.","Landscape untuk halaman mendatar.","Margins untuk mengatur batas tepi halaman."],manfaat:["Menyesuaikan dokumen dengan kebutuhan cetak.","Mengatur ruang penulisan.","Merapikan tampilan halaman."],contohNyata:"Tabel yang lebar dapat lebih sesuai ditempatkan pada halaman Landscape.",flow:["Buka tab Layout","Pilih margin atau ukuran","Pilih orientasi","Tinjau halaman"],aktivitas:"Pilih orientasi yang sesuai untuk dokumen dengan tabel lebar.",pertanyaan:{q:"Orientasi halaman mendatar disebut…",opsi:["Landscape","Portrait","Vertical","Narrow"],jawaban:0,penjelasan:"Landscape adalah orientasi halaman mendatar."}},
  {id:"bab7",judul:"BAB 7 · Menyimpan dan Mencetak",ic:"💾",pengertian:"Word menyediakan perintah untuk menyimpan dokumen dan menyiapkannya untuk dicetak.",contoh:["Ctrl+S untuk menyimpan.","Save As untuk menyimpan salinan dengan nama atau lokasi baru.","Print untuk mencetak dokumen."],manfaat:["Mengurangi risiko kehilangan pekerjaan.","Memudahkan pengelolaan versi dokumen.","Menyiapkan dokumen cetak."],contohNyata:"Simpan tugas dengan nama yang jelas, misalnya Laporan_Informatika_Nama.docx.",flow:["Buka File","Pilih Save atau Save As","Tentukan nama dan lokasi","Gunakan Print bila diperlukan"],aktivitas:"Bedakan fungsi Save dan Save As.",pertanyaan:{q:"Pintasan keyboard untuk menyimpan dokumen adalah…",opsi:["Ctrl+S","Ctrl+P","Ctrl+Z","Ctrl+N"],jawaban:0,penjelasan:"Ctrl+S menyimpan perubahan pada dokumen."}},
  {id:"bab8",judul:"BAB 8 · Meninjau Dokumen",ic:"🔎",pengertian:"Fitur peninjauan membantu memeriksa dan memberi masukan pada dokumen sebelum dibagikan.",contoh:["Memeriksa ejaan.","Menambahkan komentar.","Meninjau perubahan dokumen."],manfaat:["Membantu menemukan kesalahan.","Memudahkan kerja sama saat menyunting.","Meningkatkan kualitas dokumen."],contohNyata:"Sebelum mengumpulkan laporan, siswa dapat meninjau ejaan dan membaca ulang isi dokumen.",flow:["Buka tab Review","Periksa ejaan","Tambahkan komentar bila perlu","Simpan hasil tinjauan"],aktivitas:"Pilih fitur yang membantu memeriksa ejaan dokumen.",pertanyaan:{q:"Tab yang berisi fitur pemeriksaan dan komentar adalah…",opsi:["Review","Insert","Design","Layout"],jawaban:0,penjelasan:"Tab Review menyediakan fitur untuk meninjau dokumen, termasuk pemeriksaan ejaan dan komentar."}}
];

/* ---------- PERANGKAT ---------- */
const PERANGKAT = [
  {n:"Komputer",ic:"🖥️",d:"Perangkat untuk menjalankan Microsoft Word."},{n:"Laptop",ic:"💻",d:"Komputer portabel untuk membuat dan menyunting dokumen."},{n:"Keyboard",ic:"⌨️",d:"Perangkat untuk mengetik teks dan menggunakan pintasan."},{n:"Mouse",ic:"🖱️",d:"Perangkat untuk memilih teks dan perintah pada Ribbon."},{n:"Printer",ic:"🖨️",d:"Perangkat untuk mencetak dokumen Word."},{n:"Layar",ic:"🖥️",d:"Menampilkan jendela dan halaman dokumen."},{n:"Penyimpanan",ic:"💾",d:"Media untuk menyimpan file dokumen."},{n:"Kertas",ic:"📄",d:"Media hasil cetak dokumen."}
];

/* ---------- FITUR MICROSOFT WORD ---------- */
const PLATFORM = [
  {n:"Home",ic:"🏠",d:"Mengatur huruf, paragraf, gaya, dan pencarian teks."},{n:"Insert",ic:"➕",d:"Menyisipkan tabel, gambar, bentuk, dan nomor halaman."},{n:"Layout",ic:"📐",d:"Mengatur margin, ukuran, dan orientasi halaman."},{n:"Design",ic:"🎨",d:"Mengatur tema dan tampilan dokumen."},{n:"References",ic:"📚",d:"Mengelola daftar isi, catatan kaki, dan referensi."},{n:"Review",ic:"🔎",d:"Meninjau ejaan, komentar, dan perubahan."},{n:"View",ic:"👁️",d:"Mengatur tampilan dokumen di layar."},{n:"File",ic:"📁",d:"Membuat, membuka, menyimpan, dan mencetak dokumen."}
];

/* ---------- SUMBER BELAJAR ---------- */
const SUMBER = [
  {n:"Dokumen Baru",ic:"📄",d:"Lembar kerja kosong untuk mulai mengetik."},{n:"Template",ic:"🗂️",d:"Contoh tata letak dokumen siap pakai."},{n:"Panduan Word",ic:"📘",d:"Petunjuk penggunaan fitur Microsoft Word."},{n:"Latihan Pemformatan",ic:"🔤",d:"Teks untuk berlatih mengatur karakter dan paragraf."},{n:"Contoh Surat",ic:"✉️",d:"Contoh dokumen surat untuk dipelajari."},{n:"Contoh Laporan",ic:"📑",d:"Contoh susunan laporan sederhana."},{n:"Dokumen Praktik",ic:"📝",d:"File latihan untuk mencoba perintah Word."},{n:"Daftar Pintasan",ic:"⌨️",d:"Ringkasan shortcut keyboard Microsoft Word."}
];

/* ---------- SIMULASI (5 buah) ---------- */
const SIMULASI = [
  {id:"sim1",judul:"Memformat Judul",skenario:"Judul laporan perlu dibuat tebal dan rata tengah.",pilihan:["Bold","Italic","Align Center","Underline"],benar:["Bold","Align Center"],penjelasanBenar:"Bold menebalkan judul dan Align Center menempatkannya di tengah.",tipe:"multi"},
  {id:"sim2",judul:"Menyisipkan Tabel",skenario:"Kamu ingin menambahkan tabel jadwal ke dalam dokumen.",pilihan:["Home","Insert","Review","View"],benar:["Insert"],penjelasanBenar:"Tab Insert menyediakan perintah untuk menyisipkan tabel.",tipe:"single"},
  {id:"sim3",judul:"Memilih Orientasi Halaman",skenario:"Tabel pada dokumen terlalu lebar untuk halaman tegak.",pilihan:["Portrait","Landscape","Narrow","Columns"],benar:["Landscape"],penjelasanBenar:"Landscape mengubah halaman menjadi mendatar sehingga ruang horizontal lebih lebar.",tipe:"single"},
  {id:"sim4",judul:"Menyimpan Dokumen",skenario:"Simpan dokumen untuk pertama kali dengan nama dan lokasi yang kamu tentukan.",pilihan:["Save As","Undo","Copy","Find"],benar:["Save As"],penjelasanBenar:"Save As digunakan untuk menentukan nama atau lokasi file saat menyimpan dokumen sebagai file baru.",tipe:"single"},
  {id:"sim5",judul:"Meninjau Ejaan",skenario:"Sebelum mengumpulkan tugas, kamu ingin memeriksa ejaan dan memberi komentar.",pilihan:["Review","Insert","Design","Layout"],benar:["Review"],penjelasanBenar:"Tab Review menyediakan fitur untuk meninjau ejaan dan menambahkan komentar.",tipe:"single"}
];

/* ---------- DRAG & DROP ---------- */
const DND = {
  kategori:[{id:"tab",nama:"Tab Word"},{id:"format",nama:"Format Teks"},{id:"shortcut",nama:"Pintasan Keyboard"}],
  item:[
    {n:"Insert",kat:"tab"},{n:"Layout",kat:"tab"},{n:"Review",kat:"tab"},
    {n:"Bold",kat:"format"},{n:"Italic",kat:"format"},{n:"Underline",kat:"format"},
    {n:"Ctrl+S",kat:"shortcut"},{n:"Ctrl+B",kat:"shortcut"},{n:"Ctrl+P",kat:"shortcut"}
  ]
};

/* ---------- BANK SOAL QUIZ (20 soal) ---------- */
const QUIZ_BANK = [
  {tipe:"pg",q:"Microsoft Word digunakan untuk…",opsi:["Mengolah kata dan dokumen","Mengedit video","Menghitung data","Membuat animasi"],jawaban:0,pembahasan:"Word adalah aplikasi pengolah kata."},
  {tipe:"bs",q:"Ribbon berisi tab dan kumpulan perintah Word.",opsi:["Benar","Salah"],jawaban:0,pembahasan:"Ribbon memuat tab dan perintah Word."},
  {tipe:"pg",q:"Bagian tempat kita mengetik isi dokumen disebut…",opsi:["Area dokumen","Status Bar","Title Bar","Quick Access Toolbar"],jawaban:0,pembahasan:"Area dokumen merupakan tempat mengetik dan menyunting teks."},
  {tipe:"pg",q:"Perintah untuk menebalkan teks adalah…",opsi:["Bold","Italic","Underline","Clear"],jawaban:0,pembahasan:"Bold menebalkan karakter yang dipilih."},
  {tipe:"bs",q:"Ctrl+S adalah pintasan untuk menyimpan dokumen.",opsi:["Benar","Salah"],jawaban:0,pembahasan:"Ctrl+S menjalankan perintah Save."},
  {tipe:"pg",q:"Perintah untuk memiringkan teks adalah…",opsi:["Italic","Bold","Underline","Numbering"],jawaban:0,pembahasan:"Italic memiringkan karakter yang dipilih."},
  {tipe:"pg",q:"Tab untuk menyisipkan gambar adalah…",opsi:["Insert","Home","Review","View"],jawaban:0,pembahasan:"Gambar disisipkan melalui tab Insert."},
  {tipe:"cocok",q:"Ctrl+B digunakan untuk…",opsi:["Menebalkan teks","Mencetak dokumen","Membuka dokumen","Menyisipkan tabel"],jawaban:0,pembahasan:"Ctrl+B adalah pintasan Bold."},
  {tipe:"bs",q:"Landscape adalah orientasi halaman mendatar.",opsi:["Benar","Salah"],jawaban:0,pembahasan:"Landscape berarti orientasi halaman mendatar."},
  {tipe:"pg",q:"Tab untuk mengatur margin dan orientasi halaman adalah…",opsi:["Layout","Insert","Home","Review"],jawaban:0,pembahasan:"Margin dan orientasi diatur pada tab Layout."},
  {tipe:"pg",q:"Fitur untuk membuat daftar berpoin adalah…",opsi:["Bullets","WordArt","Margins","Find"],jawaban:0,pembahasan:"Bullets membuat daftar berpoin."},
  {tipe:"bs",q:"Save As dapat menyimpan dokumen dengan nama atau lokasi baru.",opsi:["Benar","Salah"],jawaban:0,pembahasan:"Save As memungkinkan pengguna memilih nama atau lokasi baru."},
  {tipe:"pg",q:"Untuk memeriksa ejaan, tab yang dapat digunakan adalah…",opsi:["Review","Insert","Design","View"],jawaban:0,pembahasan:"Fitur pemeriksaan dokumen tersedia di tab Review."},
  {tipe:"studi",q:"Judul laporan perlu ditempatkan di tengah halaman. Perataan yang dipilih adalah…",opsi:["Align Center","Align Left","Justify","Align Right"],jawaban:0,pembahasan:"Align Center menempatkan paragraf di tengah."},
  {tipe:"pg",q:"Ekstensi umum dokumen Microsoft Word adalah…",opsi:[".docx",".xlsx",".pptx",".mp3"],jawaban:0,pembahasan:"Format dokumen Word modern umumnya menggunakan ekstensi .docx."},
  {tipe:"bs",q:"Ctrl+P membuka perintah cetak.",opsi:["Benar","Salah"],jawaban:0,pembahasan:"Ctrl+P membuka tampilan atau perintah Print."},
  {tipe:"studi",q:"Tabel jadwal terlalu lebar untuk halaman tegak. Orientasi yang sesuai adalah…",opsi:["Landscape","Portrait","Normal","Book"],jawaban:0,pembahasan:"Landscape memberi ruang halaman yang lebih lebar."},
  {tipe:"pg",q:"Untuk membatalkan tindakan terakhir, gunakan…",opsi:["Undo","Redo","Save As","Print"],jawaban:0,pembahasan:"Undo membatalkan tindakan terakhir."},
  {tipe:"hots",q:"Mengapa dokumen sebaiknya ditinjau sebelum dicetak?",opsi:["Untuk memeriksa kesalahan dan kerapian","Agar file berubah menjadi gambar","Supaya teks terhapus","Untuk menutup Word"],jawaban:0,pembahasan:"Peninjauan membantu menemukan kesalahan dan memperbaiki tampilan dokumen."},
  {tipe:"hots",q:"Cara kerja yang baik saat membuat laporan di Word adalah…",opsi:["Mengetik, meninjau, memformat, lalu menyimpan","Menutup dokumen sebelum menyimpan","Menghapus judul sebelum mencetak","Mengubah ekstensi file sembarangan"],jawaban:0,pembahasan:"Urutan tersebut membantu menghasilkan dokumen yang rapi dan tersimpan."}
];

/* ---------- BANK SOAL EVALUASI AKHIR (30 soal) ---------- */
const EVALUASI_BANK = [
  {tag:"konsep",q:"Microsoft Word merupakan aplikasi untuk…",opsi:["Mengolah kata","Mengedit audio","Membuat animasi","Mengolah peta"],jawaban:0,pembahasan:"Word digunakan untuk membuat dan menyunting dokumen."},
  {tag:"konsep",q:"Kumpulan tab dan perintah Word disebut…",opsi:["Ribbon","Status Bar","Scroll Bar","Title Bar"],jawaban:0,pembahasan:"Ribbon menampilkan tab dan perintah."},
  {tag:"konsep",q:"Tempat mengetik isi dokumen disebut…",opsi:["Area dokumen","Ribbon","Status Bar","Title Bar"],jawaban:0,pembahasan:"Area dokumen adalah tempat mengetik."},
  {tag:"konsep",q:"Bold berfungsi untuk…",opsi:["Menebalkan teks","Memiringkan teks","Menggarisbawahi teks","Menghapus teks"],jawaban:0,pembahasan:"Bold menebalkan teks."},
  {tag:"konsep",q:"Italic digunakan untuk…",opsi:["Memiringkan teks","Menebalkan teks","Menyimpan file","Mencetak"],jawaban:0,pembahasan:"Italic memiringkan teks."},
  {tag:"konsep",q:"Underline berfungsi untuk…",opsi:["Memberi garis bawah","Membuat tabel","Mengatur margin","Menyimpan file"],jawaban:0,pembahasan:"Underline memberi garis bawah pada teks."},
  {tag:"konsep",q:"Tab untuk menyisipkan tabel adalah…",opsi:["Insert","Home","Review","View"],jawaban:0,pembahasan:"Tabel disisipkan dari tab Insert."},
  {tag:"konsep",q:"Tab untuk mengatur margin adalah…",opsi:["Layout","Insert","Home","Review"],jawaban:0,pembahasan:"Margin diatur melalui tab Layout."},
  {tag:"konsep",q:"Landscape menunjukkan orientasi halaman…",opsi:["Mendatar","Tegak","Terbalik","Berlipat"],jawaban:0,pembahasan:"Landscape adalah orientasi mendatar."},
  {tag:"konsep",q:"Ctrl+S digunakan untuk…",opsi:["Menyimpan dokumen","Mencetak dokumen","Menutup aplikasi","Membuat tabel"],jawaban:0,pembahasan:"Ctrl+S menjalankan perintah simpan."},
  {tag:"konsep",q:"Save As digunakan untuk…",opsi:["Menyimpan dengan nama atau lokasi baru","Membatalkan tindakan","Mencetak halaman","Menghapus teks"],jawaban:0,pembahasan:"Save As membuat salinan atau menyimpan di lokasi lain."},
  {tag:"konsep",q:"Ekstensi umum file Word adalah…",opsi:[".docx",".xlsx",".pptx",".wav"],jawaban:0,pembahasan:"Dokumen Word umumnya memiliki ekstensi .docx."},
  {tag:"penerapan",q:"Untuk menebalkan judul, fitur yang digunakan adalah…",opsi:["Bold","Italic","Underline","Subscript"],jawaban:0,pembahasan:"Bold membuat teks tebal."},
  {tag:"penerapan",q:"Untuk membuat daftar berpoin, gunakan…",opsi:["Bullets","Margins","WordArt","Find"],jawaban:0,pembahasan:"Bullets membuat daftar berpoin."},
  {tag:"penerapan",q:"Untuk membuat halaman bernomor, pilih tab…",opsi:["Insert","Home","Review","View"],jawaban:0,pembahasan:"Nomor halaman dapat ditambahkan melalui tab Insert."},
  {tag:"penerapan",q:"Sebelum menambahkan gambar, pilih tab…",opsi:["Insert","Layout","Review","View"],jawaban:0,pembahasan:"Gambar ditambahkan dari tab Insert."},
  {tag:"penerapan",q:"Shortcut untuk membuka perintah cetak adalah…",opsi:["Ctrl+P","Ctrl+B","Ctrl+I","Ctrl+Z"],jawaban:0,pembahasan:"Ctrl+P membuka perintah Print."},
  {tag:"penerapan",q:"Untuk membatalkan tindakan terakhir, gunakan…",opsi:["Undo","Redo","Save","Print"],jawaban:0,pembahasan:"Undo membatalkan tindakan terakhir."},
  {tag:"penerapan",q:"Untuk meninjau ejaan dokumen, buka tab…",opsi:["Review","Insert","Design","Layout"],jawaban:0,pembahasan:"Fitur peninjauan tersedia pada tab Review."},
  {tag:"penerapan",q:"Untuk menyimpan file baru dengan nama pilihan, gunakan…",opsi:["Save As","Undo","Copy","Find"],jawaban:0,pembahasan:"Save As memungkinkan memilih nama dan lokasi file."},
  {tag:"penerapan",q:"Tabel yang lebar lebih sesuai menggunakan orientasi…",opsi:["Landscape","Portrait","Narrow","Normal"],jawaban:0,pembahasan:"Landscape menyediakan lebar halaman yang lebih besar."},
  {tag:"analisis",q:"Mengapa judul perlu dibedakan dari teks isi?",opsi:["Agar struktur dokumen mudah dipahami","Agar dokumen tidak bisa dibuka","Agar file lebih besar","Agar semua teks sama"],jawaban:0,pembahasan:"Pemformatan membantu menunjukkan hierarki dan struktur isi."},
  {tag:"analisis",q:"Mengapa dokumen sebaiknya disimpan berkala?",opsi:["Untuk mencegah kehilangan perubahan","Untuk menghapus dokumen","Untuk mengubah warna halaman","Untuk menutup aplikasi"],jawaban:0,pembahasan:"Menyimpan berkala melindungi perubahan yang telah dibuat."},
  {tag:"analisis",q:"Apa kegunaan fitur komentar saat meninjau dokumen?",opsi:["Memberi catatan atau masukan","Mengganti ukuran kertas","Menghapus semua halaman","Mencetak dokumen"],jawaban:0,pembahasan:"Komentar membantu memberi masukan tanpa mengubah isi utama secara langsung."},
  {tag:"analisis",q:"Mengapa perataan paragraf perlu konsisten?",opsi:["Agar dokumen terlihat rapi dan mudah dibaca","Agar teks tidak dapat diedit","Agar semua halaman kosong","Agar ukuran file mengecil"],jawaban:0,pembahasan:"Konsistensi membuat tampilan dokumen lebih rapi."},
  {tag:"analisis",q:"Mengapa nama file sebaiknya dibuat jelas?",opsi:["Agar dokumen mudah ditemukan","Agar file tidak bisa disimpan","Agar Word tertutup","Agar teks menjadi tebal"],jawaban:0,pembahasan:"Nama file yang jelas memudahkan pencarian dan pengelolaan dokumen."},
  {tag:"analisis",q:"Apa langkah yang baik sebelum mencetak dokumen?",opsi:["Meninjau isi dan tata letak","Menghapus semua judul","Menutup file tanpa menyimpan","Mengubah ekstensi file"],jawaban:0,pembahasan:"Peninjauan membantu memastikan isi dan tata letak sudah sesuai."},
  {tag:"hots",q:"Kamu membuat laporan dengan tabel lebar, judul, dan nomor halaman. Langkah yang paling tepat adalah…",opsi:["Atur Landscape, format judul, sisipkan tabel dan nomor halaman, lalu tinjau","Ketik semua isi tanpa menyimpan","Ubah semua teks menjadi gambar","Hapus tab Layout"],jawaban:0,pembahasan:"Gunakan fitur Layout, pemformatan teks, Insert, dan Review sesuai kebutuhan."},
  {tag:"hots",q:"Saat menyunting dokumen kelompok, kamu menemukan kesalahan ejaan. Tindakan terbaik adalah…",opsi:["Perbaiki dan tinjau kembali dokumen","Biarkan tanpa memberi tahu kelompok","Hapus seluruh paragraf","Cetak tanpa memeriksa"],jawaban:0,pembahasan:"Memperbaiki dan meninjau dokumen membantu menjaga kualitas hasil kelompok."},
  {tag:"hots",q:"Dokumen akan dikirim sebagai hasil akhir yang tetap dapat diedit di Word. Format yang sesuai adalah…",opsi:[".docx",".mp3",".jpg",".zip"],jawaban:0,pembahasan:"Format .docx adalah format dokumen Word yang dapat disunting."}
];

/* ---------- BADGE / GAMIFIKASI ---------- */
const BADGES = [
  {id:"beginner",ic:"🏅",nama:"Pemula Word",syarat:"Jelajahi halaman Beranda dan satu BAB materi"},
  {id:"explorer",ic:"🏅",nama:"Penjelajah Word",syarat:"Selesaikan seluruh 8 BAB materi"},
  {id:"smart",ic:"🏅",nama:"Jago Format",syarat:"Nilai Quiz Latihan ≥ 80"},
  {id:"safety",ic:"🏅",nama:"Ahli Dokumen",syarat:"Selesaikan semua Simulasi dan Drag and Drop"},
  {id:"master",ic:"🏆",nama:"Master Microsoft Word",syarat:"Selesaikan Evaluasi Akhir dengan nilai ≥ 80"}
];

/* ---------- REFLEKSI (tetap dipertahankan) ---------- */
const REFLEKSI_Q = [
  "Apa yang saya pahami tentang Microsoft Word hari ini?",
  "Fitur Word apa yang baru saya pelajari?",
  "Bagian kegiatan Word yang paling menarik bagi saya adalah…",
  "Fitur Word apa yang masih terasa sulit?",
  "Dokumen apa yang ingin saya buat menggunakan Microsoft Word?"
];
const MOOD_OPT = [
  {ic:"😊",l:"Sangat Paham"},{ic:"🙂",l:"Paham"},{ic:"😐",l:"Cukup Paham"},{ic:"😟",l:"Belum Paham"}
];

/* ---------- PROYEK TEMPLATE ---------- */
const PROYEK_FIELDS = [
  {k:"materi",l:"Topik dokumen Word",type:"input"},{k:"tujuan",l:"Tujuan dokumen",type:"textarea"},{k:"media",l:"Objek Word yang digunakan",type:"input"},{k:"format",l:"Format teks dan paragraf",type:"input"},{k:"sumber",l:"Sumber isi dokumen",type:"textarea"},{k:"aktivitas",l:"Langkah pembuatan dokumen",type:"textarea"},{k:"evaluasi",l:"Pemeriksaan akhir dokumen",type:"textarea"}
];
