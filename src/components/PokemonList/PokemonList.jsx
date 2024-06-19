
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon' 
import usePokemonList from "../../hooks/usePokemonList"
function PokemonList() {   
//     const [pokemonList , setPokemonList] =  useState([])
// const [isLoading , setIsLoading ] = useState(true)
// const [pokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
// const [nextUrl , setNextxUrl] = useState('')
//const [prevUrl , setPrevUrl] = useState('')


const [pokemonListState , setPokemonListState] = usePokemonList(false)
    return (
    <div className="pokemon-list-wrapper">
 
 <div className="pokemon-wrapper">  
     { (pokemonListState.isLoading) ? "LOADING..." : 
   pokemonListState.pokemonList.map((p) => <Pokemon name={p.NAME} image={p.IMAGE} key={p.id} id={p.id}/>)
   }</div>
   <div className="controls" >
    <button disabled={pokemonListState.prevUrl == null} onClick={() => { 
      const urlToSet = pokemonListState.prevUrl
      setPokemonListState({...pokemonListState , pokedexUrl : urlToSet})}}>PREVIOUS</button>
    <button disabled={pokemonListState.nextUrl == null} onClick={() =>{
  const urlToSet = pokemonListState.nextUrl
      console.log(pokemonListState);
      setPokemonListState({...pokemonListState , pokedexUrl :urlToSet})}} >NEXT</button>
   </div>
    </div> )
}

export default PokemonList