export async function getPokemonList() {
  // TODO
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const jsonOutput = await response.json()
  return jsonOutput.results.map(pokemonNames => pokemonNames.name)
}
