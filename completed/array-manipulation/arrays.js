// 1. Given an array of numbers, find the maximum value in the array
function findMax(arr) {
	const max = arr.sort().pop()
	return max
}
console.log(findMax([1, 3, 54, 5, 6, 64, 65, 4, 3, 3]))
console.log(findMax([1, 3, 3, 3]))
// 2. Given an array of numbers, sum all of the numbers in the array
function sumAll(arr) {
	let total = 0
	for (let i = 0; i < arr.length; i++) {
		total += arr[i]
	}
	return total
}
console.log(sumAll([34, 5, 6, 3, 23, 324, 23]))
// 3. Given an array of mixed types, sum all of the numbers and return that value
const sumAllNumbers = (arr) => {
	let total = 0
	let numArr = arr.filter(Number.isFinite)
	console.log(numArr)
	for (let i = 0; i < numArr.length; i++) {
		total += numArr[i]
	}
	return total
}
console.log(sumAllNumbers([234, 234, 3, 'test', ['23'], { let: 234 }, 34]))
// 4. Given an array, filter out any falsy values and then return the updated array
const noFalse = (arr) => {
	return arr.filter(Boolean)
}
console.log(noFalse([0, NaN, -12, false, true, 'test', '', 2342]))
// 5. Given two arrays of numbers, combine them into one array while removing all duplicates
const comboArray = (arr1, arr2) => {
	const combined = arr1.concat(arr2)
	return combined.filter((num, index) => combined.indexOf(num) === index)
}
console.log(comboArray([1, 2, 3, 4, 5], [3, 6, 7, 5, 4, 3]))
// 6. given two arrays of numbers, combine them into one array while only removing duplicates from both arrays
function comboArray2(arr1, arr2) {
	const set1 = new Set(arr1)
	const set2 = new Set(arr2)
	const combined = [...arr1.filter((n) => !set2.has(n)), ...arr2.filter((n) => !set1.has(n))]
	return combined
}
console.log(comboArray2([3, 4, 5, 6, 6, 7], [3, 4, 5, 5, 5, 5, 6, 23, 2]))
// 7. Given a nested array, flatten and return as a single array
const flatArray = (arr) => {
	return arr.flat(Infinity)
}
console.log(flatArray([2, 2, 3, [3, 4, 5, [5, 6, 7, 7], 34, 456]]))
// 8. Given a nested array of values, flatten it only one level
const flatShallow = (arr) => {
	return arr.flat()
}
console.log(flatShallow([2, 2, 3, [3, 4, 5, [5, 6, 7, 7], 34, 456]]))
// 9. Given an array of numbers, chunk the array into groups of a specific size
function chunky(arr, size) {
	const result = []
	let i = 0
	while (i < arr.length) {
		result.push(arr.slice(i, i + size))
		i += size
	}
	return result
}
console.log(chunky([1, 2, 3, 4, 5, 65, 4, 7, 7, 8, 9], 3))
// 10. Find the intersection of two arrays by returning a new array containing elements found in both input arrays
const arrayIntersection = (arr1, arr2) => {
	const set2 = new Set(arr2)
	const result = []

	for (const item of arr1) {
		if (set2.has(item)) {
			result.push(item)
		}
	}
	return result
}
console.log(arrayIntersection([2, 4, 5, 6, 7], [1, 3, 5, 8, 9]))
// 11. Given an array, return the most frequent element in the array
function mostCommon(arr) {
	const freq = {}
	let mostFrequent = null
	let count = 0
	for (const num of arr) {
		freq[num] = (freq[num] || 0) + 1
		if (freq[num] > count) {
			count = freq[num]
			mostFrequent = num
		}
	}
	return mostFrequent
}
console.log(mostCommon([3, 4, 5, 6, 4, 3, 4, 5, 6, 4, 3, 3, 5, 6, 7]))
// 12. Given an array of numbers, return another array with each value multiplied by a spcific amount
function multiplyArray(arr, num) {
	let newArr = []
	for (const item of arr) {
		newArr.push(item * num)
	}
	return newArr
}
console.log(multiplyArray([2, 3, 5, 5, 7, 7, 8], 4))
// 13. Given an array of numbers, filter out any negative numbers
const noNegatives = (arr) => {
	return arr.filter((num) => num > 0)
}
console.log(noNegatives([1, 2, 4, 5, 5, 6, -6, -3, -6, -2]))
// 14. Given an array of numbers, separate into two arrays one for even numbers and one for odd
const separateNumbers = (arr) => {
	let positive = []
	let negative = []
	for (const num of arr) {
		if (num >= 0) {
			positive.push(num)
		} else if (num < 0) {
			negative.push(num)
		}
	}
	return { positive: positive, negative: negative }
}
console.log(separateNumbers([2, 3, 5, 6, -6, -7, -2, 6, 7, -5]))
// 15. Given an array of numbers, find the first number greater than a specificed number
function firstInstance(arr, num) {
	return arr.filter((x) => x > num).slice(0, 1)
}
console.log(firstInstance([1, 2, 5, 6, 7, 8, 10, 13, 23], 10))
console.log(firstInstance([1, 2, 5, 6, 7, 8, 10, 13, 23, 45, 34, 645], 10))
// 16. Given an array of numbers, count how many numbers are greater than 10
function countInstance(arr, num) {
	return arr.filter((item) => item > num).length
}
console.log(countInstance([1, 2, 5, 6, 7, 8, 10, 13, 23], 10))
console.log(countInstance([1, 2, 5, 6, 7, 8, 10, 13, 23, 45, 34, 645], 10))
// 17. Given an array of words, return an new array with the length of each word
const wordLength = (arr) => {
	let lengthArray = []
	for (const item of arr) {
		lengthArray.push(item.length)
	}
	return lengthArray
}
console.log(wordLength(['test', 'and', 'if', 'something']))
// 18. Write a function that joins an array of strings into a single sentence string with punctuation
function sentence(arr) {
	let start = arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1).toLowerCase()
	let structure = arr.slice(1).join(' ')
	return `${start} ${structure}.`
}
console.log(sentence(['This', 'should', 'be', 'a', 'sentence']))
// 19. Given an array of words, sort them in alphabetical order and return as a new array
function alpha(arr) {
	let newArr = arr.map((word) => word.toLowerCase())
	return newArr.sort()
}
console.log(alpha(['this', 'should', 'be', 'sorted', 'alphabetically']))
console.log(alpha(['This', 'Should', 'be', 'sorted', 'alphabetically']))
// 20. Write a function that takes in an array of numbers, squares all numbers, the filters out any values that divide by 5 evenly, then sum all of the remaining numbers as a single output
const doMath = (arr) => {
	let squared = []
	let final = 0
	for (const item of arr) {
		squared.push(item * item)
	}
	squared = squared.filter((num) => num % 5 !== 0)
	for (let i = 0; i < squared.length; i++) {
		final += squared[i]
	}
	return { total: final, all: squared }
}
console.log(doMath([3, 5, 6, 7, 8, 9, 12, 1, 34, 45]))

const mathMap = (arr) => {
	return arr.map((num) => num * num)
}
console.log(mathMap([3, 5, 6, 7, 8, 9, 12, 1, 34, 45]))
// 21. Given a string of paragraph text, return an array of each word with punctuation removed
const separateString = (str) => {
	let newString = str.replace(/[^\w\s]/g, '')
	const newArr = newString.split(' ')
	return newArr
}
console.log(separateString("Starting, with some string? Nah, it's different isn't it?"))
// 22. Given an array of words, group them by their starting letter and return a nested array of grouped values
const groupedWords = (arr) => {
	const newArr = arr.sort()
	const groups = {}
	for (let item of newArr) {
		const letter = item[0].toLowerCase()

		if (!groups[letter]) {
			groups[letter] = []
		}
		groups[letter].push(item)
	}
	return Object.values(groups)
}
console.log(groupedWords(['first', 'second', 'array', 'animal', 'fire', 'create', 'basic', 'jumping']))
// 23. given an array of numbers, return the top X largest numbers
function topNumbers(arr, num) {
	const sorted = arr.sort((a, b) => a - b)
	return sorted.slice(0, num)
}
console.log(topNumbers([23, 4, 56, 78, 432, 23, -12, 0], 3))
