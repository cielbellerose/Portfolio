import Card from "../Card/Card";

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
        />
        <Card
          title="NER Rules Dashboard"
          dates="Sept 2025 - Present"
          githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
          color="blue"
        />
        <Card
          title="Network Port Scanner"
          dates="June 2025 - August 2025"
          githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
          color="blue"
        />
        <Card
          title="Survival of Petalorn"
          dates="June 2024 - August 2024"
          color="blue"
        />
      </div>
    </>
  );
}

export default Projects;
