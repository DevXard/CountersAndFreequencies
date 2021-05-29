// add whatever parameters you deem necessary
// Input: arr of numbers and target number
// Output number 
// function counts number of pairs to produce target number
function countPairs(arr, target) {
    //Create a result to count number of payrs
    let result = 0;
    // Create a pointer to point the number we coing to check
    let currVal = 0
    
    // Loop over the array
    for(let i = arr.length - 1; i >= currVal ; i-- ){
      // console.log(currVal, i)
      // if pointer greater or equal then arr length return result
      if(currVal > arr.length) return result
      //if arr at pointer and arr at current index = target increment result
      if((arr[currVal] + arr[i]) === target){
        result++
      }
      //if pointer greaiter then curr index increment pointer reset index
      if(currVal === i){
        currVal++
        i = arr.length - 1
        
      }
      
    }
    return result
}

module.exports = countPairs;
