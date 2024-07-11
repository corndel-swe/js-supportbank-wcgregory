import { Command } from 'commander'
import * as foreignExchange from '../models/currency.js'

const currencyExchangeController = new Command('currency')

currencyExchangeController
  .command('convert <amount> <fromCurrency> <toCurrency>')
  .description('Converts currency to another currency based on exchange rate')
  .action((amount, fromCurrency, toCurrency) => {
    let currency = null
    const supportedCurrency = ['GBP', 'USD', 'AUD', 'INR']
    if (
      !supportedCurrency.includes(String(fromCurrency).toUpperCase()) ||
      !supportedCurrency.includes(String(toCurrency).toUpperCase())
    ) {
      throw new Error("Unsupported Currency")
    }

    if (fromCurrency === 'USD') {
      currency = new foreignExchange.USDollars()
    } else if (fromCurrency === 'GBP') {
      currency = new foreignExchange.PoundSterling()
    } else if (fromCurrency === 'AUD') {
      currency = new foreignExchange.AUDollars()
    } else {
      currency = new foreignExchange.IndianRupees()
    } 
	
    currency.exchange(amount, toCurrency)

  })

export default currencyExchangeController