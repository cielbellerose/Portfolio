import Card from "../Card/Card";
import petalorn from "../../assets/projects/petalorn.png";
import portScanner from "../../assets/projects/portScanner.gif";
function Projects() {
  return (
    <>
      <div className="py-2 text-lg font-bold">Projects</div>
      <div className="outline-debug-border grid grid-cols-2 gap-5 py-2.5 outline-1 outline-dashed">
        <Card
          title="VSCode Extension Technical Credit"
          dates="May 2026 - Present"
          githubUrl="https://github.com/cielbellerose/TechnicalCredit"
          color="blue"
          desc="VSCode extension that analyses Java code for Technical Credit, the positive counterpart to technical debt."
          heightClass="h-40 min-h-40"
        />
        <Card
          title="NER Rules Dashboard"
          dates="Sept 2025 - Present"
          githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
          color="blue"
          desc="Feature of a full-stack web application for Northeastern Electric Racing to manage and track rules compliance."
          heightClass="h-40 min-h-40"
        />
        <Card
          title="Network Port Scanner"
          dates="June 2025 - August 2025"
          githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
          color="blue"
          imageUrl={portScanner}
          imageAlt="Network Port Scanner"
          heightClass="h-70 min-h-70"
        />
        <Card
          title="Survival of Petalorn"
          dates="June 2024 - August 2024"
          githubUrl="https://github.com/cielbellerose/Petalorn"
          color="blue"
          imageUrl={petalorn}
          imageAlt="Survival of Petalorn"
          heightClass="h-70 min-h-70"
        />
      </div>
    </>
  );
}

export default Projects;
