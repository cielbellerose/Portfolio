import { GitHubIcon, LinkedInIcon } from "../assets/Icons.tsx";
import Card from "../components/Card/Card.tsx";
import Skillset from "../components/Skillset/Skillset.tsx";
import Timezone from "../components/Timezone/Timezone.tsx";

function Home() {
  return (
    <>
      <div className="flex w-full flex-1 items-stretch">
        <div className="outline-debug-border flex-[3] outline-1 outline-dashed">
          <div>Experiences</div>
          <div className="outline-debug-border grid grid-cols-1 gap-5 p-2.5 outline-1 outline-dashed sm:grid-cols-2 lg:grid-cols-3">
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
          <div>Projects</div>
          <div className="outline-debug-border grid grid-cols-1 gap-5 p-2.5 outline-1 outline-dashed sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Network Port Scanner"
              dates="June - August 2025"
              githubUrl="https://github.com/Northeastern-Electric-Racing/FinishLine"
              tags={["TypeScript", "Prisma", "React"]}
            />
          </div>
          <div className="outline-debug-border grid grid-cols-1 gap-5 p-2.5 outline-1 outline-dashed sm:grid-cols-2 lg:grid-cols-3">
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
        <aside className="outline-debug-border flex-1 overflow-hidden outline-1 outline-dashed">
          <Timezone />
          <div className="text-purple h-10 w-10 transition-all duration-200 hover:scale-105">
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
          <div className="text-purple h-10 w-10 transition-all duration-200 hover:scale-105">
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
