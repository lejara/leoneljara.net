import * as React from "react";

import Game from "../components/Game";

const Hero = () => {
  return (
    <div className="block-component hero mb-20">
      <div className="hero__content mx-auto">
        <div className="hero__title">
          <h1>Leonel</h1>
          <h1 className="hero__second">Jara</h1>
        </div>
        <h4 className="hero__adword text-left mt-2">The One That Types</h4>
      </div>
      <Game />
    </div>
  );
};

export default Hero;
