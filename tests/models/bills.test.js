import { existsSync, readFileSync } from 'fs'
import { strict as assert } from 'assert'
import { Bill } from '../../models/billing.js'

describe('Bills', () => {
  it('should be built using the class Bill', () => {
    const taxiBill = new Bill(100, 'GBP')
    assert(
      taxiBill instanceof Bill,
      'Class Bill is not used'
    )
  })
  it('should contain a getter method getTotal()', () => {
    const pubBill = new Bill(100, 'GBP')
    assert.strictEqual(pubBill.getTotal(), 100)
  })
  it('should contain a getter method getCurrency()', () => {
    const shoppingBill = new Bill(250, 'USD')
    assert.strictEqual(shoppingBill.getCurrency(), 'USD')
  })

})
