const armstrongNumber = (num1) => {
  let digit = String(num1).split('',16)
  let order = digit.length
  let sum = 0
  for(let i = 0; i< digit.length; i++){
    sum = sum + Math.pow(digit[i], order)
  }
  return sum == num1 ? "number is armstrong" : "number is not armstrong"
}
const result = armstrongNumber(1634)
console.log(result)
