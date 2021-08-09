function fibonacci(num) {
  // create an empty array to push our values into
  let fibArr = [0, 1]
  // handle edge case of entering 0
  if(num === 0) return 0
  // iterate through the number given
  for(let i = 1; i < num; i++){
    // populate the array up to the number given
    fibArr.push((fibArr[i - 1] + fibArr[i]))
  }
// return the value of the given index of our Fibonacci array
return fibArr[num]
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

