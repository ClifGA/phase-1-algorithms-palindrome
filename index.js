function isPalindrome(word) {
  // Write your algorithm here 
  return word.split('').join('') === word.split('').reverse().join('') ? true : false
}

/* 
  Add your pseudocode here
  input must equal the the reverse word
*/

/*
  Add written explanation of your solution here
  car !== rac
  mom === mom
  take the string reverse it check to see if it equals the input
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
