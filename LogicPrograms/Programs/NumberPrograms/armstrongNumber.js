const armstrongNumber = (num1) => {
  let digit = String(num1).split('',16)
  let order = digit.length
  let sum = 0
  for(let i = 0; i< digit.length; i++){
    sum = sum + Math.pow(digit[i], order)
  }
  let digitSum = String(sum).split('',16)
  let newSum = 0
  for(let i = 0; i< digitSum.length; i++){
    newSum = newSum + digitSum[i]
  }
  if(newSum == num1)
    return "number is armstrong"
  else
    return "number is not armstrong"
}
const result = armstrongNumber(4679307774)
console.log(result)
