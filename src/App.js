import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //Importamos componentes de router-dom
import Navbar from './componentes/navegacion/Navbar'; //Importamos los componentes de las paginas
import Inicio from './componentes/paginas/Inicio';
import Pokemons from './componentes/paginas/Pokemons';
import Items from './componentes/paginas/Items';

//Dado que se trabaja con react-router-dom 6, no se cuenta con el componente Switch, más info de utilización en https://reactrouter.com/docs/en/v6/upgrading/v5 ver apartado "app in v6"

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/pokemons' element={<Pokemons />} />
            <Route path='/items' element={<Items />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
