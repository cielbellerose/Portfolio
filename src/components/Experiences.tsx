import Card from "./Card";

function Experiences() {
  return (
    <>
      <div className="font-rubik py-2 text-2xl font-bold tracking-tight">
        Experiences
      </div>
      <div className="grid grid-cols-2 gap-5 py-2.5">
        <Card
          title="Northeastern Electric Racing"
          subtitle="Tech Lead and Software Developer"
          dates="November 2024 - Present"
          desc="Full-stack web developer and tech lead for rules dashboard."
          githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
          heightClass="h-45 min-h-45"
        />
        <Card
          title="ERGO Next Insurance"
          subtitle="Backend Engineer Co-op"
          dates="January 2026 - May 2026"
          desc="Developed features for the TREX Team for direct bill PAYGO insurance policies."
          heightClass="h-45 min-h-45"
        />
      </div>
    </>
  );
}

export default Experiences;
