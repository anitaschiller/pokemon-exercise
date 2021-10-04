export const getPokemonList = async ({ limit = 20 } = {}) => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await result.json();
  return data.results;
};

export const getPokemon = async ({ name } = {}) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = result.json();
  return data;
};
