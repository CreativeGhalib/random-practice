// let x = 12;
// let y = 23;
// if (y > x) {

//   console.log("boro");
// }

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

// ?"will have to finish the task!!"let str = 'A quick fox jumps over a lazy dog';
// newStr = str.toLowerCase;
// let vowels="aeiou"
// for (const v of str) {

// }

// function square(number) {
//   console.log('value of the number parameter', number);
//   const borgo = number * number;
//   console.log('sqare of the given number is:', borgo);
//   return borgo;
// }
// let sqarenumbers = square(12);
// console.log(sqarenumbers);


// function totalNumber(a,b) {
//   return a + b;
// }
// let tNum = totalNumber(5,5);
// console.log(tNum);

// function sumOfnumbers(number) {
//   let sum = 0;
//   for (const number of numbers) {
//       console.log(number);
//   return sum;
//   };


// }
// const numbs = [54, 62, 12, 6];
// const sum = sumOfnumbers(numbs);
// console.log(`sum of number is:` sum);


// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function remainder(a, b) {
//   return a % b;
// }

// function power(a, b) {
//   return a ** b;
// }

// function maxOfTwo(a, b) {
//   return a > b ? a : b;
// }

// function minOfTwo(a, b) {
//   return a < b ? a : b;
// }

// function average(a, b) {
//   return (a + b) / 2;
// }

// function difference(a, b) {
//   return Math.abs(a - b);
// }

// console.log(add(5, 5));
// console.log(subtract(10, 3));
// console.log(multiply(4, 6));
// console.log(divide(20, 4));
// console.log(remainder(17, 5));
// console.log(power(2, 8));
// console.log(maxOfTwo(9, 12));
// console.log(minOfTwo(9, 12));
// console.log(average(7, 13));
// console.log(difference(50, 18));


// const colors = {
//   red: '#ff0000',
//   green: '#00ff00',
//   blue: '#0000ff',
//   'golden rod': '#daa520',
// };
// const outputValue=colors["golden rod"]
// console.log(outputValue);

// For this object below add a property named passenger capacity with value 5

// const car = {
//   // unique case "3make": "Toyota",
//   '3make': 'Toyota',
//   model: 'Corolla',
//   year: 2020,
// };
// car["passenger capacity"] = 5;

// console.log(car);
// console.log(car["3make"]);

// when you want to add a key that is string ,u cannot do that using dot Notification.u will have to always use"object['string']"


// Task-3
// Display the physics marks as output.
// const student = {
//   name: 'Hamim Sakep',
//   id: 5421,
//   physics: {
//     subject: 'HSC Physics',
//     author: 'Shahjahan Tapan',
//     marks: 30,
//   },
// };


// Task-4
// Count the number of properties.
// let student = {
//   name: 'Ariana Grande',
//   age: 21,
//   city: 'Gaibandha',
//   isStudent: true,
// };
// console.log(Object.keys(student).length);

// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };
// for (key in myObject) {
//   console.log(key);
//   console.log(key, myObject[key],typeof myObject[key]);
// }
// // next

// what is function
// const number = 11;
// function fanOffkoro(a) {
//   if (a % 2===0) {
//     return "Click the switch off";
//   }
//   else {
//     return('pore off korbo');
//   }

// }
// console.log(fanOffkoro(number));

// const number = 11;
// function fanOffkoro() {

//     return 'Click the switch off';

// }
// console.log(fanOffkoro());


// function sum(a,b){
//   const result = a + b;
//   return result;

// }
// const newTotal = sum(2,3);

// console.log(newTotal);
// i have learnt return is a very imporatant thing in function.Sometimes we may use it ,some time we wont!!



// find ou the square!!

// function sqr(i) {
//   const result = i * i;
//   console.log(result);

// }
// sqr(4);
// function addLl(a, b) {
//   const total = a + b;
//   console.log(total);
// }
// addLl(1,2 )

// Task-1
// Take four parameters. Multiply the four numbers and then return the result
// function multiplyAll(a,b,c,d) {
//   const multipliedValue = a * b * c * d;
//   return multipliedValue
// }
// const result = multiplyAll(1, 2, 3, 4)
// console.log(result);




// function newPrice(currentPrice, discount) {
//   if (
//     typeof currentPrice === 'string' ||
//     typeof discount === 'string' ||
//     !Number.isFinite(currentPrice) ||
//     !Number.isFinite(discount)
//   ) {
//     return 'Invalid';
//   }
//   if (100 < discount < 0) {
//     return "Invalid";
//   }
//   let discountAmount = (currentPrice * discount) / 100;
//   let finalPrice = currentPrice - discountAmount;
//   return finalPrice.toFixed(3);

// }
// const currentPrice = 1500;
// const discount = 20;
// const discountedPrice = newPrice(currentPrice, discount);
// console.log(`After a ${discount}% discount, your payable amount is ${discountedPrice} BDT.`);



// ?task2

// function validOtp(otp) {
//   if (typeof otp !== "string" ) {
//     return "Invalid";
//   }
//   if (otp.length!==8) {
//     return false;
//   }
//   if (!otp.startsWith("ph-")) {
//     return false
//   }

//   return true

// }
// let otp="ph-123458"
// const result = validOtp(otp);
// console.log(result);



// function finalScore(user) {
//   if (typeof user !== "object" || user === null || Array.isArray(user)) {
//     return 'Invalid'
//   }
//   if (user.right + user.wrong + user.skip !== 100) {
//     return "Invalid"
//   }
//   let score = user.right - (user.wrong * .5);
//   return Math.round(score);
// }

// const user = {
//   right: 60,
//   wrong: 30,
//   skip: 10,
// };
// const result=finalScore(user)
// console.log(result);

function gonoVote(arr) {
  if (!Array.isArray(arr)) return "Invalid";
  let yesVote = 0;
  let noVote = 0;
  for (const vote of arr) {

    if (vote === "ha")
      yesVote++
    else if (vote === 'na') noVote++;

  }
  if (yesVote > noVote) return true;
  if (yesVote === noVote) return 'equal';
  return false;


}
const arr = gonoVote(["ha","na","ha","na"])
console.log(arr);
