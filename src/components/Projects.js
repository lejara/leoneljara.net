import * as React from "react";
import gameContext from "../context/gameContext";
import { Tab1, Tab2, Tab3 } from "./ProjectsTabs";
import SectionTitle from "./SectionTitle";
import useTransition from "./Utils/useTransition";
import Button from "./Utils/Button";

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
    <div className="min-h-screen">
      <SectionTitle title={"Previous Works"} adword="More to Come" />
      <div className="mr-24 flex flex-wrap gap-5 justify-end">
        {tabs.map((tabObj, index) => (
          <Button
            key={`tab-buttons-${index}`}
            selected={selectedIndex === index}
            className=""
            onClick={() => {
              onTabClick(index);
            }}
          >
            {tabObj.title}
          </Button>
        ))}
      </div>

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
