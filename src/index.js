import { getPokemonList } from './api.js';
import { getPokedexHtml, turnPokemonImageOnClick } from './pokedex.js';
import { render } from './render.js';

const pokemonList = await getPokemonList({ limit: 20 });
const pokedexHtml = await getPokedexHtml({ pokemonList });
render(pokedexHtml.join(''));

const images = document.querySelectorAll('img');
images.forEach((image) => {
  turnPokemonImageOnClick(image);
});
