import profile_pic from "../assets/profile1.png";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto py-10 md:py-12" id="about">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-10 md:pb-8">
        About Me
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <img
          className="w-full h-75 object-cover rounded-lg mb-4 md:mb-0"
          src={profile_pic}
          alt="profile picture"
        />

        <div className="col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6">
          <p className="text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6">
            {ABOUT_ME.introduction} {ABOUT_ME.background}
          </p>

          <p className="text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6">
            {ABOUT_ME.skills} <br />
            {ABOUT_ME.projects}
            <br />
            {ABOUT_ME.careerGoals} <br />
            {ABOUT_ME.interests}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <InfoCard
          count={ABOUT_ME.stats.yearsOfExperience}
          label="Years of Experience"
        />

        <InfoCard
          count={ABOUT_ME.stats.numberOfProjects}
          label="Projects Completed Successfully"
        />

        <InfoCard
          count={ABOUT_ME.stats.certificationsEarned}
          label="Certifications Earned"
        />
      </div>
    </section>
  );
};

const InfoCard = ({ label, count }) => {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 px-4 md:px-6 py-3">
      <h6 className="text-primary text-xl md:text-2xl font-semibold">
        {count}
      </h6>

      <span className="text-blue-300 text-xs md:text-sm font-normal">
        {label}
      </span>
    </div>
  );
};

export default AboutMe;
