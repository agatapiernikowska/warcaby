// create board
function createBoard() {
  var board = document.getElementById("board");

  var z = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  for (var y = 0; y < 10; y++) {
    var row = document.createElement("div");
    row.className = "row";
    board.appendChild(row);


    for (var x = 1; x < 11; x++) {
      var cell = document.createElement("div");
      cell.id = x.toFixed() + y.toString();
      if ((x + y) % 2) {
        cell.className = "black";
        cell.innerText = x + z[y];
      }
      else {
        cell.className = "white";
        cell.innerText = x + z[y];
      }

      cell.setAttribute("draggable", "false");
      row.appendChild(cell);
    }
  }
}

createBoard();