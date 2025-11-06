// 1. Write a function that returns a number as a rounded integer
const round = (num) => {
	return Math.round(num)
}
console.log(round(234.34))

// 2. Write a function that returns a number in currency format
const toMoney = (num) => {
	return num.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	})
}
console.log(toMoney(456))

// 3. write a function that takes in a money string value and returns the amount as a number
const fromMoney = (str) => {
	return parseFloat(str.replace(/[^0-9.-]+/g, ''))
}
console.log(fromMoney('$43,234.06'))
console.log(fromMoney('$-345'))

// 4. Write a function that takes in a string and outputs the string reversed
function reverse(str) {
	return [...str].reverse().join('')
}
console.log(reverse('hello'))
// 5. Write a function that returns the number of vowels contained in a given string
function vowelSearch(str) {
	return str.replace(/[aeiouAEIOU]/g, '')
}
console.log(vowelSearch('hello for all'))
console.log(vowelSearch('fsdgwkdsnl1223123.12#$@'))
console.log(vowelSearch('eaieaieouauau'))
// 6. Write a function that takes in a string, and outputs true if the string is a palindrome
const checkPally = (str) => {
	const reverse = [...str].reverse().join('')
	return str == reverse
}
console.log(checkPally('uritiru'))
console.log(checkPally('string'))
// 7. Given a string of text, return the string with each word capitalized
const capitalString = (str) => {
	const temp = str.split(' ')
	const final = []
	temp.forEach((word) => {
		final.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
	})
	return final.join(' ')
}
console.log(capitalString('some random words'))
// version 2
const capital2 = (str) => {
	return str.replace(/\b\w/g, (char) => char.toUpperCase())
}
console.log(capital2('another type of string'))
// 8. Given an array, count the number of duplicate values

// 9. Given a string of text, find the longest word in the string and return the length and the word

// 10. Given two different words as strings, check if the two are anagrams of each other

// 11.
