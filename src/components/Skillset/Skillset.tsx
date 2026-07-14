import styles from "./Skillset.module.css";

export interface SkillsetProps {
  title: string;
  skills: string[];
}

const Skillset: React.FC<SkillsetProps> = ({ title, skills }) => {
  return (
    <>
      <div className={styles["skillset-container"]}>
        <div className={styles["skillset-title"]}>{title}</div>
        {skills}
      </div>
    </>
  );
};

export default Skillset;
