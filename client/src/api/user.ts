export interface User {
  email: string;
  company: string;
  name: string;
  supervisor: boolean;
  assignedCourses: [string];
  completeCourses: [string];
  currentCourse: {
    chapterName: string;
    courseName: string;
    sectionName: string;
  };
}

const API_URL = import.meta.env.VITE_AWS_API_ASSETS;

export const getUserById = async (id: string, token: string): Promise<User> => {
  const response = await fetch(`${API_URL}/users/${id}`, {
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

export const updateUserById = async (
  id: string,
  data: Partial<User>,
  token: string
): Promise<User> => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  const result = await response.json();
  return result.updatedItem;
};
