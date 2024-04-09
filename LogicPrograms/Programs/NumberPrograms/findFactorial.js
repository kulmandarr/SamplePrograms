const findFactorial = (num1) => {
  let factorial = 1;
  for(let i =1; i<= num1; i++){
    factorial = factorial * i
  }
  return factorial
}
const result = findFactorial(6)
console.log(result)
