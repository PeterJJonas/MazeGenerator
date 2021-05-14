const initMazeDepth = 19;
const initMazeWidth = 16;

const maze = document.getElementById('maze');
const enter = document.getElementById('enter');
const mazeDepth = document.getElementById('mazeDepth');
const mazeWidth = document.getElementById('mazeWidth');

function getMazeSize () {
  const getMazeDepth = document.getElementById("mazeDepth").value;
  const getMazeWidth = document.getElementById("mazeWidth").value;
  const mazeDepth = Math.round(getMazeDepth * 1);
  const mazeWidth = Math.round(getMazeWidth * 1);
  if (100 > mazeDepth && mazeDepth> 0 && 100 > mazeWidth && mazeWidth > 0) {
    while (maze.firstChild) {
      maze.firstChild.remove()
    }
    putMazeOnScreen(mazeDepth, mazeWidth);
  }
}

function checkScreenSize(mazeWidth) {
  const gameScreen = document.getElementById('gamescreen');
  const screenWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if ((mazeWidth * 20) + 40 > screenWidth) {
    gameScreen.style.justifyContent = 'left';
  } else {
    gameScreen.style.justifyContent = 'center';
  }
}

function drawMaze(mazeDepth, mazeWidth, mazeBluePrint) {
  for (depth = 0; depth < mazeDepth; depth++) {
    for (width = 0; width < mazeWidth; width++) {
      const div = document.createElement('div');
      if (mazeBluePrint[depth][width] === 1){
        maze.appendChild(div).classList.add('wall');
      } else {
        maze.appendChild(div).classList.add('corridor');
      }
    }
  }
}

function createMazeBorder(mazeDepth, mazeWidth) {
  const mazeDepthInPixel = mazeDepth * 20;
  maze.style.Depth = mazeDepthInPixel + 'px';
  const mazeWidthInPixel = mazeWidth * 20;
  maze.style.width = mazeWidthInPixel + 'px';
}

function createRandomWall() {
  const randomWall = Math.floor(Math.random() * 2);
  return randomWall;
}

function createPlainMaze(mazeDepth, mazeWidth) {
  const plainMaze = new Array(mazeDepth);
  for (depth = 0; depth < mazeDepth; depth++) {
    plainMaze[depth] = new Array(mazeWidth);
  }
  return plainMaze;
}

function generateRandomMaze(mazeDepth, mazeWidth) {
  const randomMaze = new createPlainMaze(mazeDepth, mazeWidth);
  for (width = 0; width < mazeWidth; width++) {
    for (depth = 0; depth < mazeDepth; depth++) {
      const createWall = createRandomWall();
      randomMaze[depth][width] = createWall;
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
      const depthNumber = mazeDepth.value * 1;
      const widthNumber = mazeWidth.value * 1;
      if (100 > depthNumber && depthNumber> 0) {
        if ((100 > widthNumber && widthNumber > 0)) {
          document.getElementById('enter').focus();
          getMazeSize();
        } else {
          document.getElementById('mazeWidth').focus();
        }
      }
  }
});

mazeWidth.addEventListener('keyup',function(e) {
    if (e.keyCode === 13) {
      const widthNumber = mazeWidth.value * 1;
      const depthNumber = mazeDepth.value * 1;
      if (100 > widthNumber && widthNumber > 0) {
        if (100 > depthNumber && depthNumber> 0) {
          document.getElementById('enter').focus();
          getMazeSize();
        } else {
          document.getElementById('mazeDepth').focus();
        }
      }
  }
});
