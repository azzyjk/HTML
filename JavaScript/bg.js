const body = document.querySelector('body');

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function changeImage() {
  let imgNumber = genRandom();
  let IMG = document.getElementsByTagName('img')[0];

  IMG.src = `./images/${imgNumber + 1}.jpg`;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
  setInterval(changeImage, 5000);
}

init();
