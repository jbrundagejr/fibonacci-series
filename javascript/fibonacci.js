function fibonacci(num) {
  let fibArr = []
  if(num === 0) return 0
  for(let i = 0; i < num; i++){
    if(i === 0){
      fibArr.push(0)
      fibArr.push(1)
    } else 
    fibArr.push((fibArr[i - 1] + fibArr[i]))
  }
  return fibArr[num]
}

// let nthElement = 0
// for(let i = 0; i < num; i++){
//   let firstNumber = i
//   let secondNumber = i + 1
//   let nextNumber = firstNumber + secondNumber
//   firstNumber = secondNumber
//   nthElement = nextNumber
// }
// return nthElement

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
