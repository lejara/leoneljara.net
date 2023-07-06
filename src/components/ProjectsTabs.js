import * as React from "react";
import { Transition } from "@headlessui/react";
import dtc_icon from "../images/DTC_ICON.png";
import sol_icon from "../images/SOL_ICON.png";
import botc_icon from "../images/BOTC_ICON.png";
import Card from "./Card";

const webCards = [
  {
    title: "Da Stream Charades",
    body: () => (
      <>
        <p>
          Allows streamers on Twtich.tv to play charades with viewers in their
          chat. Was recived with great sucess by thousands of visitors and
          spectators.
        </p>
        <p className="mt-4">Made with React and Twitch API.</p>
      </>
    ),
    image: dtc_icon,
    link: "https://dastreamcharades.net/",
  },
  {
    title: "Battle Of The Chat",
    body: () => (
      <>
        <p>
          Guessing game with gimmicks for finding the answer. Players guess in a
          livestream and have 6 options to choose from. The fastest correct gets
          a higher score.
        </p>
        <p className="mt-4">
          Made with React, Twitch API and ThreeJS. Uses a pre-trained AI model
          tools to pick options
        </p>
      </>
    ),
    image: botc_icon,
    link: "https://battleofthechat.net/",
  },
  {
    title: "Contributions",
    body: () => {
      const links = [
        { name: "gecko-dev", link: "https://github.com/mozilla/gecko-dev" },
        { name: "Blé", link: "https://github.com/getkey/ble" },
        {
          name: "foundation.mozilla",
          link: "https://github.com/mozilla/foundation.mozilla.org",
        },
        {
          name: "Lightning Browser Extension",
          link: "https://github.com/getAlby/lightning-browser-extension",
        },
        { name: "CadHub", link: "https://github.com/Irev-Dev/cadhub" },
        {
          name: "Elastic UI Framework",
          link: "https://github.com/elastic/eui",
        },
      ];
      return listLinks(links);
    },
    image: null,
    link: null,
  },
];

const gameCards = [
  {
    title: "Solitary",
    body: () => (
      <>
        <p>
          Devloped and designed the backend of the 2D Puzzle Platformer
          Solitary. Players must slove a series of puzzles through out a level
          in order to escape the decaying ship.
        </p>
        <p className="mt-4">An Open-source project. Made using Unity with C#</p>
      </>
    ),
    image: sol_icon,
    link: "https://leption.itch.io/solitary",
  },
  {
    title: "Gun Over",
    body: () => (
      <>
        <p>
          Small Top Down Shooter. Player must kill a certain ammount of enemies
          to clear the level before timer runs out
        </p>
        <p className="mt-4">Made in Unreal Engine 4 with Blueprints</p>
      </>
    ),
    image: null,
    link: "https://leption.itch.io/gunover",
  },
  {
    title: "Other Games",
    body: () => {
      const links = [
        {
          name: "KeepGettingRings",
          link: "https://github.com/lejara/KeepGettingRings",
        },
        {
          name: " Da Group Hardcore",
          link: "https://www.spigotmc.org/resources/dagrouphardcore.72389/",
        },
        {
          name: "Floater",
          link: "https://github.com/lejara/Floater",
        },
      ];

      return listLinks(links);
    },
    image: null,
    link: "",
  },
];

const otherCards = [
  {
    title: "Others",
    body: () => {
      const links = [
        {
          name: "SupBot",
          link: "https://github.com/lejara/SupBot",
        },
        {
          name: "Basement Butler Bot",
          link: "https://github.com/lejara/BasementButlerBot",
        },
      ];

      return listLinks(links);
    },
    image: null,
    link: null,
  },
];
const listLinks = (links) => {
  return links.map((obj, index) => (
    <a
      key={`name-${obj.name}-${index}`}
      className="link-primary text-xl block my-2"
      href={obj.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-white">-</span>
      <span> {obj.name}</span>
    </a>
  ));
};
const listCards = (list) => {
  const delayMap = ["delay-100", "delay-200", "delay-300"];
  return list.map((data, index) => (
    <Transition
      key={`card-${index}`}
      appear={true}
      show={true}
      enter={`transition-all ease-in ${delayMap[index]} duration-300`}
      enterFrom="opacity-0 transform -translate-x-60"
      enterTo="opacity-100"
      // leave="transition-opacity duration-700"
      // leaveFrom="opacity-100"
      // leaveTo="opacity-0"
    >
      <Card
        title={data.title}
        image_src={data.image}
        image_alt={`Logo  of ${data.title}`}
        link={data.link}
      >
        {data.body()}
      </Card>
    </Transition>
  ));
};

const Tab1 = () => {
  return listCards(webCards);
};

const Tab2 = () => {
  return listCards(gameCards);
};

const Tab3 = () => {
  return listCards(otherCards);
};

export { Tab1, Tab2, Tab3 };
