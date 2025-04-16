export interface Courses {
  id: number;
  courseName: string;
  length: number;
  summary: string;
  chapters: [{ chapterName: string; chapterLength: number }];
}
export interface Chapters {
  id: number;
  chapterName: string;
  length: number;
  sections: [{ sectionName: string; sectionLength: number }];
}
export interface Sections {
  id: number;
  sectionName: string;
  length: number;
  content: [{ contentTitle: string; contentType: string; itemPathS3: string }];
}

const API_URL = import.meta.env.VITE_AWS_API_ASSETS;

export const getAllCourses = async (token: string): Promise<Courses[]> => {
  const response = await fetch(`${API_URL}/courses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  return response.json();
};

export const getCoursesById = async (
  id: string,
  token: string
): Promise<Courses> => {
  const response = await fetch(`${API_URL}/courses/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("courses not found");
  }
  return response.json();
};

export const getAllChapters = async (token: string): Promise<Chapters[]> => {
  const response = await fetch(`${API_URL}/chapters`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch chapters");
  }
  return response.json();
};

export const getChaptersById = async (
  id: string,
  token: string
): Promise<Chapters> => {
  const response = await fetch(`${API_URL}/chapters/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("chapters not found");
  }
  return response.json();
};

export const getAllSections = async (token: string): Promise<Sections[]> => {
  const response = await fetch(`${API_URL}/sections`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch sections");
  }
  return response.json();
};

export const getSectionsById = async (
  id: string,
  token: string
): Promise<Sections> => {
  const response = await fetch(`${API_URL}/sections/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("sections not found");
  }
  return response.json();
};
