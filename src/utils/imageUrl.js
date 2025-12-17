export function resolveUploadUrl(path, baseUrl) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  const safeBase = (baseUrl || import.meta.env.VITE_API_BASE_URL || "http://202.10.47.174:8000").replace(/\/$/, "");
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  // Avoid double-prefix if already /uploads/...
  const finalPath = trimmed.startsWith("/uploads/") ? trimmed : `/uploads${trimmed}`;
  return `${safeBase}${finalPath}`;
}

