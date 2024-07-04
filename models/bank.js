

function getAccounts(data) {
  //TODO
  const accounts = Array()
  for (let line of data.slice(1)) {
    //if (line.includes('Date,From,To,Narrative,Amount')) {
    //  continue  // ignore header line
    //}
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
  static accountNumber = 1

  #bankNumber
  constructor (name, bankid, balance) {
    this.name = name
    this.balance = balance ? parseFloat(balance).toFixed(2) : 0
    this.transactions = Array()
    this.#bankNumber = bankid

    if (Account.accountNumber.toString().length > 6) {
      throw new RangeError("Bank Account numbers with more than 6 digit's are not supported")
    } else if (Account.accountNumber.toString().length < 4) {
      this.#bankNumber += Account.accountNumber.toString()
    } else {
      this.#bankNumber.slice(0, Account.accountNumber.toString().length) += Account.accountNumber
    }

    // increment the account number
    Account.accountNumber++
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
    this.id = `${name.slice(0, 4).toUpperCase()}` + '0'.repeat(3)
    this.accounts = Array()
    this.allTransactions = Array()
    this.transactionSummary = {}
  }

  accountExists(name) {
    for (let account of this.accounts) {
      if (name === account.name) return true
    }
    return false
  }

  createAccount(name) {
    const alreadyExists = this.accountExists(name)
    if (!alreadyExists) {
      const account = new Account(name, this.id)
      this.accounts.push(account)
      // console.log(`Account created for ${name}`)
    }
  }

  loadTransactionData(data) {
    if (typeof data === 'string') {
      try {
        this.allTransactions = data.split()
      } catch (error) {
        console.log(`Unexpected error with string.split operation - ${error.message}`)
      }
    } else if (Array.isArray(data)) {
        this.allTransactions = data 
    }
  }

  summariseTransactions() {
    for (let transaction of this.allTransactions) {
      const transactionFields = transaction.split(',')
      let fromName = transactionFields[1]
      let toName = transactionFields[2]
      let amount = parseFloat(transactionFields[4])

      if (!fromName in this.transactionSummary) {
        this.transactionSummary[fromName] = -amount
      } else this.transactionSummary[fromName] -= amount

      if (!toName in this.transactionSummary) {
        this.transactionSummary[toName] = amount
      } else this.transactionSummary[toName] += amount
    }
  }

  accountTransactions(accountName) {
    const accountSummary = Array()
    const accountNameLowerCase = accountName.toLowerCase()
    for (let transaction of this.allTransactions) {
      const transactionFields = transaction.split(',')
      let fromNameLowerCase = transactionFields[1].toLowerCase()
      let toNameLowerCase = transactionFields[2].toLowerCase()
      //console.log(`${toNameLowerCase}, ${fromNameLowerCase}`)
      // let date = transaction[0]
      // let fromName = transaction[1]
      // let toName = transaction[2]
      // let description = transaction[3]
      // let amount = parseFloat(transaction[4])

      if (
        accountNameLowerCase === fromNameLowerCase ||
        accountNameLowerCase === toNameLowerCase
      ) {
        accountSummary.push(transaction)
      }
    }
    return accountSummary
  }
}

/*
const myBank = new Bank('Rock')
console.log(myBank.id)
myBank.createAccount('Wayne', myBank.id)
//console.log(myBank.accounts[0].displayAccount())
console.log(myBank.accounts[0])
console.log(myBank.accounts.length)
myBank.createAccount('Wayne', myBank.id)
console.log(myBank.accounts.length)
//*/
