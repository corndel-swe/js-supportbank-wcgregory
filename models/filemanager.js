import fs from 'fs/promises'

export async function readCSVFile(absolutePath) {
    // Return the contents of the csv file as a utf-8 string
    // const absPath = new URL(absolutePath)
    return await fs.readFile(absolutePath, 'utf-8')
  }
