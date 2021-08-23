import * as React from "react";
import gameContext from "../context/gameContext";
import { backgroundStart, backgroundEnd } from "../game/Utils";
import player from "../game/Player";
import objects from "../game/Objects";

//TODO: fix fps, input fix, game manager
const Game = ({ bg }) => {
  var canvas,
    ctx,
    gameState = {},
    time = {};
  var requestAnimationFrame;

  const { playing, setPlaying } = React.useContext(gameContext);

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
      dying: false,
      gamemover: false,
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

  function awake() {
    console.log("ran");

    backgroundStart(bg);

    init();
    setPlaying(true);
    start();
  }

  function start() {
    requestAnimationFrame(update); //TODO: https://gist.github.com/elundmark/38d3596a883521cb24f5
  }

  function end() {
    backgroundEnd(bg);
    objects.end();
    player.end();
    setPlaying(false);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  }

  function update() {
    canvas.width = window.innerWidth;

    //time
    var cur_time = new Date();
    time.timePassed = Math.round((cur_time - time.start_time) / 1000);
    //updates
    player.update();
    objects.update();

    draw();
    if (!gameState.dying) {
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

  // useEffect(() => {
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

      <button
        disabled={playing}
        onClick={(x) => {
          x.target.blur();
          awake();
        }}
        className="mt-4"
      >
        Start
      </button>
    </div>
  );
};

export default Game;
