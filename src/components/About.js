import * as React from "react";
import GitHubIcon from "../images/svg/github.svg";
import TwitterIcon from "../images/svg/twitter.svg";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <div className="block-component my-12">
      <div className="about__grid">
        <div className="about__text p-2">
          something about me, this is filler text. so yeah this is something
          about me, this is filler text. something about me, this is filler
          text. Hi something about me, this is filler text. No way He can do
          that? Yes, yes he can. The end, now you know everything!
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
            <a href="https://twitter.com/Leption_LJ">
              <TwitterIcon />
            </a>
            <a href="https://github.com/lejara">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
