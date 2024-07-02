import { strict as assert } from 'assert'
import * as fileIo from '../../exercises/fileIO.js'
import fs from 'fs/promises'

describe('readHelloWorld()', () => {
    it('reads the file at the given URI and returns its contents as a string', async () => {
        assert.equal(await fileIo.readHelloWorld(), 'Hello, world!\n')
    })
})

describe('readDiaryEntry()', () => {
    it('reads the contents of the file and returns its contents as a string', async () => {
        assert.equal(await fileIo.readDiaryEntry(), 'I wish I were a bird.\n')
    })
})

describe('writeSaveData()', () => {
    it('writes the saveData string to the file', async () => {
        const uri = new URL(
            '../../exercises/resources/3-save-data.txt',
            import.meta.url
        )
        await fs.rm(uri, { force: true })

        const saveData = { name: 'Andy', class: 'Bard', level: 14 }

        await fileIo.writeSaveData(saveData)

        assert.deepEqual(
            JSON.parse(await fs.readFile(uri, { encoding: 'utf8' })),
            saveData
        )
    })
})

describe('appendLogEntry()', () => {
    it('appends a log entry to the end of the file', async () => {
        const uri = new URL(
            '../../exercises/resources/4-log-file.txt',
            import.meta.url
        )
        await fs.rm(uri, { force: true })

        const firstLogEntry = 'How are you?\n'
        const secondLogEntry = 'Fine, thank you!\n'

        await fileIo.appendLogEntry(firstLogEntry)
        await fileIo.appendLogEntry(secondLogEntry)

        assert.equal(
            await fs.readFile(uri, { encoding: 'utf8' }),
            //firstLogEntry + '\n' + secondLogEntry + '\n'
            firstLogEntry + secondLogEntry
        )
    })
})
