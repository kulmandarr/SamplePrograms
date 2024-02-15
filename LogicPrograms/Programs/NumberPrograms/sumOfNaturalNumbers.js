const sumOfNaturalNums = (count) => {
  let result = 0
  for(let i = 1; i < count + 1; i ++)
    result = result + i 
  return result
}
const result = sumOfNaturalNums(71)
console.log(result)
