let mazeHeight = 11;
let mazeWidth = 13;
const maze = document.getElementById('maze');

const drawMaze = (mazeHeight, mazeWidth) => {
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

const createMazeBorder = (mazeHeight, mazeWidth) => {
  const mazeHeightPixel = mazeHeight * 20;
  maze.style.height = mazeHeightPixel + 'px';
  const mazeWidthPixel = mazeWidth * 20;
  maze.style.width = mazeWidthPixel + 'px';
}

const createRandomWall = () => {
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

const randomMaze = new generateRandomMaze(mazeHeight, mazeWidth);

createMazeBorder(mazeHeight, mazeWidth);

drawMaze(mazeHeight, mazeWidth);
