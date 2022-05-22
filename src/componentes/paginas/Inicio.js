import React from 'react'
import Carrusel from '../carousel/Carrusel'
import Footer from '../footer/Footer'

function Inicio() {
  return (
    <div>
        <Carrusel />
        <div className='container mb-5'>
            <h1 className='text-white p-3 bg-dark'>Pokemon</h1>
            <figure>
                <blockquote>
                    <p className='text-center mt-3'>
                    La serie de videojuegos de Pokémon, son videojuegos de rol desarrollados por Game Freak y publicados para videoconsolas portátiles de Nintendo.
                    La serie se divide en generaciones Pokémon, las cuales son los grupos de videojuegos lanzados en un cierto período y que comparten una serie de 
                    características similares, concretamente los personajes y criaturas (Pokémon) y la región donde se sucede la historia. Estas generaciones suelen 
                    corresponderse con las generaciones de las consolas. La aparición sucesiva de generaciones suele tener como consecuencia la publicación de nuevas 
                    entregas de diversos productos derivados de los videojuegos, como la serie de anime Pokémon. 
                    </p> 
                </blockquote>
                <figcaption className='blockquote-footer'>WIKIPEDIA</figcaption>
            </figure>
        </div>

        <Footer />

    </div>
  )
}

export default Inicio