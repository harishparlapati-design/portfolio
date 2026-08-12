export type Cert = {
  no: string; issuer: string | null; logo?: { src: string; aspect: number }; title: string; year: string | null; credentialId: string | null; credentialUrl?: string; verified: boolean; skills: string[]; metric?: { value: string; label: string }; fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  { no: "2.1", issuer: "NPTEL", title: "Product Design and Manufacturing", year: "2025", credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.2", issuer: "NPTEL", title: "Privacy and Security in Online Social Media", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.3", issuer: "edX \u00b7 StanfordOnline", title: "Algorithms: Design and Analysis, Part 1", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.4", issuer: "edX \u00b7 IBM", title: "Analyzing Data with Python", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.5", issuer: "edX \u00b7 IBM", title: "Cybersecurity Basics", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.6", issuer: "edX \u00b7 IBM", title: "Data Analytics Basics for Everyone", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.7", issuer: "edX \u00b7 WageningenX", title: "Drones for Agriculture: Prepare and Design Your Drone (UAV) Mission", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.8", issuer: "edX \u00b7 IBM", title: "Hardware and Operating Systems", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.9", issuer: "edX \u00b7 IBM", title: "Introduction to Cloud Computing", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.10", issuer: "edX \u00b7 UC3Mx", title: "Introduction to Java Programming: Fundamental Data Structures and Algorithms", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.11", issuer: "edX \u00b7 UPValenciaX", title: "Introduction to the Internet of Things", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.12", issuer: "edX \u00b7 IBM", title: "Machine Learning with Python: A Practical Introduction", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.13", issuer: "edX \u00b7 UCx", title: "Mental Health and Nutrition", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.14", issuer: "edX \u00b7 UPValenciaX", title: "Physics Fundamentals: Mechanics", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.15", issuer: "edX \u00b7 IBM", title: "Python Basics for Data Science", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.16", issuer: "edX \u00b7 IBM", title: "SQL for Data Science", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
  { no: "2.17", issuer: "edX \u00b7 Raspberry Pi Foundation", title: "Teach teens computing: Encryption and cryptography", year: null, credentialId: null, verified: false, skills: ["Continuous learning"] },
];
