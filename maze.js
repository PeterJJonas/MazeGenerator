let mazeWidth = 8;
let mazeHeight = 10;

let maze = document.getElementById('maze');
let corridor = document.getElementById('corridor');
let ul = document.querySelector("ul");

function createPlainMaze(mazeHeight, mazeWidth) {
  let plainMaze = new Array(mazeHeight);
  for (let width = 0; width < mazeHeight; width++) {
    plainMaze[width] = new Array(mazeWidth);
  }
  return plainMaze;
}

function generateMaze(mazeHeight, mazeWidth) {
  let randomMaze = new createPlainMaze(mazeHeight, mazeWidth);
  for (let height = 0; height < mazeHeight; height++) {
    for (let width = 0; width < mazeWidth; width++) {
      randomMaze[height][width] = 0;
    }
  }
  return randomMaze;
}

function drawMaze(mazeHeight, mazeWidth) {
  for (w = 0; w < mazeWidth; w++) {
    var div = document.createElement('div');
    ul.appendChild(div).classList.add('wall');
  }
}

let randomMaze = new generateMaze(mazeHeight, mazeWidth);

console.table(randomMaze);

drawMaze(2, 2);
