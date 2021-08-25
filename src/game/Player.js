var keys = [],
  floor_height = 646,
  friction = 0.8,
  gravity = 0.012;

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

class Player {
  constructor(canvas, ctx, gameState, time) {
    this.x = 0;
    this.y = 640;
    this.width = 25;
    this.height = 25;
    this.speed = 0.05;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.color = "#fdb215";
    this.jump_height = 0.37;

    this.canvas = canvas; //ref
    this.ctx = ctx; //ref
    this.gameState = gameState; //ref
    this.time = time; //ref

    this.x = this.canvas.width / 2;
    this.y = 600;
  }

  update() {
    // Check Input for movment
    if (keys[38] || keys[32] || keys[87]) {
      // up arrow or space
      if (!this.jumping && this.grounded) {
        this.jumping = true;
        this.grounded = false;
        this.velY = -this.jump_height; //how high to jump
      }
    }
    if (keys[39] || keys[68]) {
      this.velX += this.speed;
    }
    if (keys[37] || keys[65]) {
      this.velX -= this.speed;
    }
    //apply player movement
    this.velX *= friction;
    this.x += this.velX * this.time.delta;
    this.y += this.velY * this.time.delta;

    //Floor check
    if (this.y > floor_height) {
      this.y = floor_height;
      this.grounded = true;
    } else {
      this.velY += gravity;
      this.grounded = false;
      this.jumping = false;
    }

    //Bounds Check
    var maxWidth = this.canvas.width - this.width;
    if (this.x >= maxWidth) {
      this.x = maxWidth;
    } else if (this.x <= 0) {
      this.x = 0;
    }
  }
  draw() {
    this.ctx.fill();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  end() {}
}

// var Player = {
//   x: 0,
//   y: 640,
//   width: 25,
//   height: 25,
//   speed: 0.05,
//   velX: 0,
//   velY: 0,
//   jumping: false,
//   grounded: false,
//   color: "#fdb215",
//   jump_height: 0.37,
//   init: (canvas, ctx, gameState, time) => {
//     Player.canvas = canvas; //ref
//     Player.ctx = ctx; //ref
//     Player.gameState = gameState; //ref
//     Player.time = time; //ref
//     Player.x = Player.canvas.width / 2;
//     Player.y = 600;
//   },
//   update: () => {
//     // Check Input for movment
//     if (keys[38] || keys[32] || keys[87]) {
//       // up arrow or space
//       if (!Player.jumping && Player.grounded) {
//         Player.jumping = true;
//         Player.grounded = false;
//         Player.velY = -Player.jump_height; //how high to jump
//       }
//     }
//     if (keys[39] || keys[68]) {
//       Player.velX += Player.speed;
//     }
//     if (keys[37] || keys[65]) {
//       Player.velX -= Player.speed;
//     }
//     //apply player movement
//     Player.velX *= friction;
//     Player.x += Player.velX * Player.time.delta;
//     Player.y += Player.velY * Player.time.delta;

//     //Floor check
//     if (Player.y > floor_height) {
//       Player.y = floor_height;
//       Player.grounded = true;
//     } else {
//       Player.velY += gravity;
//       Player.grounded = false;
//       Player.jumping = false;
//     }

//     //Bounds Check
//     var maxWidth = Player.canvas.width - Player.width;
//     if (Player.x >= maxWidth) {
//       Player.x = maxWidth;
//     } else if (Player.x <= 0) {
//       Player.x = 0;
//     }
//   },
//   draw: () => {
//     Player.ctx.fill();
//     Player.ctx.fillStyle = Player.color;
//     Player.ctx.fillRect(Player.x, Player.y, Player.width, Player.height);
//   },
//   end: () => {},
// };

export default Player;
