import * as React from "react";
import { useEffect, useState } from "react";

//TODO: fix fps, input fix, game manager
const Game = () => {
  var canvas,
    ctx,
    bounds_width,
    bounds_height,
    floor_height,
    player,
    objects,
    keys = [],
    friction,
    gravity,
    time = {},
    dying,
    dead;
  var requestAnimationFrame;

  const [timePassed, setTimePassed] = useState(0);
  const [playing, setPlaying] = useState(false);

  function init() {
    requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    canvas = document.getElementById("min-game");
    ctx = canvas.getContext("2d");
    bounds_width = canvas.width;
    floor_height = 646;
    keys = [];
    friction = 0.8;
    gravity = 0.2;
    time = {
      start_time: new Date(),
      time_to_win: 100,
    };
    dying = false;
    dead = false;
    canvas.width = window.innerWidth;

    player = {
      x: canvas.width / 2 + 15,
      y: 640,
      width: 25,
      height: 25,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping: false,
      grounded: false,
      color: "#E6AC27",
      update: () => {
        // Check Input for movment
        if (keys[38] || keys[32] || keys[87]) {
          // up arrow or space
          if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2; //how high to jump
          }
        }
        if (keys[39] || keys[68]) {
          // right arrow
          if (player.velX < player.speed) {
            player.velX++;
          }
        }
        if (keys[37] || keys[65]) {
          // left arrow
          if (player.velX > -player.speed) {
            player.velX--;
          }
        }
        player.velX *= friction;
        //apply player pos
        player.x += player.velX;
        player.y += player.velY;

        //Floor check
        if (player.y > floor_height) {
          player.y = floor_height;
          player.grounded = true;
        } else {
          player.velY += gravity;
          player.grounded = false;
          player.jumping = false;
        }

        //Bounds Check
        var maxWidth = bounds_width - player.width;
        if (player.x >= maxWidth) {
          player.x = maxWidth;
        } else if (player.x <= 0) {
          player.x = 0;
        }
      },
      draw: () => {
        //Draw charater stuff
        ctx.fill();
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
      },
    };
    objects = {
      projectiles: [],
      maxSpawn: 50,
      spawned: 0,
      min_speed: 4,
      max_speed: 15,
      spawn_height: -2,
      update: () => {
        function TrySpawn() {
          if (objects.spawned < objects.maxSpawn) {
            var trySpawn = getRandomInt(1, 70);
            if (trySpawn == 1) {
              var object_x = getRandomInt(1, canvas.width);
              //calulate direction to player
              var distance = {
                x: object_x - player.x,
                y: objects.spawn_height - player.y,
              };
              var length = Math.sqrt(
                distance.x * distance.x + distance.y * distance.y
              );
              var direction = {
                x: (distance.x / length) * -1, //TODO: add a small random offset
                y: (distance.y / length) * -1,
              };

              objects.projectiles.push({
                x: object_x,
                y: objects.spawn_height,
                width: 20,
                height: 20,
                direction: {
                  x: direction.x,
                  y: direction.y,
                },
                speed: getRandomInt(objects.min_speed, objects.max_speed),
                color: "#655643",
                die: false,
              });
              objects.spawned++;
            }
          }
        }
        function UpdateProjectiles() {
          objects.projectiles.map((o) => {
            o.x += o.direction.x * o.speed;
            o.y += o.direction.y * o.speed;
            o.die = o.y > canvas.height + 20 ? true : false;
            //update spawn counter if die is true
            objects.spawned = o.die ? --objects.spawned : objects.spawned;
            if (collisionCheck(player, o)) {
              dying = true;
            }
            //check projectiles are hitting the player
          });
          //remove projectiles that are out of screen, 0n
          objects.projectiles = objects.projectiles.filter(
            (item) => item.die == false
          );
        }

        UpdateProjectiles();
        TrySpawn();
        // console.log(objects.spawned);
      },
      draw: () => {
        objects.projectiles.map((o) => {
          ctx.fillStyle = o.color;
          ctx.rect(o.x, o.y, o.width, o.height);
        });
      },
    };

    document.body.addEventListener("keydown", function (e) {
      keys[e.keyCode] = true;
    });

    document.body.addEventListener("keyup", function (e) {
      keys[e.keyCode] = false;
    });
  }

  function start() {
    console.log("ran");
    init();
    setPlaying(true);
    requestAnimationFrame(update); //TODO: https://gist.github.com/elundmark/38d3596a883521cb24f5
  }

  function end() {
    setPlaying(false);
  }

  function update() {
    canvas.width = window.innerWidth;
    bounds_width = canvas.width;

    //time
    var cur_time = new Date();
    setTimePassed(Math.round((cur_time - time.start_time) / 1000));
    //updates
    player.update();
    objects.update();

    draw();
    if (!dying) {
      requestAnimationFrame(update);
    } else {
      end();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    objects.draw();
    player.draw();
  }

  //utils
  function collisionCheck(shapeA, shapeB) {
    var hit = false;
    // get the vectors to check against
    var vX = shapeA.x + shapeA.width / 2 - (shapeB.x + shapeB.width / 2),
      vY = shapeA.y + shapeA.height / 2 - (shapeB.y + shapeB.height / 2),
      // add the half widths and half heights of the objects
      hWidths = shapeA.width / 2 + shapeB.width / 2,
      hHeights = shapeA.height / 2 + shapeB.height / 2;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      console.log("hit");
      hit = true;
    }
    return hit;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // useEffect(() => {
  //   init();
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
        onClick={() => {
          start();
        }}
        className="mt-4"
      >
        Start
      </button>
    </div>
  );
};

export default Game;
