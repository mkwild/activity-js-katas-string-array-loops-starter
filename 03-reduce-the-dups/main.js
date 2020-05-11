/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4]
// YOUR CODE HERE
const goButton = document.querySelector("#go")
const initial = document.querySelector("#initial")
const ammended = document.querySelector("#ammended")
let index = 0

initial.innerText = redundantArray

goButton.addEventListener('click', function() {
  while(index < redundantArray.length) {

    let current = redundantArray[index]
    
    if(current == redundantArray[index + 1]) {
      redundantArray.splice(index, 1)
    }
    else {
      index++
    }
  }
  ammended.innerText = redundantArray
})