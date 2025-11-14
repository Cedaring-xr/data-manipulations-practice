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
function countDuplicates(arr) {
	const counts = {}
	let duplicates = 0

	arr.forEach((num) => {
		counts[num] = (counts[num] || 0) + 1
	})

	for (const key in counts) {
		if (counts[key] > 1) {
			duplicates += counts[key] - 1
		}
	}

	return duplicates
} // O(n)
console.log(countDuplicates([1, 3, 4, 5, 6, 4, 3, 6, 4, 5, 3, 5]))

function dupes(arr) {
	let count = 0
	let sorted = [...arr].sort((a, b) => a - b)
	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i] === sorted[i - 1]) {
			count++
		}
	}
	return count
} // O(n log n)
console.log(dupes([1, 2, 3, 4, 5, 6, 4, 5, 6, 4, 54, 5, 2]))
// 9. Given a string of text, find the longest word in the string and return the length and the word
const longestWord = (str) => {
	let longest = 0
	const newArr = str.split(' ')
	for (let word of newArr) {
		if (word.length > longest) {
			longest = word.length
		}
	}
	return longest
}
console.log(longestWord('test this string for longest word'))

// 10. Write a function that sorts letters of a string alphabetically
function alphaSort(str) {
	return str.split('').sort().join()
}
console.log(alphaSort('some string of letters'))
// 11. Given two different words as strings, check if the two are anagrams of each other
const anagrams = (str1, str2) => {
	let letters1 = str1.split('').sort()
	let letters2 = str2.split('').sort()
	if (letters1.length !== letters2.length) return false
	return letters1.every((val, i) => val === letters2[i])
}
console.log(anagrams('test', 'worda'))
console.log(anagrams('test', 'sett'))
// 12. Write a function that takes in an unknown number of string arguments and returns them sorted alphabetically
function sortAll(...args) {
	const returnList = []
	for (word of args) {
		returnList.push(word.split('').sort().join(''))
	}
	return returnList
}
console.log(sortAll('test', 'other', 'third', 'more'))
console.log(sortAll('something', 'another'))
