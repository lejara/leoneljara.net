import * as React from "react";
import gameContext from "../context/gameContext";
import Game from "../components/Game";

const Hero = ({ bg }) => {
  const { playing } = React.useContext(gameContext);
  return (
    <div className="block-component hero">
      <div
        className={`hero__content mx-auto ${
          playing ? "opacity-30" : "opacity-100"
        }`}
      >
        <div className="hero__title">
          <h1>Leonel</h1>
          <h1 className="hero__second">Jara</h1>
          <h4 className="hero__adword text-left">The One That Types</h4>
        </div>
      </div>

      <Game bg={bg} />
    </div>
  );
};

export default Hero;
