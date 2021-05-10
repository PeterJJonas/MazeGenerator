let mazeWidth = 8;
let mazeHeight = 8;

let maze = document.getElementById('maze');
let corridor = document.getElementById('corridor');
let ul = document.querySelector("ul");
// let li = document.getElementsByTagName("li");


function drawMaze() {
	// div.appendChild(document.createTextNode('AAA'));
  for (w = 0; w < mazeWidth; w++) {
    var div = document.createElement('div');
    ul.appendChild(div).classList.add('corridor');
    console.log(w);
  }
}

function reDrawMaze() {
    corridor.style.background = 'red';
}

drawMaze();
