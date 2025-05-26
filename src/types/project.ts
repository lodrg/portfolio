export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    skills: string[];
    link?: string;
    github?: string;
    images?: string[];
    featured: boolean;
    process?: {
      steps: {
        title: string;
        description: string;
        image?: string;
      }[];
    };
    takeaways?: {
      en: string[];
      zh: string[];
    };
  }