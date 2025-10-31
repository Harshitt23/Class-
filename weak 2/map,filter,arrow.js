/*
(1) - Arrow Functions (=>)  
Arrow functions are a shorter way to write functions in JavaScript.

🧩 Example:
// Traditional function
function add(a, b) {
  return a + b;
}


// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

👉 When there’s only one line of code, you can skip the {} and return.
👉 If there’s only one parameter, you can skip () too:

const square = n => n * n;

------------------------------------------------------------------------------------------------------------------

🗺️ 2. map() → Transforms each element in an array
map() creates a new array by applying a function to every element in the original array.

🧩 Example:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

🧩 Example2:
const numbers = [1, 2, 3, 4];

function transform(i){
return i*2
}
 const and = input.map(transform);
 console.log(ans);


👉 It doesn’t change the original array.
👉 Perfect for converting or modifying array data.

------------------------------------------------------------------------------------------------------------------
🔍 3. filter() → Filters elements based on a condition
filter() returns a new array containing only the elements that pass the test in the callback.

🧩 Example:
const ages = [12, 25, 17, 30, 16];
const adults = ages.filter(age => age >= 18);

console.log(adults); // [25, 30]

👉 Great for selecting specific data — like filtering users, items, or records.
🧠 Combine Them Like a Pro:
You can chain map() and filter() together for clean, powerful code:

Example:
const numbers = [1, 2, 3, 4, 5, 6];

// Double only even numbers
const doubledEvens = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);
 
console.log(doubledEvens);            //  result -[4, 8, 12]       

*/

