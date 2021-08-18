import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import GitHubIcon from "../images/svg/github.svg";
const About = () => {
  return (
    <div className="block-component">
      <div className="about__wrapper">
        <div className="about__text p-2">
          something about me, this is filler text. so yeah this is something
          about me, this is filler text. something about me, this is filler
          text. Hi something about me, this is filler text. No way He can do
          that? Yes, yes he can. The end, now you know everything!
        </div>
        <div className="about__image p-2">img</div>
        <div className="about__socials p-2">
          <a href="https://twitter.com/Leption_LJ"></a>
          <a href="https://github.com/lejara"></a>
          <GitHubIcon className="about__socials--github" />
        </div>
      </div>
    </div>
  );
};

export default About;
