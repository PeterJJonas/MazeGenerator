const initMazeDepth = 19;
const initMazeWidth = 16;

const maze = document.getElementById('maze');
const generatemaze = document.getElementById('generatemaze');
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

function calculateMazeSize(mazeDepth, mazeWidth) {
  const mazeDepthInPixel = mazeDepth * 20;
  maze.style.height = mazeDepthInPixel + 'px';
  const mazeWidthInPixel = mazeWidth * 20;
  maze.style.width = mazeWidthInPixel + 'px';
}

function createPlainMaze(mazeDepth, mazeWidth) {
  const plainMaze = new Array(mazeDepth);
  for (depth = 0; depth < mazeDepth; depth++) {
    plainMaze[depth] = new Array(mazeWidth);
  }
   for (depth = 0; depth < mazeDepth; depth++) {
    for (width = 0; width < mazeWidth; width++) {
      plainMaze[depth][width] = 1;
    }
  }
  return plainMaze;
}

function generateMazeBlueprint(mazeDepth, mazeWidth) {
  const mazeBluePrint = new createPlainMaze(mazeDepth, mazeWidth);
  let isCravlingDone = 0;
  let mazeDepthCrawl = Math.floor(mazeDepth / 2);
  let mazeWidthCrawl = Math.floor(mazeWidth / 2);
  while (isCravlingDone === 0) {
    mazeBluePrint[mazeDepthCrawl][mazeWidthCrawl] = 0;
    if (Math.floor(Math.random() * 2) === 0) {
      mazeDepthCrawl += (Math.floor(Math.random() * 3) -1);
    }
    else {
      mazeWidthCrawl += (Math.floor(Math.random() * 3) -1);
    }
    if (mazeDepthCrawl < 0 || mazeDepthCrawl >= mazeDepth || mazeWidthCrawl < 0 || mazeWidthCrawl >= mazeWidth) {
      isCravlingDone = 1;
    }
  }
  return mazeBluePrint;
}

function putMazeOnScreen(mazeDepth,mazeWidth) {
  const mazeBluePrint = new generateMazeBlueprint(mazeDepth, mazeWidth);
  calculateMazeSize(mazeDepth, mazeWidth);
  checkScreenSize(mazeWidth);
  drawMaze(mazeDepth, mazeWidth, mazeBluePrint);
}

putMazeOnScreen(initMazeDepth, initMazeWidth);

generatemaze.addEventListener('click', getMazeSize);

mazeDepth.addEventListener('keyup',function(hitEnter) {
    if (hitEnter.keyCode === 13) {
      const depthNumber = mazeDepth.value * 1;
      const widthNumber = mazeWidth.value * 1;
      if (100 > depthNumber && depthNumber> 0) {
        if ((100 > widthNumber && widthNumber > 0)) {
          document.getElementById('generatemaze').focus();
          getMazeSize();
        } else {
          document.getElementById('mazeWidth').focus();
        }
      }
  }
});

mazeWidth.addEventListener('keyup',function(hitEnter) {
    if (hitEnter.keyCode === 13) {
      const depthNumber = mazeDepth.value * 1;
      const widthNumber = mazeWidth.value * 1;
      if (100 > widthNumber && widthNumber > 0) {
        if (100 > depthNumber && depthNumber> 0) {
          document.getElementById('generatemaze').focus();
          getMazeSize();
        } else {
          document.getElementById('mazeDepth').focus();
        }
      }
  }
});
