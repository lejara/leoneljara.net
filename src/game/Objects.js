import { collisionCheck, getRandomInt } from "./Utils";

var objects = {
  projectiles: [],
  maxSpawn: 50,
  spawned: 0,
  min_speed: 4,
  max_speed: 15,
  spawn_height: -2,
  init: (canvas, ctx, player, gameState) => {
    objects.canvas = canvas;
    objects.ctx = ctx;
    objects.player = player;
    objects.gameState = gameState;
  },
  update: () => {
    function TrySpawn() {
      if (objects.spawned < objects.maxSpawn) {
        var trySpawn = getRandomInt(1, 70);
        if (trySpawn == 1) {
          var object_x = getRandomInt(1, objects.canvas.width);
          //calulate direction to player
          var distance = {
            x: object_x - objects.player.x,
            y: objects.spawn_height - objects.player.y,
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
        o.die = o.y > objects.canvas.height + 20 ? true : false;
        //update spawn counter if die is true
        objects.spawned = o.die ? --objects.spawned : objects.spawned;
        if (collisionCheck(objects.player, o)) {
          objects.gameState.dying = true;
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
      objects.ctx.fillStyle = o.color;
      objects.ctx.rect(o.x, o.y, o.width, o.height);
    });
  },
  end: () => {
    objects.projectiles = [];
  },
};

export default objects;
