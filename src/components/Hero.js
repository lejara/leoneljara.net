import * as React from "react";
import gameContext from "../context/gameContext";
import Game from "../components/Game";
import ArrowDown from "../images/down-arrow.svg";

const Hero = ({ bg }) => {
  const { playing, won } = React.useContext(gameContext);
  return (
    <div>
      <div className="py-16 text-center mb-2 relative">
        {/* height must be 456px so the game floor is aligned with the box */}
        <div
          style={{ height: "456px" }}
          className={`flex justify-center items-center transition-all duration-700 mx-auto ${
            playing ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          <div className="text-LJ_Orange mx-5 flex flex-wrap justify-center gap-0">
            <h1 className=" text-9xl lg:text-title h-full">Leonel Jara</h1>
            <h2 className="text-white text-3xl lg:text-5xl w-full text-center">
              {won ? "Knows Your The Best!" : "Front-End Web Developer"}
            </h2>
          </div>
        </div>

        <Game bg={bg} />
      </div>

      {/* game floor */}
      <hr className="w-full border-t-2 opacity-75" />
    </div>
  );
};

export default Hero;
