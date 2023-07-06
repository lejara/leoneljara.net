import * as React from "react";
import gameContext from "../context/gameContext";
import { Tab1, Tab2, Tab3 } from "./ProjectsTabs";
import { Tab } from "@headlessui/react";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const { won } = React.useContext(gameContext);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tabs = [
    { title: "Web", tab: Tab1 },
    { title: "Games", tab: Tab2 },
    { title: "Others", tab: Tab3 },
  ];

  const onTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className=" flex flex-col gap-12">
      <SectionTitle title={"Previous Works"} adword="Never Ending" />
      <Tab.Group onChange={(index) => onTabClick(index)}>
        <Tab.List className="text-2xl">
          {tabs.map((tabObj, index) => (
            <Tab as={React.Fragment} key={`tab-${index}`}>
              <button
                key={`tab-buttons-${index}`}
                className={`px-3 py-1  mx-3 mb-2  ${
                  selectedIndex === index
                    ? "bg-LJ_LightBlue text-black"
                    : "bg-LJ_Green hover:bg-LJ_LightBlue text-black"
                }`}
              >
                {tabObj.title}
              </button>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="max-w-7xl mx-auto">
          {tabs.map((tabObj, index) => (
            <Tab.Panel
              key={`tab-panel-${index}`}
              className="w-full flex flex-col lg:flex-row justify-center items-center gap-y-10"
            >
              {tabObj.tab()}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Projects;
