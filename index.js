function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split('');
  let reverseArray = [];
  for (letter of wordArray) {
    reverseArray.unshift(letter);
  }
  const reverseStr = reverseArray.join('');
  if (word === reverseStr) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  1. covert the word to an array
  2. iterate array and build new array reversing letters
  3. join the array back to string
  4. companre original string to new string.
*/

/*
  Add written explanation of your solution here
  1. Declare an array called wordArray and assign the contents of word to it splitting each letter with the split command.
  2. Declare an array called reverseArray.
  3. Iterate through wordArray with for of.
  4. For each iteration, add the current element of wordArray to the beginning of reverseArray.
  5. Declare a string called revereStr and join the elements of reverseArray to it.
  6. Using strict equality compare the value of word and reverseStr.  If true return true and if false return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
