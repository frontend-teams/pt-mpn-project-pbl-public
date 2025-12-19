import API_BASE_URL from "./apiConfig";
import axiosClient from "./axiosClient";

// Admin endpoint returns: { data: [...] }
export async function getTestimoni() {
  try {
    const response = await axiosClient.get("/api/testimoni");
    const arr = response?.data?.data || [];
    return arr;
  } catch (error) {
    console.error("Error getTestimoni:", error);
    return [];
  }
}

function joinUrl(base, path) {
  if (!base) return path || "";
  if (!path) return base;
  const hasTrail = base.endsWith("/");
  const hasLead = path.startsWith("/");
  if (hasTrail && hasLead) return base + path.slice(1);
  if (!hasTrail && !hasLead) return `${base}/${path}`;
  return base + path;
}

function resolveImage(url) {
  if (!url) return "";
  const isAbsolute = /^https?:\/\//i.test(url);
  if (isAbsolute) return url;
  return joinUrl(API_BASE_URL, url);
}

// Public-friendly mapper used by landing page
export const fetchTestimonials = async (limit = null) => {
  try {
    const raw = await getTestimoni();
    const mapped = Array.isArray(raw)
      ? raw.map((t) => ({
          name: t.nama || "",
          position: t.jabatan || "",
          company: t.perusahaan || "",
          message: t.pesan_testi || t.pesan || "",
          image: resolveImage(t.foto),
          rating: t.rating || 5,
        }))
      : [];

    return limit ? mapped.slice(0, limit) : mapped;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};
