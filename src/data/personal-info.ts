import { PersonalInfo } from '../types/personal-info';

export const personalInfo: PersonalInfo = {
  name: "David300",
  title: "Full Stack Developer",
  bio: "I am a technology enthusiast and full-stack developer skilled at integrating design, frontend, backend, and machine learning to create stunning web applications. I am committed to solving real-world problems with technology and constantly pursuing exceptional user experiences.",
  avatar: "/images/profile.svg",
  location: "China Beijing",
  email: "xuanzhiweisw@gmail.com",
  phone: "+86 17358544801",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/lodrg",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://x.com/David_300song",
      icon: "twitter"
    }
  ],
  resume: "/resume.pdf",
  journey: [
    {
      title: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading the development of enterprise-level web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications using React, Next.js, and Node.js."
    },
    {
      title: "Frontend Developer",
      period: "2018 - 2020",
      description: "Created responsive and interactive user interfaces using React and modern CSS frameworks."
    }
  ]
};