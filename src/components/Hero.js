import * as React from "react";
import gameContext from "../context/gameContext";
import Game from "../components/Game";

const Hero = ({ bg }) => {
  const { playing, won } = React.useContext(gameContext);
  return (
    <>
      <div className="py-16 hero mb-2">
        <div
          className={`hero__content mx-auto ${
            playing ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          <div className="hero__title mx-5">
            <h1>Leonel</h1>
            <h1 className="hero__second">Jara</h1>
            <h2 className="hero__adword text-left">
              {won
                ? "Knows Your The Best!"
                : "Web Dev/Game Dev/Random Little Creations"}
            </h2>
          </div>
        </div>

        <Game bg={bg} />
      </div>
    </>
  );
};

export default Hero;
