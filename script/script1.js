class AmountOfNumber {
	static NumberOfPositive(myArray) {
		return myArray.reduce((sum, el) => (el > 0 ? ++sum : sum), 0)
	}
	static NumberOfNegative(myArray) {
		return myArray.reduce((sum, el) => (el < 0 ? ++sum : sum), 0)
	}
	static NumberOfExample(myArray, number) {
		return myArray.reduce((sum, el) => (el === number ? ++sum : sum), 0)
	}
}

let arr = [9, 7, 0, -4, -9, 9, -80, 67]
document.write(AmountOfNumber.NumberOfExample(arr, 9))