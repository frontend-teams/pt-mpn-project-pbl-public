import axios from "axios";

const API_BASE_URL = "http://202.10.47.174:8000/api";

// Default fallback data (keyed by jenis_bidang_usaha ID)
const defaultDetailLayanan = {
  nonformal: {
    id: "nonformal",
    title: "Pelatihan & Pendidikan Nonformal",
    items: [
      {
        id: 1,
        name: "Pelatihan Soft Skill",
        desc: "Leadership, Komunikasi, Pelayanan Prima, Problem Solving.",
      },
      {
        id: 2,
        name: "Administrasi Perkantoran",
        desc: "Penguasaan administrasi modern dan aplikasi perkantoran.",
      },
      {
        id: 3,
        name: "Pelatihan Kewirausahaan & UMKM",
        desc: "Pembekalan bisnis untuk UMKM dan wirausaha pemula.",
      },
      {
        id: 4,
        name: "Pelatihan Digital",
        desc: "Microsoft Office, Digital Literacy, Content Creation.",
      },
    ],
  },

  konsulmanj: {
    id: "konsulmanj",
    title: "Pengembangan SDM & Konsultansi Manajemen",
    items: [
      {
        id: 5,
        name: "Penyusunan KPI & KRA",
        desc: "Perancangan indikator kinerja terstruktur.",
      },
      {
        id: 6,
        name: "Penyusunan SOP",
        desc: "Pembuatan standar kerja perusahaan.",
      },
      {
        id: 7,
        name: "Assessment Center & penilaian Kompetensi",
        desc: "Penilaian kompetensi dan potensi karyawan.",
      },
      {
        id: 8,
        name: "Organizational Development (OD)",
        desc: "Pengembangan struktur dan budaya organisasi.",
      },
      {
        id: 9,
        name: "Penyusunan Sistem HR",
        desc: "Penyusunan sistem manajemen SDM modern.",
      },
      {
        id: 10,
        name: "Konsultansi Manajemen & Business Improvement",
        desc: "Business improvement dan efisiensi kerja.",
      },
    ],
  },

  keterampilan: {
    id: "keterampilan",
    title: "Pelatihan Keterampilan Kerja",
    items: [
      {
        id: 11,
        name: "Operator Alat Berat",
        desc: "Pelatihan sesuai standar industri.",
      },
      {
        id: 12,
        name: "Welding SMAW / MIG / TIG",
        desc: "Pelatihan pengelasan profesional.",
      },
      {
        id: 13,
        name: "Komputer Terapan",
        desc: "Penguasaan aplikasi komputer praktis.",
      },
      {
        id: 14,
        name: "Vokasi Kompetensi",
        desc: "Pelatihan berbasis kebutuhan industri.",
      },
      {
        id: 15,
        name: "Program Pemagangan",
        desc: "Pengalaman kerja langsung.",
      },
      {
        id: 16,
        name: "Upskilling & Reskilling",
        desc: "Upgrade skill mengikuti teknologi terbaru.",
      },
    ],
  },

  eventorg: {
    id: "eventorg",
    title: "Event Organizer, Production House & Outbound",
    items: [
      {
        id: 17,
        name: "Seminar & Workshop",
        desc: "Pengelolaan acara profesional.",
      },
      {
        id: 18,
        name: "Corporate Gathering",
        desc: "Family day dan internal event perusahaan.",
      },
      {
        id: 19,
        name: "Brand Activation",
        desc: "Launching produk & event promosi.",
      },
      {
        id: 20,
        name: "Video Production",
        desc: "Video company profile dan pelatihan.",
      },
      {
        id: 21,
        name: "Dokumentasi & Live Streaming",
        desc: "Mengabadikan momen penting.",
      },
      {
        id: 22,
        name: "Desain Grafis & Motion Graphic",
        desc: "Konten visual kreatif.",
      },
      { id: 23, name: "Outbound", desc: "Team building & leadership camp." },
    ],
  },

  sertifikasi: {
    id: "sertifikasi",
    title: "Jasa Sertifikasi",
    items: [
      { id: 24, name: "Sertifikasi BNSP", desc: "Berbagai skema profesi." },
      {
        id: 25,
        name: "Sertifikasi Internal",
        desc: "Standar kompetensi perusahaan.",
      },
      { id: 26, name: "Sertifikasi Profesi", desc: "Teknis & non-teknis." },
      {
        id: 27,
        name: "Penyusunan SKKNI",
        desc: "Menyusun standar kompetensi nasional.",
      },
    ],
  },

  manpower: {
    id: "manpower",
    title: "Penyediaan SDM (Manpower Supply)",
    items: [
      {
        id: 28,
        name: "Rekrutmen & Headhunter",
        desc: "Mencari kandidat terbaik.",
      },
      { id: 29, name: "Outsourcing", desc: "Tenaga kontrak profesional." },
      {
        id: 30,
        name: "Talent Pooling",
        desc: "Pemetaan dan pengelompokan talenta.",
      },
      {
        id: 31,
        name: "Penempatan Tenaga Terampil",
        desc: "SDM kompeten siap kerja.",
      },
      { id: 32, name: "Crew Event", desc: "Tenaga event & operasional." },
    ],
  },
};

export let detailLayanan = defaultDetailLayanan;

/**
 * Fetch detail layanan from backend
 * Expected endpoint structure: /api/detail-jenis-bidang-usaha
 * Expects response to have items with fields:
 *   - id_bidang_usaha or jenis_bidang_usaha
 *   - nama_detail or title
 *   - deskripsi or description
 */
export const fetchDetailLayananData = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/detail-jenis-bidang-usaha`
    );
    const data = response.data;

    // Parse response (support array or paginated response)
    const items = Array.isArray(data) ? data : data?.results || [];

    if (items.length > 0) {
      // Group items by jenis_bidang_usaha (ID atau slug)
      const grouped = {};

      items.forEach((item) => {
        // Determine the bidang_usaha key (e.g., "nonformal", "konsulmanj")
        const bidangKey =
          item.jenis_bidang_usaha_slug ||
          item.jenis_bidang_usaha ||
          item.id_bidang_usaha_slug ||
          null;

        if (!bidangKey) {
          console.warn("Item missing jenis_bidang_usaha identifier:", item);
          return;
        }

        if (!grouped[bidangKey]) {
          // Initialize group with title from item or default
          grouped[bidangKey] = {
            id: bidangKey,
            title:
              item.jenis_bidang_usaha_name ||
              item.bidang_usaha_title ||
              bidangKey,
            items: [],
          };
        }

        // Add detail item with flexible field mapping
        grouped[bidangKey].items.push({
          id: item.id,
          name: item.nama_detail || item.title || item.name || "",
          desc: item.deskripsi || item.description || item.desc || "",
          // Additional fields from backend (preserve all)
          ...item,
        });
      });

      // Merge with defaults and update detailLayanan
      detailLayanan = { ...defaultDetailLayanan, ...grouped };
    }

    return detailLayanan;
  } catch (error) {
    console.warn(
      "Failed to fetch detail layanan from backend, using default data:",
      error
    );
    return defaultDetailLayanan;
  }
};

// Initialize: fetch data when module loads
fetchDetailLayananData();
