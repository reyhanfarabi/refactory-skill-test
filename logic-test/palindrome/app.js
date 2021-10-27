function isPalindrome(str) {
    // lowercase string input
    const lowerCased = str.toLowerCase()

    // storing lowercased original string and reversed string
    const originalStr = lowerCased;
    const reversedStr = lowerCased.split('').reverse().join("");

    // check if palindrome
    if(originalStr === reversedStr) {
        return true;
    }
    return false;
}