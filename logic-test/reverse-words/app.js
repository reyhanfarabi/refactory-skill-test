function reverse(str) {
    // split input string into array
    const originalArr = str.split(" ");
    const resultArr = []
    
    for (let strItem of originalArr) {
        const strLower = strItem.toLowerCase();
        const strReverse = strLower.split('').reverse().join('');
        let isCapitalized = false;

        // check if string capitalized
        if (strItem[0] !== strLower[0]) {
            isCapitalized = true;
        }

        // check and capitilize string id necessary
        if (isCapitalized) {
            resultArr.push(`${strReverse[0].toUpperCase()}${strReverse.slice(1)}`);
        } else {
            resultArr.push(strReverse)
        }
    }

    return resultArr.join(' ');
}