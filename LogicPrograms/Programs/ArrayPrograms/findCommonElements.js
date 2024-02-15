const findCommonElements = (arr1, arr2) => {
  let commonElements = []
  for(let i = 0; i< arr1.length ; i ++){
    for (let j = 0; j < arr2.length; j++){
      if(arr1[i] == arr2[j]){
        commonElements.push(arr1[i])
      }
    }
  }
  if(commonElements.length > 0)
    return [... new Set(commonElements)]
  else
    return "there are no common elements"
}

const findCommonElements2 = (arr1, arr2) => {
  return arr1.some(element => arr2.includes(element))
}
const result = findCommonElements([1,4,2,4,5,2],[1,4,2,4,5,2])
console.log(result)

const result2 = findCommonElements2([1,4,2,4,5,2],[7,34,552,66])
console.log(result2)
