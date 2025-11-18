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
	const combined = [...arr1.filter((n) => !arr2.has(n)), ...arr2.filter((n) => arr1.has(n))]
	return combined
}
console.log(arrayIntersection([2, 4, 5, 6, 7], [1, 3, 5, 8, 9]))
// 11. Given an array, return the most frequent element in the array

// 12. Given an array of numbers, return another array with each value multiplied by a spcific amount

// 13. Given an array of numbers, filter out any negative numbers

// 14. Given an array of numbers, separate into two arrays one for even numbers and one for odd

// 15. Given an array of numbers, find the first number greater than 10

// 16. Given an array of numbers, count how many numbers are greater than 10

// 17. Given an array of words, return an new array with the length of each word

// 18. Write a function that joins an array of strings into a single sentence string with punctuation

// 19. Given an array of words, sort them in alphabetical order and return as a new array

// 19. Write a function that takes in an array of numbers, squares all numbers, the filters out any values that divide by 5 evenly, then sum all of the remaining numbers as a single output

// 20. Given an array of mixed values, remove all null or undefined values

// 21. Given a string of paragraph text, return an array of each word with punctuation removed
