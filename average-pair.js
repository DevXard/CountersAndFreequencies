// add whatever parameters you deem necessary
function averagePair(arr, avg) {

    let left = 0;
    let right = arr.length -1;

    while(left < right) {
        if((arr[left] + arr[right]) / 2 === avg) return true
        if((arr[left] + arr[right]) / 2 > avg) {
            right--
        }
        if((arr[left] + arr[right]) / 2 < avg){
          left ++
        }
       
    }
    return false;
}

module.exports = averagePair;
