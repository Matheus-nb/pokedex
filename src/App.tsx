import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from './pages/Home';
import { Pokemons } from './pages/Pokemons';

import './styles/global.scss';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Pokemons />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
