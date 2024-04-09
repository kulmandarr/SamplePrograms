const filterNumbersFromString = (testString) => {
  // split the characters of string
  chars = testString.split('')
  // declare empty array
  let testArr = [];
  // iterate over all characters
  for(let i = 0; i< chars.length; i ++){
  // check if the character is not a number
    if (!isNaN(Number(chars[i]))){
      // push the character to empty array
      testArr.push(chars[i])
    }
  }
  const string2 = testArr.join('')
  return string2
}

const result = filterNumbersFromString('543345sdfsdf3534534jj23')
console.log(result)
