import { SKILLS } from "../utils/data";

const Skills = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto pb-20" id="skills">
      <h5 className="text-primary text-2xl md:text-3xl font-semibold text-center  pb-14 md:pb-4">
        Skills
      </h5>
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
        <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SKILLS.map((skill) => (
            <SkillsCard
              key={skill.id}
              icon={skill.icon}
              iconProps={skill.iconProps}
              title={skill.title}
              expertise={skill.expertise}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCard = ({ icon: Icon, iconProps, title, expertise }) => {
  return (
    <div className="bg-slate-900 rounded border border-blue-900 p-3">
      <div className="flex items-center justify-between mb-5">
        <p className="text-base">{title}</p>
        <Icon className="text-primary text-3xl" />
      </div>
      <p className="text-xs font-light leading-2 opacity-80">{`Expertise: ${expertise}`}</p>
    </div>
  );
};

export default Skills;
