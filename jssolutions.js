// 🔢 A. Math & Basic Logic (1–8)


// function doSum(a, b) {
//   return a + b;
// }
// let result = doSum(1, 2);
// console.log(result);
// const doSum = (a, b) => { return a + b };
// let result = doSum(1, 2);
// console.log(result);


// দুটি সংখ্যার বিয়োগ, গুণ ও ভাগ বের করো
// const ultimateMath = (x, y) => {
// return `subtraction=${x-y} multiplication=${x*y} division=${x/y}`
// }
// const result = ultimateMath(12, 8);
// console.log(result)

// একটি সংখ্যা even না odd চেক করো
// const oddOreven = (int) => {
//   if (!Number.isInteger(int)) return 'Invalid Number';
//   return int % 2 === 0 ? "Even Number" : "Odd Number";
// }
// const result = oddOreven(1);
// console.log(result)


// একটি সংখ্যা positive, negative না zero চেক করো
// const numberType = (value) => {
//   let num = value;
//   if (typeof value === "string") {
//     num = Number(value);
//   }
//   if (typeof num !== "number" || !Number.isFinite(num)) return "Invalid";
//   if (num < 0) return "Negative Number";
//   if (num > 0) return "Positive Number";
//   return "Zero";
// };

// console.log(numberType("-13")); // Negative Number

// তিনটি সংখ্যার গড় (average) বের করো
// const aveRage = (avg1, avg2, avg3) => {
//   return totalavrg= (avg1 + avg2 + avg3) / aveRage.length;
// }
// const result = aveRage(20,30,30);
// console.log(Math.round(result));

// Celsius থেকে Fahrenheit convert করো
// const convertTer = celsius =>
//   typeof celsius === 'number' ? `Temperature is ${(celsius * 9) / 5 + 32} F` : 'Invalid input';

// console.log(convertTer(10));


// Rectangle এর area বের করো
// Area and Perimeter Calculation
// function calculateRectangle(length, width) {
//     const area = length * width;
//     const perimeter = 2 * (length + width);
//     return { area, perimeter };
// }

// console.log(calculateRectangle(10, 5)); // { area: 50, perimeter: 30 }

// একটি সংখ্যা 3 এবং 5 উভয় দিয়ে divisible কিনা চেক করো
// const isDivisible = (num) => {
//   if (typeof num !== "number" || !Number.isFinite(num)) return "Invalid input";
//   return num % 3 === 0 && num % 5 === 0 ? "is-divisible" : "not-divisible";
// };

// const result = isDivisible(30);
// console.log(result);

// দুটি সংখ্যা যোগ করার একটি প্রোগ্রাম লেখো
// const sum = (num1, num2) => {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number' || !Number.isFinite(num1) || !Number.isFinite(num2)) return "Invalid"
//     return num1 + num2;
// }
// const result = sum(12, 14);
// console.log(result)




// 📦 B. Variable & Data Type (9–13)


// let, const, var দিয়ে একই ভ্যারিয়েবল declare করে পার্থক্য দেখাও
// if (true) {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// var x = 10;
// var x = 20;

// let y = 10;
// let y = 20;

// const z = 10;
// const z = 20;



// const obj = { n: 1 };
// obj.n = 2;
// console.log(obj);

// একটি ভ্যারিয়েবলের type চেক করো (typeof)
// const typeOfvariable = (variAble) => {
//   let result = (typeof variAble)? return result
// }
// const res = typeOfvariable(12);
// console.log(res)

// // string কে number এ convert করো
// const str = "123";
// console.log(Number(str))


// // number কে string এ convert করো
// const num = 123;
// console.log(String(num));     // "123"
// console.log(num.toString()); // "123"

// NaN কিভাবে তৈরি হয় তার উদাহরণ দেখাও
// let name = NaN;
// // console.log(Number(name))
// let res = Number.isNaN(name);
// console.log(res)

// 🔀 C. Conditionals (14–20)
// বয়স দিয়ে vote দিতে পারবে কিনা চেক করো
// const voterOrnot = age => {
//   return age >= 18 ? 'You can vote' : 'You cant vote';

// }
// let result = voterOrnot(18);
// console.log(result)


// একটি সংখ্যা বড় না ছোট 100 থেকে চেক করো
// const bigOrsmall = num => {
//   return num > 100 ? "Bigger than 100" : (num === 100 ? "Equal to 100" : "Smaller than 100");

// }
// let res = bigOrsmall(100);
// console.log(res)



// Student এর mark দিয়ে grade বের করো


// Leap year চেক করার প্রোগ্রাম লেখো


// তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো


// Login system বানাও (email && password চেক)


// Ternary operator দিয়ে even/odd চেক করো
