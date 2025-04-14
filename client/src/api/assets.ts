export interface Asset {
  imageName: string;
  itemPathS3: string;
  altName: string;
}

const API_URL = import.meta.env.VITE_AWS_API_ASSETS;

export const getAllAssets = async (): Promise<Asset[]> => {
  const response = await fetch(`${API_URL}/assets`);
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

export const createAsset = async (
  asset: Asset
): Promise<{ message: string; item: Asset }> => {
  const response = await fetch(`${API_URL}/assets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(asset),
  });
  if (!response.ok) {
    throw new Error("Failed to create asset");
  }
  return response.json();
};

export const deleteAsset = async (id: string): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/assets/delete/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete asset");
  }
  return response.json();
};
