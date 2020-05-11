/*
  HANGMAN LITE

  1. Create a variable (`word`) which contains any lengthy word.
  2. Create a second variable (`letter`) which indicates the letter
     that the player "guessed" (optional: use an input textbox and
     click event listener to obtain an actual player guess).
  3. Write a WHILE statement which loops over the `word` string and
     counts the number of times the "guessed" letter appears.
  4. If the letter is found in the string, display "The letter X
     exists N times in this word!" on the page (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display "Nope, that
     letter doesn't exist in my word!" on the page.
*/

// YOUR CODE HERE
const guessButton = document.querySelector("#guess-button")
const guessInput = document.querySelector("#guess-input")
const output = document.querySelector("#output")
let word = "wyoming"
let letter

guessButton.addEventListener('click', function() {
   let index = 0
   let count = 0
   letter = guessInput.value.trim().toLowerCase()
   while (index < word.length) {
      if(letter == word[index]) {
         count++
      }
      index++
   }
   if(count > 0) {
      output.innerText = `The letter ${letter} exists ${count} times in my word!`
   }
   else {
      output.innerText = `Nope, the letter ${letter} does not exist in my word!`
   }
})