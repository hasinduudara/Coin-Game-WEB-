// script.js
let score = 0;

const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('reset-btn');

// Add click event to the coin
coin.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;

  // Create a floating effect for the coin
  const floatingCoin = document.createElement('div');
  floatingCoin.className = 'floating-coin';
  floatingCoin.textContent = '+1';
  floatingCoin.style.left = `${Math.random() * 80 + 10}%`;
  floatingCoin.style.top = `${Math.random() * 50 + 10}%`;

  document.body.appendChild(floatingCoin);

  // Remove the floating effect after animation
  setTimeout(() => {
    floatingCoin.remove();
  }, 1000);
});

// Reset button logic
resetBtn.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
});
