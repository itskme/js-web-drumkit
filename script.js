const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach(pad => {
  pad.addEventListener('click', () => {
    playSound(pad.dataset.key);
  });
});

document.addEventListener('keydown', event => {
  playSound(event.keyCode);
});

function playSound(keyCode) {
  switch (keyCode) {
    case 65:
      var audio = new Audio('sounds/A.wav');
      audio.play();
      break;
    case 83:
      var audio = new Audio('sounds/S.wav');
      audio.play();
      break;
    case 68:
      var audio = new Audio('sounds/D.wav');
      audio.play();
      break;
    case 70:
      var audio = new Audio('sounds/F.wav');
      audio.play();
      break;
    case 71:
      var audio = new Audio('sounds/G.wav');
      audio.play();
      break;
    case 72:
      var audio = new Audio('sounds/H.wav');
      audio.play();
      break;
    case 74:
      var audio = new Audio('sounds/J.wav');
      audio.play();
      break;
    case 75:
      var audio = new Audio('sounds/K.wav');
      audio.play();
      break;
    case 76:
      var audio = new Audio('sounds/L.wav');
      audio.play();
      break;
    default:
      console.log('Invalid key');
  }
}