import fs from 'fs/promises'

export async function readCSVFile(absolutePath) {
  // Return the contents of the csv file as a utf-8 string
  // const absPath = new URL(absolutePath)
  return await fs.readFile(absolutePath, 'utf-8')
}

export async function readJSONFile(absolutePath) {
  // Return the contents of the csv file as a utf-8 string
  //const content = JSON.parse(fs.readFile(absolutePath, 'utf-8'))
  //return content
  //const response = await fetch(absolutePath)
  //const json = await response.json();
  //const json = await JSON.parse(response)
  const fileOpen = await fs.readFile(absolutePath, 'utf-8')
  const json = JSON.parse(fileOpen)
  return json
}

const data2013Path = new URL('../data/Transactions2013.json', import.meta.url)
const transactData2013 = readJSONFile(data2013Path)
console.log(transactData2013)
