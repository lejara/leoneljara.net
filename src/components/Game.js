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
import instructions from "../images/instructions.png";
import GameIcon from "../images/svg/btn_sprite.inline.svg";
import SpriteArrows from "../images/svg/sprite_arrows.inline.svg";

const Game = ({ bg }) => {
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) {
    return <></>;
  }
  let canvas,
    ctx,
    fps = 60,
    gameState = {
      dead: false,
      diffculty: 2,
      playerMoved: false,
      gameStarted: false,
      win: false,
    },
    time = {
      start_time: window.performance.now(),
      time_to_win: 90,
      time_to_actually_win: 190,
      timePassed: 0,
      elapsed: 0,
      fpsInterval: 1000 / fps,
      then: window.performance.now(),
    },
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
          spawnChance: 50,
          min_speed: 16,
          max_speed: 20,
        },
        {
          spawnChance: 7,
          min_speed: 4,
          max_speed: 13,
        },
      ],
      breakpoints: [0, 20, 65, 120, 175],
    },
    player,
    objects;
  let requestAnimationFrame;

  const { playing, setPlaying, setWon } = React.useContext(gameContext);
  const [started, setStarted] = React.useState(false);
  const [playerMoved, setPlayerMoved] = React.useState(false);
  const [timePassed, setTimePassed] = React.useState(time.timePassed);

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

    let now = newtime;
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
    } else if (time.timePassed == diffculties.breakpoints[4]) {
      gameState.diffculty = 4;
    }
    //Win check
    if (time.timePassed == time.time_to_win && !gameState.win) {
      backgroundWon(bg);
      gameState.win = true;
    } else if (time.timePassed == time.time_to_actually_win) {
      setWon(true);
      backgroundTrueWin(bg);
      console.log("true winner");
    }
    //updates
    player.update();
    if (gameState.playerMoved === true) {
      //timer
      time.timePassed = Math.round((now - time.start_time) / 1000);
      //incur a react update
      setTimePassed(time.timePassed);
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

  function getTimeLeft() {
    //Get seconds left needed to win
    let secondsLeft;
    if (timePassed < time.time_to_win) {
      secondsLeft = time.time_to_win - timePassed;
    } else if (timePassed < time.time_to_actually_win) {
      secondsLeft = time.time_to_actually_win - timePassed;
    } else {
      return "You Won!";
    }
    //Display as a timer
    let sec = parseInt(secondsLeft % 60, 10);
    let min = "";
    if (secondsLeft >= 60) {
      min = parseInt(secondsLeft / 60, 10).toString() + ":";
      sec = sec < 10 ? "0" + sec : sec;
    }
    return `${min}${sec}`;
  }

  return (
    <div>
      <canvas
        style={{ height: 562 + "px" }}
        className="block -z-10 absolute  top-0 left-0 w-full"
        id="mini-game"
        height="562"
      ></canvas>
      <div
        className={`" absolute right-1/2 transform translate-x-1/2 top-28 text-4xl transition-opacity duration-1000 select-none" ${
          playing && playerMoved ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {getTimeLeft()}
      </div>
      <div
        className={` absolute right-1/2 transform translate-x-1/2 bottom-0 transition-opacity duration-500 ease-in ${
          playing && !playerMoved
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <img
          className="mb-12"
          src={instructions}
          alt="Game Instructions"
          height={330}
          width={330}
        />

        <SpriteArrows
          height="100"
          width="100"
          className="mx-auto transform translate-y-6"
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
