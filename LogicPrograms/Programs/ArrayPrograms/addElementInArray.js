const addElement = (arr, str) => {
  arr.unshift(str)
  return arr
}
const result = addElement([1,3,2,4,5,8], 9)
console.log(result)
