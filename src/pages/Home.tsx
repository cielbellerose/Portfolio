import Card from "../components/Card/Card.tsx";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styles["columns"]}>
        <div className={styles["content"]}>
          <div className="section-title">Experiences</div>
          <div className={styles["cards-container"]}>
            <Card
              title="Northeastern Electric Racing"
              subtitle="Tech Lead and Software Developer"
              dates="November 2024 - Present"
              desc="Full-stack web developer and tech lead for a rules dashboard."
              githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
              tags={["TypeScript", "Prisma", "React"]}
              logoUrl="ner.png"
              logoAlt="NER logo"
            />
            <Card
              title="ERGO Next Insurance"
              subtitle="Backend Engineer Co-op"
              dates="January - May 2026"
              desc="Developed features for the TREX Team for direct bill PAYGO insurance policies."
              tags={["Java", "Kotlin", "Cursor"]}
            />
          </div>
          <div className="section-title">Projects</div>
          <div className={styles["cards-container"]}>
            <Card
              title="Network Port Scanner"
              dates="June - August 2025"
              desc="Full-stack web developer and tech lead for a rules dashboard."
              githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
              tags={["TypeScript", "Prisma", "React"]}
            />
          </div>
        </div>
        <aside className={styles["sidebar"]}>
          {/* timezone, links, skills ... */}
        </aside>
      </div>
    </>
  );
}

export default Home;
