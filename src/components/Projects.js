import * as React from "react";
import gameContext from "../context/gameContext";
import { Tab1, Tab2, Tab3 } from "./ProjectsTabs";
import SectionTitle from "./SectionTitle";
import useTransition from "./Utils/useTransition";

const Projects = () => {
  const { won } = React.useContext(gameContext);
  const [transitioning, start] = useTransition(100);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tabs = [
    { title: "Web", tab: Tab1 },
    { title: "Games", tab: Tab2 },
    { title: "Others", tab: Tab3 },
  ];

  const onTabClick = (index) => {
    start();
    setSelectedIndex(index);
  };

  return (
    <div className="">
      <SectionTitle title={"Previous Works"} adword="Never Ending" />
      {tabs.map((tabObj, index) => (
        <button
          key={`tab-buttons-${index}`}
          className={`px-3 py-1  mx-3 mb-2  ${
            selectedIndex === index
              ? "bg-LJ_LightBlue text-black"
              : "bg-LJ_Green hover:bg-LJ_LightBlue text-black"
          }`}
          onClick={() => {
            onTabClick(index);
          }}
        >
          {tabObj.title}
        </button>
      ))}

      <div
        key={`${selectedIndex}`}
        className="w-full flex flex-col lg:flex-row justify-center items-center gap-y-10"
      >
        {tabs[selectedIndex].tab(transitioning)}
      </div>
    </div>
  );
};

export default Projects;
