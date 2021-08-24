import * as React from "react";
import gameContext from "../context/gameContext";
import { backgroundStart, backgroundEnd } from "../game/Utils";
import player from "../game/Player";
import objects from "../game/Objects";

import play_icon from "../game/StartIcon";
import GameIcon from "../images/svg/game_icon.svg";

//TODO: fix fps, input fix, diffualty
const Game = ({ bg }) => {
  var canvas,
    ctx,
    gameState = {},
    time = {};
  var requestAnimationFrame;

  const { playing, setPlaying } = React.useContext(gameContext);

  function awake() {
    console.log("ran");
    //Starting animations
    play_icon();
    backgroundStart(bg);

    init();
    //start game
    setTimeout(() => {
      start();
    }, 440);
  }

  function init() {
    requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    canvas = document.getElementById("min-game");
    canvas.focus();
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;

    gameState = {
      dead: false,
      diffculty: 1,
    };
    time = {
      start_time: new Date(),
      time_to_win: 100,
      timePassed: 0,
    };

    player.init(canvas, ctx, gameState);
    objects.init(canvas, ctx, player, gameState);
  }

  function start() {
    setPlaying(true);
    requestAnimationFrame(update); //TODO: https://gist.github.com/elundmark/38d3596a883521cb24f5
  }

  function update() {
    //scale canvas if window changes
    canvas.width = window.innerWidth;

    //time
    var cur_time = new Date();
    time.timePassed = Math.round((cur_time - time.start_time) / 1000);
    //updates
    player.update();
    objects.update();

    //Draw all objects
    draw();
    if (!gameState.dead) {
      requestAnimationFrame(update);
    } else {
      end();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    objects.draw();
    player.draw();
  }

  function end() {
    backgroundEnd(bg);
    objects.end();
    player.end();
    setPlaying(false);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  }

  // React.useEffect(() => {
  //   awake();
  // }, []);

  return (
    <div>
      <canvas
        style={{ height: 800 + "px" }}
        className="block -z-10 absolute  top-0 left-0 w-full"
        id="min-game"
        height="800"
      ></canvas>

      <div className={`${playing ? "invisible" : "visible"}`}>
        <GameIcon className="game__btn--icon" />

        <button
          disabled={playing}
          onClick={(x) => {
            x.target.blur();
            awake();
          }}
          className="game__btn"
        />
      </div>
    </div>
  );
};

export default Game;
