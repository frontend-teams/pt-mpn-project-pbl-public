import { useEffect } from "react";

const DEFAULT_OG_IMAGE = "/og-image.svg";

function setTag(selector, attr, content) {
  let tag = document.querySelector(selector);
  if (!content) {
    if (tag) tag.parentNode.removeChild(tag);
    return;
  }
  if (!tag) {
    tag = document.createElement(selector.startsWith("meta") ? "meta" : "link");
    if (selector.startsWith("meta[name=")) {
      const name = selector.match(/meta\[name="(.+?)"\]/)?.[1];
      if (name) tag.setAttribute("name", name);
    } else if (selector.startsWith("meta[property=")) {
      const property = selector.match(/meta\[property="(.+?)"\]/)?.[1];
      if (property) tag.setAttribute("property", property);
    } else if (selector.startsWith("link[rel=")) {
      const rel = selector.match(/link\[rel="(.+?)"\]/)?.[1];
      if (rel) tag.setAttribute("rel", rel);
    }
    document.head.appendChild(tag);
  }
  const valueAttr = attr || (selector.startsWith("link") ? "href" : "content");
  tag.setAttribute(valueAttr, content);
}

export default function usePageMeta({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
}) {
  useEffect(() => {
    if (title) document.title = title;
    const currentUrl =
      typeof window !== "undefined" ? window.location.href : canonical;
    const canonUrl = canonical || currentUrl;
    const image = ogImage || DEFAULT_OG_IMAGE;

    setTag('meta[name="description"]', "content", description);

    // Open Graph
    setTag('meta[property="og:title"]', "content", title);
    setTag('meta[property="og:description"]', "content", description);
    setTag('meta[property="og:type"]', "content", ogType);
    setTag('meta[property="og:url"]', "content", canonUrl);
    setTag('meta[property="og:image"]', "content", image);

    // Twitter
    setTag('meta[name="twitter:card"]', "content", "summary_large_image");
    setTag('meta[name="twitter:title"]', "content", title);
    setTag('meta[name="twitter:description"]', "content", description);
    setTag('meta[name="twitter:image"]', "content", image);

    // Canonical link
    setTag('link[rel="canonical"]', "href", canonUrl);
  }, [title, description, canonical, ogImage, ogType]);
}
