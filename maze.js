let mazeHeight = 11;
let mazeWidth = 13;

const maze = document.getElementById('maze');

const createMazeBorder = (mazeHeight, mazeWidth) => {
  const mazeHeightPixel = mazeHeight * 20;
  maze.style.height = mazeHeightPixel + 'px';
  const mazeWidthPixel = mazeWidth * 20;
  maze.style.width = mazeWidthPixel + 'px';
}

function createPlainMaze(mazeHeight, mazeWidth) {
  const plainMaze = new Array(mazeHeight);
  for (height = 0; height < mazeHeight; height++) {
    plainMaze[height] = new Array(mazeWidth);
  }
  return plainMaze;
}

function generateMaze(mazeHeight, mazeWidth) {
  const randomMaze = new createPlainMaze(mazeHeight, mazeWidth);
  for (width = 0; width < mazeWidth; width++) {
    for (height = 0; height < mazeHeight; height++) {
      const makeWall = getRandomWall();
      randomMaze[height][width] = makeWall;
    }
  }
  return randomMaze;
}

function getRandomWall() {
  const randomWall = Math.floor(Math.random() * 2);
  return randomWall;
}

function drawMaze(mazeHeight, mazeWidth) {
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

const randomMaze = new generateMaze(mazeHeight, mazeWidth);
console.table(randomMaze);

createMazeBorder(mazeHeight, mazeWidth);

drawMaze(mazeHeight, mazeWidth);
