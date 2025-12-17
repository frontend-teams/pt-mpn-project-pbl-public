import { apiClient } from "./apiClient";
import { defaultCompanyInfo } from "../data/company";
import { unwrapList } from "./unwrapList";

const normalizeArray = (res) => {
  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res.data?.data)) return res.data.data;
  return [];
};

export async function fetchBidangUsaha() {
  try {
  const res = await apiClient.get("/api/bidang-usaha");
  return unwrapList(res.data);
  } catch (error) {
    console.warn("Gagal memuat bidang usaha:", error);
    return [];
  }
}

export async function fetchJenisUsaha() {
  try {
  const res = await apiClient.get("/api/jenis-usaha");
  return unwrapList(res.data);
  } catch (error) {
    console.warn("Gagal memuat jenis usaha:", error);
    return [];
  }
}

export async function fetchDetailJenisBidangUsaha() {
  try {
  const res = await apiClient.get("/api/detail-jenis-bidang-usaha");
  return unwrapList(res.data);
  } catch (error) {
    console.warn("Gagal memuat detail jenis bidang usaha:", error);
    return [];
  }
}

export async function fetchPartners() {
  try {
  const res = await apiClient.get("/api/partners");
  return unwrapList(res.data);
  } catch (error) {
    console.warn("Gagal memuat partner:", error);
    return [];
  }
}

export async function fetchTestimonials() {
  try {
  const res = await apiClient.get("/api/testimoni");
  return unwrapList(res.data);
  } catch (error) {
    console.warn("Gagal memuat testimoni:", error);
    return [];
  }
}

export async function fetchGallery() {
  try {
  const res = await apiClient.get("/api/gallery");
  return unwrapList(res.data);
  } catch (error) {
    console.warn("Gagal memuat galeri:", error);
    return [];
  }
}

export async function fetchCompanyProfileApi() {
  const res = await apiClient.get("/api/company-profile");
  return res.data?.data || res.data;
}

export async function getCompanyProfile() {
  try {
    const data = await fetchCompanyProfileApi();
    return { data, source: "api" };
  } catch (error) {
    console.warn("Gagal memuat profil API, fallback profil.json", error);
  }

  try {
    const res = await fetch("/profil.json", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      return { data, source: "fallback-json" };
    }
  } catch (error) {
    console.warn("Gagal memuat profil.json:", error);
  }

  return { data: defaultCompanyInfo, source: "default" };
}

export async function postPesan(payload) {
  return apiClient.post("/api/pesan/add", payload);
}
