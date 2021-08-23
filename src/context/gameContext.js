import { createContext } from "react";

const gameContext = createContext({
  playing: false,
  setPlaying: (value) => {},
}); //https://stackoverflow.com/questions/50502664/how-to-update-the-context-value-in-a-provider-from-the-consumer

export default gameContext;
