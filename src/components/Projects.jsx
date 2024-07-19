import { PROJECTS } from "../utils/data";

const Projects = () => {
  return (
    <section id="projects" className="max-w-screen-xl px-6 mx-auto pb-20">
      <h5 className="text-primary text-2xl md:text-3xl font-semibold text-center pb-14 md:pb-4">
        Projects
      </h5>
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
          {PROJECTS.map((project) => (
            <SkillsCard
              key={project.id}
              image={project.image}
              projectName={project.projectName}
              techStack={project.techStack}
              description={project.description}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCard = ({
  image,
  projectName,
  techStack,
  description,
  githubLink,
}) => {
  return (
    <div className="bg-slate-900 rounded border border-blue-900 p-3">
      <div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <div className="relative h-60 overflow-hidden rounded">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={image}
              alt="Project Photo"
            />
          </div>

          <p className="text-white text-[14px] md:text-base font-medium mt-3 leading-4 md:leading-5">
            {projectName}
          </p>
          <p className="text-blue-400 text-xs mt-1">{techStack}</p>
          <p className="text-blue-50 text-xs font-normal mt-1">{description}</p>
        </a>
      </div>
      <div className="mt-4">
        <a href={githubLink} target="_blank">
          <button className="primary-btn"> Github</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
