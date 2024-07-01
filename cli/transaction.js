import { Command } from 'commander'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    const transactionTime = new Date()
    console.log(`At ${transactionTime.toDateString()}, ${from} sent ${to} ${amount}`)
  })

export default transactionController
