import * as React from "react";
import GitHubIcon from "../images/svg/github.inline.svg";
import TwitterIcon from "../images/svg/twitter.inline.svg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="text-3xl p-2 max-w-3xl about__text">
              <p>
                Web and Game Development are my biggest passion. Always trying
                to push my technical and soft skills further. I excel in
                self-motivation, good work ethic, teamwork and leadership
              </p>

              <p className="mt-5">
                Here you will find here some of my project that I am willing to
                make public. There will be many more to come.
              </p>

              <p className="mt-5 text-base opacity-80">
                Also Known on the Internet: Leption, Lejara
              </p>
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
        </div>
      </div>
    </>
  );
};

export default About;
