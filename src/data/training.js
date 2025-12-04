const trainings = [
  {
    id: 1,
    category: "non-formal",
    title: "Pelatihan Soft Skill",
    shortDesc:
      "Pelatihan Soft Skill dirancang untuk meningkatkan kemampuan non-teknis yang sangat dibutuhkan dalam dunia kerja modern.",
    longDesc:
      "Pelatihan Soft Skill dirancang untuk meningkatkan kemampuan non-teknis yang sangat dibutuhkan dalam dunia kerja modern. Program ini mencakup komunikasi efektif, pelayanan prima, leadership, kerja sama tim, problem solving, serta kemampuan interpersonal lainnya. Pelatihan ini bertujuan membentuk SDM yang lebih adaptif, percaya diri, produktif, dan mampu bekerja secara kolaboratif dalam lingkungan organisasi.",
    image: "/pelatihan1.jpg",
    detail: [
      "Online (Zoom Webinar, Learning Management System)",
      "Offline (Kelas Tatap Muka, In-House Training, Workshop Interaktif)",
    ],
    materials: [
      "Komunikasi Efektif",
      "Public Speaking",
      "Leadership & Teamwork",
    ],
  },
  {
    id: 2,
    category: "non-formal",
    title: "Pelatihan Administrasi Perkantoran",
    shortDesc:
      "Pelatihan ini memberikan keterampilan praktis yang dibutuhkan staf administrasi dan perkantoran agar dapat bekerja secara efisien dan profesional.",
    longDesc:
      "Pelatihan ini memberikan keterampilan praktis yang dibutuhkan staf administrasi dan perkantoran agar dapat bekerja secara efisien dan profesional. Peserta akan mempelajari standar administrasi modern, tata kelola dokumen, etika pelayanan, hingga penggunaan aplikasi perkantoran digital. Program ini mendukung peningkatan kualitas layanan internal perusahaan dan memperlancar proses operasional harian.",
    image: "/pelatihan2.jpg",
    detail: [
      "Pelatihan Administrasi Umum",
      "Tata Kelola Arsip dan Dokumen",
      "Korespondensi & Pengelolaan Surat",
      "Pengelolaan Jadwal & Penataan Agenda",
      "Customer Service & Front Office",
      "Microsoft Office (Word, Excel, PowerPoint)",
    ],
    materials: [
      "Manajemen Waktu & Produktivitas Kerja",
      "Teknik Pengarsipan & Dokumentasi",
      "Etika & Profesionalisme Kerja",
    ],
  },
  {
    id: 3,
    category: "non-formal",
    title: "Pelatihan Kewirausahaan & UMKM",
    shortDesc:
      "Pelatihan ini memberikan keterampilan praktis yang dibutuhkan untuk merencanakan dan mengembangkan usaha.",
    longDesc:
      "Pelatihan Kewirausahaan & UMKM ditujukan untuk membekali peserta dengan kemampuan merencanakan, mengelola, dan mengembangkan usaha secara berkelanjutan. Materi mencakup penyusunan rencana bisnis, strategi pengembangan produk, pengelolaan keuangan, hingga pemasaran digital modern. Program ini membantu UMKM meningkatkan daya saing, memperluas pasar, dan memperkuat keberlanjutan bisnis.",
    image: "/pelatihan3.jpg",
    detail: [
      "Pelatihan Dasar Kewirausahaan",
      "Manajemen Keuangan UMKM",
      "Pengembangan Produk & Inovasi",
      "Digital Marketing untuk UMKM",
      "Strategi Penjualan & Branding UMKM",
      "Business Model Canvas & Perencanaan Bisnis",
      "Microsoft Office (Word, Excel, PowerPoint)",
    ],
    materials: [
      "Ideasi & Kreativitas Bisnis",
      "Riset Pasar & Analisis Kompetitor",
      "Strategi Pemasaran & Penjualan",
    ],
  },
  {
    id: 4,
    category: "non-formal",
    title: "Pelatihan Digital",
    shortDesc:
      "Pelatihan Digital berfokus pada peningkatan kompetensi teknologi peserta.",
    longDesc:
      "Pelatihan Digital berfokus pada peningkatan kompetensi teknologi peserta agar mampu beradaptasi dengan kebutuhan dunia kerja yang serba digital. Program ini memberikan pemahaman tentang penggunaan aplikasi digital, pengolahan data sederhana, pembuatan konten, hingga pemanfaatan platform online. Pelatihan ini sangat relevan untuk SDM yang ingin meningkatkan efisiensi dan produktivitas melalui teknologi.",
    image: "/pelatihan4.jpg",
    detail: [
      "Digital Marketing",
      "Social Media Management",
      "Data Analysis Dasar",
      "Desain Grafis",
      "Content Creation",
      "Penggunaan Tools Digital Perkantoran",
      "Website & SEO Basic",
    ],
    materials: [
      "Pengenalan Alat & Platform Digital Populer",
      "Strategi Pemasaran Digital",
      "Analisis Data untuk Pengambilan Keputusan",
    ],
  },
  {
    id: 5,
    category: "keterampilan-kerja",
    title: "Pelatihan Operator Alat Berat",
    shortDesc:
      "Pelatihan Operator Alat Berat membekali peserta dengan keterampilan teknis dan keselamatan.",
    longDesc:
      "Pelatihan Operator Alat Berat dirancang untuk membekali peserta dengan keterampilan teknis dan pengetahuan keselamatan dalam mengoperasikan berbagai jenis alat berat. Program ini mencakup teori dasar alat berat, praktik pengoperasian, serta prosedur keselamatan kerja yang wajib dipatuhi. Peserta akan mendapatkan sertifikasi yang diakui industri, meningkatkan peluang kerja di sektor konstruksi, pertambangan, dan infrastruktur.",
    image: "/pelatihan5.jpg",
    detail: [
      "Pelatihan Teori Alat Berat",
      "Praktik Pengoperasian Alat Berat",
      "Keselamatan & Kesehatan Kerja (K3)",
      "Pemeliharaan & Perawatan Alat Berat",
      "Sertifikasi Operator Alat Berat",
    ],
    materials: [
      "Jenis & Fungsi Alat Berat",
      "Teknik Pengoperasian Alat Berat",
      "Prosedur Keselamatan Kerja",
    ],
  },
  {
    id: 6,
    category: "keterampilan-kerja",
    title: "Pelatihan Welding (SMAW, MIG, TIG)",
    shortDesc: "Pelatihan pengelasan praktis untuk berbagai metode pengelasan.",
    longDesc:
      "Pelatihan ini memberikan keterampilan praktis pengelasan untuk berbagai metode seperti SMAW, MIG, dan TIG. Peserta akan mempelajari teori, teknik, serta standar keselamatan yang berlaku dalam pekerjaan pengelasan.",
    image: "/pelatihan6.jpg",
    detail: [
      "Las SMAW (Shielded Metal Arc Welding)",
      "Las MIG (Metal Inert Gas Welding)",
      "Las TIG (Tungsten Inert Gas Welding)",
    ],
    materials: [
      "Prinsip Dasar Pengelasan",
      "Teknik & Prosedur Pengelasan",
      "Keselamatan Kerja dalam Pengelasan",
    ],
  },
  {
    id: 7,
    category: "keterampilan-kerja",
    title: "Pelatihan Komputer Terapan",
    shortDesc:
      "Keterampilan komputer praktis untuk lingkungan perkantoran dan data.",
    longDesc:
      "Pelatihan ini memberikan keterampilan praktis komputer, termasuk Microsoft Office, pengelolaan data, dan praktik keamanan dasar agar peserta dapat bekerja secara efisien dan profesional.",
    image: "/pelatihan3.jpg",
    detail: [
      "Pelatihan dasar komputer",
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Pengelolaan Data & Database Sederhana",
      "Penggunaan Internet & Email Profesional",
      "Keamanan & Pemeliharaan Komputer",
    ],
    materials: [
      "Pengenalan Sistem Operasi",
      "Teknik Pengolahan Data",
      "Etika Penggunaan Teknologi Informasi",
    ],
  },
  {
    id: 8,
    category: "keterampilan-kerja",
    title: "Pelatihan Vokasi Berbasis Kompetensi",
    shortDesc: "Pelatihan vokasi praktis sesuai standar industri.",
    longDesc:
      "Pelatihan Vokasi Berbasis Kompetensi dirancang untuk membekali peserta dengan keterampilan praktis sesuai standar industri yang dapat langsung diterapkan di dunia kerja. Program ini fokus pada pengembangan keahlian teknis di berbagai bidang seperti teknik, manufaktur, layanan, dan teknologi informasi.",
    image: "/pelatihan4.jpg",
    detail: [
      "Pelatihan Teknik & Manufaktur",
      "Pelatihan Layanan & Hospitality",
      "Pelatihan Teknologi Informasi",
      "Sertifikasi Kompetensi Kerja",
    ],
    materials: [
      "Keterampilan Teknis Spesifik Bidang",
      "Prosedur & Standar Operasional Industri",
      "Pengembangan Soft Skill Pendukung",
    ],
  },
  {
    id: 9,
    category: "keterampilan-kerja",
    title: "Program Pemagangan",
    shortDesc:
      "Pengalaman kerja praktis melalui penempatan di perusahaan mitra.",
    longDesc:
      "Program Pemagangan dirancang untuk memberikan pengalaman kerja praktis kepada peserta melalui penempatan di perusahaan mitra sesuai bidang keahlian. Peserta akan mendapatkan bimbingan langsung dari profesional di lapangan, memperluas jaringan, serta mengasah keterampilan teknis dan soft skill.",
    image: "/pelatihan4.jpg",
    detail: [
      "Penempatan di Perusahaan Mitra",
      "Bimbingan & Supervisi Profesional",
      "Pengembangan Keterampilan Teknis & Soft Skill",
      "Evaluasi & Sertifikasi Pemagangan",
    ],
    materials: [
      "Orientasi & Persiapan Pemagangan",
      "Keterampilan Kerja di Lapangan",
      "Etika & Profesionalisme Kerja",
    ],
  },
  {
    id: 10,
    category: "keterampilan-kerja",
    title: "Program Upskilling & Reskilling",
    shortDesc:
      "Tingkatkan dan perbarui keterampilan peserta sesuai kebutuhan industri.",
    longDesc:
      "Program Upskilling & Reskilling bertujuan untuk meningkatkan dan memperbarui keterampilan peserta agar sesuai dengan kebutuhan industri yang terus berkembang. Peserta akan mempelajari teknologi terbaru, metode kerja modern, serta tren industri terkini melalui pelatihan yang relevan.",
    image: "/pelatihan4.jpg",
    detail: [
      "Pelatihan Teknologi & Metode Kerja Terbaru",
      "Pengembangan Keterampilan Teknis & Soft Skill",
      "Sertifikasi Kompetensi Terkini",
    ],
    materials: [
      "Pengenalan Tren & Inovasi Industri",
      "Keterampilan Teknis Lanjutan",
      "Adaptasi & Pembelajaran Berkelanjutan",
    ],
  },
];

export default trainings;
