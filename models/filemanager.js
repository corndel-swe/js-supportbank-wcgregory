import fs from 'fs/promises'

export async function readCSVFile(absolutePath) {
  // Return the contents of the csv file as a utf-8 string
  // const absPath = new URL(absolutePath)
  return await fs.readFile(absolutePath, 'utf-8')
}

export async function readJSONFile(absolutePath) {
  // Return the contents of the json file and return as json
  const fileOpen = await fs.readFile(absolutePath, 'utf-8')
  // const json = JSON.parse(fileOpen)
  return JSON.parse(fileOpen)
}
