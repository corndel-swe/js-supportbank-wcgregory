import { Command } from 'commander'
import { Bill } from '../models/transaction.js'

const splitBillController = new Command('bill')

splitBillController
  .command('split <amount> <people>')
  .description('Split bill by number of people and display to the console')
  .action((amount, people) => {
    const transactionTime = new Date()
    const splitMyBill = new Bill(amount)
    console.log(`£${amount}: Bill at ${transactionTime.toDateString()}`)
    splitMyBill.splitBill(people)
    // console.log(`Bill at ${transactionTime.toDateString()}, ${from} sent ${to} ${amount}`)
  })

export default splitBillController
