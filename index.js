// ### CHALLENGE 1: REVERSE A STRING
// // Return a string in reverse
// //  ex:
// reverseString('hello') === 'olleh';

function reverseString(string) {

  return reversedString = string.split('').reverse().join('')
}

console.log(reverseString("hello"));



// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not
// // ex:

function isPalindrome(string) {

  // const reversedString = string.split('').reverse().join('')
  return string.split('').reverse().join('') == string ? true : false
}

console.log(isPalindrome('racecar'));//  === true;
isPalindrome('hello') == false;



// ### CHALLENGE 3: REVERSE AN INTEGER
// // Return an integer in reverse
// // ex:


// function reverseInt(number) {

const reverseInt = number =>
  parseFloat(number.toString().split('').reverse().join(''))

// }

console.log(reverseInt(521));
// reverseInt(521) === 125;

// ### CHALLENGE 4: CAPITALIZE LETTERS
// // Return a string with the first letter of every word capitalized
// //  ex:

function capitalizeLetters(string) {

  const array = string.split(' ')

  let newArray = ''
  for (const item of array) {

    const firstPart = item.slice(0, 1)
    const secondPart = item.slice(1)
    // console.log(secondPart);
    newArray += ((firstPart.toUpperCase() + secondPart)) + ' '
  }
  return newArray

}
console.log(capitalizeLetters('i love javascript'));
// capitalizeLetters('i love javascript') === 'I Love Javascript';

// ### CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string
// // ex:
// maxCharacter('javascript') == 'a';

// ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// ### CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex:
// longestWord('Hi there, my name is Brad') === 'there,';
// longestWord('My name is Brad') === ['name', 'brad'];
// longestWord('Brad') === 'brad';

// ### CHALLENGE 8: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length
// // ex:
// chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]];
// chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]];

// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:
// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. isAnagram('elbow', 'below') === true
// ex. isAnagram('Dormitory', ''dirty room##'') --> false

// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:
// addAll(2, 5, 6, 7) === 20;

// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.
// sumAllPrimes(10) === 17;

// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex:
// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];

// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex:
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];
