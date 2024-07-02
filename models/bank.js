import { readFile } from './filemanager.js'

const absPath = new URL('../data/Transactions2014.csv', import.meta.url)

// const transactionFile = await readFile(absPath)
// let transactionFileLines = transactionFile.split()

function getAccounts(data) {
  //TODO
  const accounts = Array()
  for (let line of data) {
    if (line.includes('Date,From,To,Narrative,Amount')) {
      continue  // ignore header line
    }
    let lineFields = line.split(',')
    let from = lineFields[1]
    let to = lineFields[2]
  }
}

function getTransactionForAccount(data, account) {
  //TODO
  //for () {}
}


export class Account {
  constructor (name, balance) {
    this.name = name
    this.balance = balance
    this.transactions = []
  }

  addFundsToAccount(amount) {
    this.balance += amount
  }

  removeFundsInAccount(amount) {
    this.balance -= amount
  }
}

export class Bank {
  constructor (name) {
    this.name = name
    this.accounts = Array()
    this.allTransactions = Array()
  }

  createAccount(amount) {
    this.balance += amount
  }

  addFundsToAccount(amount) {
    this.balance += amount
  }

  removeFundsInAccount(amount) {
    this.balance -= amount
  }

  async loadTransactionData(data) {
    if (data === typeof String) {
      try {
        this.allTransactions = data.split()
      } catch (error) {
        console.log(`Unexpected error - ${error.message}`)
      }
    } else if (data === typeof Array) {
      this.allTransactions = data
    }
  }
}