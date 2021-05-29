// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    //chaek if first string is greater then second 
    //and return false if true
    if(str1 > str2) return false
    //create a pointer for str1
    let start = 0
    // loop over str2 and every time str1 at pointer
    // equals str2 at index increment pointer and continue checking for next falue
    //if pointer greater or equal then str1 length return true
    for(let i = 0; i < str2.length; i++){
      if(str1[start] === str2[i]){
        start++
      }
      if(start >= str1.length) return true
    }
    return false
  }

module.exports = isSubsequence;