// 🔢 A. Math & Basic Logic (1–8)




// একটি সংখ্যা positive, negative না zero চেক করো


// তিনটি সংখ্যার গড় (average) বের করো


// Celsius থেকে Fahrenheit convert করো


// Rectangle এর area বের করো


// একটি সংখ্যা 3 এবং 5 উভয় দিয়ে divisible কিনা চেক করো



// দুটি সংখ্যা যোগ করার একটি প্রোগ্রাম লেখো


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
const oddOreven = (int) => {
  if (!Number.isInteger(int)) return 'Invalid Number';
  return int % 2 === 0 ? "Even Number" : "Odd Number";
}
const result = oddOreven(1);
console.log(result)


// একটি সংখ্যা positive, negative না zero চেক করো
const numberType = (value) => {
  let num = value;
  if (typeof value === "string") {
    num = Number(value);
  }
  if (typeof num !== "number" || !Number.isFinite(num)) return "Invalid";
  if (num < 0) return "Negative Number";
  if (num > 0) return "Positive Number";
  return "Zero";
};

console.log(numberType("-13")); // Negative Number
