

const gameBoard = document.getElementById('game-board');
const squares = [];

let currentPlayer = 'x';
let moves = 0;

// Create the game board
for (let i = 0; i < 9; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('click', () => {
    if (square.classList.contains('x') || square.classList.contains('o')) {
      return;
    }
    square.classList.add(currentPlayer);
    moves++;
    if (checkForWin()) {
      alert(currentPlayer.toUpperCase() + ' wins!');
      resetGame();
      return;
    }
    if (moves === 9) {
      alert("It's a tie!");
      resetGame();
      return;
    }
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
  });
  squares.push(square);
  gameBoard.appendChild(square);
}

// Check for a win
function checkForWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];
  return winningCombos.some(combo => {
    return combo.every(index => squares[index].classList.contains(currentPlayer));
  });
}

// Reset the game board
function resetGame() {
  squares.forEach(square => {
    square.classList.remove('x', 'o');
  });
  currentPlayer = 'x';
  moves = 0;
}
