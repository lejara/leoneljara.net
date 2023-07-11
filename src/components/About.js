import * as React from "react";
import GitHubIcon from "../images/svg/github.inline.svg";
import TwitterIcon from "../images/svg/twitter.inline.svg";

const About = () => {
  const socials = [
    {
      image: <TwitterIcon width="45px" height="45px" />,
      link: "https://twitter.com/Leption_LJ",
      name: "twitter",
    },
    {
      image: <GitHubIcon width="45px" height="45px" />,
      link: "https://github.com/lejara",
      name: "github",
    },
  ];

  return (
    <div className="h-200 md:h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className=" text-lg md:text-3xl px-5 max-w-3xl">
          <h3 className="text-center text-4xl mb-10">Hello, 👋</h3>
          <p>Web Development is my biggest passion for 3 years now!</p>
          <p className="mt-5">
            Before I casually coded games for fun. I love creating things that
            others enjoy. Always trying to push my technical and soft skills
            further.
          </p>
          <p className="mt-5">
            Here you will find here some projects I took part in or made.
          </p>
          <p className="mt-5 text-base opacity-80">
            Alt Names: Leption, Lejara
          </p>
        </div>
        <div className="p-2">
          <p className="text-center text-lg">Socials</p>
          <div className="flex justify-center mt-1 gap-4">
            {socials.map((s, index) => (
              <a
                key={`soc-${index}`}
                aria-label={`Follow me on ${s.name} (goes to the ${s.name} website)`}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.image}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
