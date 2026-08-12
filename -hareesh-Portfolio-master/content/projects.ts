export type Study = {
  role: string; timeline: string; context: string; problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[]; reflection: string; note?: string;
};
export type StudyFr = Partial<Study>;
export type Cover = { bg: string; ink: "light" | "dark"; src?: string; aspect?: number; variant?: "brand" | "photo" | "video"; focus?: string; mark?: string };
export type Project = {
  slug: string; title: string; tags: string[]; year: string; oneLiner: string; contribution: string; coverLabel: string; cover?: Cover; site?: {url:string;label:string}; repo?: string; award?: string; study: Study; fr?: {title?:string; oneLiner?:string; contribution?:string; tags?:string[]; study?:StudyFr};
};

const cadStudy = (title: string, context: string, process: {title:string;body:string}[]): Study => ({
  role: "Mechanical CAD Project", timeline: "2026 · CAD Desk", context,
  problem: "Translate mechanical geometry into accurate, structured CAD models suitable for design review and engineering documentation.",
  process,
  decisions: [
    { title: "Model with design intent", why: "Use sketches, constraints and feature-based modeling so dimensions can be revised without rebuilding the entire part." },
    { title: "Think beyond the part", why: "Where applicable, consider how individual components fit into assemblies and how the model connects to manufacturing and drawings." },
  ],
  outcomes: ["Hands-on CAD modeling practice", "Improved understanding of assemblies and drafting", "Stronger mechanical-design workflow"],
  reflection: "Every model is an opportunity to improve accuracy, structure and design thinking."
});

export const PROJECTS: Project[] = [
  { slug:"petg-filament", title:"Low-Cost FDM Filament from PET Bottles", tags:["Additive Manufacturing","PET","FDM","Sustainability"], year:"2026", oneLiner:"A mechanical engineering project exploring a low-cost process for producing FDM filament from waste PET bottles.", contribution:"Developed and studied the mechanical process behind shredding, melting and extrusion of recycled PET into usable 3D-printer filament.", coverLabel:"PET → FDM FILAMENT",
cover:{
  bg:"#0B0B0E",
  ink:"light",
  src:"/images/projects/petg-filament.mp4",
  variant:"video",
  mark:"PET → 3D"
}, study:{role:"B.Tech Mechanical Engineering Project",timeline:"2026 · JNTUA College of Engineering, Pulivendula",context:"The project report is titled Development of Low Cost FDM Filament Production System from PET Bottles and was completed as part of the B.Tech Mechanical Engineering programme.",problem:"Explore a practical, lower-cost approach to converting waste PET bottles into filament for fused deposition modelling.",process:[{title:"Prepare the material",body:"Study the handling and preparation of waste PET bottles before conversion into filament feedstock."},{title:"Process the polymer",body:"Apply shredding, melting and extrusion stages to transform PET material into continuous filament."},{title:"Evaluate the output",body:"Focus on producing usable filament for additive-manufacturing applications while considering recycling and cost."}],decisions:[{title:"Design around available waste material",why:"Using PET bottles makes the project directly connected to recycling and accessible material sources."},{title:"Combine process stages",why:"The project links material preparation and extrusion into a practical production workflow."}],outcomes:["Developed a low-cost FDM filament production concept","Connected recycling with additive manufacturing","Built practical understanding of material-processing systems"],reflection:"The project showed how mechanical design can connect sustainability, manufacturing and additive manufacturing in one system."}},
 { 
  slug:"crankshaft-solidworks",
  title:"Crankshaft — SolidWorks Model",
  tags:["SolidWorks","Part Modeling","Mechanical CAD"],
  year:"2026",
  oneLiner:"A detailed crankshaft modeling exercise developed during mechanical CAD training.",
  contribution:"Created a parametric crankshaft model while practicing sketches, features, dimensions and mechanical geometry.",

  coverLabel:"CRANKSHAFT · SOLIDWORKS",
  cover:{
    bg:"#E9F2FC",
    ink:"dark",
    mark:"TEST IMAGE",
    src:"/images/projects/crankshaft-solidworks.png",
    variant:"photo"
  },

  study:cadStudy(
    "Crankshaft",
    "A mechanical CAD practice model created as part of CAD Desk training.",
    [
      {
        title:"Build the geometry",
        body:"Break the crankshaft into logical geometric features and construct the model through constrained sketches and solid features."
      },
      {
        title:"Refine the form",
        body:"Apply dimensions and feature relationships to keep the model consistent and editable."
      },
      {
        title:"Prepare for documentation",
        body:"Use the completed model as the basis for engineering-drawing and drafting practice."
      }
    ]
  )
 }, 
  { slug:"crankshaft-catia", title:"Crankshaft — CATIA V5", tags:["CATIA V5","Part Design","CAD"], year:"2026", oneLiner:"A CATIA V5 crankshaft exercise focused on feature-based mechanical modeling.", contribution:"Practiced CATIA V5 sketching and part-modeling workflows on a mechanical component.", coverLabel:"CRANKSHAFT · CATIA V5", cover:{bg:"#F0EBFD",ink:"dark",mark:"CATIA V5"}, study:cadStudy("Crankshaft CATIA V5", "A CATIA V5 mechanical modeling exercise from the supplied CAD project collection.",[ {title:"Sketch the section",body:"Create the initial constrained geometry needed to establish the component form."},{title:"Build the part",body:"Develop the crankshaft using feature-based solid modeling tools in CATIA V5."},{title:"Review the model",body:"Check geometry and dimensions as part of the CAD learning workflow."}])},
  { slug:"cad-assembly", title:"Mechanical Assembly Practice", tags:["Assembly","SolidWorks","CAD"], year:"2026", oneLiner:"Assembly-focused CAD practice developed during mechanical design training.", contribution:"Applied assembly concepts to understand how individual modeled components are positioned and related in a larger mechanism.", coverLabel:"MECHANICAL ASSEMBLY", cover:{bg:"#111111",ink:"light",mark:"ASSEMBLY", src:"/images/projects/cad-assembly.png",variant:"photo"}, study:cadStudy("Assembly Practice", "Assembly modeling is included in the supplied CAD Desk project collection.",[ {title:"Prepare components",body:"Use individual component models as the building blocks of the assembly."},{title:"Define relationships",body:"Apply assembly constraints and positioning logic to bring components together."},{title:"Review the mechanism",body:"Inspect fit, placement and overall assembly structure."}])},
  { slug:"cad-components", title:"CAD Component Modeling Collection", tags:["CAD Desk","Drafting","SolidWorks","CATIA"], year:"2026", oneLiner:"A collection of mechanical CAD exercises including tank, butterfly and drafting models.", contribution:"Built a broader modeling portfolio through repeated practice across parts, assemblies and engineering drawings.", coverLabel:"CAD COMPONENTS", cover:{bg:"#FFFFFF",ink:"dark",mark:"CAD",src:"/images/projects/cad-components.png",variant:"photo"}, study:cadStudy("CAD Component Collection", "The supplied project archive includes tank, butterfly, assembly and drafting files created during CAD learning.",[ {title:"Explore different geometries",body:"Practice modeling components with different shapes, features and construction strategies."},{title:"Draft and document",body:"Extend CAD models into drafting exercises to strengthen engineering-documentation skills."},{title:"Repeat and improve",body:"Use multiple components to build speed, accuracy and confidence in CAD workflows."}])},
];
