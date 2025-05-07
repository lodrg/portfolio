export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  avatar: string;
  bio: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  journey: {
    title: string;
    period: string;
    description: string;
  }[];
} 