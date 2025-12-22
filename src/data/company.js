import axios from "axios";

const API_BASE_URL = "http://202.10.47.174:8000/api";

// Default fallback data
const defaultCompanyInfo = {
  name: "PT MULTIARTHA PUNDIMAS NAWASENA",
  shortName: "MPN",
  tagline: "Pelatihan & Pengembangan SDM Profesional, Inovatif, dan Terpercaya",

  visi:
    "Menjadi perusahaan pelatihan dan pengembangan SDM profesional, inovatif, dan terpercaya di Indonesia.",

  misi: [
    "Menyelenggarakan program pelatihan berkualitas tinggi yang relevan dengan kebutuhan industri",
    "Mengembangkan kompetensi SDM melalui metode pembelajaran inovatif dan efektif",
    "Memberikan layanan konsultansi manajemen yang profesional dan solusi-oriented",
    "Membangun kemitraan strategis dengan berbagai institusi dan perusahaan",
    "Berkontribusi aktif dalam meningkatkan daya saing SDM Indonesia",
  ],

  about:
    "PT Multiartha Pundimas Nawasena (MPN) adalah perusahaan yang bergerak di bidang pelatihan dan pengembangan sumber daya manusia. Kami berkomitmen untuk memberikan program pelatihan berkualitas tinggi yang dirancang khusus untuk meningkatkan kompetensi dan produktivitas SDM di berbagai sektor industri. Dengan tim instruktur profesional dan berpengalaman, kami telah dipercaya oleh berbagai perusahaan dan institusi dalam menyelenggarakan program pelatihan, konsultansi manajemen, dan pengembangan SDM.",

  legalitas: [
    "Akta Pendirian Perusahaan yang telah disahkan",
    "NPWP Perusahaan terdaftar",
    "Izin Usaha dari instansi terkait",
    "Sertifikasi ISO 9001:2015 untuk Quality Management System",
    "Terdaftar sebagai Lembaga Pelatihan Kerja (LPK)",
    "Kerjasama dengan berbagai institusi pemerintah dan swasta",
  ],

  keunggulan: [
    "Instruktur bersertifikat dan berpengalaman di bidangnya",
    "Materi pelatihan yang selalu up-to-date sesuai kebutuhan industri",
    "Metode pembelajaran interaktif dan aplikatif",
    "Fasilitas pelatihan yang lengkap dan modern",
    "Sertifikat resmi yang diakui",
    "Layanan konsultansi pasca pelatihan",
    "Customized training sesuai kebutuhan klien",
    "Track record yang terbukti dengan berbagai klien terkemuka",
  ],

  kontak: {
    phone: "wa.me/6282114726830",
    email: "ptmultiarthapundimasnawasena@gmail.com",
    address: "Ruko Sentra Eropa Blok B16, Ciangsana, Gunung Putri, Bogor 16968",
    mapsEmbed:
      "https://maps.app.goo.gl/moAyGBTCi9TcRVs46",
  },

  sosial_media: {
    linkedin: "#",
    facebook:
      "https://www.facebook.com/profile.php?id=61581378853667&sk=about&locale=id_ID",
    instagram: "https://www.instagram.com/ptmpn.official",
    youtube: "https://www.youtube.com/@ptmpn_official",
    tiktok: "https://www.tiktok.com/@ptmpn_official",
  },
};

export let companyInfo = defaultCompanyInfo;

// Fetch company data from backend
export const fetchCompanyData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/company-profile`);
    if (response.data) {
      companyInfo = { ...defaultCompanyInfo, ...response.data };
    }
    return companyInfo;
  } catch (error) {
    console.warn(
      "Failed to fetch company data from backend, using default data:",
      error
    );
    return defaultCompanyInfo;
  }
};

// Initialize: fetch data when module loads
fetchCompanyData();