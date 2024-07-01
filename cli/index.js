// cli/index.js
import { program } from 'commander'
import transactionController from './transaction.js'
import splitBillController from './splitBill.js'

program.version('0.1.1').description('SupportBank')

program.addCommand(transactionController)
program.addCommand(splitBillController)

program.parse(process.argv)