import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Search from './components/Search/Search'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'
import Pokemon from './components/Pokemon/Pokemon'
function App() {

  return (
    <div className='outer-pokedex'>
       <h1 id='pokedex-heading' ><Link to='/'>POKEDEX</Link></h1> 
<CustomRoutes/>

    </div>
  )
}

export default App
