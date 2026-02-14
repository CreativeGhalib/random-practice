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



// const statement = 'I am a hard working person';
// const words = statement.split(' ');
// const reversedWords = [];
// for (let i = words.length - 1; i >= 0; i--) {
//   reversedWords.push(words[i]);
// }
// const reversedStatement = reversedWords.join(' ');
// console.log(reversedStatement);

// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

// const original = [1, 2, 3];
// const copied = [...original];
// copied[0] = 99;
// console.log(`Original: [${original.join(', ')}] Copy: [${copied.join(', ')}]`);


// Task 6
// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected ooutput:
// John scored 85
// Alice scored 90
// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

const students = [
  { name: 'John', marks: 85 },
  { name: 'Alice', marks: 90 },
];
for (const student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
matrix[1][0] = 99;
console.log(matrix);
