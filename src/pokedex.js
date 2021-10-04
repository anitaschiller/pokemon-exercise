import { getPokemon } from './api.js';

export const getPokedexHtml = async ({ pokemonList = [] }) => {
  const pokeCards = Promise.all(
    pokemonList.map(async (pokemon) => {
      const pokemonDetails = await getPokemon({ name: pokemon.name });
      const { name, height, weight, sprites } = pokemonDetails;
      return `
        <article class="card">
          <h2>${name.toUpperCase()}</h2>
          <img src="${
            sprites.front_default
          }" alt="image of ${name}" data-name="${name}">
          <dl>
            <dt>Height</dt>
            <dd>${height}</dd>
            <dt>Weight</dt>
            <dd>${weight}</dd>
          </dl>
        </article>
    `;
    })
  );
  return pokeCards;
};

export const turnPokemonImageOnClick = (image) => {
  image.addEventListener('click', async (event) => {
    const imageToToggle = event.target;
    const pokemonName = event.target.getAttribute('data-name');
    const pokemon = await getPokemon({ name: pokemonName });

    if (imageToToggle.src.includes('back')) {
      imageToToggle.src = pokemon.sprites.front_default;
    } else {
      imageToToggle.src = pokemon.sprites.back_default;
    }
  });
};
