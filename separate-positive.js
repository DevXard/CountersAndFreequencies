// add whatever parameters you deem necessary
function separatePositive(arr) {

    // create left and right pointers
    let left = 0
    let right = arr.length - 1
    // loop over until left pointer is > right pointer
    while( left < right){
      //mover left pointer untill negativ number 
      if(arr[left] > 0 && arr[right] > 0) {
        left ++
      }
      if(arr[left] < 0 && arr[right] > 0){
        [arr[left], arr[right]] = [arr[right], arr[left]]
      }
      if(arr[left] < 0 && arr[right] < 0){
        right --
      }else{
        left ++
      }
      
    //if right pointer is negativ and left pointer is negativ move right pointer
    // if left pointer is negativ and right is positiv switch places
    }
  
    return arr
    
  }

module.exports = separatePositive;
