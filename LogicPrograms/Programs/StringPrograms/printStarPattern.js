const printLeftStarPattern= (count) => {
  for(let i = 1; i<= count; i ++){
    let str = "* "
    console.log(str.repeat(i)) 
  }
}
printLeftStarPattern(5)

const printRightStarPattern= (count) => {
  for(let i = 1; i<= count; i ++){
    let str = "* "
    let space = "  "
    console.log(space.repeat((count-i))+str.repeat(i)) 
  }
}
printRightStarPattern(6)

const printInvertedRightStarPattern= (count) => {
  for(let i = count; i> 0; i --){
    let str = "* "
    let space = "  "
    console.log(space.repeat((count - i))+str.repeat(i)) 
  }
}
printInvertedRightStarPattern(6)

const printInvertedLeftStarPattern= (count) => {
  for(let i = count; i> 0; i --){
    let str = "* "
    console.log(str.repeat(i)) 
  }
}
printInvertedLeftStarPattern(6)

const printPyramidStarPattern= (count) => {
  for(let i = 1; i<= count; i ++){
    let str = "* "
    let space = " "
    console.log(space.repeat((count-i))+str.repeat(i)) 
  }
}
printPyramidStarPattern(6)

const printInvertedPyramidStarPattern= (count) => {
  for(let i = count; i>0; i --){
    let str = "* "
    let space = " "
    console.log(space.repeat((count-i))+str.repeat(i)) 
  }
}
printInvertedPyramidStarPattern(6)
