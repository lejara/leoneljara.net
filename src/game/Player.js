var keys = [],
  floor_height = 646,
  friction = 0.8,
  gravity = 0.2;

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

var player = {
  x: 0,
  y: 640,
  width: 25,
  height: 25,
  speed: 3,
  velX: 0,
  velY: 0,
  jumping: false,
  grounded: false,
  color: "#E6AC27",
  init: (canvas, ctx, gameState) => {
    player.canvas = canvas;
    player.ctx = ctx;
    player.gameState = gameState;
    player.x = player.canvas.width / 2 + 15;
  },
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
    //apply player movement
    player.velX *= friction;
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
    var maxWidth = player.canvas.width - player.width;
    if (player.x >= maxWidth) {
      player.x = maxWidth;
    } else if (player.x <= 0) {
      player.x = 0;
    }
  },
  draw: () => {
    player.ctx.fill();
    player.ctx.fillStyle = player.color;
    player.ctx.fillRect(player.x, player.y, player.width, player.height);
  },
  end: () => {},
};

export default player;
