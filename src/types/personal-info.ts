export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }
  
  export interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    location: string;
    email: string;
    phone: string;
    socialLinks: SocialLink[];
    resume?: string;
  }