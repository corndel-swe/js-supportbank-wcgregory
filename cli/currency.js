import { Command } from 'commander'
import { Bill } from '../models/billing.js'

const billController = new Command('bill')

billController
  .command('split <amount> <people>')
  .description('Split bill by number of people and display to the console')
  .action((amount, people) => {
    const splitMyBill = new Bill(amount, 'GBP')
    splitMyBill.printBill()
    splitMyBill.splitBill(people)
  })

export default billController