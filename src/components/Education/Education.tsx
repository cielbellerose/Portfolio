import Card from "../Card/Card";

function Education() {
  return (
    <>
      <div className="outline-debug-border mb-10 grid grid-cols-2 gap-5 py-2.5 pt-10 outline-1 outline-dashed">
        <Card
          title="Sydney Dialogue"
          dates="May - June 2026"
          desc="CS4540 Foundations of Software Engineering and CS5610 Capstone"
          color="green"
          heightClass="h-30 min-h-30"
        />
        <Card
          title="London Study Abroad"
          dates="January - April 2024"
          desc="Northeastern Global Scholars"
          color="green"
          heightClass="h-30 min-h-30"
        />
      </div>
    </>
  );
}

export default Education;
