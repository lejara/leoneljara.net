import * as React from "react";
import { useEffect, useState } from "react";

const Game = () => {
  var canvas,
    ctx,
    width = 1000, // change
    height = 400, //change
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

    canvas = document.getElementsByClassName("tsparticles-canvas-el")[0];
    ctx = canvas.getContext("2d");
    width = 1000; //change
    height = 300; //change
    floor_height = height - 50;
    player = {
      x: width / 2,
      y: 200,
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

        //Floor check
        if (player.y > floor_height) {
          player.y = floor_height;
          player.grounded = true;
        } else {
          player.velY += gravity;
          player.grounded = false;
          player.jumping = false;
        }

        player.velX *= friction;

        //apply player pos
        player.x += player.velX;
        player.y += player.velY;
      },
      draw: () => {
        //Draw charater stuff
        ctx.fill();
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
      },
    };
    objects = {
      boxes: [],
      update: () => {
        var hitting = false;
        objects.boxes.map((o) => {
          if (collisionCheck(player, o)) {
            hitting = true;
          }
        });
      },
      draw: () => {
        objects.boxes.map((o) => {
          ctx.fillStyle = o.color;
          ctx.rect(o.x, o.y, o.width, o.height);
        });
      },
    };
    keys = [];
    friction = 0.8;
    gravity = 0.2;

    // dimensions
    objects.boxes.push({
      //box on left
      x: 0,
      y: height / 4 + 10,
      width: 10,
      height: height,
      color: "green",
    });
    objects.boxes.push({
      //box on left
      x: 0,
      y: 0,
      width: 10,
      height: height / 4 - 15,
      color: "green",
    });

    objects.boxes.push({
      //box on right
      x: width - 10,
      y: 0,
      width: 50,
      height: height,
      color: "yellow",
    });
    objects.boxes.push({
      x: 290,
      y: 200,
      width: 260,
      height: 10,
      color: "blue",
    });
    objects.boxes.push({
      x: 590,
      y: 200,
      width: 80,
      height: 10,
      color: "blue",
    });
    objects.boxes.push({
      x: 120,
      y: 250,
      width: 150,
      height: 10,
      color: "red",
    });
    objects.boxes.push({
      x: 220,
      y: 300,
      width: 80,
      height: 10,
      color: "black",
    });
    objects.boxes.push({
      x: 340,
      y: 350,
      width: 90,
      height: 10,
      color: "#655643",
    });
    objects.boxes.push({
      x: 740,
      y: 300,
      width: 160,
      height: 10,
      color: "#655643",
    });
    objects.boxes.push({
      x: 0,
      y: 350,
      width: 90,
      height: 10,
      color: "#655643",
    });
    objects.boxes.push({
      x: 90,
      y: 350,
      width: 10,
      height: 50,
      color: "#655643",
    });

    document.body.addEventListener("keydown", function (e) {
      keys[e.keyCode] = true;
    });

    document.body.addEventListener("keyup", function (e) {
      keys[e.keyCode] = false;
    });
  }

  function update() {
    player.update();
    objects.update();

    draw();
    requestAnimationFrame(update);
  }

  function draw() {
    //draw objects
    objects.draw();
    //draw player
    player.draw();
  }

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

  useEffect(() => {
    init();

    requestAnimationFrame(update);
  }, []);

  return <div></div>;
};

export default Game;
