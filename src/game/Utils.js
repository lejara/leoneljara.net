function collisionCheck(shapeA, shapeB) {
  let hit = false;
  // get the vectors to check against
  let vX = shapeA.x + shapeA.width / 2 - (shapeB.x + shapeB.width / 2),
    vY = shapeA.y + shapeA.height / 2 - (shapeB.y + shapeB.height / 2),
    // add the half widths and half heights of the objects
    hWidths = shapeA.width / 2 + shapeB.width / 2,
    hHeights = shapeA.height / 2 + shapeB.height / 2;

  // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    // console.log("hit");
    hit = true;
  }
  return hit;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSign() {
  var ran = Math.floor(Math.random() * 2 - 1);
  ran = ran == 0 ? 1 : ran;
  return ran;
}

function backgroundStart(bg) {
  bg.current.particles.array.map((p) => {
    let speed_target = 6;
    let speed_incra = 1;
    let setMoveSpeed = () => {
      p.velocity.y = p.velocity.y + speed_incra;

      if (p.velocity.y < speed_target) {
        setTimeout(setMoveSpeed, 100);
      } else {
        p.velocity.y = speed_target;
      }
    };
    setMoveSpeed();
  });
}

function backgroundEnd(bg) {
  bg.current.particles.array.map((p) => {
    let speed_target = 0.8;
    let speed_incra = 0.5;
    let setMoveSpeed = () => {
      p.velocity.y = p.velocity.y - speed_incra;

      if (p.moveSpeed > speed_target) {
        setTimeout(setMoveSpeed, 50);
      } else {
        p.velocity.y = speed_target;
      }
    };
    setMoveSpeed();
  });
}

function backgroundWon(bg) {
  bg.current.particles.array.map((x) => {
    x.direction = -0.5;
    x.color.h.value = 65;
    x.color.s.value = 96;
    x.color.l.value = 64;
  });
}

function backgroundTrueWin(bg) {
  bg.current.particles.array.map((x) => {
    x.color.h.value = 126;
    x.color.s.value = 100;
    x.color.l.value = 50;
  });
}

function backgroundWhite(bg) {
  bg.current.particles.array.map((x) => {
    x.color.h.value = 0;
    x.color.s.value = 0;
    x.color.l.value = 100;
  });
}

export {
  collisionCheck,
  getRandomInt,
  getRandomSign,
  backgroundStart,
  backgroundEnd,
  backgroundWon,
  backgroundTrueWin,
  backgroundWhite,
};
