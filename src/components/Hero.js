import * as React from "react";
import gameContext from "../context/gameContext";
import Game from "../components/Game";

const Hero = ({ bg }) => {
  const { playing } = React.useContext(gameContext);
  return (
    <div className="block-component hero mb-20">
      <div
        className={`hero__content mx-auto ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="hero__title">
          <h1>Leonel</h1>
          <h1 className="hero__second">Jara</h1>
        </div>
        <h4 className="hero__adword text-left mt-2">The One That Types</h4>
      </div>
      <p>is playing? {`${playing ? "yes" : "no"}`}</p>
      <Game bg={bg} />
    </div>
  );
};

export default Hero;
