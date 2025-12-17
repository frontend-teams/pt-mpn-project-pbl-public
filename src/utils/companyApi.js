import { getCompanyProfile } from "./publicApi";

export const fetchCompanyProfile = async () => {
  const result = await getCompanyProfile();
  return result.data;
};
