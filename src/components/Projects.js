import * as React from "react";
import gameContext from "../context/gameContext";
import { Tab1, Tab2, Tab3 } from "./ProjectsTabs";

const Projects = () => {
  const { won } = React.useContext(gameContext);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tabs = [
    { title: "Web Development", tab: Tab1 },
    { title: "Games", tab: Tab2 },
    { title: "Others", tab: Tab3 },
  ];

  const onTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="block-component">
      <h2 className="text-title">Previous Works</h2>
      <h3 className="text-subtitle">If theres a will, theres a way.</h3>
      <div className="text-center text-xl mt-2">
        {tabs.map((tabObj, index) => (
          <button
            key={`tab-buttons-${index}`}
            onClick={() => {
              onTabClick(index);
            }}
            className={`px-3 py-1  mx-3  ${
              selectedIndex === index
                ? "bg-LJ_LightBlue text-black"
                : "bg-LG_Green hover:bg-LJ_LightBlue hover:text-black"
            }`}
          >
            {tabObj.title}
          </button>
        ))}
      </div>

      <div className="flex-col flex lg:flex-row justify-center items-center max-w-7xl mx-auto py-10 gap-y-10">
        {tabs[selectedIndex].tab()}
      </div>
      <div className="">
        <a
          className={`link-primary ${won ? "visible" : "invisible"}`}
          href="https://github.com/users/lejara/projects/2"
        >
          More Projects →
        </a>
      </div>
    </div>
  );
};

export default Projects;
