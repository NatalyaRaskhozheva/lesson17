class Product {
	constructor(name, unit, number, nameManufacturer, registrationNumberManufacturer) {
		this.name = name
		this.unit = unit
		this.number = number
		this.manufacturer = {
			name: nameManufacturer,
			registrationNumber: registrationNumberManufacturer
		}
	}

	toString() {
		return `Name - ${this.name},<br> Unit - ${this.unit},<br> Number - ${this.number},<br> Name manufacture - ${this.manufacturer.name} - Registration number - ${this.manufacturer.registrationNumber}<br>`
	}
}
class Warehouse {
	constructor() {
		this.productList = []
	}
	registerProduct(product) {
		this.productList.push(product)
	}
	deleteProducts(name, amount) {
		this.productList.find(el => el.name === name).number -= amount
	}
	filterProducts(nameFirm) {
		let filter = this.productList.filter(
			(element => element.manufacturer.name === nameFirm)
		)
		return filter
	}
}
let sklad = new Warehouse
let a = new Product('Sema', 'metr', 9, 'SemaCat', 45353535)
let b = new Product('Iphone', '$', 10, 'AppleCompany', 345678)
let c = new Product('TV', '$', 120, 'Samsung', 132405)
let d = new Product('TV', '$', 107, 'Fichi', 568214)


sklad.registerProduct(a)
sklad.registerProduct(b)
sklad.registerProduct(c)
sklad.registerProduct(d)
sklad.deleteProducts('Iphone', 7)
document.write(sklad.filterProducts('Fichi'))
document.write(sklad.productList)
