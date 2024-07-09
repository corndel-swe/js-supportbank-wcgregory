import { Command } from 'commander'
import { readCSVFile, readJSONFile, readXMLFile } from '../models/filemanager.js'
import { Bank } from '../models/bank.js'


const data2014Path = new URL('../data/Transactions2014.csv', import.meta.url)
const transactData2014 = await readCSVFile(data2014Path)
const data2014Lines = transactData2014.split('\n')

const data2013Path = new URL('../data/Transactions2013.json', import.meta.url)
const transactData2013 = await readJSONFile(data2013Path)

const data2012Path = new URL('../data/Transactions2012.xml', import.meta.url)
const xmlTransaction = await readXMLFile(data2012Path)
console.log(xmlTransaction)

const bankRoll = new Bank('Roll')
//bankRoll.loadTransactionData(data2014Lines.slice(1))
bankRoll.loadTransactionData(transactData2013)
//bankRoll.loadTransactionData(xmlTransaction["TransactionList"]["SupportTransaction"])


const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    const transactionTime = new Date()
    console.log(`At ${transactionTime.toDateString()}, ${from} sent ${to} ${amount}`)
  })

transactionController
  .command('summarise all')
  .description('Summarise all account transactions with outstanding balances')
  .action(() => {
    console.log(bankRoll.displayTransactionSummary())
  })

transactionController
  .command('list <accountname>')
  .description('List all transactions by account name')
  .action((accountName) => {
    console.log(bankRoll.accountTransactions(accountName)) 
  })

export default transactionController
