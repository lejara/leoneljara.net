import * as React from "react";
import Star from "../images/svg/star-solid.svg";
import SectionTitle from "./SectionTitle";

const programmingLangs = [
  () => SkillWithStars("Javascript / TypeScript", 5),
  () => SkillWithStars("C#", 5),
  () => SkillWithStars("Python", 4),
  () => SkillWithStars("C/C++", 3),
  () => SkillWithStars("Bash", 3),
  () => SkillWithStars("Java", 2),
];

const notableSKills = [
  "NodeJS",
  "Unity",
  "UnrealEngine",
  "MongoDB/MySQL",
  "Docker",
  "React",
  "Dev Ops and CI",
  "ThreeJS/BabylonJS",
  "Git",
  "Google Analytics/Tags",
  "AWS EC2 Instances",
  "Blender",
  "Substance Designer / Painter",
  "Web Accessibility",
  "SEO",
  "3D Modeling and Sculpting",
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen">
      <SectionTitle
        title={"Technical Skills"}
        adword="Always Expanding"
        right={true}
      />

      <div className="flex flex-col xl:flex-row w-full justify-around mt-24 ">
        <div className="w-full xl:w-1/2">
          <h4 className="text-4xl text-center mb-8">Programming Languages</h4>
          <div className="px-5 md:px-32">
            {programmingLangs.map((jsx, i) => (
              <React.Fragment key={`lang-${i}`}>{jsx()}</React.Fragment>
            ))}
          </div>
        </div>

        <div className="w-full xl:w-1/2 mt-5  sm:mt-0">
          <h4 className="text-4xl text-center mb-8">Notable Skills</h4>

          <div className="flex flex-wrap flex-col sm:flex-row sm:justify-between items-end px-5 md:px-32">
            {notableSKills.map((note_skill, i) => (
              <span
                className={`w-full sm:w-1/2 flex justify-center mb-2 ${
                  i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
                key={`notableskills-${i}`}
              >
                <span className="max-w-lg text-lg md:text-2xl">
                  {note_skill}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillWithStars = (title, num_stars) => {
  return (
    <div className="flex items-center justify-between gap-y-10 mb-2">
      <span className="text-lg md:text-3xl">{title}</span>
      <span className="flex">
        {[...Array(num_stars)].map((x, i) => (
          <span key={`starts-${i}`}>
            <img className="max-w-none" src={Star} width="20" height={"20"} />
          </span>
        ))}
      </span>
    </div>
  );
};

export default Skills;
