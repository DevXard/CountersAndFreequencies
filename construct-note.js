// add whatever parameters you deem necessary
function constructNote(str1, str2) {
    if(!str2) return false

    let chars1 = createFreaques(str1);
    let chars2 = createFreaques(str2);


    for(let char of chars1.keys()) {
      if(chars1.get(char) > chars2.get(char)) return false
    }
    return true;
}

function createFreaques(str) {
    //create result Map
    const result = new Map();
    // Loop over the string
    for(let char of str) {
        // if current char does not exist add it and set it to one
        let charCount = result.get(char) || 0;
        result.set(char, charCount + 1)
    }
        return result
}

module.exports = constructNote;