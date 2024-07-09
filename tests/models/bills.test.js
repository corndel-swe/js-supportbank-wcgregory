import { existsSync, readFileSync } from 'fs'
import { strict as assert } from 'assert'
import { Bill } from '../../models/billing.js'

describe('Bills', () => {
  it('should be built using a call', () => {
    assert(
      Bill.prototype instanceof Object,
      'Bill is not a subclass of Object'
    )
  })
  it('should contain a private property called total', () => {
    const taxiBill = new Bill(100, 'GBP')
    const printTaxiBill = taxiBill.printBill()
    const search = ['Total', 'Bill', '£', 100]
    search.every(searchFor => printTaxiBill.includes(searchFor))
  })
  //#total
  //#currency
  //#currencySymbol
  //constructor (amount, currency)

  xit('should have a package.json file in the root', () => {
    const packageJsonPath = './package.json'
    const packageJsonExists = existsSync(packageJsonPath)
    assert.ok(packageJsonExists, 'package.json file not found')
  })

  xit('should have mocha installed as a dev dependency', () => {
    const config = JSON.parse(readFileSync('./package.json'))
    assert.ok('mocha' in config.devDependencies)
  })

  xit('should have a .gitignore in the root', () => {
    assert.ok(existsSync('.gitignore'), '.gitignore file not found')
  })

  xit('should have node_modules in the .gitignore', () => {
    const gitignore = readFileSync('.gitignore', 'utf-8')
    assert.ok(gitignore.includes('node_modules'))
  })
})
