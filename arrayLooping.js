// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// let reversedArray = [...colors].reverse();
// console.log(reversedArray)
// alternative way


// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const reversedArray = [];
// for (let i = colors.length - 1; i >= 0; i--) {
//   reversedArray.push(colors[i]);
// }

// console.log(reversedArray);
//  let newArr = [];
// for (const color of colors) {

//   newArr.unshift(color);

// }
// console.log(newArr);


// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const newArr = [];

// for (const number of numbers) {


//   if (number % 2 === 0) {
//     newArr.push(number);
//   }

// }
// console.log(newArr);


// Output:


// [12, 98, 76, 46]

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

const names = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatenated = '';
for (const name of names) {
  concatenated += name;
}
console.log(concatenated);


// Output:

// 'TomTimTinTik'
// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'



const statement = 'I am a hard working person';
const words = statement.split(' ');
const reversedWords = [];
for (let i = words.length - 1; i >= 0; i--) {
  reversedWords.push(words[i]);
}
const reversedStatement = reversedWords.join(' ');
console.log(reversedStatement);
