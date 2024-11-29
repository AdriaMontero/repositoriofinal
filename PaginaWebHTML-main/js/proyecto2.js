s
let secretWord = "leon"; 
let attempts = 5; 
let wordGuessed = false; 

function checkGuess() {
  let guess = document.getElementById('guess').value.toLowerCase(); 
  let message = document.getElementById('message'); 
  let attemptsElement = document.getElementById('attempts').getElementsByTagName('span')[0]; 

  if (guess === "") {
    message.innerText = "Por favor, ingresa una palabra.";
    return;
  }

  if (guess === secretWord) {
    message.innerText = "¡Felicidades! Has adivinado la palabra.";
    message.style.color = "green";
    wordGuessed = true; 
    attemptsElement.innerText = "¡Ganaste!";
  } else {
    attempts--; 
    if (attempts <= 0) {
      message.innerText = `¡Perdiste! La palabra correcta era "${secretWord}".`;
      message.style.color = "red";
      attemptsElement.innerText = "Se acabaron los intentos.";
    } else {
      message.innerText = "Intenta de nuevo.";
      message.style.color = "orange";
      attemptsElement.innerText = `Intentos restantes: ${attempts}`;
    }
  }
}

function goToHome() {
  window.location.href = 'index.html';
}
