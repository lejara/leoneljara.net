class Input {
  constructor() {}
  init(canvas) {
    this.canvas = canvas;
    this.events = {
      jump: false,
      moveLeft: false,
      moveRight: false,
      exit: false,
    };
    this.middlePoint = canvas.width / 2;
    this.latestTap = 0;
    this.doubleTouchRegion = { x: 50, y: 50 };
    this.lastTouchPoint;

    document.body.addEventListener("keydown", keyDown, false);
    document.body.addEventListener("keyup", keyUp, false);

    document.body.addEventListener("touchstart", touchStart, false);
    document.body.addEventListener("touchmove", touchMove, false);
    document.body.addEventListener("touchend", touchEnd, false); //all vars are false
    document.body.addEventListener("touchcancel", touchEnd, false);
  }

  end() {
    document.body.removeEventListener("keydown", keyDown);
    document.body.removeEventListener("keyup", keyUp);

    document.body.removeEventListener("touchstart", touchStart);
    document.body.removeEventListener("touchmove", touchMove);
    document.body.removeEventListener("touchend", touchEnd);
    document.body.removeEventListener("touchcancel", touchEnd);
  }
}

var PlayerInput = new Input();

function keyDown(e) {
  keyCheck(e, true);
}
function keyUp(e) {
  keyCheck(e, false);
}

function touchStart(e) {
  // e.preventDefault();
  doubleTapCheck(e);
  touchCheck(e);
}
function touchMove(e) {
  touchCheck(e);
}
function touchEnd(e) {
  PlayerInput.events.jump = false;
  PlayerInput.events.moveLeft = false;
  PlayerInput.events.moveRight = false;
}

function touchCheck(e) {
  var x_loc = e.changedTouches[0].pageX;
  // console.log(x_loc + " :: " + PlayerInput.middlePoint);
  if (x_loc < PlayerInput.middlePoint) {
    PlayerInput.events.moveRight = false;
    PlayerInput.events.moveLeft = true;
  } else if (x_loc > PlayerInput.middlePoint) {
    PlayerInput.events.moveLeft = false;
    PlayerInput.events.moveRight = true;
  }
}

function doubleTapCheck(e) {
  var touchPoint = e.changedTouches[0];

  if (PlayerInput.lastTouchPoint !== undefined) {
    var x_range = Math.abs(touchPoint.pageX - PlayerInput.lastTouchPoint.pageX);
    var y_range = Math.abs(touchPoint.pageY - PlayerInput.lastTouchPoint.pageY);
    if (
      x_range <= PlayerInput.doubleTouchRegion.x &&
      y_range <= PlayerInput.doubleTouchRegion.y
    ) {
      var now = new Date().getTime();
      var timesince = now - PlayerInput.latestTap;
      if (timesince < 600 && timesince > 0) {
        // double tap
        PlayerInput.events.jump = true;
        setTimeout(() => {
          PlayerInput.events.jump = false;
        }, 100);
      }
    }
  }

  PlayerInput.lastTouchPoint = touchPoint;
  PlayerInput.latestTap = new Date().getTime();
}

function keyCheck(e, value) {
  if (e.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (e.key) {
    case "Up":
    case "ArrowUp":
    case "w":
    case " ":
      PlayerInput.events.jump = value;
      e.preventDefault();
      break;
    case "ArrowDown":
      e.preventDefault();
      break;
    case "Left":
    case "ArrowLeft":
    case "a":
      PlayerInput.events.moveLeft = value;
      e.preventDefault();
      break;
    case "Right":
    case "ArrowRight":
    case "d":
      PlayerInput.events.moveRight = value;
      e.preventDefault();
      break;
    case "Escape":
      PlayerInput.events.exit = true;
      break;
  }
}

export default PlayerInput;
