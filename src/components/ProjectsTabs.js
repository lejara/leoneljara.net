import * as React from "react";
import dtc_icon from "../images/DTC_ICON.png";
import sol_icon from "../images/SOL_ICON.png";
import botc_icon from "../images/BOTC_ICON.png";
import Card from "./Card";

const Tab1 = () => {
  return (
    <>
      <Card
        title="Da Stream Charades"
        image_src={dtc_icon}
        image_alt="Logo of Twitch Charades"
        link="https://datwitchcharades.page/"
      >
        <p>
          Allows streamers on Twtich.tv to play charades with viewers in their
          chat. Was recived with great sucess by thousands of visitors and
          spectators.
        </p>
        <p className="mt-4">Made with React and Twitch API.</p>
      </Card>

      <Card
        title="Battle Of The Chat"
        image_src={botc_icon}
        image_alt="Logo of Battle Of The Chat"
        link="https://battleofthechat.net/"
      >
        <p>
          Guessing game with gimmicks for finding the answer. Players guess in a
          livestream and have 6 options to choose from. The fastest correct gets
          a higher score.
        </p>
        <p className="mt-4">
          Made with React, Twitch API and ThreeJS. Used a pre-trained AI model
          to pick options for certain categories
        </p>
      </Card>

      <Card title="Contributions" titleTop={true}>
        <a
          className="link-primary text-xl block my-2"
          href="https://github.com/mozilla/gecko-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">-</span>
          <span> gecko-dev</span>
        </a>

        <a
          className="link-primary text-xl block my-2"
          href="https://github.com/getkey/ble"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">-</span>
          <span> Blé</span>
        </a>

        <a
          className="link-primary text-xl block my-2"
          href="https://github.com/mozilla/foundation.mozilla.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">-</span>
          <span> foundation.mozilla</span>
        </a>

        <a
          className="link-primary text-xl block my-2"
          href="https://github.com/getAlby/lightning-browser-extension"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">-</span>
          <span> Lightning Browser Extension</span>
        </a>

        <a
          className="link-primary text-xl block my-2"
          href="https://github.com/Irev-Dev/cadhub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">-</span>
          <span> CadHub</span>
        </a>

        <a
          className="link-primary text-xl block my-2"
          href="https://github.com/elastic/eui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">-</span>
          <span> Elastic UI Framework</span>
        </a>
      </Card>
    </>
  );
};

const Tab2 = () => {
  return (
    <>
      <Card
        title="Solitary"
        image_src={sol_icon}
        image_alt="Logo of Solitary"
        link="https://leption.itch.io/solitary"
      >
        <p>
          Devloped and designed the backend of the 2D Puzzle Platformer
          Solitary. Players must slove a series of puzzles through out a level
          in order to escape the decaying ship.
        </p>
        <p className="mt-4">An Open-source project. Made using Unity with C#</p>
      </Card>

      <Card
        title="Gun Over"
        link="https://leption.itch.io/gunover"
        titleTop={true}
      >
        <p>
          Small Top Down Shooter. Player must kill a certain ammount of enemies
          to clear the level before timer runs out
        </p>
        <p className="mt-4">Made in Unreal Engine 4 with Blueprints</p>
      </Card>

      <Card title="Other Games" titleTop={true}>
        <p>
          <a
            className="link-primary text-xl block my-2"
            href="https://github.com/lejara/KeepGettingRings"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-white">-</span>
            <span> KeepGettingRings</span>
          </a>
          <a
            className="link-primary text-xl block my-2"
            href="https://www.spigotmc.org/resources/dagrouphardcore.72389/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-white">-</span>
            <span> Da Group Hardcore</span>
          </a>
          <a
            className="link-primary text-xl block my-2"
            href="https://github.com/lejara/Floater"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-white">-</span>
            <span> Floater</span>
          </a>
        </p>
        <p className="mt-4"></p>
      </Card>
    </>
  );
};

const Tab3 = () => {
  return (
    <>
      <Card title="Others" titleTop={true}>
        <a
          className="link-primary text-xl block my-2"
          href="https://github.com/lejara/SupBot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">-</span>
          <span> SupBot</span>
        </a>

        <a
          className="link-primary text-xl block my-2"
          href="https://github.com/lejara/BasementButlerBot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">-</span>
          <span> Basement Butler Bot</span>
        </a>

        <a className="link-primary text-xl block my-2">
          <span className="text-white">-</span>
          <span> Single Player Game(WIP)</span>
        </a>

        <a className="link-primary text-xl block my-2">
          <span className="text-white">-</span>
          <span> Multiplayer Game(WIP)</span>
        </a>
      </Card>
    </>
  );
};

export { Tab1, Tab2, Tab3 };
