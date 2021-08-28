import * as React from "react";
import dtc_icon from "../images/DTC_ICON.png";
import sol_icon from "../images/SOL_ICON.png";

import Card from "./Card";

const Projects = () => {
  return (
    <div className="block-component projects">
      <h2 className="text-title">Previous Works</h2>
      <h3 className="text-subtitle">
        filler text, blah blahs, yes another filler text, here it is hahah wowo
        so good
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
              Web App that allowed influencers on the platform Twtich.tv to play
              charades with viewers in the chat. Was recived with great sucess
              by thousands of visiters and spectators.
            </p>
            <p className="mt-4">
              Open-source project; developed as mobile first mind-set. Made
              using JS, SASS, HTML, and Bootstrap Overrides
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
              Part of the orignal 4 person team; Now an Open-source project!
              Made using Unity with C#
            </p>
          </Card>
        </div>
      </div>
      {/* TODO: add more projects link*/}
    </div>
  );
};

export default Projects;
