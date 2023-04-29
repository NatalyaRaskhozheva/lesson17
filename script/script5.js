class Author {
	constructor({ firstName, lastName, surName, description }) {
		this.firstName = firstName
		this.lastName = lastName
		this.surName = surName
		this.description = description
	}
	get fullName() {
		return this.firstName + ' ' + this.lastName + ' ' + this.surName
	}
	set fullName(value) {
		var split = value.split(' ')
		this.firstName = split[0]
		this.lastName = split[0]
		this.surName = split[2]
	}
	toString() {
		return `${this.fullName} - ${this.description}`
	}
}

class Publisher {
	constructor({ name, registrationNumber, yearOfFoundation }) {
		this.name = name
		this.registrationNumber = registrationNumber
		this.yearOfFoundation = yearOfFoundation
	}
	toString() {
		return `${this.name} RN - ${this.registrationNumber}\n Sience ${this.yearOfFoundation}`
	}
}

class Book {
	constructor(initData) {
		this.nameBook = initData.nameBook
		this.genre = initData.genre

		this.autor = new Author(initData)
		this.publisher = new Publisher(initData)
	}
	toString() {
		return `<br><br>${this.nameBook} - ${this.genre}<br> ${this.autor}<br>${this.publisher}`
	}
}
class Library {
	constructor() {
		this.bookList = []
		this.sectionsGenre = {}
		this.sectionsPublisher = {}
	}
	registerBook(book) {
		this.bookList.push(book)
	}
	deleteBook(nameBook) {
		for (let i = 0; i < this.bookList.length; i++) {
			if (this.bookList[i].nameBook === nameBook) {
				this.bookList.splice(i, 1)
			}
		}
	}
	getSectionsGenre() {
		let copyBookList = [...this.bookList]
		for (let i = 0; i < copyBookList.length; i++) {
			let currentBook = copyBookList[i]
			if (!this.sectionsGenre[currentBook.genre]) {
				this.sectionsGenre[currentBook.genre] = []
			}
			this.sectionsGenre[currentBook.genre].push(currentBook)
		}
	}
	getSectionsPublisher() {
		let copyBookList = [...this.bookList]
		for (let i = 0; i < copyBookList.length; i++) {
			let currentBook = copyBookList[i]

			if (!this.sectionsPublisher[currentBook.publisher.name]) {
				this.sectionsPublisher[currentBook.publisher.name] = []
			}
			this.sectionsPublisher[currentBook.publisher.name].push(currentBook)
		}
	}
	filterBook(nameBook) {
		let filter = this.bookList.filter(
			(book => book.nameBook === nameBook)
		)
		return filter
	}
	filterBookAuthor(nameAuthor) {
		let filter = this.bookList.filter(
			(book => book.autor.fullName === nameAuthor)
		)
		return filter
	}
	filterBookPublisher(namePublisher) {
		let filter = this.bookList.filter(
			(book => book.publisher.name === namePublisher)
		)
		return filter
	}

}
let library1 = new Library

let book1 = new Book({
	nameBook: 'City Ukraine',
	genre: 'history',
	firstName: 'Alex',
	lastName: 'Klopotenko',
	surName: 'Igorivich',
	description: 'ukrain author',
	name: 'Vikhola',
	registrationNumber: 7890,
	yearOfFoundation: 2020,
})

let book2 = new Book({
	nameBook: 'Apple pies',
	genre: 'cookery',
	firstName: 'Alina',
	lastName: 'Ogienko',
	surName: 'Olegivna',
	description: 'cookery author',
	name: 'Komora',
	registrationNumber: 9056,
	yearOfFoundation: 2015
})

let book3 = new Book({
	nameBook: 'History Ukraine',
	genre: 'history',
	firstName: 'Natalya',
	lastName: 'Golubeth',
	surName: 'Igorivna',
	description: 'history autor',
	name: 'Vikhola',
	registrationNumber: 7890,
	yearOfFoundation: 2020
})

library1.registerBook(book1)
library1.registerBook(book2)
library1.registerBook(book3)
library1.getSectionsGenre()
library1.getSectionsPublisher()





// library1.deleteBook('History Ukraine')


document.write(library1.bookList)
console.log(library1.sectionsGenre)
console.log(library1.sectionsPublisher)

document.write(library1.filterBook('History Ukraine'))
document.write(library1.filterBookAuthor('Alina Ogienko Olegivna'))
document.write(library1.filterBookPublisher('Vikhola'))

