export function getPokemonTypes() {
    return fetch('https://pokeapi.co/api/v2/type')
      .then(data => data.json())
      .then(data => data.results.filter(item => { return item.name !== "unknown" && item.name !== "shadow" })
      );
  }

export function getPokemons(url) {
  return fetch(url)
    .then(data => data.json())
    .then(data => data.pokemon)
 }

 export function getPokemon(url) {
  return fetch(url)
    .then(data => data.json());
 }

