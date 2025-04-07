// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let pcNumber;
function randomNumberUpTo(max) {
  pcNumber = Math.floor(Math.random() * max) + 1;
  console.log(pcNumber);
  return pcNumber;
}
let isSumEven;
function sumCheck(num1, num2) {
  isSumEven = (num1 + num2) % 2 === 0 ? true : false;
  return isSumEven;
}

const playerNumber = parseInt(prompt("Inserisci un numero da uno a cinque"));
console.log(playerNumber);

randomNumberUpTo(5);

sumCheck(playerNumber, pcNumber);

if (playerNumber > 0 && playerNumber < 6 && playerNumber !== isNaN) {
  const playerChoice = prompt("Scegli pari o dispari");
  const sum = playerNumber + pcNumber;
  console.log(sum);
  console.log(isSumEven);
  (playerChoice === "pari" && isSumEven === true) ||
  (playerChoice === "dispari" && isSumEven === false)
    ? alert("Hai vinto!")
    : alert("Hai perso!");
} else {
  alert("Il numero inserito non é valido, riprova");
}
