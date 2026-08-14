import { GitHubIcon, LinkedInIcon } from "../assets/Icons.tsx";
import Experiences from "../components/Experiences/Experiences.tsx";
import Projects from "../components/Projects/Projects.tsx";
import Education from "../components/Education/Education.tsx";
import Skillset from "../components/Skillset/Skillset.tsx";
import Timezone from "../components/Timezone/Timezone.tsx";

function Home() {
  return (
    <>
      <div className="flex w-full flex-1 items-stretch">
        <div className="outline-debug-border flex-[3] pr-5 outline-1 outline-dashed">
          <Experiences />
          <Projects />
          <Education />
        </div>
        <aside className="outline-debug-border flex-1 overflow-hidden outline-1 outline-dashed">
          <Timezone />
          <div className="flex justify-center gap-6">
            <div className="text h-12 w-12 transition-all duration-200 hover:scale-105">
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
            <div className="text h-12 w-12 transition-all duration-200 hover:scale-105">
              <a
                href="https://www.linkedin.com/in/kinsey-bellerose/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <Skillset
            title="Languages"
            skills={["TypeScript", "Java", "Kotlin", "Python"]}
          />
          <Skillset
            title="Frontend"
            skills={["React", "Next.js", "Tailwind", "Bootstrap"]}
          />
          <Skillset
            title="Backend"
            skills={["Express", "Node.js", "Prisma", "Postgres"]}
          />
          <Skillset title="Dev Tools" skills={["Postman", "Vercel"]} />
        </aside>
      </div>
    </>
  );
}

export default Home;
