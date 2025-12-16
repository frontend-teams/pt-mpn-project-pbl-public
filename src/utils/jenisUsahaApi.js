import API_BASE_URL from './apiConfig'; // Mengimpor URL dasar API

export const fetchJenisUsaha = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/jenis-usaha`);
    const result = await response.json();
    return result.data; // karena data kamu ada di dalam "data"
  } catch (error) {
    console.error("Error fetching jenis usaha:", error);
    return [];
  }
};