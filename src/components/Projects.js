import * as React from "react";
import dtc_icon from "../images/DTC_ICON.png";
import sol_icon from "../images/SOL_ICON.png";
import ScrollAnimation from "react-animate-on-scroll";
import gameContext from "../context/gameContext";

import Card from "./Card";

const Projects = () => {
  const { won } = React.useContext(gameContext);

  return (
    <div className="block-component projects">
      <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
        <h2 className="text-title">Previous Works</h2>
        <h3 className="text-subtitle">
          Leonel believes that by giving the time and effort a person can
          achieve their goals.
        </h3>
        <div className="works__grid py-10">
          <div className="works__item--1">
            <Card
              title="Da Twitch Charades"
              image_src={dtc_icon}
              image_alt="Logo of Twitch Charades"
              link="https://datwitchcharades.page/"
            >
              <p>
                Web App that allowed streamers on the platform Twtich.tv to play
                charades with viewers in the chat. Was recived with great sucess
                by thousands of visiters and spectators.
              </p>
              <p className="mt-4">
                Open-source project; developed as mobile first mind-set. Made
                using basic JS, CSS, HTML, with a bit of SASS and Bootstrap.
              </p>
            </Card>
          </div>
          <div className="works__item--2">
            <Card
              title="Solitary"
              image_src={sol_icon}
              image_alt="Logo of Solitary"
              link="https://github.com/PopeSpaceous/Solitary"
            >
              <p>
                Devloped and designed the backend of the 2D Puzzle Platformer
                Solitary. Players must slove a series of puzzles through out a
                level in order to escape the decaying ship.
              </p>
              <p className="mt-4">
                An Open-source project. Made using Unity with C#
              </p>
            </Card>
          </div>
        </div>
        <div className="works__more-link">
          <a
            className={`link-primary ${won ? "visible" : "invisible"}`}
            href="https://github.com/users/lejara/projects/2"
          >
            More Projects →
          </a>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;
