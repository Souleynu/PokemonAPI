import React from 'react'
import { Link } from 'react-router-dom' //Agregamos el componente Link para hacer los cambios en las paginas cuando demos clic en c/u de las opciones

//Al ocupar Link, reemplazamos todas las etiquetas "a" (que vienen por defecto en lo pagina de react) por link y el href

//No es necesario importar boostrap porque no se esta instalando, solo ocupando su CSS
//El Navbar fue sacado de https://getbootstrap.com/docs/5.2/components/navbar/ ahí mismo existen muchos modelos para probar

//Al implementar en la linea 22 mx-auto, hacemos que el texto del navbar se centre, ojo, no el logo, solamente el texto

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <Link to='/'>
                <img src='./logo-pokemon.png' width='70'/>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                <Link className="nav-link active" to='/'>Inicio</Link>
                </li>

                <li class="nav-item">
                <Link className="nav-link" to='/pokemons'>Pokemons</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" to='/items'>Items</Link>
                </li>

            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar