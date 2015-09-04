var CODES = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

var pressed = {
  left: false,
  up: false,
  right: false,
  down: false
};

function keysPressed () {
  return (pressed.left || pressed.right || pressed.up || pressed.down);
}

function showPose (direction) {
  ['initial', 'left', 'right', 'up', 'down'].forEach(function(el) {
    document.getElementById(el).style.visibility = 'hidden';
  });

  if (direction) {
    document.getElementById(direction).style.visibility = 'visible';
  } else {
    document.getElementById('initial').style.visibility = 'visible';
  }
}

function tell (evt) {
  var direction = CODES[evt.which];

  if (evt.type === 'keydown') {
    pressed[direction] = true;
    showPose(direction);
  } else {
    pressed[direction] = false;

    if (!keysPressed()) {
      showPose(false);
    }
  }
}

$(document).bind('keydown keyup', tell);