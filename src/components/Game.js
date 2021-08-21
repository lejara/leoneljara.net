import * as React from "react";
import { useEffect, useState } from "react";

//TODO: objects spawning, input fix, game manager
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
    gravity;
  var requestAnimationFrame;

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
    bounds_height = canvas.height;
    floor_height = 646;
    keys = [];
    friction = 0.8;
    gravity = 0.2;
    player = {
      x: 100,
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
      min_speed: 2,
      max_speed: 10,
      spawn_height: -2,
      y_dir: 1,
      update: () => {
        // //spawn check
        // if (!spawned >= maxSpawn) {
        //   var newSpawn = getRandomInt(1, 3);
        //   // prettier-ignore
        //   newSpawn = (spawned+newSpawn) > maxSpawn ? ((spawned+newSpawn) - maxSpawn) - newSpawn  :  newSpawn
        // } else {
        //   console.log("Max Object Spawned");
        // }
        //random direction
        if (objects.projectiles.length != 0) {
          // target player
          var distance = {
            x: objects.projectiles[0].x - player.x,
            y: objects.projectiles[0].y - player.y,
          };
          var length = Math.sqrt(
            distance.x * distance.x + distance.y * distance.y
          );
          objects.projectiles[0].direction = {
            x: (distance.x / length) * -1,
            y: (distance.y / length) * -1,
          };
        }

        function updateProjectiles() {
          objects.projectiles.map((o) => {
            o.x += o.direction.x * o.speed;
            o.y += o.direction.y * o.speed;
            o.die = o.y > canvas.height + 20 ? true : false;
            //update spawn counter if die is true
            objects.spawned = o.die ? --objects.spawned : objects.spawned;
          });
          //remove projectiles that are out of screen
          objects.projectiles = objects.projectiles.filter(
            (item) => item.die == false
          );
        }
        updateProjectiles();
        //check projectiles are hitting the player
        var hitting = false;
        objects.projectiles.map((o) => {
          if (collisionCheck(player, o)) {
            hitting = true;
          }
        });
      },
      draw: () => {
        objects.projectiles.map((o) => {
          ctx.fillStyle = o.color;
          ctx.rect(o.x, o.y, o.width, o.height);
        });
      },
    };

    // dimensions
    objects.projectiles.push({
      x: 340,
      y: objects.spawn_height,
      width: 30,
      height: 30,
      direction: {
        x: 0.2,
        y: objects.y_dir,
      },
      speed: 3,
      color: "#655643",
      die: false,
    });

    document.body.addEventListener("keydown", function (e) {
      keys[e.keyCode] = true;
    });

    document.body.addEventListener("keyup", function (e) {
      keys[e.keyCode] = false;
    });

    requestAnimationFrame(update);
  }

  function update() {
    canvas.width = window.innerWidth;

    bounds_width = canvas.width;
    bounds_height = canvas.height;

    player.update();
    objects.update();

    draw();
    requestAnimationFrame(update);
  }

  function draw() {
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
      console.log("hitting");
      hit = true;
    }
    return hit;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="-z-10 absolute top-0 left-0">
      <canvas className="block w-full" id="min-game" height="800"></canvas>
    </div>
  );
};

export default Game;
