import * as React from "react";
import dtc_icon from "../images/DTC_ICON.png";
import sol_icon from "../images/SOL_ICON.png";
import botc_icon from "../images/BOTC_ICON.png";
import Card from "./Card";

const Tab1 = () => {
  return (
    <>
      <div>
        <Card
          title="Da Stream Charades"
          image_src={dtc_icon}
          image_alt="Logo of Twitch Charades"
          link="https://datwitchcharades.page/"
        >
          <p>
            Web App that streamers on the platform Twtich.tv to play charades
            with viewers in the chat. Was recived with great sucess by thousands
            of visitors and spectators.
          </p>
          <p className="mt-4">Made with React and Twitch API.</p>
        </Card>
      </div>

      <div>
        <Card
          title="Battle Of The Chat"
          image_src={botc_icon}
          image_alt="Logo of Battle Of The Chat"
          link="https://battleofthechat.net/"
        >
          <p>
            Guessing game with gimmicks for finding the answer. Players guess in
            a livestream and has 6 options to choose from. The fastest correct
            gets a higher score.
          </p>
          <p className="mt-4">
            Made with React, Twitch API and Three.js. Used a pre-trained AI
            model to pick options for certain categories
          </p>
        </Card>
      </div>

      <div>
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
      </div>
    </>
  );
};

const Tab2 = () => {
  return (
    <>
      <div>
        <Card
          title="Keep Getting Rings"
          link="https://github.com/lejara/KeepGettingRings"
        >
          <p>
            Little hack, that make you have to keep getting rings in Sonic The
            Hedgehog 2. If not the level resets
          </p>
          <p className="mt-4">
            An Open-source project. Made using Unity with C#
          </p>
        </Card>
      </div>

      <div>
        <Card
          title="Solitary"
          image_src={sol_icon}
          image_alt="Logo of Solitary"
          link="https://github.com/PopeSpaceous/Solitary"
        >
          <p>
            Devloped and designed the backend of the 2D Puzzle Platformer
            Solitary. Players must slove a series of puzzles through out a level
            in order to escape the decaying ship.
          </p>
          <p className="mt-4">
            An Open-source project. Made using Unity with C#
          </p>
        </Card>
      </div>
    </>
  );
};

const Tab3 = () => {
  return (
    <>
      <div>
        <Card
          title="Da Stream Charades"
          image_src={dtc_icon}
          image_alt="Logo of Twitch Charades"
          link="https://datwitchcharades.page/"
        >
          <p>
            Web App that streamers on the platform Twtich.tv to play charades
            with viewers in the chat. Was recived with great sucess by thousands
            of visitors and spectators.
          </p>
          <p className="mt-4">Made using React.</p>
        </Card>
      </div>
    </>
  );
};

export { Tab1, Tab2, Tab3 };
