const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea', 
    'aeroplane', 'peppers', 'unlimited', 'arcadium', 'love', 
    'getaway', 'stadium', 'quixoticelixer', 'quarter', 'snow', 
    'dylan', 'zephyr', 'funky', 'chili'
  ];
  
  function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  const randomWord = document.getElementById('randomWord');
  const textInput = document.getElementById('text');
  const timeSpan = document.getElementById('timeSpan');
  const scoreSpan = document.getElementById('score');
  const endGameContainer = document.getElementById('end-game-container');
  
  let palabraAleatoria;
  let time = 10;
  let score = 0;
  
  function addToDOM() {
    palabraAleatoria = randomWords();
    randomWord.innerText = palabraAleatoria;
  }
  
  function actualizarTiempo() {
    time--;
    timeSpan.innerText = `${time}s`;
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }
  
  function updateScore() {
    scoreSpan.innerText = score;
  }
  
  function gameOver() {
    endGameContainer.innerHTML = `
      <h1>Game Over</h1>
      <p>Your final score is ${score}</p>
      <button onclick="location.reload()">Play Again</button>
    `;
    document.querySelector('.main').remove();
  }
  
  textInput.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value;
    if (palabraIngresada === palabraAleatoria) {
      time += 3;
      score++;
      e.target.value = '';
      addToDOM();
      updateScore();
    }
  });
  
  const timeInterval = setInterval(actualizarTiempo, 1000);
  
  addToDOM();
  