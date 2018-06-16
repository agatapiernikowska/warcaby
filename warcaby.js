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

      // adding pawns
      if ((x + y) % 2 != 0 && y != 4 && y != 5) {
        var img = document.createElement("img");
        if (y < 5) {
          img.id = "w" +cell.id;
          img.src = "Images/bialy.jpg";
        }
        else {
          img.id = "b" + cell.id;
          img.src = "Images/czarny.jpg";
        }
        img.className = "pawn";
        img.setAttribute("move", "true");
        cell.appendChild(img);
      }
      cell.setAttribute("move", "false");
      row.appendChild(cell);
    }
  }
}

createBoard();