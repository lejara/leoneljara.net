import * as React from "react";
import dtc_icon from "../images/DTC_ICON.png";
import sol_icon from "../images/SOL_ICON.png";
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
          <p className="mt-4">Made using React.</p>
        </Card>
      </div>

      <div>
        <Card
          title="Battle Of The Chat"
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

const Tab2 = () => {
  return (
    <>
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
