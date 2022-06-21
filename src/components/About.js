import * as React from "react";
import GitHubIcon from "../images/svg/github.svg";
import TwitterIcon from "../images/svg/twitter.svg";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <>
      <div className="block-component about">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="text-3xl p-2 max-w-3xl about__text">
              Leonel Jara a web developer, born and raised in Toronto. From
              humble beginnings in creating 2D sprite games, to contributing
              code around the world. He is passionate and enjoys every moment in
              the web development scene. Always trying to learn the best
              practices in code structure, documentation, UI/UX design,
              accessibility, and many more too this day.
            </div>
            <div className="about__socials p-2">
              <p className="text-center text-lg">Socials</p>
              <div className="flex justify-center mt-1">
                <a
                  aria-label="Follow me on twitter (goes to the twitter website)"
                  href="https://twitter.com/Leption_LJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
                <a
                  aria-label="Follow me on github (goes to the github website)"
                  href="https://github.com/lejara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="about__image">
              <StaticImage
                src="../images/leo_1.jpg"
                alt="Picture of leonel"
                height={380}
                width={330}
              />
            </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
