// Task-1
// Take four parameters. Multiply the four numbers and then return the result
// function multiplyAll(a, b, c, d) {
//   const multipliedValue = a * b * c * d;
//   return multipliedValue;
// }
// const result = multiplyAll(1, 2, 3, 4);
// console.log(result);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(number) {
  if (number%2===0) {
    return number / 2;
  } else {
    return number * 2;
  }

}
const result=oddEven(6)
console.log(result);
