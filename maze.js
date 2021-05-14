const initMazeDepth = 19;
const initMazeWidth = 16;

const maze = document.getElementById('maze');
const gameScreen = document.getElementById('gamescreen');
const enter = document.getElementById('enter');


function getMazeSize () {
  const getMazeDepth = document.getElementById("mazeDepth").value;
  const getMazeWidth = document.getElementById("mazeWidth").value;
  const mazeDepth = getMazeDepth * 1;
  const mazeWidth = getMazeWidth * 1;
  if (Number.isFinite(mazeDepth) && Number.isFinite(mazeWidth)) {
    if (mazeDepth && mazeWidth) {
      while (maze.firstChild) {
        maze.firstChild.remove()
      }
      putMazeOnScreen(mazeDepth, mazeWidth);
    }
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

function drawMaze(mazeDepth, mazeWidth, randomMaze) {
  for (Depth = 0; Depth < mazeDepth; Depth++) {
    for (width = 0; width < mazeWidth; width++) {
      const div = document.createElement('div');
      if (randomMaze[Depth][width] === 1){
        maze.appendChild(div).classList.add('wall');
      } else {
        maze.appendChild(div).classList.add('corridor');
      }
    }
  }
}

function createMazeBorder(mazeDepth, mazeWidth) {
  const mazeDepthPixel = mazeDepth * 20;
  maze.style.Depth = mazeDepthPixel + 'px';
  const mazeWidthPixel = mazeWidth * 20;
  maze.style.width = mazeWidthPixel + 'px';
}

function createRandomWall() {
  const randomWall = Math.floor(Math.random() * 2);
  return randomWall;
}

function createPlainMaze(mazeDepth, mazeWidth) {
  const plainMaze = new Array(mazeDepth);
  for (Depth = 0; Depth < mazeDepth; Depth++) {
    plainMaze[Depth] = new Array(mazeWidth);
  }
  return plainMaze;
}

function generateRandomMaze(mazeDepth, mazeWidth) {
  const randomMaze = new createPlainMaze(mazeDepth, mazeWidth);
  for (width = 0; width < mazeWidth; width++) {
    for (Depth = 0; Depth < mazeDepth; Depth++) {
      const createWall = createRandomWall();
      randomMaze[Depth][width] = createWall;
    }
  }
  return randomMaze;
}

function putMazeOnScreen(mazeDepth,mazeWidth) {
  const randomMaze = new generateRandomMaze(mazeDepth, mazeWidth);
  createMazeBorder(mazeDepth, mazeWidth);
  checkScreenSize(mazeWidth);
  drawMaze(mazeDepth, mazeWidth, randomMaze);
}

putMazeOnScreen(initMazeDepth, initMazeWidth);



enter.addEventListener('click', getMazeSize);

mazeDepth.addEventListener('keyup',function(e) {
    if (e.keyCode === 13) {
      const isNumber = mazeDepth.value * 1;
      if (mazeDepth.value && Number.isFinite(isNumber) && isNumber > 0) {
        document.getElementById('mazeWidth').focus();
      } else {
        return;
      }
  }
});

mazeWidth.addEventListener('keyup',function(e) {
    if (e.keyCode === 13) {
    const isNumber = mazeWidth.value * 1;
      if (mazeWidth.value && Number.isFinite(isNumber) && isNumber > 0) {
        document.getElementById('enter').focus();
        getMazeSize();
      }
  }
});
