import Card from "./Card";
import petalorn from "../assets/projects/petalorn.png";
import portScanner from "../assets/projects/portScanner.gif";
function Projects() {
  return (
    <>
      <div className="font-rubik py-2 text-2xl font-bold tracking-tight">
        Projects
      </div>
      <div className="grid grid-cols-1 gap-5 py-2.5 sm:grid-cols-2">
        <Card
          title="VSCode Extension TC Detection"
          dates="May 2026 - Present"
          githubUrl="https://github.com/cielbellerose/TechnicalCredit"
          color="blue"
          desc="VSCode extension that analyses Java code for Technical Credit, the positive counterpart to technical debt."
          heightClass="min-h-45"
        />
        <Card
          title="NER Rules Dashboard"
          dates="Sept 2025 - Present"
          githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
          color="blue"
          desc="Feature of a full-stack web application for Northeastern Electric Racing to parse, manage, and track rules compliance."
          heightClass="min-h-45"
        />
        <Card
          title="Network Port Scanner"
          dates="June 2025 - August 2025"
          githubUrl="https://github.com/cielbellerose/qt-port-scanner"
          color="blue"
          imageUrl={portScanner}
          imageAlt="Network Port Scanner"
          heightClass="min-h-72"
        />
        <Card
          title="3D FPS Unity Game"
          dates="June 2024 - August 2024"
          githubUrl="https://github.com/cielbellerose/Petalorn"
          color="blue"
          imageUrl={petalorn}
          imageAlt="Survival of Petalorn"
          heightClass="min-h-72"
        />
      </div>
    </>
  );
}

export default Projects;
