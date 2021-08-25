import * as React from "react";
import gameContext from "../context/gameContext";
import { backgroundStart, backgroundEnd } from "../game/Utils";
import Player from "../game/Player";
import Objects from "../game/Objects";

import play_icon from "../game/StartIcon";
import GameIcon from "../images/svg/game_icon.svg";

//TODO: fix delta miss timings, input fix, diffualty
const Game = ({ bg }) => {
  var canvas,
    ctx,
    gameState = {},
    time = {},
    fps = 60,
    player,
    objects;
  var requestAnimationFrame;

  const { playing, setPlaying } = React.useContext(gameContext);

  function awake() {
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
      start_time: Date.now(),
      time_to_win: 100,
      timePassed: 0,
      delta: 0,
      interval: 1000 / fps,
      then: Date.now(),
    };
    player = new Player(canvas, ctx, gameState, time);
    objects = new Objects(canvas, ctx, player, gameState, time);
  }

  function start() {
    setPlaying(true);
    time.then = time.interval + 1;
    update();
  }

  function update() {
    //Frame timing
    var now = Date.now();
    time.delta = now - time.then;
    if (time.delta > time.interval) {
      //scale canvas if window changes, sideeffect: of clearing of the canvas
      canvas.width = window.innerWidth;
      time.then = now - (time.delta % time.interval);

      //timer
      time.timePassed = Math.round((now - time.start_time) / 1000);

      //updates
      player.update();
      objects.update();

      //Draw all objects
      draw();
    }

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
    player = null;
    objects = null;
    time = null;
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
