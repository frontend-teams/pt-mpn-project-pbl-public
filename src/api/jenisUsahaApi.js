import API_BASE_URL from './apiConfig'; // Mengimpor URL dasar API

// ambil data pelatihan dari API
export const fetchJenisUsaha = async (limit = null) => { 
  try {
    const response = await fetch(`${API_BASE_URL}/api/jenis-usaha`);
    if (!response.ok) {
      throw new Error('Gagal mengambil data pelatihan');
    }

    const result = await response.json();
    
    // Memastikan result.data adalah array sebelum menggunakan slice
    const data = result.data || []; // Misalnya, data berada di dalam result.data
    console.log(data);

    // Jika data adalah array dan limit diberikan, batasi data, kalau null ambil semua
    if (Array.isArray(data)) {
      return limit ? data.slice(0, limit) : data;
    } else {
      throw new Error('Data yang diterima bukan array');
    }
  } catch (error) {
    console.error('Error fetching pelatihan:', error);
    return null;
  }
};

// ambil detail jenis usaha per id
export const fetchJenisUsahaById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/jenis-usaha/${id}`);
    if (!response.ok) {
      throw new Error('Gagal mengambil detail pelatihan');
    }

    const result = await response.json();
    return result.data || null;
  } catch (error) {
    console.error('Error fetching detail pelatihan:', error);
    return null;
  }
};

