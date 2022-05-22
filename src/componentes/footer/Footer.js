import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className='text-white py-4 bg-dark'>
            <div className='container'>
                <nav className='row'>
                    <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                        <img src='./logo-pokemon.png' className='mx-2' height='60'/>
                    </Link>

                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>Pokemon</li>
                        <li className='text-center'>Probando el API de pokemon con información y estadisticas sobre tus pokemons favoritos</li>
                    </ul>

                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>Enlaces</li>
                        <li>
                            <Link to='./pokemons'>Pokemon</Link>
                        </li>
                        <li>
                            <Link to='./items'>Items</Link>
                        </li>
                    </ul>

                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>Redes de prueba con ico de bootst</li>
                        <li className='d-flex justify-content-between'>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitch"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-youtube"></i>
                        </li>
                    </ul>

                </nav>
            </div>
        </footer>
    </div>
  )
}

export default Footer