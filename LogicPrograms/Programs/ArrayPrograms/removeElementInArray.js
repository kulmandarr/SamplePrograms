const removeElement = (arr, element) => {
  for(let i = 0; i< arr.length; i++){
    if(arr[i] == element){
      arr.splice(i,1)
    }
  }
  return arr
}
const result = removeElement([2,4,5,3,6,7,3], 5)
console.log(result)
