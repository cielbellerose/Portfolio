import Card from "./Card";

function Education() {
  return (
    <>
      <div className="mt-1 grid grid-cols-2 gap-5 py-2.5">
        <Card
          title="Sydney Dialogue"
          dates="May 2026 - June 2026"
          desc="CS4540 Foundations of Software Engineering and CS5610 Capstone"
          color="green"
          heightClass="h-32 min-h-32"
        />
        <Card
          title="London Study Abroad"
          dates="January 2024 - April 2024"
          desc="Northeastern Global Scholars"
          color="green"
          heightClass="h-32 min-h-32"
        />
      </div>
    </>
  );
}

export default Education;
