const API_URL = import.meta.env.VITE_AWS_API_ASSETS;

export const postForm = async (data: {
  [k: string]: FormDataEntryValue;
}): Promise<FormDataEntryValue> => {
  const response = await fetch(`${API_URL}/form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error("Failed to update user: " + err);
  }

  const result = await response.json();
  return result.updatedItem;
};
