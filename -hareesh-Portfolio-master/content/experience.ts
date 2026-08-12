export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: { src: string; variant: "tile" | "plate"; aspect: number; placement?: "right" | "below" };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "CAD Desk Institution",
    role: "Mechanical CAD Trainee",
    type: "Internship",
    location: "Hyderabad, Ameerpet",
    period: "2026",
    summary: "Completed a 140-hour Diploma Course in Mechanical CAD covering SolidWorks, CATIA, AutoCAD, Creo, NX CAD, CNC programming and engineering design fundamentals.",
    achievements: [
      "Practiced sketching, part modeling, assembly design, surface modeling, dimensioning and drafting in SolidWorks and CATIA.",
      "Studied introductory GD&T, sheet-metal concepts and engineering drawing workflows.",
      "Developed hands-on CAD models including crankshaft, assembly, tank and butterfly-component exercises.",
    ],
    outcome: "Built a stronger practical foundation for mechanical design and advanced CAD learning.",
    skills: ["SolidWorks", "CATIA V5", "AutoCAD", "Creo", "NX CAD", "GD&T", "CNC"],
    color: "#111111", fg: "light",
  },
  {
    company: "Rayalaseema Thermal Power Project (RTPP)",
    role: "Mechanical Engineering Intern",
    type: "Internship",
    location: "Andhra Pradesh, India",
    period: "Jan – Apr 2026",
    summary: "Gained industrial exposure to turbine and auxiliary systems within a thermal power generation environment.",
    achievements: [
      "Studied turbine and auxiliary-system operations and their role in plant performance.",
      "Observed industrial engineering practices and equipment workflows in a live power-generation environment.",
    ],
    outcome: "Strengthened understanding of industrial mechanical systems and plant operations.",
    skills: ["Turbine Systems", "Auxiliaries", "Industrial Engineering", "Power Plant Operations"],
    color: "#6D3BF5", fg: "light",
  },
  {
    company: "Sakthi Auto Component Limited",
    role: "Mechanical Engineering Intern / CNC Operator Trainee",
    type: "Internship",
    location: "India",
    period: "May – Jul 2025",
    summary: "Completed a 46-day industrial internship with exposure to automotive component manufacturing and CNC operations.",
    achievements: [
      "Gained hands-on exposure to mechanical manufacturing processes in a factory environment.",
      "Trained in CNC operator fundamentals and observed production-oriented machining workflows.",
      "Maintained good attendance and performance throughout the training period.",
    ],
    outcome: "Developed practical awareness of automotive manufacturing and shop-floor operations.",
    skills: ["CNC", "Manufacturing", "Automotive Components", "Shop Floor Practices"],
    color: "#FFFFFF", fg: "dark",
  },
];
