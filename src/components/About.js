import * as React from "react";
import GitHubIcon from "../images/svg/github.inline.svg";
import TwitterIcon from "../images/svg/twitter.inline.svg";

const About = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="text-3xl px-5 max-w-3xl">
              true meaning is desgin arc. 3 desgin engineearing princeables.
              testing, moduldary, keeping it simple
              <p>
                Web and Game Development are my biggest passion. Always trying
                to push my technical and soft skills further. I excel in
                self-motivation, good work ethic and teamwork.
              </p>
              <p className="mt-5">
                Here you will find here some projects I took part in or made.
                There will be many more to come.
              </p>
              <p className="mt-5 text-base opacity-80">
                Also Known As: Leption, Lejara
              </p>
            </div>
            <div className="p-2">
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
