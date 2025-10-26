function mathMethods(value) {
    console.log("Original Value:", value);
  
    let rounded = Math.round(value);
    console.log("After round():", rounded);
  
    let ceiling = Math.ceil(value);  //Rounds up to the nearest integer, no matter what the decimal is.
    console.log("After ceil():", ceiling);
  
    let flooring = Math.floor(value);   //Rounds down to the nearest integer.
    console.log("After floor():", flooring);
  
    let randomValue = Math.random();   //Returns a random number between 0 (inclusive) and 1 (exclusive).So it’ll always be something like 0.245... or 0.999... but never 1.
    console.log("After random():", randomValue);
  
    let maxValue = Math.max(5, 10, 15); //Returns the largest value among all given numbers.
    console.log("After max():", maxValue);
  
    let minValue = Math.min(5, 10, 15);   //Returns the smallest value.
    console.log("After min():", minValue);
  
    let powerOfTwo = Math.pow(value, 2); //Raises a number to a power.
    console.log("After pow():", powerOfTwo);
  
    let squareRoot = Math.sqrt(value);   //Finds the square root of a number.
    console.log("After sqrt():", squareRoot);
  }
  
  // Example Usage for Math Methods
  mathMethods(4.56);
  mathMethods(9);
  mathMethods(25);
  