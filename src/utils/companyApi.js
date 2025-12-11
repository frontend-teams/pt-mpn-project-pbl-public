import API_BASE_URL from './apiConfig'; // Mengimpor URL dasar API

export const fetchCompanyProfile = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/company-profile`); // Menggabungkan base URL dengan endpoint
    if (!response.ok) {
      throw new Error('Gagal mengambil data profile perusahaan');
    }
    const data = await response.json(); // Mengubah response menjadi format JSON
    return data;
  } catch (error) {
    console.error("Error fetching company profile:", error);
    return null; // Jika gagal, mengembalikan null atau bisa mengatur data fallback
  }
};
