// cli/index.js
import { program } from 'commander'
import transactionController from './transaction.js'
import billController from './billing.js'
import currencyExchangeController from './currency.js'

program.version('0.1.1').description('SupportBank')

program.addCommand(transactionController)
program.addCommand(billController)
program.addCommand(currencyExchangeController)

program.parse(process.argv)