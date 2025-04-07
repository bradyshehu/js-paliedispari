// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parola = "parola";
const wordPalindrome = "anna";
console.log(parola);
console.log(wordPalindrome);

let reversedWord = [];
let isWordPalindrome;
function palindromeCheck(word) {
  const wordArray = word.split("");
  console.log(wordArray);
  reversedWord = [];
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    reversedWord.unshift(currentLetter);
    if (word[i] === reversedWord[i]) {
      isWordPalindrome = true;
    } else {
      isWordPalindrome = false;
    }
  }
  console.log(reversedWord);
  return isWordPalindrome;
}
palindromeCheck(parola);
console.log(isWordPalindrome);
