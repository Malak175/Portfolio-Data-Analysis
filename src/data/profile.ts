import workforce from "@/assets/Dashboard.png";
import beanora from "@/assets/Beanora Café.png";
import xo from "@/assets/X&O.png";

export const profile = {
  name: "Malak Mahmoud",
  title: "Aspiring Data Analyst ",
  location: "Al Buhayrah, Egypt",
  phone: "+20 155 852 0651",
  email: "malak.mahmoud.zayed5@gmail.com",
  linkedin: "https://www.linkedin.com/in/malak-zayed-a5674a322",
  github: "https://github.com/Malak175",
  cv: "https://drive.google.com/file/d/1uSBYmKGRL6h4CdyInzKD6ZF8JXoCt9jF/view?usp=drive_link",
  intro:
    "IT graduate with a strong technical foundation, working with Excel, SQL and Python to turn data into insight .",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Data Analytics",
    icon: "chart",
    items: ["Microsoft Excel", "Data Cleaning", "Sorting & Filtering", "Pivot Tables", "Lookup Functions", "Conditional Formulas", "Charts", "SQL", "Python"],
  },
  { title: "Programming", icon: "code", items: ["Python", "Java", "C++", "OOP Concepts"] },
  { title: "Frontend", icon: "layout", items: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Tools", icon: "wrench", items: ["Git", "GitHub", "VS Code"] },
  {
    title: "Soft Skills",
    icon: "users",
    items: ["Analytical Thinking", "Problem-Solving", "Attention to Detail", "Communication", "Teamwork", "Time Management", "Fast Learning"],
  },
] as const;

export type Project = {
  name: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  liveLabel?: string;
};

export const projects: Project[] = [

  {
    name: "Employee Workforce Analysis Dashboard",
    description:
      "Interactive Excel dashboard analysing workforce data for 740 employees — distribution, compensation, job ratings and hiring trends, summarised into KPIs.",
    tech: ["Excel", "Pivot Tables", "Pivot Charts", "Slicers"],
    image: workforce,
    live: "https://docs.google.com/spreadsheets/d/1OX6Ht2R57U_iSePpsU7GaBzMnqN7KEIx/edit?usp=drive_link&ouid=103085720753556154021&rtpof=true&sd=true",
    liveLabel: "View Dashboard",
  },
  {
    name: "X-O (Tic-Tac-Toe) Game",
    description:
      "Python game with player interaction and win/draw detection, organised into separate modules for readability and maintainability.",
    tech: ["Python", "Git", "GitHub"],
    image: xo,
    github: "https://github.com/Malak175/X-O-game",
  },
    {
    name: "Beanora Café — Full-Stack Café Management System",
    description:
      "Responsive café menu and admin dashboard with JWT authentication, protected routes, role-based admin, CRUD operations, search/filtering, availability controls and dashboard statistics on a MySQL database.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MySQL", "Axios"],
    image: beanora,
    github: "https://github.com/Malak175/Beanora-Caffee",
  },
];

export const education = {
  degree: "Bachelor's Degree in Information Technology",
  university: "Egyptian E-Learning University (EELU)",
  location: "Alexandria, Egypt",
  years: "2022 – 2026",
  grade: "Very Good (High) – Honors",
  project: "Graduation Project: Tabeebak – AI-Powered Healthcare Management System (Grade: A+)",
};

export const experience = {
  role: "React Frontend Web Developer Training",
  org: "Digital Egypt Pioneers Initiative (DEPI)",
  date: "Dec 2025",
  detail:
    "Completed training in React.js frontend development, including responsive UI design, component-based architecture, and modern web development fundamentals.",
};

export const certifications = [
  {
    name: "Python Programming Language",
    org: "Egyptian E-Learning University (EELU)",
    date: "Sep 2025",
    detail: "40-hour accredited training program. Certificate of Completion.",
  },
  { name: "Artificial Intelligence", org: "Egyptian E-Learning University (EELU)", date: "Sep 2025" },
  {
    name: "CCNA",
    org: "Cisco Networking Academy",
    date: "May 2024 – Dec 2024",
    detail:
      "Introduction to Networks, Switching, Routing & Wireless Essentials, Enterprise Networking. Network configuration, automation with Python, and problem-solving.",
  },
];
