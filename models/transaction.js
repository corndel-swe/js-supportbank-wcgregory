export class Bill {
	#total
  constructor (amount) {
		this.#total = Number(amount) ? amount : 0
		this.currency = '£'
	}

	addToAmount(addition) {
		this.#total += Number(addition)
	}

	removeFromAmount(deduction) {
		this.#total -= Number(deduction)
	}

	removeByDiscount(percent) {
		this.#total = this.#total * ((100 - Number(percent)) / 100)
	}

	splitBill(people) {
		// split the total bill by the number of people
		const split = this.#total / people
		console.log(`Each person to pay ${split}`)
	}

	printBill() {
		console.log(`Total Bill ${this.#total}`)
	}
}
