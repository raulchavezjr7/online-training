export interface UserContext {
  id: number;
  email: string;
  name: string;
  company: string;
  supervisor: boolean;
  assignedCourses: string[];
  completedCourses: string[];
  currentCourse: {
    courseName: string;
    chapterName: string;
    sectionName: string;
  };
}

export interface CourseContext {
  id: number;
  courseName: string;
  length: number;
  summary: string;
  chapters: [
    {
      chapterName: string;
      chapterLength: number;
    },
    { chapterName: string; chapterLength: number }
  ];
}

export interface ChapterContext {
  id: number;
  chapterName: string;
  length: number;
  sections: [{ sectionName: string; sectionLength: number }];
}

export interface SectionContext {
  id: number;
  sectionName: string;
  length: number;
  content: [{ contentTitle: string; contentType: string }];
}
