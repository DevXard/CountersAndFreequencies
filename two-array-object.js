// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    // create result object
    const result = {}
    // loop over the fist array 
        for(let i = 0; i < arr1.length; i++) {
            // first array values are keys for result
            result[arr1[i]] = arr2[i] || null
            // second array values are values for result object or null
        }
    return result

}

module.exports = twoArrayObject;