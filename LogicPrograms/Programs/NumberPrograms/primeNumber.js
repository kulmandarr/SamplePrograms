const primeNumber = (num1) => {
  for(let i=2; i<num1; i++){
    if(num1%i == 0){
      return "number is not prime"
    }
  }
  return "number is prime"
}
const result = primeNumber(7)
console.log(result)
