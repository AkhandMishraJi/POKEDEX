  import { Routes , Route } from "react-router-dom"
import Pokedex from "../components/Pokedex/Pokedex"
import PokemonDetails from "../components/PokemonDetails/PokemonDetails"
  import Pokemon from "../components/Pokemon/Pokemon"
  function CustomRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Pokedex/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetails />}/>
        </Routes>
    )
  }
  export default CustomRoutes