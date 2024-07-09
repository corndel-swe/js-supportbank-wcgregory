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
    this.transactionErrors = Array()
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

  loadTransactionObjData(data) {
    if (Array.isArray(data)) {
      this.allTransactions = data.map(transaction => ({
        "Date": transaction['$'].Date,
        "FromAccount": transaction.Parties[0].From[0],
        "ToAccount": transaction.Parties[0].To[0],
        "Description": transaction.Description[0],
        "Amount": transaction.Value[0],
      }))
    }
  }

  currencyToIntegers(value) {
    return value * 100
  }

  integersToCurrency(value) {
    return (value / 100).toFixed(2)
  }

  summariseTransactionObjs() {
    for (let transaction of this.allTransactions) {
      let fromName = transaction.FromAccount
      let toName = transaction.ToAccount
      let amount = this.currencyToIntegers(parseFloat(transaction.Amount))

      if (fromName in this.transactionSummary) {
        this.transactionSummary[fromName] -= amount
      } else this.transactionSummary[fromName] = -amount

      if (toName in this.transactionSummary) {
        this.transactionSummary[toName] += amount
      } else this.transactionSummary[toName] = amount
    }
  }

  summariseTransactions() {
    for (let transaction of this.allTransactions) {
      if (!transaction) {
        continue
      }
      const transactionFields = transaction.split(',')
      let transactionDate = transactionFields[0]
      let fromName = transactionFields[1]
      let toName = transactionFields[2]
      let amount = this.currencyToIntegers(parseFloat(transactionFields[4]))

      if (!transactionDate || !fromName || !toName || !amount) {
        this.transactionErrors.push(transaction)
        continue
      }
      if (fromName in this.transactionSummary) {
        this.transactionSummary[fromName] -= amount
      } else this.transactionSummary[fromName] = -amount

      if (toName in this.transactionSummary) {
        this.transactionSummary[toName] += amount
      } else this.transactionSummary[toName] = amount
    }
  }

  displayTransactionSummary() {
    if (typeof this.allTransactions[0] === 'string') {
      this.summariseTransactions()
    } else this.summariseTransactionObjs();

    for (let account in this.transactionSummary) {
      this.transactionSummary[account] = this.integersToCurrency(this.transactionSummary[account])
    }
    return this.transactionSummary
  }

  accountTransactions(accountName) {
    const accountSummary = Array()
    const accountNameLowerCase = accountName.toLowerCase()
    for (let transaction of this.allTransactions) {
      if (!transaction) {
        continue
      } else if (typeof transaction === 'string') {
        const transactionFields = transaction.split(',')
        if (
          accountNameLowerCase === transactionFields[1].toLowerCase() ||
          accountNameLowerCase === transactionFields[2].toLowerCase()
        ) {
          accountSummary.push(transaction)
        }
      } else {
        if (
          accountNameLowerCase === transaction.FromAccount.toLowerCase() ||
          accountNameLowerCase === transaction.ToAccount.toLowerCase()
        ) {
          // translate the object to csv style lines format
          const transactionDate = new Date(Date.parse(transaction.Date))
          let day = transactionDate.getDate(); if (day < 10) day = `0${day}`;
          let month = transactionDate.getMonth(); if (month < 10) month = `0${month}`;
          let year = transactionDate.getFullYear()
          const dateFromToLine = `${day}/${month}/${year},${transaction.FromAccount},${transaction.ToAccount},`
          const descriptionAmountLine = `${transaction.Narrative},${transaction.Amount}`
          accountSummary.push((dateFromToLine + descriptionAmountLine))
        }
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
