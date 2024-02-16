const countVowels = (str) => {
	const newStr = str.split('')

	const result = newStr.filter(letter => 'aeiouAEIOU'.includes(letter)).length

	console.log(result)
}