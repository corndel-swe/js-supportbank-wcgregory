import fs from 'fs/promises'
import { parseStringPromise } from 'xml2js'

export async function readCSVFile(absolutePath) {
  // Return the contents of the csv file as a utf-8 string
  // const absPath = new URL(absolutePath)
  return await fs.readFile(absolutePath, 'utf-8')
}

export async function readJSONFile(absolutePath) {
  // Return the contents of the json file and return as json
  const fileOpen = await fs.readFile(absolutePath, 'utf-8')
  // const json = JSON.parse(fileOpen)
  return JSON.parse(fileOpen)
}

export async function readXMLFile(absolutePath) {
  // Return the contents of the json file and return as json
  const xmlFile = await fs.readFile(absolutePath, 'utf-8')
  const dom = await parseStringPromise(xmlFile)
  //console.log(dom)
  console.log(await dom.TransactionList.SupportTransaction)
  const transactionsDescriptions = dom.TransactionList.SupportTransaction.map(transaction => transaction.Description)
  //console.log(transactionsDescriptions)
  return(transactionsDescriptions)
  //const dom = JSON.stringify(await parseStringPromise(xmlFile))
  //const jsonDOM = await JSON.parse(dom)
  //console.log(JSON.parse(dom)jsonDOM["TransactionList"]["SupportTransaction"])
  //return await JSON.parse(dom)
  //console.log(typeof jsonDOM["TransactionList"]["SupportTransaction"])
  //return jsonDOM
  //return await JSON.parse(dom)
  //return JSON.parse(jsonDOM)
}
