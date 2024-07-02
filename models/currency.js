import * as currencyConvertor from './currencyExchange.js'

export class Currency {
  //#amount
	#currency
  //#currencyCode
	//#currencySymbol
  constructor (currency) {
		this.#currency = String(currency).toUpperCase()
    this.currencyCode = null
    this.currencySymbol = null
    this.amount = 0
	}

	totalAmount(amount) {
    this.amount = Number(amount) ? amount : 0
	}

  addToAmount(addition) {
		this.amount += Number(addition)
	}

	removeFromAmount(deduction) {
		this.amount -= Number(deduction)
	}

  setCurrencyCode(code) {
    // ISO 4217 three-letter code
		this.currencyCode = code
	}

  getCurrencySymbol(currency) {
    if (currency.toUpperCase() === 'GBP') {
      return currencyConvertor.symbolGBP
    } else if (currency.toUpperCase() === 'USD') {
      return currencyConvertor.symbolUSD
    } else if (currency.toUpperCase() === 'AUD') {
      return currencyConvertor.symbolAUD
    } else if (currency.toUpperCase() === 'INR') {
      return currencyConvertor.symbolINR
    } else return ''
	}

  #getExchangeRate(toCurrency) {
		// TODO - Not Implemented
	}

  exchange(amount, newCurrency) {
    // NOT IMPLEMENTED
    /*let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.currencyCode} to ${newCurrency} - Exchange Rate: ${rate} - Amount: ${symbol}${value}`)
    }*/
	}

	displayCurrency() {
    this.currencySymbol = this.getCurrencySymbol(this.currencyCode)
		console.log(`This currency: ${this.currencyCode} Amount: ${this.amount}`)
    console.log(`${this.currencySymbol}${this.amount}`)
	}

}

export class PoundSterling extends Currency {
  // #currencyCode
  // #currencySymbol
  constructor() {
    super('PoundSterling')
    this.currencyCode = 'GBP'
    this.currencySymbol = currencyConvertor.symbolGBP
  }

  #getExchangeRate(toCurrency) {
		if (toCurrency.toUpperCase() === 'USD') {
      return currencyConvertor.exchangeGBPToUSD
    } else if (toCurrency.toUpperCase() === 'AUD') {
      return currencyConvertor.exchangeGBPToAUD
    } else if (toCurrency.toUpperCase() === 'INR') {
      return currencyConvertor.exchangeGBPToINR
    } else return -1
	}

  exchange(amount, newCurrency) {
    let value = amount
    const symbol = this.getCurrencySymbol(newCurrency)
    const rate = this.#getExchangeRate(newCurrency)
    if (!symbol || symbol === -1) {
      console.log("Unsupported or unknown currency symbol!")
      symbol = ''
    }
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
    } else {
      value *= rate
      console.log(`${this.currencyCode} to ${newCurrency} - Exchange Rate: ${rate}`)
      console.log(`Exchange Amount: ${symbol}${value}`)
    }
	}

}

export class USDollars extends Currency {
  //#currencyCode
  //#currencySymbol
  constructor() {
    super('USDollars')
    this.currencyCode = 'USD'
    this.currencySymbol = currencyConvertor.symbolUSD
  }

  #getExchangeRate(toCurrency) {
		if (toCurrency.toUpperCase() === 'GBP') {
      return currencyConvertor.exchangeUSDToGBP
    } else if (toCurrency.toUpperCase() === 'AUD') {
      return currencyConvertor.exchangeUSDToAUD
    } else if (toCurrency.toUpperCase() === 'INR') {
      return currencyConvertor.exchangeUSDToINR
    } else return -1
	}

  exchange(amount, newCurrency) {
    let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!symbol || symbol === -1) {
      console.log("Unsupported or unknown currency symbol!")
      symbol = ''
    }
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.currencyCode} to ${newCurrency} - Exchange Rate: ${rate}`)
      console.log(`Exchange Amount: ${symbol}${value}`)
    }
	}
}

export class AUDollars extends Currency {
  constructor() {
    super('AUDollars')
    this.currencyCode = 'AUD'
    this.currencySymbol = currencyConvertor.symbolAUD
  }

  #getExchangeRate(toCurrency) {
		if (toCurrency.toUpperCase() === 'USD') {
      return currencyConvertor.exchangeAUDToUSD
    } else if (toCurrency.toUpperCase() === 'AUD') {
      return currencyConvertor.exchangeAUDToGBP
    } else if (toCurrency.toUpperCase() === 'INR') {
      return currencyConvertor.exchangeAUDToINR
    } else return -1
	}

  exchange(amount, newCurrency) {
    let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!symbol || symbol === -1) {
      console.log("Unsupported or unknown currency symbol!")
      symbol = ''
    }
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.currencyCode} to ${newCurrency} - Exchange Rate: ${rate}`)
      console.log(`Exchange Amount: ${symbol}${value}`)
    }
	}
  
}

export class IndianRupees extends Currency {
  constructor() {
    super('PoundSterling')
    this.currencyCode = 'INR'
    //this.currencySymbol = currencyConvertor.symbolINR
  }

  #getExchangeRate(toCurrency) {
		if (toCurrency.toUpperCase() === 'USD') {
      return currencyConvertor.exchangeINRToUSD
    } else if (toCurrency.toUpperCase() === 'AUD') {
      return currencyConvertor.exchangeINRToAUD
    } else if (toCurrency.toUpperCase() === 'GBP') {
      return currencyConvertor.exchangeINRToGBP
    } else return -1
	}

  exchange(amount, newCurrency) {
    let value = amount
    const rate = this.#getExchangeRate(newCurrency)
    const symbol = this.getCurrencySymbol(newCurrency)
    if (!symbol || symbol === -1) {
      console.log("Unsupported or unknown currency symbol!")
      symbol = ''
    }
    if (!rate || rate === -1) {
      console.log("Unsupported exchange rate!")
      // return -1
    } else {
      value *= rate
      console.log(`${this.currencyCode} to ${newCurrency} - Exchange Rate: ${rate}`)
      console.log(`Exchange Amount: ${symbol}${value}`)
    }
	}
  
}
