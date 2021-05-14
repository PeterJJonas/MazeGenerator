const initMazeHeight = 19;
const initMazeWidth = 16;

const maze = document.getElementById('maze');
const gameScreen = document.getElementById('gamescreen');
const enter = document.getElementById('enter');


function getMazeSize () {
  const getMazeHeight = document.getElementById("mazeHeight").value;
  const getMazeWidth = document.getElementById("mazeWidth").value;
  if (getMazeHeight && getMazeWidth) {
    while (maze.firstChild) {
      maze.firstChild.remove()
    }
    putMazeOnScreen(getMazeHeight, getMazeWidth);
  }
}

function checkScreenSize(mazeWidth) {
  const screenWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // const screenHight  = window.innerHight || document.documentElement.clientHight || document.body.clientHight;
  if ((mazeWidth * 20) + 40 > screenWidth) {
    gameScreen.style.justifyContent = 'left';
  } else {
    gameScreen.style.justifyContent = 'center';
  }
}

function drawMaze(mazeHeight, mazeWidth, randomMaze) {
  for (height = 0; height < mazeHeight; height++) {
    for (width = 0; width < mazeWidth; width++) {
      const div = document.createElement('div');
      if (randomMaze[height][width] === 1){
        maze.appendChild(div).classList.add('wall');
      } else {
        maze.appendChild(div).classList.add('corridor');
      }
    }
  }
}

function createMazeBorder(mazeHeight, mazeWidth) {
  const mazeHeightPixel = mazeHeight * 20;
  maze.style.height = mazeHeightPixel + 'px';
  const mazeWidthPixel = mazeWidth * 20;
  maze.style.width = mazeWidthPixel + 'px';
}

function createRandomWall() {
  const randomWall = Math.floor(Math.random() * 2);
  return randomWall;
}

function createPlainMaze(mazeHeight, mazeWidth) {
  const plainMaze = new Array(mazeHeight);
  for (height = 0; height < mazeHeight; height++) {
    plainMaze[height] = new Array(mazeWidth);
  }
  return plainMaze;
}

function generateRandomMaze(mazeHeight, mazeWidth) {
  const randomMaze = new createPlainMaze(mazeHeight, mazeWidth);
  for (width = 0; width < mazeWidth; width++) {
    for (height = 0; height < mazeHeight; height++) {
      const createWall = createRandomWall();
      randomMaze[height][width] = createWall;
    }
  }
  return randomMaze;
}

function putMazeOnScreen(mazeHeight,mazeWidth) {
  const randomMaze = new generateRandomMaze(mazeHeight, mazeWidth);
  createMazeBorder(mazeHeight, mazeWidth);
  checkScreenSize(mazeWidth);
  drawMaze(mazeHeight, mazeWidth, randomMaze);
}

putMazeOnScreen(initMazeHeight, initMazeWidth);
enter.addEventListener('click', getMazeSize);
