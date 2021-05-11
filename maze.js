let mazeHeight = 11;
let mazeWidth = 13;

let maze = document.getElementById('maze');

function createMazeBorder(mazeHeight, mazeWidth) {
  let mazeHeightPixel = mazeHeight * 20;
  maze.style.height = mazeHeightPixel + 'px';
  let mazeWidthPixel = mazeWidth * 20;
  maze.style.width = mazeWidthPixel + 'px';
}

function createPlainMaze(mazeHeight, mazeWidth) {
  let plainMaze = new Array(mazeHeight);
  for (let height = 0; height < mazeHeight; height++) {
    plainMaze[height] = new Array(mazeWidth);
  }
  return plainMaze;
}

function generateMaze(mazeHeight, mazeWidth) {
  let randomMaze = new createPlainMaze(mazeHeight, mazeWidth);
  for (let width = 0; width < mazeWidth; width++) {
    for (let height = 0; height < mazeHeight; height++) {
      let makeWall = getRandomWall();
      randomMaze[height][width] = makeWall;
    }
  }
  return randomMaze;
}

function getRandomWall() {
  let randomWall = Math.floor(Math.random() * 2);
  return randomWall;
}

function drawMaze(mazeHeight, mazeWidth) {
  for (height = 0; height < mazeHeight; height++) {
    for (width = 0; width < mazeWidth; width++) {
      var div = document.createElement('div');
      if (randomMaze[height][width] === 1){
        maze.appendChild(div).classList.add('wall');
      } else {
        maze.appendChild(div).classList.add('corridor');
      }
    }
  }
}

let randomMaze = new generateMaze(mazeHeight, mazeWidth);
console.table(randomMaze);

createMazeBorder(mazeHeight, mazeWidth);

drawMaze(mazeHeight, mazeWidth);
