import * as React from "react";
import gameContext from "../context/gameContext";
import Game from "../components/Game";
import ArrowDown from "../images/down-arrow.svg";

const Hero = ({ bg }) => {
  const { playing, won } = React.useContext(gameContext);
  return (
    <div>
      <div className="py-16 hero mb-2">
        <div
          className={`hero__content mx-auto ${
            playing ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          <div className="hero__title mx-5">
            <h1>Leonel</h1>
            <h1 className="hero__second">Jara</h1>
            <h2 className="text-white hero__adword text-left">
              {won
                ? "Knows Your The Best!"
                : "Web Dev/Game Dev/Anything In Between"}
            </h2>
          </div>
        </div>

        <Game bg={bg} />
      </div>

      <hr className="hero-break" />

      <span className="transform  absolute bottom-3 left-1/2 -translate-x-1/2 hidden lg:block">
        <img src={ArrowDown} className="w-12 h-12" />
      </span>
    </div>
  );
};

export default Hero;
