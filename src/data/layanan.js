import axios from "axios";

const API_BASE_URL = "http://202.10.47.174:8000/api";


const defaultLayananInfo = [];

export let layananInfo = defaultLayananInfo;
export const fetchLayananData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/bidang-usaha`);
    const data = response.data;

    // handle different backend shapes (array or object with results)
    if (Array.isArray(data)) {
      layananInfo = data;
    } else if (data && Array.isArray(data.results)) {
      layananInfo = data.results;
    } else {
      // fallback: try to coerce to array or keep defaults
      layananInfo = Array.isArray(defaultLayananInfo) ? defaultLayananInfo : [];
    }

    return layananInfo;
  } catch (error) {
    console.warn(
      "Failed to fetch layanan data from backend, using default data:",
      error
    );
    return defaultLayananInfo;
  }
};

// Initialize: fetch data when module loads
fetchLayananData();
