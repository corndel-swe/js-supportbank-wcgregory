export async function getPokemonList() {
  // TODO
  let response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const jsonOutput = await response.json()
  return jsonOutput.results.map(pokemonNames => pokemonNames.name)
}

export async function getFullPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=400&offset=120')
  const jsonOutput = await response.json()
  return jsonOutput.results.map(pokemonNames => pokemonNames.name)
}

// console.log(await getFullPokemonList(true))
