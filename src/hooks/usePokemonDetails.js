import axios from "axios"; 
import { useEffect, useState } from "react";
 import usePokemonList from "./usePokemonList";
   function usePokemonDetails(id) {
     const [pokemon, setPokemon] = useState({});
      const [pokemonListState, setPokemonListState] = usePokemonList(false);
       async function downloadPokemon() {
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({ name: response.data.name, image: response.data.sprites.other.dream_world.front_default,
             weight: response.data.weight, height: response.data.height, types: response.data.types.map((t) => t.type.name) }); 
        setPokemonListState({ ...pokemonListState, pokedexUrl: `https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].name : 'fire'}` }); } useEffect(() => { downloadPokemon(); }, [id]);
   
     return [pokemon, pokemonListState]; } 
    export default usePokemonDetails;

