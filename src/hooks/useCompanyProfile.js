import { useEffect, useState } from "react";
import { getCompanyProfile } from "../utils/publicApi";
import { defaultCompanyInfo } from "../data/company";

let cachedProfile = null;
let cachedSource = null;
let pendingPromise = null;

export default function useCompanyProfile() {
  const [profile, setProfile] = useState(cachedProfile || defaultCompanyInfo);
  const [source, setSource] = useState(cachedSource || "default");
  const [loading, setLoading] = useState(!cachedProfile);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        if (cachedProfile) {
          setLoading(false);
          return;
        }
        const runner = pendingPromise || getCompanyProfile();
        pendingPromise = runner;
        const result = await runner;
        if (!active) return;
        cachedProfile = result.data || defaultCompanyInfo;
        cachedSource = result.source || "default";
        setProfile(cachedProfile);
        setSource(cachedSource);
      } catch {
        if (!active) return;
        setProfile(defaultCompanyInfo);
        setSource("default");
      } finally {
        if (active) setLoading(false);
      }
    };

    load();
    return () => { active = false; };
  }, []);

  return { profile, source, loading };
}

