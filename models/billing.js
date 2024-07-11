export class Bill {
  #total
  #currency
  #currencySymbol
  constructor (amount, currency) {
		this.#total = Number(amount) ? amount : 0
		this.#currency = String(currency).toUpperCase()
		if (this.#currency === 'GBP' || this.#currency === 'POUNDS' || this.#currency === '£') {
			this.#currencySymbol = '£'
		} else '';
	}

	getTotal() {
		return this.#total
	}

	getCurrency() {
		return this.#currency
	}

	getCurrencySymbol() {
		return this.#currencySymbol
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
		console.log(`Each person to pay ${this.#currencySymbol}${split}`)
	}

	printBill() {
    // print current bill including timestamp
		const transactionTime = new Date()
		const printout = `${transactionTime.toDateString()} - Total Bill ${this.#currencySymbol}${this.#total}`
		//console.log(`${transactionTime.toDateString()} - Total Bill ${this.#currencySymbol}${this.#total}`)
		console.log(printout)
		return printout
	}
}
