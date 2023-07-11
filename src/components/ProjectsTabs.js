import * as React from "react";
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
          Play charades with viewers in your livestream works for Twitch.tv.
        </p>
        <p className="mt-5">
          Was recived with positive reception by thousands of visitors and
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
        <p>Play a guessing game with gimmicks</p>
        <p className="mt-5">
          Players guess in a livestream. Everyone gets a score if correct and
          how fast they guessed.
        </p>
        <p className="mt-4">
          Made with React, Twitch API and ThreeJS. <br /> Uses AI to pick
          relevant options.
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
          Players must slove a series of puzzles through out a level in order to
          escape a decaying ship.
        </p>
        <p className="mt-5">
          My main role was to design and develop the physics, animations,
          scenes, menus and create tools for level and puzzle designers.
        </p>
        <p className="mt-4">An Open-source project. Made with Unity and C#</p>
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
          to clear a level before timer runs out
        </p>
        <p className="mt-4">Made in Unreal Engine 4 using only Blueprints</p>
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
        {
          name: "AmonkRunnerSaveLoader",
          link: "https://github.com/lejara/AmokRunnerSaveLoader",
        },
        {
          name: "3D Works",
          link: "https://www.artstation.com/leption",
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
      className="link-primary text-xl block my-2 underline"
      href={obj.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span> {obj.name}</span>
    </a>
  ));
};

const listCards = (list, transitioning) => {
  const delayMap = ["delay-100", "delay-200", "delay-300"];
  return list.map((data, index) => (
    <div
      key={`card-${index}`}
      className={`w-full lg:w-120 transition-all ease-in duration-300 transform ${
        delayMap[index]
      }  ${transitioning ? "opacity-0 -translate-x-12" : "opacity-100"}`}
    >
      <Card
        title={data.title}
        image_src={data.image}
        image_alt={`Logo  of ${data.title}`}
        link={data.link}
      >
        {data.body()}
      </Card>
    </div>
  ));
};

const Tab1 = (transitioning) => {
  return listCards(webCards, transitioning);
};

const Tab2 = (transitioning) => {
  return listCards(gameCards, transitioning);
};

const Tab3 = (transitioning) => {
  return listCards(otherCards, transitioning);
};

export { Tab1, Tab2, Tab3 };
