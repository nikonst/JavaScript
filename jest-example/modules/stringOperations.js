const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const checkPalindrome = (str) => {
    return str.split('').reverse().join('') === str;
}

export { reverseString, checkPalindrome }