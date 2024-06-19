import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList() {
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isLoading: true,
    pokedexUrl: `https://pokeapi.co/api/v2/pokemon/`,
    nextUrl: '',
    prevUrl: ''
  });

  async function downloadPokemons() {
    setPokemonListState({ ...pokemonListState, isLoading: true });
    const response = await axios.get(pokemonListState.pokedexUrl);
    const pokemonResults = response.data.results;

    setPokemonListState((state) => ({
      ...state,
      nextUrl: response.data.next,
      prevUrl: response.data.previous
    }));

    const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
    const pokemonData = await axios.all(pokemonResultPromise);

    const pokeListResult = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        NAME: pokemon.name,
        IMAGE: (pokemon.sprites.other)
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        TYPES: pokemon.types
      };
    });

    setPokemonListState((state) => ({
      ...state,
      pokemonList: pokeListResult,
      isLoading: false
    }));
  }

  useEffect(() => {
    downloadPokemons();
  }, []);

  return [pokemonListState, setPokemonListState]; // This should be inside the function
}

export default usePokemonList;
