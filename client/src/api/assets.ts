export interface Asset {
  imageName: string;
  itemPathS3: string;
  altName: string;
}

const API_URL = import.meta.env.VITE_AWS_API_ASSETS;

export const getAllAssets = async (token: string): Promise<Asset[]> => {
  const response = await fetch(`${API_URL}/assets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch assets");
  }
  return response.json();
};

export const getAssetById = async (id: string): Promise<Asset> => {
  const response = await fetch(`${API_URL}/assets/${id}`);
  if (!response.ok) {
    throw new Error("Asset not found");
  }
  return response.json();
};
