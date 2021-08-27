import { collisionCheck, getRandomInt, getRandomSign } from "./Utils";

class Objects {
  constructor(canvas, ctx, player, gameState, time, diffculties) {
    this.projectiles = [];
    this.maxSpawn = 50;
    this.spawned = 0;
    this.min_speed = 4;
    this.max_speed = 15;
    this.spawn_height = -2;

    this.canvas = canvas; //ref
    this.ctx = ctx; //ref
    this.time = time; //ref
    this.player = player; //ref
    this.gameState = gameState; //ref
    this.diffculties = diffculties; //ref
  }

  update() {
    this.UpdateProjectiles();
    this.TrySpawn();
  }

  TrySpawn() {
    if (this.spawned < this.maxSpawn) {
      var trySpawn = getRandomInt(
        1,
        this.diffculties.levels[this.gameState.diffculty].spawnChance
      );
      if (trySpawn == 1) {
        var object_x = getRandomInt(1, this.canvas.width);
        //calulate direction to player
        var distance = {
          x: object_x - this.player.x,
          y: this.spawn_height - this.player.y,
        };
        var length = Math.sqrt(
          distance.x * distance.x + distance.y * distance.y
        );
        var direction = {
          x: (distance.x / length) * -1,
          y: (distance.y / length) * -1,
        };
        //give variance to the x direction to some this
        if (getRandomInt(1, 3) == 1) {
          direction.x += (getRandomInt(1, 2) / 10) * getRandomSign();
        }
        this.projectiles.push({
          x: object_x,
          y: this.spawn_height,
          width: 20,
          height: 20,
          direction: {
            x: direction.x,
            y: direction.y,
          },
          speed: getRandomInt(this.min_speed, this.max_speed),
          color: "#ffffff",
          die: false,
        });
        this.spawned++;
      }
    }
  }

  UpdateProjectiles() {
    this.projectiles.map((o) => {
      o.x += o.direction.x * o.speed;
      o.y += o.direction.y * o.speed;
      o.die = o.y > this.canvas.height + 20 ? true : false;
      //update spawn counter if die is true
      this.spawned = o.die ? --this.spawned : this.spawned;
      if (collisionCheck(this.player, o)) {
        this.gameState.dead = true;
      }
      //check projectiles are hitting the player
    });
    //remove projectiles that are out of screen, 0n
    this.projectiles = this.projectiles.filter((item) => item.die == false);
  }
  draw() {
    this.projectiles.map((o) => {
      this.ctx.fillStyle = o.color;
      this.ctx.rect(o.x, o.y, o.width, o.height);
    });
  }
  end() {
    this.projectiles = [];
  }
}

// var Objects = {
//   projectiles: [],
//   maxSpawn: 50,
//   spawned: 0,
//   min_speed: 35,
//   max_speed: 50,
//   spawn_height: -2,
//   init: (canvas, ctx, player, gameState, time) => {
//     Objects.canvas = canvas; //ref
//     Objects.ctx = ctx; //ref
//     Objects.time = time; //ref
//     Objects.player = player;
//     Objects.gameState = gameState;
//   },
//   update: () => {
//     function TrySpawn() {
//       if (Objects.spawned < Objects.maxSpawn) {
//         var trySpawn = getRandomInt(1, 70);
//         if (trySpawn == 1) {
//           var object_x = getRandomInt(1, Objects.canvas.width);
//           //calulate direction to player
//           var distance = {
//             x: object_x - Objects.player.x,
//             y: Objects.spawn_height - Objects.player.y,
//           };
//           var length = Math.sqrt(
//             distance.x * distance.x + distance.y * distance.y
//           );
//           var direction = {
//             x: (distance.x / length) * -1,
//             y: (distance.y / length) * -1,
//           };
//           //give variance to the x direction to some Objects
//           if (getRandomInt(1, 4) == 1) {
//             direction.x += (getRandomInt(1, 2) / 10) * getRandomSign();
//           }
//           Objects.projectiles.push({
//             x: object_x,
//             y: Objects.spawn_height,
//             width: 20,
//             height: 20,
//             direction: {
//               x: direction.x,
//               y: direction.y,
//             },
//             speed: getRandomInt(Objects.min_speed, Objects.max_speed) / 100,
//             color: "#655643",
//             die: false,
//           });
//           Objects.spawned++;
//         }
//       }
//     }
//     function UpdateProjectiles() {
//       Objects.projectiles.map((o) => {
//         o.x += o.direction.x * o.speed * Objects.time.delta;
//         o.y += o.direction.y * o.speed * Objects.time.delta;
//         o.die = o.y > Objects.canvas.height + 20 ? true : false;
//         //update spawn counter if die is true
//         Objects.spawned = o.die ? --Objects.spawned : Objects.spawned;
//         if (collisionCheck(Objects.player, o)) {
//           Objects.gameState.dead = true;
//         }
//         //check projectiles are hitting the player
//       });
//       //remove projectiles that are out of screen, 0n
//       Objects.projectiles = Objects.projectiles.filter(
//         (item) => item.die == false
//       );
//     }

//     UpdateProjectiles();
//     TrySpawn();
//     // console.log(Objects.spawned);
//   },
//   draw: () => {
//     Objects.projectiles.map((o) => {
//       Objects.ctx.fillStyle = o.color;
//       Objects.ctx.rect(o.x, o.y, o.width, o.height);
//     });
//   },
//   end: () => {
//     Objects.projectiles = [];
//   },
// };

export default Objects;
