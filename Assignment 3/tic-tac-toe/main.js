let currentPlayer = "X";
const moves = Array(9).fill("");

const winCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWin(player) {
  for (const combination of winCombinations) {
    if (combination.every(index => moves[index] === player)) {
      highlightWinCombination(combination);
      return true;
    }
  }
  return false;
}

function highlightWinCombination(combination) {
  combination.forEach(index => {
    document.getElementById("b" + (index + 1)).style.color = "#542fe9";
  });
}

function makeMove(cellId) {
  if (moves[cellId] === "") {
    moves[cellId] = currentPlayer;
    document.getElementById("b" + (cellId + 1)).value = currentPlayer;

    if (checkWin(currentPlayer)) {
      document.getElementById('print').innerHTML = "<i>Congratulations</i><br>Player " + currentPlayer + " won";
      disableAllButtons();
    } else if (moves.every(move => move !== "")) {
      document.getElementById('print').innerHTML = "Match Tie";
    } else {
      currentPlayer = currentPlayer === "X" ? "0" : "X";
      document.getElementById('print').innerHTML = "Player " + currentPlayer + " (Sign = " + currentPlayer + ") Turn";
    }
  }
}

function disableAllButtons() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("b" + i).disabled = true;
  }
}

function reset() {
  moves.fill("");
  currentPlayer = "X";
  document.getElementById('print').innerHTML = "Player 1 (Sign = X) Turn";
  for (let i = 1; i <= 9; i++) {
    document.getElementById("b" + i).value = "";
    document.getElementById("b" + i).disabled = false;
    document.getElementById("b" + i).style.color = ""; // Reset cell color
  }
}

function myfunc_1() {
  makeMove(0);
}

function myfunc_2() {
  makeMove(1);
}

function myfunc_3() {
  makeMove(2);
}

function myfunc_4() {
  makeMove(3);
}

function myfunc_5() {
  makeMove(4);
}

function myfunc_6() {
  makeMove(5);
}

function myfunc_7() {
  makeMove(6);
}

function myfunc_8() {
  makeMove(7);
}

function myfunc_9() {
  makeMove(8);
}
