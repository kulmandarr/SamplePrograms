
const removeDuplicates = (arr) => {
  return arr.filter((item, index) => 
    arr.indexOf(item) === index)
}

const removeDuplicates2 = (arr) => {
  let unique = []
  arr.forEach(element => {
    if (!unique.includes(element)) {
      unique.push(element)
    }
  })
  return unique
}
const result = removeDuplicates2([2,5,3,6,7,2,4,5])
console.log(result)
