import { existsSync, readFileSync } from 'fs'
import { strict as assert } from 'assert'

describe('Project', () => {
  it('should have a package.json file in the root', () => {
    const packageJsonPath = './package.json'
    const packageJsonExists = existsSync(packageJsonPath)
    assert.ok(packageJsonExists, 'package.json file not found')
  })

  it('should have mocha installed as a dev dependency', () => {
    const config = JSON.parse(readFileSync('./package.json'))
    assert.ok('mocha' in config.devDependencies)
  })

  it('should have a .gitignore in the root', () => {
    assert.ok(existsSync('.gitignore'), '.gitignore file not found')
  })

  it('should have node_modules in the .gitignore', () => {
    const gitignore = readFileSync('.gitignore', 'utf-8')
    assert.ok(gitignore.includes('node_modules'))
  })
})
