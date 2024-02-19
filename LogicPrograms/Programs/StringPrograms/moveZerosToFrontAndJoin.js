const moveZerosToFrontAndJoin = (arrTest) => {
  // create two empty arrays
  let zeroArray = [];
  let nonZeroArray = [];
  // iterate the loop over array
  for(let i = 0; i < arrTest.length ; i ++){
    // if array contains 0, push element to first array otherwise push it to another array
    if(arrTest[i] == 0){
      zeroArray.push(arrTest[i])
    }
    else {
      nonZeroArray.push(arrTest[i])
    }
  }
  // merge both arrays
  let concatArray = [...zeroArray, ...nonZeroArray]
  return concatArray
}

const result = moveZerosToFrontAndJoin([4,2,0,2,5,0,0,2,5,0,5,0,0])
console.log(result)
