import * as React from "react";
import dtc_icon from "../images/DTC_ICON.png";

import Card from "./Card";

const Projects = () => {
  return (
    <div className="block-component">
      <h2 className="text-title">Previous Works</h2>
      <h3 className="text-subtitle">
        filler text, blah blahs, yes another filler text, here it is hahah wowo
        so good
      </h3>
      <div className="works__grid pt-16">
        <div className="works__item--1">
          <Card
            title="Da Twitch Charades"
            image_src={dtc_icon}
            image_alt="Picture of Test"
          >
            Content in card 1
          </Card>
        </div>
        <div className="works__item--2">
          <Card title="Sol" image_src={dtc_icon} image_alt="Picture of Test" />
        </div>
      </div>
      {/* TODO: add more projects link*/}
    </div>
  );
};

export default Projects;
