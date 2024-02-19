const removeDuplicatesInDescendingOrder = (abc) => {
  // split all characters
  let chars = abc.split('')  
  let newMap = new Map();
  // define first for loop 
  for(let i = 0; i < chars.length; i++){
    //initialize the counter to count the duplicates
    let count = 0
    for(let j = 0; j < chars.length; j++){
      // break the loop if the elements are same and i > j
      if(chars[i] == chars[j] && i>j){
        break;
      }
      // increase the counter if the elements are same
      if(chars[i] == chars[j]){
        count ++;
      }
    }
    if(count>0){
      // add the element in map and its count
      newMap.set(chars[i], count)
    }
  }
  // sort the map with entries for b and a in descending order
  sortedMap = new Map([...newMap.entries()].sort((a,b) => (b[1]-a[1])))
  // new array with sorted keys
  newString = [...sortedMap.keys()]
  // join the keys
  return newString.join('');
}

const result = removeDuplicatesInDescendingOrder('ABCDAABBBCAAAADDDDD')
console.log(result)
