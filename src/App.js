import Navigationbar from './Components/Navigationbar';
import PokemonTypes from './Components/PokemonTypes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Pokemons from './Components/Pokemons';
import Pokemon from './Components/Pokemon';

const App = () => (
  <BrowserRouter>
    <Navigationbar />
    <Routes>
      <Route path='/' element={<PokemonTypes />}></Route>
      <Route path='/pokemons' element={<Pokemons />}></Route>
      <Route path='/pokemon' element={<Pokemon />}></Route>
      <Route path='*' element={<NotFound />} ></Route>
    </Routes>
  </BrowserRouter>

);



export default App;
