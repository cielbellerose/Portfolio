import Card from "./Card";

function Education() {
  return (
    <>
      <div className="mt-1 grid grid-cols-1 gap-5 py-2.5 sm:grid-cols-2">
        <Card
          title="Sydney Dialogue"
          dates="May 2026 - June 2026"
          desc="CS4540 Foundations of Software Engineering and CS5610 Capstone"
          color="green"
          heightClass="min-h-32"
        />
        <Card
          title="London Study Abroad"
          dates="January 2024 - April 2024"
          desc="Northeastern Global Scholars"
          color="green"
          heightClass="min-h-32"
        />
      </div>
    </>
  );
}

export default Education;
