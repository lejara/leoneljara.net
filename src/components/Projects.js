import * as React from "react";

import Card from "./Card";

const Projects = () => {
  return (
    <div className="block-component">
      <h2 className="text-title">Previous Works</h2>
      <h3 className="text-subtitle">
        filler text, blah blahs, yes another filler text, here it is hahah wowo
        so good
      </h3>
      <div className="works__grid my-6">
        <Card styleName="works__item--1" image_alt="Picture of Test" />
        <Card styleName="works__item--2" image_alt="Picture of Test" />
      </div>
      {/* TODO: add more projects link */}
    </div>
  );
};

export default Projects;
