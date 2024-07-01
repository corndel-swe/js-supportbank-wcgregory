import * as currencyConvertor from './currencyExchange.js'

export class Currency {
  #amount
	#currency
  #currencyCode
	#currencySymbol
  constructor (currency) {
		this.#currency = String(currency).toUpperCase()
		if (this.#currency === 'GBP' || this.#currency === 'POUNDS' || this.#currency === '£') {
      this.#currencyCode = 'GBP'
			this.#currencySymbol = '£'
		} else if (this.#currency === 'USD' || this.#currency === 'DOLLARS' || this.#currency === '$') {
      this.#currencyCode = 'USD'
			this.#currencySymbol = '$'
    } else {
      this.#currencyCode = null
      this.#currencySymbol = null
    }
	}

	totalAmount(amount) {
    this.#amount = Number(amount) ? amount : 0
	}

  addToAmount(addition) {
		this.#amount += Number(addition)
	}

	removeFromAmount(deduction) {
		this.#amount -= Number(deduction)
	}

  setCurrencyCode(code) {
    // ISO 4217 three-letter code
		this.#currencyCode = code
	}
	exchange(amount, newCurrency) {
		// TODO
	}

  getExchangeRate(fromCurrency, toCurrency) {
		// TODO
	}

	printCurrency() {
		console.log(`Currency Symbol: ${this.#currencySymbol}Amount: ${this.#amount} 
                - ${this.#currencySymbol}${this.#amount}`)
	}
}

export class PoundSterling extends Currency {
  #currencyCode
  #currencySymbol
  constructor() {
    super('PoundSterling')
    this.#currencyCode = 'GBP'
    this.#currencySymbol = '£'
  }

  getExchangeRate(toCurrency) {
		if (toCurrency === 'USD') {
      return currencyConvertor.exchangeGBPToUSD
    } else if (toCurrency === 'AUD') {
      return currencyConvertor.exchangeGBPToAUD
    } else if (toCurrency === 'INR') {
      return currencyConvertor.exchangeGBPToINR
    } else return -1
	}
}
