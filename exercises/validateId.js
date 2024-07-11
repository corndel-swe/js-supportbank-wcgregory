// Exercise 2 Part 1
// Finish this function by throwing an error if the id is invalid.
export function validateId(id) {
  // Check that the id exists
  if (id === null || id === undefined) {
    throw new Error('ID is required')
  }

  // The id should be a string:
  if (typeof id !== 'string') {
    // TODO: Add your code to throw an error here
    throw new Error('ID should be of type String()')
  }

  // The id should be an odd number of characters long:
  if (id.length % 2 === 0) {
    // TODO: throw an error on this condition
    throw new Error('ID length should have an odd number of charactors')
  }

  // The id should contain the letter 'a':
  if (!(id.includes('a'))) {
    // TODO: throw an error on this condition
    throw new Error("ID should include the letter 'a'")
  }

  // The id should be all lowercase:
  // if (id !== id.toLowerCase()) {
  if (id.match(/[A-Z]/)) {
    // TODO: throw an error on this condition
    throw new Error("ID should be all lowercase")
  }
  
  return true
}

// Exercise 2 Part 2
// Use try/catch with the `validateId` function above to validate the id.
// Return `true` if the id is valid.
// If an error is thrown: catch it, log a useful message, then return `false`
export function isIdValid(id, logger) {
  try {
    // const isValidID = validateId(id)
    // return true
    return validateId(id)
  } catch (error) {
    //logger.error("ID is invalid")
    logger.error(`ID is invalid - ${error.message}`)
    return false
  }

}
