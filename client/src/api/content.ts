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
    content: [{ contentTitle: string; contentType: string, itemPathS3: string }];
}

const API_URL = import.meta.env.VITE_AWS_API_ASSETS;

export const getAllCourses = async (): Promise<Courses[]> => {
  const response = await fetch(`${API_URL}/courses`);
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  return response.json();
};

export const getCoursesById = async (id: string): Promise<Courses> => {
  const response = await fetch(`${API_URL}/courses/${id}`);
  if (!response.ok) {
    throw new Error("courses not found");
  }
  return response.json();
};

export const getAllChapters = async (): Promise<Chapters[]> => {
    const response = await fetch(`${API_URL}/chapters`);
    if (!response.ok) {
      throw new Error("Failed to fetch chapters");
    }
    return response.json();
  };
  
  export const getChaptersById = async (id: string): Promise<Chapters> => {
    const response = await fetch(`${API_URL}/chapters/${id}`);
    if (!response.ok) {
      throw new Error("chapters not found");
    }
    return response.json();
  };

  export const getAllSections = async (): Promise<Sections[]> => {
    const response = await fetch(`${API_URL}/sections`);
    if (!response.ok) {
      throw new Error("Failed to fetch sections");
    }
    return response.json();
  };
  
  export const getSectionsById = async (id: string): Promise<Sections> => {
    const response = await fetch(`${API_URL}/sections/${id}`);
    if (!response.ok) {
      throw new Error("sections not found");
    }
    return response.json();
  };