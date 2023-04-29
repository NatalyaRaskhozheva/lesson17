class Auto {
	static currentAuto
	constructor(name, brand, number) {
		if (Auto.currentAuto)
			return Auto.currentAuto
		this.name = name
		this.brand = brand
		this.number = number
		Auto.currentAuto = this
	}
	toString() {
		return `Name - ${this.name}, brand - ${this.brand}, number - ${this.number}`
	}
}
let a = new Auto('Ivan', 'Kia', 'AX8765')
let b = new Auto('Ivan', 'Mer', 'AX8790')
document.write(b)

