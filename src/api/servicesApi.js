// import API_BASE_URL from './apiConfig';

// export const fetchServices = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/api/bidang-usaha`);
//     if (!response.ok) {
//       throw new Error('Gagal mengambil data layanan');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching services:", error);
//     return null;
//   }
// };

import API_BASE_URL from './apiConfig';

export const fetchServices = async (limit = null) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bidang-usaha`);
    if (!response.ok) {
      throw new Error('Gagal mengambil data layanan');
    }

    const data = await response.json();

    // Jika limit diberikan, batasi jumlah data
    const limitedData = limit ? data.slice(0, limit) : data;

    return limitedData;
  } catch (error) {
    console.error("Error fetching services:", error);
    return null;
  }
};
