import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' //Importamos componentes de router-dom
import Navbar from './componentes/navegacion/Navbar'; //Importamos los componentes de las paginas
import Inicio from './componentes/paginas/Inicio';
import Pokemons from './componentes/paginas/Pokemons';
import Items from './componentes/paginas/Items';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
        </Router>
    </div>
  );
}

export default App;
