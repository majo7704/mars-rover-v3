// Rover Object Goes Here
// ======================
let rover = {
  name: "R",
  direction: "N",
  positionX: 0,
  positionY: 0,
  travelLog: []
};
let board = [
  ["R", null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null, null, null,]
]
console.log(board.join('\n') + '\n\n');

// ======================
function turnLeft(rover, direction){
  switch (direction) {
    case "N":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
      break;
  }
  console.log('Turn left was called! New direction:' + ` ${rover.direction} ` + "-" + " current position is" + ` ${rover.positionX} ` + `${rover.positionY}`);
}
turnLeft(rover, "S");

function turnRight(rover, direction){
  switch (direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "N"
      break;
  }
  console.log('Turn right was called! New direction: ' + `${rover.direction} ` + "-" + " your current position is" + ` ${rover.positionX} ` + `${rover.positionY}`);
}


function moveForward(rover, direction){
switch (direction) {
  case "N":
    rover.positionY--;
    break;
  case "S":
    rover.positionY++;
    break;
  case "E":
    rover.positionX++;
    break;
  case "W":
    rover.positionX--;
    break;
}
  console.log('You moved forward! ' + "New direction: " + `${rover.direction} ` + "-" + " your current position is" + ` ${rover.positionX} ` + `${rover.positionY}`)
}

function moveBackwards(rover, direction){
  switch (direction) {
    case "N":
      rover.positionY++;
      break;
    case "S":
      rover.positionY--;
      break;
    case "E":
      rover.positionX--;
      break;
    case "W":
      rover.positionX++;
      break;
  }
  console.log('You moved backwards! ' + "New direction: " + `${rover.direction} ` + "-" + " your current position is" + ` ${rover.positionX} ` + `${rover.positionY}`)
}
function listOfCommands(command) {
  console.log("Let\'s move the Rover by pressing: f (forward), b (backward) r (right), l (left)");
  for (var i = 0; i < command.length; i++){
    var move = command.charAt(i);
  switch (move) {
    case "f": 
      moveForward(rover, `${rover.direction}`)
      break;
    case "r":
      turnRight(rover, `${rover.direction}`)
      break;
    case "l":
      turnLeft(rover, `${rover.direction}`)
      break;
    case "b":
      moveBackwards(rover, `${rover.direction}`)
      break;
  } 
    rover.travelLog.push(" " + rover.positionX + ":" + rover.positionY + '-' + "direction: " + rover.direction);

  }
  console.log("Travel log: " + rover.travelLog);
}
listOfCommands("fbrff");

