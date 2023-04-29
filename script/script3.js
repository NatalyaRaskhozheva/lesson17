class Reminder {
	static currentReminder
	constructor(message, time) {
		if (Reminder.currentReminder)
			return Reminder.currentReminder
		this.message = message
		this.time = time
		this.count = 0
		this.timer
		Reminder.currentReminder = this
	}
	start() {
		this.timer = setInterval(
			() => {
				document.write(`${this.message} ${this.count++}<br>`)
			}, this.time * 1000)
	}
	otherMessage(newMessage, newTime) {
		setTimeout(() => {
			this.message = newMessage
		}, newTime * 1000)
	}
	stopMessage(closeTime) {
		setTimeout(() => {
			clearInterval(this.timer)
		}, closeTime * 1000)
	}
	static number() {
		return Reminder.numObj
	}
}
let message = 'Поїсти'
let a = new Reminder(message, 2)
let b = new Reminder(message, 8)
b.start()
a.start()
a.otherMessage('Поспати', 5)
b.otherMessage('Погуляти', 1)

a.stopMessage(10)





// class Reklama {
// 	static minIntervalValue
// 	static maxIntervalValue
// 	constructor(message, minIntervalValue, maxIntervalValue) {
// 		this.message = message
// 		Reklama.minIntervalValue = minIntervalValue
// 		Reklama.maxIntervalValue = maxIntervalValue
// 	}
// 	getcurrentIntervalValue() {
// 		document.write(`min =${Reklama.minIntervalValue} - max = ${Reklama.maxIntervalValue}`)
// 		return Reklama.minIntervalValue + Math.floor(Math.random() * (Reklama.maxIntervalValue - Reklama.minIntervalValue + 1))
// 	}
// 	start() {
// 		setTimeout(
// 			() => {
// 				document.write(this.message)
// 				this.start()
// 			},
// 			this.getcurrentIntervalValue() * 1000
// 		)
// 	}
// }

// for (let i = 0; i < 10; i++) {
// 	new Reklama(`Hello ${i}<br>`, 0, 3).start()
// }

// setTimeout(() => {
// 	Reklama.minIntervalValue = 2
// 	Reklama.maxIntervalValue = 5
// }, 2000)