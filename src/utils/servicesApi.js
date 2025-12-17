import { fetchBidangUsaha } from "./publicApi";

export const fetchServices = async () => {
  const data = await fetchBidangUsaha();
  return data;
};
