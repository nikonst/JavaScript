const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const checkPalindrome = (str) => {
    return str.split('').reverse().join('') === str;
}

const countLetters = (l, s) => {
    return s.split('').filter(ch => ch === l).length
}

export { reverseString, checkPalindrome, countLetters }