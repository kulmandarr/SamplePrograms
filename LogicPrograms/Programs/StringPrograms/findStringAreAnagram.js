const findStringIsAnagram = (str1, str2) => {
  if(str1.length != str2.length){
    return `${str1} and ${str2} are not anagram`
  }
  let countMap = new Map();
  for(let i =0; i< str1.length; i++){
    if(countMap.has(str1.charAt(i))){
      countMap.set(str1.charAt(i), countMap.get(str1.charAt(i)) + 1)
    }
    else {
      countMap.set(str1.charAt(i),1);
    }
  }
  for(let i =0; i< str1.length; i++){
    if(countMap.has(str2.charAt(i))){
      countMap.set(str2.charAt(i), countMap.get(str2.charAt(i)) - 1)
    }
    else {
      `${str1} and ${str2} are not anagram`
    }
  }
  let keys = countMap.keys();
  for(let key in keys){
    if(countMap.get(key)!=0){
      return `${str1} and ${str2} are not anagram`
    }
  }
  return `${str1} and ${str2} are anagram`
}
const result = findStringIsAnagram("triangle","integral")
console.log(result)
