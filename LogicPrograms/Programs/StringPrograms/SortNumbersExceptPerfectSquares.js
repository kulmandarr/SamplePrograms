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
const result = sortNumbersExceptPerfectSquares([7,3,4,17,16,30,25,21])
console.log(result) // 3,7,4,17,16,21,25,30
