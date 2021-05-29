// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
    // Turn numbers into strings
    // Create a Map of freaquencies for each number
    const num1 = toFreaq(n1.toString())
    const num2 = toFreaq(n2.toString())
    // compare bouth Maps size
    if(num1.size !== num2.size) return false
    // compare all freaquencies
    for( let i of num1.keys()){
        if(num1.get(i) !== num2.get(i)) return false
      }
    return true
  }
  
  // Accepts string
  // Returns Object with char freaquency
  function toFreaq(str){
    // create result Object
    const result = new Map()
    // loop over str 
    for(let char of str){
      // get current char count if exist or 0
      let currCount = result.get(char) || 0
      //set current char count to current count + 1
      result.set(char, currCount + 1)
      
    }
    
    return result
  
  }

module.exports = sameFrequency;