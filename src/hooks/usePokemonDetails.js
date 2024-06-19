import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

function usePokemonDetails(id) {
    
    const [pokemon, setPokemon] = useState({});
     
    async function downloadPokemon() {
        const response =  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
       const pokemonOfSametypes =   axios.get(`https://pokeapi.co/api/v2/type/${ response.data.types ? response.data.types[0].type.name : ''}`)
        setPokemon(state => ({
            ...state ,
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name) ,
            similarPokemons : pokemonOfSametypes.data.pokemon.slice(0 , 5)
            
        }));
        pokemonOfSametypes.then((response) => {
            setPokemon(state => ({
                ...state ,
                similarPokemons : response.data.pokemon.slice(0 , 5)
                
            }));
        })
console.log(response.data.types);

        setPokemonListState({...pokemonListState ,
            type : response.data.types ? response.data.types[0].type.name : ''  })
      
}

    const [pokemonListState , setPokemonListState] = usePokemonList()  
    

    useEffect(() => {
        downloadPokemon();
        
    }, []); 
    return [pokemon, pokemonOfSametypes.data]
}
export default usePokemonDetails 