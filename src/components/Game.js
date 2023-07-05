import * as React from "react";
import gameContext from "../context/gameContext";
import {
  backgroundStart,
  backgroundEnd,
  backgroundWon,
  backgroundTrueWin,
} from "../game/Utils";
import btnPlayAnimation from "../game/StartBtn";
import Player from "../game/Player";
import Objects from "../game/Objects";
import { StaticImage } from "gatsby-plugin-image";
import GameIcon from "../images/svg/btn_sprite.inline.svg";
import SpriteArrows from "../images/svg/sprite_arrows.inline.svg";

const Game = ({ bg }) => {
  var canvas,
    ctx,
    gameState = {},
    time = {},
    fps = 60,
    player,
    objects,
    diffculties;
  var requestAnimationFrame;

  const { playing, setPlaying, setWon } = React.useContext(gameContext);
  const [started, setStarted] = React.useState(false);
  const [playerMoved, setPlayerMoved] = React.useState(false);

  function awake() {
    //start game
    setTimeout(() => {
      start();
    }, 790);
    init();
    setStarted(true);
    //Starting animations
    btnPlayAnimation();
    backgroundStart(bg);
  }

  function init() {
    requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    canvas = document.getElementById("mini-game");
    ctx = canvas.getContext("2d");
    canvas.setAttribute("tabindex", "0");
    canvas.focus();
    canvas.width = window.innerWidth;
    gameState = {
      dead: false,
      diffculty: 2,
      playerMoved: false,
      gameStarted: false,
      win: false,
    };
    time = {
      start_time: window.performance.now(),
      time_to_win: 90,
      time_to_actually_win: 180,
      timePassed: 0,
      elapsed: 0,
      fpsInterval: 1000 / fps,
      then: window.performance.now(),
    };
    diffculties = {
      levels: [
        // lower = more. hehe
        {
          spawnChance: 60,
          min_speed: 4,
          max_speed: 8,
        },
        {
          spawnChance: 28,
          min_speed: 4,
          max_speed: 15,
        },
        {
          spawnChance: 12,
          min_speed: 4,
          max_speed: 15,
        },
        {
          spawnChance: 62,
          min_speed: 16,
          max_speed: 20,
        },
      ],
      breakpoints: [0, 20, 65, 120],
    };
    player = new Player(canvas, ctx, gameState);
    objects = new Objects(canvas, ctx, player, gameState, diffculties);
  }

  function start() {
    setPlaying(true);
    time.then = window.performance.now();

    //draw once, for button animation and player sprite to sync
    draw();

    animate();
  }

  function animate(newtime) {
    if (gameState.dead) {
      end();
      return;
    }
    requestAnimationFrame(animate);

    var now = newtime;
    time.elapsed = now - time.then;

    if (time.elapsed > time.fpsInterval) {
      time.then = now - (time.elapsed % time.fpsInterval);

      update(now);
    }
  }

  function update(now) {
    //scale canvas if window changes, has side effect of clearing of the canvas
    canvas.width = window.innerWidth;

    //Check If player moved
    if (gameState.playerMoved && !gameState.gameStarted) {
      setPlayerMoved(true);
      gameState.gameStarted = true;
      // console.log("player moved");
    }

    //diffculty scale
    if (time.timePassed == diffculties.breakpoints[0]) {
      gameState.diffculty = 0;
    } else if (time.timePassed == diffculties.breakpoints[1]) {
      gameState.diffculty = 1;
    } else if (time.timePassed == diffculties.breakpoints[2]) {
      gameState.diffculty = 2;
    } else if (time.timePassed == diffculties.breakpoints[3]) {
      gameState.diffculty = 3;
    }
    //Win check
    if (time.timePassed == time.time_to_win && !gameState.win) {
      setWon(true);
      backgroundWon(bg);
      gameState.win = true;
    } else if (time.timePassed == time.time_to_actually_win) {
      backgroundTrueWin(bg);
      console.log("true winner");
    }
    //updates
    player.update();
    if (gameState.playerMoved === true) {
      //timer
      time.timePassed = Math.round((now - time.start_time) / 1000);
      objects.update();
    } else {
      time.start_time = window.performance.now();
    }

    //Draw all objects
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    objects.draw();
    player.draw();
  }

  function end() {
    backgroundEnd(bg);
    canvas.setAttribute("tabindex", "-1");
    objects.end();
    player.end();
    player = null;
    objects = null;
    time = null;
    setPlayerMoved(false);
    setPlaying(false);
    setStarted(false);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  }

  return (
    <div>
      <canvas
        style={{ height: 592 + "px" }}
        className="block -z-10 absolute  top-0 left-0 w-full"
        id="mini-game"
        height="592"
      ></canvas>

      <div
        className={` absolute right-1/2 transform translate-x-1/2 top-28 transition-opacity duration-500 ease-in ${
          playing && !playerMoved
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <StaticImage
          className="game__inputs"
          src="../images/instructions.png"
          alt="Game Instructions"
          height={330}
          width={330}
        />

        <SpriteArrows
          height="100"
          width="100"
          className=" mx-auto transform translate-y-16"
        />
      </div>

      <div
        className={`absolute right-1/2 transform translate-x-1/2  ${
          playing ? "invisible" : "visible"
        }`}
      >
        <button
          disabled={started}
          onClick={(x) => {
            x.target.blur();
            awake();
          }}
          aria-label="play mini game"
          style={{
            width: "25px",
            height: "25px",
            transform: "translate(0, -25px)",
          }}
        >
          <GameIcon />
        </button>
      </div>
    </div>
  );
};

export default Game;
