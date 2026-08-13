import Card from "../Card/Card";

function Experiences() {
  return (
    <>
      <div className="py-2 text-lg font-bold">Experiences</div>
      <div className="outline-debug-border grid grid-cols-2 gap-5 py-2.5 outline-1 outline-dashed">
        <Card
          title="Northeastern Electric Racing"
          subtitle="Tech Lead and Software Developer"
          dates="November 2024 - Present"
          desc="Full-stack web developer and tech lead for rules dashboard."
          githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
          heightClass="h-40 min-h-40"
        />
        <Card
          title="ERGO Next Insurance"
          subtitle="Backend Engineer Co-op"
          dates="January - May 2026"
          desc="Developed features for the TREX Team for direct bill PAYGO insurance policies."
          heightClass="h-40 min-h-40"
        />
      </div>
    </>
  );
}

export default Experiences;
