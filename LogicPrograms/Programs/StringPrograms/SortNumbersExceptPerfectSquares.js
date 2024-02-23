const sortNumbersExceptPerfectSquares = (arrayNumbers) => {
  let perfectSquares = new Map()
  let realNumbers = []
  for(let i = 0; i < arrayNumbers.length; i++) {
    // if the number is perfect square add the number in a perfectSquare Map
    if (arrayNumbers[i] > 0 && Math.sqrt(arrayNumbers[i]) % 1 === 0){
      perfectSquares.set(i,arrayNumbers[i])      
    }
    // otherwise push the number in separate array
    else {
      realNumbers.push(arrayNumbers[i])
    }
  }
  // sort the new array
  realNumbers.sort((a,b) => a - b)
  for( let [key, value] of perfectSquares){
    // add the perfect squares to original position
    realNumbers.splice(key,0,value)
  }
  return realNumbers
}
const result = sortNumbersExceptPerfectSquares([56,4,27,48,45,16,34,78,36,34])
console.log(result)
