export type Tool = {
  name: string;
  group: "CAD" | "Engineering" | "Digital" | "Tools";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  { name: "SolidWorks", group: "CAD", mono: "SW" },
  { name: "CATIA V5", group: "CAD", mono: "C5" },
  { name: "Fusion 360", group: "CAD", mono: "F3" },
  { name: "AutoCAD", group: "CAD", mono: "AC" },
  { name: "Creo", group: "CAD", mono: "CR" },
  { name: "NX CAD", group: "CAD", mono: "NX" },
  { name: "CNC Programming", group: "Engineering", mono: "CNC" },
  { name: "GD&T", group: "Engineering", mono: "GD" },
  { name: "3D Printing", group: "Engineering", mono: "3D" },
  { name: "Drone Technology", group: "Engineering", mono: "UAV" },
  { name: "Product Design", group: "Engineering", mono: "PD" },
  { name: "Manufacturing", group: "Engineering", mono: "MF" },
  { name: "Python", group: "Digital", mono: "Py" },
  { name: "SQL", group: "Digital", mono: "SQL" },
  { name: "IoT", group: "Digital", mono: "IoT" },
  { name: "GitHub", group: "Tools", mono: "GH" },
  { name: "VS Code", group: "Tools", mono: "VS" },
];
