import * as React from "react";
import GitHubIcon from "../images/svg/github.svg";
import TwitterIcon from "../images/svg/twitter.svg";
import { StaticImage } from "gatsby-plugin-image";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <>
      <div className="block-component about">
        <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
          <div className="about__grid">
            <div className="about__text p-2 mx-5">
              Leonel Jara a web developer, born and raised in Toronto. From
              humble beginnings in creating 2D sprite games, to contributing code around the world. He is passionate and enjoys every moment in the web development scene. 
              Always trying to learn the best practices in code structure,
              documentation, UI/UX design, accessibility, and many more
              too this day.
            </div>
            {/* <div className="about__image">
              <StaticImage
                src="../images/leo_1.jpg"
                alt="Picture of leonel"
                height={380}
                width={330}
              />
            </div> */}
            <div className="about__socials p-2">
              <p className="about__socials--title">Socials!~</p>
              <div className="about__socials--flex mt-1">
                <a
                  aria-label="Follow me on twitter (goes to the twitter website)"
                  href="https://twitter.com/Leption_LJ"
                >
                  <TwitterIcon />
                </a>
                <a
                  aria-label="Follow me on github (goes to the github website)"
                  href="https://github.com/lejara"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default About;
