let mazeHeight = 8;
let mazeWidth = 8;

let maze = document.getElementById('maze');
let corridor = document.getElementById('corridor');
let ul = document.querySelector("ul");

function createPlainMaze(mazeHeight, mazeWidth) {
  let plainMaze = new Array(mazeHeight);
  for (let height = 0; height < mazeHeight; height++) {
    plainMaze[height] = new Array(mazeWidth);
  }
  console.table(plainMaze);
  return plainMaze;
}

function generateMaze(mazeHeight, mazeWidth) {
  let randomMaze = new createPlainMaze(mazeHeight, mazeWidth);
  for (let width = 0; width < mazeWidth; width++) {
    for (let height = 0; height < mazeHeight; height++) {
      let randomWall = getRandomWall();
      randomMaze[height][width] = randomWall;
    }
  }
  return randomMaze;
}

function getRandomWall() {
  let randomWall = Math.floor(Math.random() * 2);
  return randomWall;
}

function drawMaze(mazeHeight, mazeWidth) {
  for (width = 0; width < mazeWidth; width++) {
    for (height = 0; height < mazeHeight; height++) {
      var div = document.createElement('div');
      if (randomMaze[width][height] === 1){
        ul.appendChild(div).classList.add('wall');
      } else {
        ul.appendChild(div).classList.add('corridor');
      }
    }
  }
}

let randomMaze = new generateMaze(mazeHeight, mazeWidth);
// console.table(randomMaze);

drawMaze(mazeHeight, mazeWidth);
