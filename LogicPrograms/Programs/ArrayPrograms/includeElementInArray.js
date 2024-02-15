const includeElementsInArray = (arr, element) => {
  if(arr.includes(element)){
    return 'element is present in array'
  }
  else return 'element is not present in array'
}
const result = includeElementsInArray([4,6,4,7,5,6], 100)
console.log(result)
