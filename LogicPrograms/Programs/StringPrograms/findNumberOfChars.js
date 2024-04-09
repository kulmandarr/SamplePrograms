const findNumberOfChars = (str1) => {
  let map = new Map();
  for(let i = 0; i<str1.length; i++){
    if(!map.get(str1[i])){
      map.set(str1[i], 1)
    }
    else{
      console.log(`Character is ${str1[i]} and value is ${map.get(str1[i])}`)
      map.set(str1[i],map.get(str1[i])+1)
    }
  }
  for(let [key, value] of map){
    console.log(`${key} is present ${value} times`)
  }
}
const result = findNumberOfChars('VinayVKulkarniV')
