import { useEffect, useState } from "react";
import { fetchBidangUsaha } from "../utils/publicApi";
import { defaultLayananInfo } from "../data/layanan";

let cachedBidang = null;
let pendingPromise = null;

export function useBidangUsaha() {
  const [data, setData] = useState(cachedBidang || defaultLayananInfo);
  const [loading, setLoading] = useState(!cachedBidang);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        if (cachedBidang) {
          setLoading(false);
          return;
        }
        const runner = pendingPromise || fetchBidangUsaha();
        pendingPromise = runner;
        const res = await runner;
        if (!active) return;
        cachedBidang = res && res.length ? res : defaultLayananInfo;
        setData(cachedBidang);
      } catch {
        if (active) setData(defaultLayananInfo);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, []);

  return { data, loading };
}

