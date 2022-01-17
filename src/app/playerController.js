export const playerController = (mazeBluePrint, playerPosDepth, playerPosWidth) => {
  let playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
  document.getElementById(playerPosition).style.backgroundColor='red';
  document.onkeydown = function(gameInput) {
    switch (gameInput.key) {
       case 'a': // Left
       goLeft();
        break;
       case 'w': // Up
       goUp();
        break;
       case 'd': //Right
       goRight();
        break;
       case 's': // Down
       goDown();
     }
  };

  upButton.addEventListener('click', goUp);
  downButton.addEventListener('click', goDown);
  leftButton.addEventListener('click', goLeft);
  rightButton.addEventListener('click', goRight);

  function goUp() {
    let playerOldPosDepth = playerPosDepth;
    playerPosDepth = playerPosDepth - 1;
    if (playerPosDepth >= 0 && mazeBluePrint[playerPosDepth][playerPosWidth] === 0) {
      playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
      document.getElementById(playerPosition).style.backgroundColor='red';
      let playerOldPosition = ('corridor-D' + playerOldPosDepth + 'W' + playerPosWidth);
      document.getElementById(playerOldPosition).style.backgroundColor='';
    } else {
      playerPosDepth = playerOldPosDepth;
    }
  }

  function goDown() {
    const mazeDepth = mazeBluePrint.length;
    let playerOldPosDepth = playerPosDepth;
    playerPosDepth = playerPosDepth + 1;
    if (playerPosDepth < mazeDepth && mazeBluePrint[playerPosDepth][playerPosWidth] === 0 ) {
      playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
      document.getElementById(playerPosition).style.backgroundColor='red';
      let playerOldPosition = ('corridor-D' + playerOldPosDepth + 'W' + playerPosWidth);
      document.getElementById(playerOldPosition).style.backgroundColor='';
    } else {
      playerPosDepth = playerOldPosDepth;
    }
  }

  function goLeft() {
    let playerOldPosWidth = playerPosWidth;
    playerPosWidth = playerPosWidth - 1;
    if (mazeBluePrint[playerPosDepth][playerPosWidth] === 0) {
      playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
      document.getElementById(playerPosition).style.backgroundColor='red';
      let playerOldPosition = ('corridor-D' + playerPosDepth + 'W' + playerOldPosWidth);
      document.getElementById(playerOldPosition).style.backgroundColor='';
    } else {
      playerPosWidth = playerOldPosWidth;
    }
  }

  function goRight() {
    let playerOldPosWidth = playerPosWidth;
    playerPosWidth = playerPosWidth + 1;
    if (mazeBluePrint[playerPosDepth][playerPosWidth] === 0) {
      playerPosition = ('corridor-D' + playerPosDepth + 'W' + playerPosWidth);
      document.getElementById(playerPosition).style.backgroundColor='red';
      let playerOldPosition = ('corridor-D' + playerPosDepth + 'W' + playerOldPosWidth);
      document.getElementById(playerOldPosition).style.backgroundColor='';
    } else {
      playerPosWidth = playerOldPosWidth;
    }
  }
}
