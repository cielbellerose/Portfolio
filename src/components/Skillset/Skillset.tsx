export interface SkillsetProps {
  title: string;
  skills: string[];
}

const Skillset: React.FC<SkillsetProps> = ({ title, skills }) => {
  return (
    <>
      <div className="outline-debug-border my-5 p-[5px] outline-1 outline-dashed">
        <div className="font-semibold">{title}</div>
        {skills}
      </div>
    </>
  );
};

export default Skillset;
