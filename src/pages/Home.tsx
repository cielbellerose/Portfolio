import { GitHubIcon, LinkedInIcon } from "../assets/Icons.tsx";
import Card from "../components/Card/Card.tsx";
import Skillset from "../components/Skillset/Skillset.tsx";
import Timezone from "../components/Timezone/Timezone.tsx";
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
              githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
              tags={["TypeScript", "Prisma", "React"]}
            />
          </div>
          <div className={styles["cards-container"]}>
            <Card
              title="Sydney Study Abroad"
              dates="May - June 2026"
              desc="CS4540 Foundations of Software Engineering and CS5610 Advanced SWE Capstone"
              tags={["TypeScript", "Prisma", "React"]}
            />
            <Card
              title="London Study Abroad"
              dates="January - April 2024"
              desc="Global Scholars"
              tags={["TypeScript", "Prisma", "React"]}
            />
          </div>
        </div>
        <aside className={styles["sidebar"]}>
          <Timezone />
          <div className={styles["github"]}>
            <a
              href="https://github.com/cielbellerose"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon />
            </a>
          </div>
          <div className={styles["github"]}>
            <a
              href="https://github.com/cielbellerose"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <LinkedInIcon />
            </a>
          </div>
          <Skillset
            title="Languages"
            skills={["TypeScript", "Java", "Kotlin", "Python"]}
          />
          <Skillset title="Frontend" skills={["React", "Next.js"]} />
          <Skillset
            title="Backend"
            skills={["Express", "Node.js", "Prisma", "PostGRES"]}
          />
          <Skillset title="Dev Tools" skills={["Postman", "Vercel"]} />
        </aside>
      </div>
    </>
  );
}

export default Home;
