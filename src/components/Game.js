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
import GameIcon from "../images/svg/btn_sprite.svg";
import SpriteArrows from "../images/svg/sprite_arrows.svg";

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
  }

  function init() {
    requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    canvas = document.getElementById("mini-game");
    canvas.focus();
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    time = {
      start_time: Date.now(),
      time_to_win: 90,
      time_to_actually_win: 150,
      timePassed: 0,
      delta: 0,
      interval: 1000 / fps,
      then: Date.now(),
    };
    gameState = {
      dead: false,
      diffculty: 2,
      playerMoved: false,
      gameStarted: false,
      win: false,
    };

    diffculties = {
      levels: [
        // lower = more. hehe
        {
          spawnChance: 50,
        },
        {
          spawnChance: 28,
        },
        {
          spawnChance: 12,
        },
        {
          spawnChance: 7,
        },
      ],
      breakpoints: [0, 20, 65, 120],
    };
    player = new Player(canvas, ctx, gameState);
    objects = new Objects(canvas, ctx, player, gameState, diffculties);
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
      //Check If player moved
      if (gameState.playerMoved && !gameState.gameStarted) {
        setPlayerMoved(true);
        backgroundStart(bg);
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
      }

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
        className={`game__instructions ${
          playing && !playerMoved
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <StaticImage
          className="game__inputs"
          src="../images/instructions.png"
          alt="Game Instructions"
          height="330"
          width="330"
        />

        <SpriteArrows height="100" width="100" className="game__arrows" />
      </div>

      <div
        className={`game__btnContainer ${playing ? "invisible" : "visible"}`}
      >
        <GameIcon className="game__icon" />
        <button
          disabled={started}
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
