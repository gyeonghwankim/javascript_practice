const readline = require('readline')
const r = readline.createInterface({
	input : process.stdin,
	output: process.stdout
})

const START_MSG = `최대공약수 구하기 ( 두 개 이상의 숫자를 공백으로 구분하여 입력하세요. )`
const ERROR_MSG = `숫자를 입력하세요 ex)15 45 30`

function GCD(numbers) {
	numbers.sort((a, b) => { return b - a })
	if (numbers[1] == 0) return numbers[0]
	return GCD([numbers[1], numbers[0] % numbers[1]])
}

function multipleGCD(numbers) {
	let ret = GCD([numbers[0], numbers[1]])
	for(let i = 2; i < numbers.length; i++){
		ret = GCD([ret, numbers[i]])
	}
	return ret;
}

function isItNumber(arr){
	for(let i = 0; i < arr.length; i++){
		if(isNaN(arr[i]))
			return false
	}
	return true
}

console.log(START_MSG)
r.prompt()
r.on('line', (data) => {
	arr = data.split(' ')
	if(arr.length < 2){
		console.log(ERROR_MSG)
	}else if(!isItNumber(arr)){
		console.log(ERROR_MSG)
	}else{
		console.log(`입력하신 숫자들의 최대 공약수는 ${multipleGCD(arr)}입니다.`)
		process.exit()
	}
})

