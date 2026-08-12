export type Chapter = {
  id: string; year: string; title: string; place: string; story: string; bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  { id: "degree", year: "2022", title: "Building the foundation", place: "JNTUA College of Engineering, Pulivendula", story: "Started a B.Tech in Mechanical Engineering, building fundamentals across engineering science, design, manufacturing and problem solving.", bridge: "The classroom gave me the foundation; projects and industry would give it practical direction." },
  { id: "internships", year: "2025", title: "Engineering beyond the classroom", place: "Sakthi Auto Component Limited", story: "Industrial training introduced me to automotive component manufacturing, CNC operations and the realities of a production environment.", bridge: "Seeing components being made made CAD feel less like software and more like the language of manufacturing." },
  { id: "rtpp", year: "2026", title: "Inside an industrial system", place: "Rayalaseema Thermal Power Project", story: "Exposure to turbine and auxiliary systems expanded my understanding of large-scale mechanical equipment and industrial operations.", bridge: "The next step was to strengthen the design side of my engineering knowledge." },
  { id: "cad", year: "2026", title: "Learning to design in CAD", place: "CAD Desk Institution · Hyderabad", story: "Completed a 140-hour Mechanical CAD course covering SolidWorks, CATIA, AutoCAD, Creo, NX CAD, CNC programming and introductory GD&T.", bridge: "Hands-on modeling turned engineering concepts into parts, assemblies and drawings I could actually build and improve." },
  { id: "future", year: "Now", title: "Designing with intent", place: "Tirupati, India", story: "I am continuing to develop as a Mechanical Designer through CAD projects, product-design learning, additive manufacturing, drone technology and digital tools.", bridge: "The goal is simple: keep learning, design accurately, and turn good engineering ideas into useful products." },
];
