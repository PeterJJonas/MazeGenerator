const initMazeDepth = 19;
const initMazeWidth = 16;

const maze = document.getElementById('maze');
const generatemaze = document.getElementById('generatemaze');
const mazeDepth = document.getElementById('mazeDepth');
const mazeWidth = document.getElementById('mazeWidth');

function playerController(mazeBluePrint, playerPosDepth, playerPosWidth) {
  let playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
  document.getElementById(playerPosition).style.backgroundColor='red';
  document.onkeydown = function(gameInput) {
    switch (gameInput.keyCode) {
       case 37: // Left Arrow
        playerOldPosWidth = playerPosWidth;
        playerPosWidth = playerPosWidth - 1;
        if (mazeBluePrint[playerPosDepth][playerPosWidth] === 0) {
          playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
          document.getElementById(playerPosition).style.backgroundColor='red';
          playerOldPosition = ('corridor-D' + playerPosDepth + 'W' + playerOldPosWidth);
          document.getElementById(playerOldPosition).style.backgroundColor='';
        } else {
          playerPosWidth = playerOldPosWidth;
        }
        break;
       case 38: // Up Arrow
        playerOldPosDepth = playerPosDepth;
        playerPosDepth = playerPosDepth - 1;
        if (playerPosDepth >= 0 && mazeBluePrint[playerPosDepth][playerPosWidth] === 0) {
          playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
          document.getElementById(playerPosition).style.backgroundColor='red';
          playerOldPosition = ('corridor-D' + playerOldPosDepth + 'W' + playerPosWidth);
          document.getElementById(playerOldPosition).style.backgroundColor='';
        } else {
          playerPosDepth = playerOldPosDepth;
        }
        break;
       case 39: //Right Arrow
        playerOldPosWidth = playerPosWidth;
        playerPosWidth = playerPosWidth + 1;
        if (mazeBluePrint[playerPosDepth][playerPosWidth] === 0) {
          playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
          document.getElementById(playerPosition).style.backgroundColor='red';
          playerOldPosition = ('corridor-D' + playerPosDepth + 'W' + playerOldPosWidth);
          document.getElementById(playerOldPosition).style.backgroundColor='';
        } else {
          playerPosWidth = playerOldPosWidth;
        }
        break;
       case 40: // Down Arrow
       const mazeDepth = mazeBluePrint.length;
       playerOldPosDepth = playerPosDepth;
       playerPosDepth = playerPosDepth + 1;
       if (playerPosDepth < mazeDepth && mazeBluePrint[playerPosDepth][playerPosWidth] === 0 ) {
         playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
         document.getElementById(playerPosition).style.backgroundColor='red';
         playerOldPosition = ('corridor-D' + playerOldPosDepth + 'W' + playerPosWidth);
         document.getElementById(playerOldPosition).style.backgroundColor='';
       } else {
         playerPosDepth = playerOldPosDepth;
       }
       break;
    }
  };
}


// function getEmptyCorridors(mazeBluePrint) {
//   const mazeDepth = mazeBluePrint.length;
//   const mazeWidth = mazeBluePrint[0].length;
//   let i = 0
//   let emptyCorridors = new Array;
//   for (depth = 0; depth < mazeDepth; depth++) {
//     for (width = 0; width < mazeWidth; width++) {
//       if (mazeBluePrint[depth][width] === 0) {
//         emptyCorridors[i] = [depth, width];
//         i++;
//       }
//     }
//   }
//   return emptyCorridors;
// }

function randomPosition (emptyCorridors) {
  const maxPosition = (emptyCorridors.length) -1;
  const position = randomIntNumber(1, maxPosition);
  return emptyCorridors[position];
}

function randomIntNumber(min, max) {
  const randomIntNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomIntNumber;
}

function getMazeSize() {
  const getMazeDepth = document.getElementById("mazeDepth").value;
  const getMazeWidth = document.getElementById("mazeWidth").value;
  const mazeDepth = Math.round(getMazeDepth * 1);
  const mazeWidth = Math.round(getMazeWidth * 1);
  if (100 > mazeDepth && mazeDepth > 0 && 100 > mazeWidth && mazeWidth > 0) {
    while (maze.firstChild) {
      maze.firstChild.remove()
    }
    putMazeOnScreen(mazeDepth, mazeWidth);
  }
}

function checkScreenSize(mazeWidth) {
  const gameScreen = document.getElementById('gamescreen');
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if ((mazeWidth * 20) + 40 > screenWidth) {
    gameScreen.style.justifyContent = 'left';
  } else {
    gameScreen.style.justifyContent = 'center';
  }
}

function drawMaze(mazeDepth, mazeWidth, mazeBluePrint) {
  let emptyCorridors = new Array();
  let isCorridor = 0
  for (depth = 0; depth < mazeDepth; depth++) {
    for (width = 0; width < mazeWidth; width++) {
      const div = document.createElement('div');
      if (mazeBluePrint[depth][width] === 1) {
        maze.appendChild(div).classList.add('wall');
        maze.appendChild(div).id = ('wall-D'+depth+'W'+width);
      } else {
        maze.appendChild(div).classList.add('corridor');
        maze.appendChild(div).id = ('corridor-D'+depth+'W'+width);
        emptyCorridors[isCorridor] = [depth, width];
        isCorridor++;
      }
    }
  }
  return(emptyCorridors);
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
    if (randomIntNumber(0, 1) === 0) {
      mazeDepthCrawl += (randomIntNumber(-1, 1));
    } else {
      mazeWidthCrawl += (randomIntNumber(-1, 1));
    }
    if (mazeDepthCrawl < 1 || mazeDepthCrawl >= mazeDepth -1 || mazeWidthCrawl < 1 || mazeWidthCrawl >= mazeWidth -1) {
      isCravlingDone = 1;
    }
  }
  return mazeBluePrint;
}

function putMazeOnScreen(mazeDepth, mazeWidth) {
  const mazeBluePrint = new generateMazeBlueprint(mazeDepth, mazeWidth);
  calculateMazeSize(mazeDepth, mazeWidth);
  checkScreenSize(mazeWidth);
  const emptyCorridors = drawMaze(mazeDepth, mazeWidth, mazeBluePrint);
  const playerStartPosition = randomPosition(emptyCorridors);
  playerController(mazeBluePrint, playerStartPosition[0], playerStartPosition[1]);
}

putMazeOnScreen(initMazeDepth, initMazeWidth);

generatemaze.addEventListener('click', getMazeSize);

mazeDepth.addEventListener('keyup', function(hitEnter) {
  if (hitEnter.keyCode === 13) {
    const depthNumber = mazeDepth.value * 1;
    const widthNumber = mazeWidth.value * 1;
    if (100 > depthNumber && depthNumber >= 5) {
      if (100 > widthNumber && widthNumber >= 5) {
        document.getElementById('generatemaze').focus();
        getMazeSize();
      } else {
        document.getElementById('mazeWidth').focus();
      }
    }
  }
});

mazeWidth.addEventListener('keyup', function(hitEnter) {
  if (hitEnter.keyCode === 13) {
    const depthNumber = mazeDepth.value * 1;
    const widthNumber = mazeWidth.value * 1;
    if (100 > widthNumber && widthNumber >= 5) {
      if (100 > depthNumber && depthNumber >= 5) {
        document.getElementById('generatemaze').focus();
        getMazeSize();
      } else {
        document.getElementById('mazeDepth').focus();
      }
    }
  }
});
