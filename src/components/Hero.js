import * as React from "react";
import gameContext from "../context/gameContext";
import Game from "../components/Game";
import { Transition } from "@headlessui/react";

const Hero = ({ bg }) => {
  const { playing, won } = React.useContext(gameContext);
  return (
    <div className=" h-170 md:h-screen relative">
      <div className="py-12 text-center mb-2 relative">
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
              {won ? "Knows Your The Best!" : "Full-Stack Web Developer"}
            </h2>
          </div>
        </div>

        <Game bg={bg} />
      </div>

      {/* game floor */}
      <div className="relative h-1">
        <Transition
          show={playing}
          enter="transition-opacity duration-500 ease-in"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <hr className=" absolute w-full border-t-2 opacity-75" />
        </Transition>
      </div>
    </div>
  );
};

export default Hero;
