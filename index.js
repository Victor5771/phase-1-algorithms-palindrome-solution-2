function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {

    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      
      return false;
    }
  }

  
  return true;
}
function hasTargetSum(arr, target) {
  const seenNumbers = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const difference = target - currentNumber;

    if (seenNumbers[difference]) {
      return true;
    }

    seenNumbers[currentNumber] = true;
  }

  return false;
}
/* 
  Add your pseudocode here
  Function isPalindrome(word):
  Initialize startIndex to 0
  Initialize endIndex to the length of word - 1

  While startIndex < endIndex:
    If word[startIndex] is not equal to word[endIndex]:
      Return false
    Increment startIndex
    Decrement endIndex

  Return true


*/

/*
  Add written explanation of your solution here
  The isPalindrome function checks whether a given word is a palindrome,
   which means it reads the same forwards and backwards.
    It does this by comparing characters from both ends of the word towards the middle.
     If any characters don't match during this comparison, 
     it returns false, indicating the word is not a palindrome.
    If all characters match as it reaches the middle, 
      it returns true, confirming that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Expecting: true
  console.log(hasTargetSum([22, 19, 4, 6, 30], 25));    // Expecting: true
  console.log(hasTargetSum([1, 2, 5], 4));              // Expecting: false
}

module.exports = isPalindrome;
