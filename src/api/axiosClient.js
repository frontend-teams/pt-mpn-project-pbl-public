import axios from "axios";
import API_BASE_URL from "./apiConfig";

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
});

export default axiosClient;
