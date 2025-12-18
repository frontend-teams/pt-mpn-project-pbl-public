import API_BASE_URL from './apiConfig'; // Mengimpor URL dasar API

export const fetchGallery = async (limit = null) => { 
  try {
    const response = await fetch(`${API_BASE_URL}/api/gallery`);
    if (!response.ok) {
      throw new Error('Gagal mengambil data gallery');
    }

    const result = await response.json();

    console.log("RAW RESPONSE:", result); // ✅ cek isi asli

    // ✅ karena endpoint langsung array
    const data = Array.isArray(result) ? result : [];

    console.log("FINAL DATA:", data);

    return limit ? data.slice(0, limit) : data;

  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
};
