const palindromeNumber = (num1) => {
  let digits = String(num1).split('')
  for(let i = 0; i < digits.length; i++){
    if(digits[i] == digits[digits.length - 1 -i])
      continue
    else
      return "number is not palindrome"
  }
  return "number is palindrome"
}
const result = palindromeNumber(1331)
console.log(result)
