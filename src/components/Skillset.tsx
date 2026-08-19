export interface SkillsetProps {
  title: string;
  skills: string[];
}

const Skillset: React.FC<SkillsetProps> = ({ title, skills }) => {
  return (
    <div className="rounded-card my-6 border-4 border-neutral-600 p-2.5 dark:border-neutral-400">
      <div className="font-rubik text-base font-semibold">{title}</div>
      <div className="my-2 grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-purple rounded-chip px-2 py-1 text-left text-sm text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
