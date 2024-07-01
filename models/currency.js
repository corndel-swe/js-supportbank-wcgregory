import * as currencyConvertor from './currencyExchange.js'

export class Currency {
  #amount
	#currency
  #currencyCode
	#currencySymbol
  constructor (currency) {
		this.#currency = String(currency).toUpperCase()
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

  getCurrencySymbol(toCurrency) {
		if (toCurrency === 'USD') {
      return currencyConvertor.symbolUSD
    } else if (toCurrency === 'AUD') {
      return currencyConvertor.symbolAUD
    } else if (toCurrency === 'INR') {
      return currencyConvertor.symbolINR
    } else return -1
	}

  #getExchangeRate(toCurrency) {
		// TODO - Not Implemented
	}

  exchange(amount, newCurrency) {
    let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.#currencyCode} to ${newCurrency} - Exchange Rate: ${rate} - Amount: ${symbol}${value}`)
    }
	}

	displayCurrency() {
    let thisCurrency = this.#currencyCode
		console.log(`This currency: ${thisCurrency} Amount: ${this.#amount}`)
    console.log(`${this.#currencySymbol}${this.#amount}`)
	}

}

export class PoundSterling extends Currency {
  // #currencyCode
  // currencySymbol
  constructor() {
    super('PoundSterling')
    this.currencyCode = 'GBP'
    this.currencySymbol = currencyConvertor.symbolGBP
    this.amount = 0
  }

  #getExchangeRate(toCurrency) {
		if (toCurrency === 'USD') {
      return currencyConvertor.exchangeGBPToUSD
    } else if (toCurrency === 'AUD') {
      return currencyConvertor.exchangeGBPToAUD
    } else if (toCurrency === 'INR') {
      return currencyConvertor.exchangeGBPToINR
    } else return -1
	}

  exchange(amount, newCurrency) {
    let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.currencyCode} to ${newCurrency} - Exchange Rate: ${rate} - Amount: ${symbol}${value}`)
    }
	}

  displayCurrency() {
		console.log(`This currency: ${this.currencyCode} Amount: ${this.amount}`)
    console.log(`${this.currencySymbol}${this.amount}`)
	}
}

export class USDollars extends Currency {
  #currencyCode
  #currencySymbol
  constructor() {
    super('USDollars')
    this.#currencyCode = 'USD'
    this.#currencySymbol = currencyConvertor.symbolUSD
  }

  #getExchangeRate(toCurrency) {
		if (toCurrency === 'GBP') {
      return currencyConvertor.exchangeUSDToGBP
    } else if (toCurrency === 'AUD') {
      return currencyConvertor.exchangeUSDToAUD
    } else if (toCurrency === 'INR') {
      return currencyConvertor.exchangeUSDToINR
    } else return -1
	}

  exchange(amount, newCurrency) {
    let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.#currencyCode} to ${newCurrency} - Exchange Rate: ${rate} - Amount: ${symbol}${value}`)
    }
	}
}

export class AUDollars extends Currency {
  #currencyCode
  #currencySymbol
  constructor() {
    super('AUDollars')
    this.#currencyCode = 'AUD'
    this.#currencySymbol = currencyConvertor.symbolAUD
  }

  #getExchangeRate(toCurrency) {
		if (toCurrency === 'USD') {
      return currencyConvertor.exchangeAUDToUSD
    } else if (toCurrency === 'AUD') {
      return currencyConvertor.exchangeAUDToGBP
    } else if (toCurrency === 'INR') {
      return currencyConvertor.exchangeAUDToINR
    } else return -1
	}

  exchange(amount, newCurrency) {
    let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.#currencyCode} to ${newCurrency} - Exchange Rate: ${rate} - Amount: ${symbol}${value}`)
    }
	}
}

export class IndianRupees extends Currency {
  #currencyCode
  #currencySymbol
  constructor() {
    super('PoundSterling')
    this.#currencyCode = 'INR'
    this.#currencySymbol = currencyConvertor.symbolINR
  }

  #getExchangeRate(toCurrency) {
		if (toCurrency === 'USD') {
      return currencyConvertor.exchangeINRToUSD
    } else if (toCurrency === 'AUD') {
      return currencyConvertor.exchangeINRToAUD
    } else if (toCurrency === 'INR') {
      return currencyConvertor.exchangeINRToGBP
    } else return -1
	}

  exchange(amount, newCurrency) {
    let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.#currencyCode} to ${newCurrency} - Exchange Rate: ${rate} - Amount: ${symbol}${value}`)
    }
	}
}

const myGBP = new PoundSterling()
const myUSD = new USDollars()

myGBP.displayCurrency()
myUSD.displayCurrency()

