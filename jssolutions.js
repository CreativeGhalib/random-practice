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
// const gradeCalculator = number => {
//   return number >= 80 && number <= 100 ? "A+"
//     : number >= 70 ? "A"
//       : number >= 60 ? "A-"
//         : number >= 50 ? "B"
//           : number >= 40 ? "C"
//             : number >= 33 ? "D"
//               : "F"
// }
// const res = gradeCalculator(100);
// console.log(res)



// Leap year চেক করার প্রোগ্রাম লেখো
// Leap year বের করার শর্ত (Gregorian calendar):

// বছরটা ৪ দিয়ে ভাগ যায় হতে হবে
// কিন্তু ১০০ দিয়ে ভাগ গেলে leap year না
// তবে ৪০০ দিয়ে ভাগ গেলে আবার leap year
// const yearIsleap = year => {
//   return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
//   ? "Year is Leap year"
//   : "Not Leap Year";
// }
// console.log(yearIsleap(2013))


// তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো
// const biggestOfThree = (a, b, c) => {
//   if (![a, b, c].every(Number.isFinite)) return "Invalid input";

//   let max = a;
//   if (b > max) max = b;
//   if (c > max) max = c;
//   return max;
// };

// console.log(biggestOfThree(10, 25, 7));


// Login system বানাও (email && password চেক)
// const loginSystem = (email, password) => {
//   if (typeof email !== "string" || typeof password !== "string") return "Invalid input";

//   const normalizedEmail = email.trim().toLowerCase();
//   const savedEmail = "test@example.com";
//   const savedPassword = "123456";

//   if (!normalizedEmail || !password) return "Email and password required";
//   if (!normalizedEmail.includes("@") || !normalizedEmail.includes(".")) return "Invalid email";

//   return normalizedEmail === savedEmail && password === savedPassword
//     ? "Login successful"
//     : "Invalid credentials";
// };



// Ternary operator দিয়ে even/odd চেক করো
// const evenOrodd = number => {
//   return number % 2 === 0 ? "Number is even" : "Number is odd";
// }
// 1 থেকে 10 পর্যন্ত সংখ্যা print করো

// for (let i = 0; i <= 10; i++){
//   console.log(i)
// };



// // 1 থেকে 50 পর্যন্ত even সংখ্যা print করো
// for (let i = 50; i <= 100; i++){
//   console.log(i)
// }


// 10 থেকে 1 পর্যন্ত reverse loop চালাও
// for (let i = 10; i > 0; i--){
//   console.log(i)
// }


// একটি সংখ্যার নামতা print করো
// let j = 1;
// for (let i = 0; i <= 10; i++){

//  console.log(j*i);
// }



// 1–100 এর মধ্যে 3 দিয়ে divisible সংখ্যা বের করো
// for (let i = 1; i <= 100; i++){
//   if (i % 3===0) {
//     console.log(i)
//   }
// }


// loop ব্যবহার করে sum বের করো
// let sum = 0;
// for (let i = 0; i <= 5; i++){
//   sum = sum + i;

// }
// console.log(sum)


// break ব্যবহার করে loop থামাও
// for (let i = 0; i <= 10; i++){
//   if (i === 5) break;
//   console.log(i)
// }


// 📚 E. Arrays (28–36)
// একটি array তৈরি করে সব element print করো
// let numbers = [12, 10, 4, 2, 8];

// for (let i = 0; i < numbers.length; i++) console.log(i, numbers[i]);

// let x = (numbers[0] = 13);
// console.log('x =', x);

// for (let i = 0; i < numbers.length; i++) console.log(i, numbers[i]);
// let numbers = [12, 10, 4, 2, 8];
// console.log(numbers.length);
// setting/updating number from a array  using index
// numbers[1] = 12;
// console.log(numbers)
// console.log(numbers.indexOf(4))
// console.log(numbers.includes(2))
// console.log(Array.isArray(numbers));
// console.log(numbers.toString())


// const numbers = [12, 10, 4, 2, 8];
// // numbers.forEach((n, i) => console.log(i, n));
// const doubled = numbers.map(n => n);
// console.log(doubled)











// array এর length বের করো
// let arr = [112, 11, 13, 14, 15];
// console.log(arr.length)


// array থেকে প্রথম ও শেষ element বের করো
// const arr = [1, 2, 3, 4, 5]
// const firstItem = arr.shift();
// const lastItem = arr.pop();
// console.log(firstItem);
// console.log(lastItem)


// array এর সব সংখ্যার যোগফল বের করো
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (const e of arr) {

//    sum = sum + e;

// }
// console.log(sum)


// array থেকে even সংখ্যাগুলো বের করো
// let numbers = [1, 2, 3, 4, 5];
// const evenNumbers = [];
// for (const num of numbers) {
//   if (num % 2 === 0) evenNumbers.push(num);
// }
// console.log(evenNumbers);


// array এর মধ্যে largest number বের করো
// let largest = numbers[0];
// for (const num of numbers) {
//   if (num > largest)
//     largest = num;
// }
// console.log(largest);


// array reverse করো
// let reversedArray = [];
// for (const num of numbers) {
//   reversedArray.unshift(num);
//   console.log(reversedArray)
// }
// const numbers = [1, 2, 3, 4, 5];
// let reversedArray = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   reversedArray.push(numbers[i]);
// }
// console.log(reversedArray);



// array sort করো (numeric)
// const persons = ['akib', 'dakib', 'bodi', 'nakib'];
// // `sort()` is the normal method. For strings, use `localeCompare`.
// const sortedPersons = [...persons].sort((a, b) => b.localeCompare(a));
// console.log(sortedPersons);//for string


//for numbers it will be
// const persons = [1, 2 ,3 ,12,14];
// const sortedPersons = persons.sort();
// console.log(sortedPersons) //but its a old method,
// const sortedPersons = [...persons].sort(function (a,b){return b-a});
// console.log(sortedPersons) // i


// array থেকে duplicate remove করো



// array থেকে duplicate remove করো
// const dupNumbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
// const uniqueNumbers = [...new Set(dupNumbers)];
// console.log(uniqueNumbers);

// function todayDate() {
//   let d = new Date();

//   let day = d.getDate();
//   let month = d.getMonth() + 1;
//   let year = d.getFullYear();

//   if (day < 10) {
//     day = '0' + day;
//   }

//   if (month < 10) {
//     month = '0' + month;
//   }

//   return day + '-' + month + '-' + year;
// }
// console.log(todayDate(12));

// let today = new Date();

// today.getFullYear();  // বছর (যেমন 2026)
// today.getMonth();     // মাস (0=Jan, 1=Feb...) ⚠️
// today.getDate();      // মাসের দিন (1-31)
// today.getHours();     // ঘণ্টা
// today.getMinutes();   // মিনিট


// New way
// let baseuser = {
//   role: 'viewer',
//   canComment: true,
// };
// let user1 = Object.create(baseuser);
// user1.name = 'rafi';
// user1.canComment = false;
// user1.role = 'restricted';
// let user2 = Object.create(baseuser);
// user2.name = "Tania";
// user2.role = "admin";
// console.log(user1);
// console.log(user2)


// old way
// function perSon(name, age) {
//   this.name = name;
//   this.age = age
// }
// let result = new perSon("mesbah", 38);
// console.log(result)

// let obj = Object.create({});
// obj.name = "ghalib";
// obj['isMarried'] = true;
// console.log(typeof obj.isMarried);

// console.log(obj);
// const mobile = {
//   brand: 'samsung',
//   price: 55000,
//   storage: '64gb',
//   camera: '12mp',
//   isNew: true,
// };

// mobile['age'] = 12;

// for (const prop in mobile) {
//   // console.log(prop);
//   console.log(mobile[prop]);
// }

// //remove duplicates in sorted array.
// let dupArr = [1, 2, 3, 4, 1, 3];
// dupArr.sort((a, b) => a - b); // must be sorted first!! boring !!

// let i = 0; //last unique index
// for (let j = 1; j < dupArr.length; j++) {
//   if (dupArr[j] !== dupArr[i]) {
//     i++;
//     dupArr[i] = dupArr[j];
//      console.log(dupArr);
//   }

// }

// const uniqueSorted = dupArr.slice(0, i + 1);
// console.log(uniqueSorted);

// const arr = [1, 2, 2, 3, 4, 4, 5];
// const unique = [];

// for (const n of arr) {
//   if (unique.includes(n)) continue;
//   unique.push(n);
// }

// console.log(unique); // [1,2,3,4,5]
// array থেকে even সংখ্যাগুলো বের করো
// let arr= [1, 2, 3, 4, 5];
// const evenNumbers = [];
// for (const num of arr) {
//   if (num % 2 === 0) evenNumbers.push(num);
// }
// console.log(evenNumbers);


// array এর মধ্যে largest number বের করো
// let numbers = [1, 2, 3, 4, 5];
// let largest = numbers[0];
// for (const num of numbers) {
//   if (num > largest)
//     largest = num;
// }
// console.log(largest);


// array reverse করো
// let reversedArray = [];
// for (const num of numbers) {
//   reversedArray.unshift(num);
// }
// console.log(reversedArray);

// একটি string এর length বের করো
// let str = "ghalib";
// const length = str.length;
// console.log(length)



// string কে uppercase করো
// let str = 'ghalib';
// const toupperCase = str.toUpperCase();
// console.log(toupperCase);


// string এর মধ্যে নির্দিষ্ট word আছে কিনা চেক করো
// let str = 'mesbah ghalib';
// for (let i = 0; i < str.length; i++){
//   console.log(str[i])
// }
// let specificWord = str.includes("mesbah");
// console.log(specificWord)



// একটি sentence থেকে সব word আলাদা করো
// let str = 'my name is mesbah ghalib';
// let splitedWord = str.split(" ");
// console.log(splitedWord)


// string reverse করো
// let str = "mesbah ghalib";
// let newStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   newStr += str[i];
// }

// console.log(newStr); // "bilahg hbahsem"

// string palindrome কিনা চেক করো
// function isPalindrome(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   return str === rev;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false


// 🧱 G. Objects (43–47)
// একটি object তৈরি করো student info দিয়ে
// let stdInfo = {
//   name: "karim",
//   age: 26,
//   isSrudent:true
// }
// console.log(stdInfo)


// object থেকে সব key print করো
// object এর সব value print করো
// let stdInfo = {
//   name: 'karim',
//   age: 26,
//   isSrudent: true,
// };
// for (const info in stdInfo) {
//   console.log(info, stdInfo[info]);
//   console.log(info);
//   console.log(Object.keys(stdInfo));

// }






// object এর মধ্যে নির্দিষ্ট property আছে কিনা চেক করো
// let stdInfo = {
//   name: 'karim',
//   age: 26,
//   isSrudent: true,
// };
// console.log(stdInfo.hasOwnProperty("name")); // true
// let stdInfo = {
//   name: 'karim',
//   age: 26,
//   isSrudent: true,
// };

// console.log("age" in stdInfo); // true
// console.log("cgpa" in stdInfo); // false




// object এর উপর loop চালাও
// let stdInfo = {
//   name: 'karim',
//   age: 26,
//   isSrudent: true,
// };
// for (const info in stdInfo) {
//   console.log(info)
// }
//
// array reverse
// const arr = [1, 2, 3, 4, 5];
// let newArr = [...arr].reverse();
// console.log(newArr)


// 🧩 H. Functions (48–55)
// দুটি সংখ্যার যোগফল বের করার function লেখো


// even/odd চেক করার function লেখো


// array এর সব সংখ্যার sum বের করার function লেখো


// string reverse করার function লেখো


// leap year check function লেখো


// array থেকে largest number বের করার function লেখো


// unit convert করার function লেখো (inch → feet)


// calculator function বানাও (add, sub, mul, div)



// ⭐ Bonus Challenges (56–60)
// array এর average বের করো


// array থেকে শুধু unique value রাখো


// object এর ভিতরে nested object access করো


// function এর ভিতরে function ব্যবহার করো


// user input validate করো (number কিনা চেক)
