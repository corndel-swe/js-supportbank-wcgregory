import 'dotenv/config'

export const symbolUSD = '$'
export const symbolGBP = '£'
export const symbolAUD = 'AU$'
export const symbolINR = 'Rs'

export const exchangeGBPToUSD = 1.27
export const exchangeUSDToGBP = 0.79
export const exchangeGBPToAUD = 1.90
export const exchangeAUDToGBP = 0.53
export const exchangeUSDToAUD = 1.50
export const exchangeAUDToUSD = 0.67
export const exchangeUSDToINR = 83.44
export const exchangeINRToUSD = 0.012
export const exchangeGBPToINR = 105.80
export const exchangeINRToGBP = 0.0095
export const exchangeAUDToINR = 55.52
export const exchangeINRToAUD = 0.018

export async function getOpenExchangeRates(baseCurrency) {
  /**
   * Connect to Open Exchange Rate to retrieve the latest foreign exchange rates
   * https://openexchangerates.org/api/latest.json?app_id=YOUR_APP_ID
   * https://openexchangerates.org/api/latest.json?app_id=YOUR_APP_ID&base=GBP
   * https://openexchangerates.org/api/latest.json?app_id=${APIKEY}&base=${currency}&symbols=${newCurrency}
   * 
   * @param currency - the base currency
   * @param newCurrency - the currency to be converted into
   * @returns openExchangeRates - returns the open exchange rates API response.
  */
  const APIKEY = process.env.OPENEXCHANGERATES_API_KEY
  const urlpath = `https://openexchangerates.org/api/latest.json?app_id=${APIKEY}&base=${baseCurrency}`
  const response = await fetch(urlpath)
  const openExchangeRates = await response.json()
  // return parseFloat(openExchangeRates.rates[newCurrency]).toFixed(6)
  return openExchangeRates
}
