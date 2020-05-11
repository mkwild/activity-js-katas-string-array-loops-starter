/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE
const checkButton = document.querySelector("#check")
const display = document.querySelector("#tallest")
let mountainHeights = [1000, 1250, 15000, 2900, 17500, 12000]

checkButton.addEventListener('click', function() {
   let index = 0
   let tallest = 0
   while(index < mountainHeights.length) {
      if(mountainHeights[index]>tallest) {
         tallest = mountainHeights[index]
      }
      index++
   }
   display.innerText = tallest
})