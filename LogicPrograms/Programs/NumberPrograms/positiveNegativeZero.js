const checkPositive = (num1) => {
  if(num1 > 0)
    return `number is positive`
  else if(num1 < 0)
    return `number is negative`
  else return `number is zero`
}
const result = checkPositive(0)
console.log(result)
