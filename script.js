let currentPlayer = 'X';
let gameBoard = [];
let gameOver = false;

for (let i = 0; i < 9; i++) {
  gameBoard.push('');
}

const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (!gameOver && gameBoard[index] === '') {
      gameBoard[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === 'X'? 'O' : 'X';
    }
  });
});

resetBtn.addEventListener('click', () => {
  gameBoard = [];
  for (let i = 0; i < 9; i++) {
    gameBoard.push('');
  }
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameOver = false;
});

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]]!== '') {
      alert(`Player ${gameBoard[condition[0]]} wins!`);
      gameOver = true;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    alert('It\'s a draw!');
    gameOver = true;
  }
}