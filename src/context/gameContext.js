import * as React from "react";
import { createContext, useState } from "react";

const gameContext = createContext({
  won: false,
  setWon: (value) => {},
  playing: false,
  setPlaying: (value) => {},
});

export const GameContextProvider = ({ children }) => {
  const [won, setWon] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <gameContext.Provider value={{ won, setWon, playing, setPlaying }}>
      {children}
    </gameContext.Provider>
  );
};

export default gameContext;
