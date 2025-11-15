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
// 5. Given two arrays of numbers, combine them into one array while removing duplicates

// 6. Given a nested array, flatten and return as a single array

// 7. Given an array of objects, return all unique values of a specific key

// 7. Given an array of numbers, chunk the array into groups of a specific size

// 8. Find the intersection of two arrays by returning a new array containing elements found in both input arrays

// 9. Given an array, return the most frequent element in the array

// 10. Given an array of numbers, return another array with each value multiplied by a spcific amount

// 11. Given an array of numbers, filter out any negative numbers

// 12. Given an array of numbers, separate into two arrays one for even numbers and one for odd

// 13. Given an array of numbers, find the first number greater than 10

// 14. Given an array of numbers, count how many numbers are greater than 10

// 15. Given an array of words, return an new array with the length of each word

// 16. Write a function that joins an array of strings into a single sentence string with punctuation

// 17. Given an array of words, sort them in alphabetical order and return as a new array

// 18. Write a function that takes in an array of numbers, squares all numbers, the filters out any values that divide by 5 evenly, then sum all of the remaining numbers as a single output

// 19. Given an array of mixed values, remove all null or undefined values

// 20. Given a string of paragraph text, return an array of each word with punctuation removed
