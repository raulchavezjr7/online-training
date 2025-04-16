export interface Faq {
  question: string;
  answer: string;
  id: number;
}

const API_URL = import.meta.env.VITE_AWS_API_ASSETS;

export const getAllFAQ = async (): Promise<Faq[]> => {
  const response = await fetch(`${API_URL}/faq`);
  if (!response.ok) {
    throw new Error("Failed to fetch FAQ");
  }
  return response.json();
};

export const getFAQById = async (question: string): Promise<Faq> => {
  const response = await fetch(
    `${API_URL}/faq/${encodeURIComponent(question)}`
  );
  if (!response.ok) {
    throw new Error("FAQ not found");
  }
  return response.json();
};
