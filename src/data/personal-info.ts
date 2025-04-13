import { PersonalInfo } from '../types/personal-info';

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  bio: "Passionate developer with expertise in design, frontend, backend, and machine learning. Building beautiful and functional web applications.",
  avatar: "/images/profile.jpg",
  location: "Your Location",
  email: "your.email@example.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter"
    }
  ],
  resume: "/resume.pdf"
};