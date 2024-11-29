let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  let guess = document.getElementById('guess').value;
  let message = document.getElementById('message');
  let attemptsElement = document.getElementById('attempts').getElementsByTagName('span')[0];
  
  if (guess === "") {
    message.innerText = "Por favor, ingresa un número.";
    return;
  }

  guess = parseInt(guess);

  if (guess === secretNumber) {
    message.innerText = "¡Felicidades! Has adivinado el número.";
    message.style.color = "green";
    attemptsElement.innerText = "¡Ganaste!";
  } else {
    attempts--;
    if (attempts <= 0) {
      message.innerText = `¡Perdiste! El número correcto era ${secretNumber}.`;
      message.style.color = "red";
      attemptsElement.innerText = "Se acabaron los intentos.";
    } else {
      message.innerText = guess < secretNumber ? "El número es mayor. ¡Intenta de nuevo!" : "El número es menor. ¡Intenta de nuevo!";
      message.style.color = "orange";
      attemptsElement.innerText = `Intentos restantes: ${attempts}`;
    }
  }
}

function scrollToTop() {
    window.location.href = 'index.html';
}
