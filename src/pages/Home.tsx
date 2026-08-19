import { GitHubIcon, LinkedInIcon } from "../assets/Icons.tsx";
import Experiences from "../components/Experiences.tsx";
import Projects from "../components/Projects.tsx";
// import Education from "../components/Education/Education.tsx";
import Skillset from "../components/Skillset.tsx";
import Timezone from "../components/Timezone.tsx";

function Home() {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-stretch lg:flex-row">
        <div className="w-full lg:flex-[3] lg:pr-5">
          <Experiences />
          <Projects />
          {/* <Education /> */}
        </div>
        <aside className="w-full overflow-hidden lg:flex-1">
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
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
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
          </div>
        </aside>
      </div>
    </>
  );
}

export default Home;
