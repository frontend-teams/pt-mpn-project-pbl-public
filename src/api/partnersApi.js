import API_BASE_URL from './apiConfig';

export const fetchPartners = async (limit = null) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/partners`);
    if (!response.ok) {
      throw new Error('Gagal mengambil data partners');
    }

    const data = await response.json();

    // Jika limit diberikan, batasi data, kalau null ambil semua
    return limit ? data.slice(0, limit) : data;
  } catch (error) {
    console.error('Error fetching partners:', error);
    return null;
  }
};
