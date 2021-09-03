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
            <div className="about__text p-2">
              (Leo)nel Jara a web developer. Born and raised in Toronto. From
              humble beginnings in creating small 2D sprite games, and off shoot
              projects, to contributing code for Mozilla. It wasn’t until Da
              Twitch Charades project where he found his passion in web
              development. Since then, he have deep dived into the front end
              world. Learning the best practices in code structure,
              documentation, UI/UX design, accessibility, and many more still
              too this day.
            </div>
            <div className="about__image p-2">
              <StaticImage
                src="../images/pic_leo.jpg"
                alt="Picture of leonel"
                height={330}
                width={330}
              />
            </div>
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
