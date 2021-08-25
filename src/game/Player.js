import PlayerInput from "./Input";
var keys = [],
  floor_height = 566,
  friction = 0.8,
  gravity = 0.012;

class Player {
  constructor(canvas, ctx, gameState, time) {
    this.x = 0;
    this.y = 520;
    this.width = 25;
    this.height = 25;
    this.speed = 0.05;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.color = "#fdb215";
    this.jump_height = 0.37;

    this.playerInput = PlayerInput;
    this.playerInput.init(canvas);

    this.canvas = canvas; //ref
    this.ctx = ctx; //ref
    this.gameState = gameState; //ref
    this.time = time; //ref

    this.x = this.canvas.width / 2;
  }

  update() {
    // Check Input for movment
    if (this.playerInput.events.jump) {
      // up arrow or space
      if (!this.jumping && this.grounded) {
        this.jumping = true;
        this.grounded = false;
        this.velY = -this.jump_height; //how high to jump
      }
    }
    if (this.playerInput.events.moveRight) {
      this.velX += this.speed;
    }
    if (this.playerInput.events.moveLeft) {
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
  end() {
    this.playerInput.end();
  }
}

export default Player;
