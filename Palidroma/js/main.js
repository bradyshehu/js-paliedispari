// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const inputWord = prompt(
  "Inserisci una parola per vedere se é palindroma",
  "es. anna"
);
const fixWord = inputWord.toLowerCase();
console.log(fixWord);

function palindromeCheck(word) {
  let reversedWord = [];
  let isWordPalindrome;
  const wordArray = word.split("");
  console.log(wordArray);
  reversedWord = [];
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    reversedWord.unshift(currentLetter);

    isWordPalindrome = word[i] === reversedWord[i] ? true : false;
  }
  console.log(reversedWord);
  return isWordPalindrome;
}
palindromeCheck(fixWord);
console.log(palindromeCheck(fixWord));
