import React from 'react'
import { useState } from 'react'
import {UseFetch} from '../UseFetch'
import {Cards} from '../cards/Cards'
import Footer from '../footer/Footer'

function Pokemons() {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const estado = UseFetch(url)
  const {cargando,data} = estado
  //cargando? console.log('cargando'):console.log(data.results)

  return (
    <div>
        {
            cargando
            ?
            <h1>Cargando...</h1>
            :
            <div>
            <Cards results={data.results}/>

            <div className='container m-auto'>
                <button onClick={() => setUrl(data.previous)} className='m-2 btn btn-dark'>Anterior</button>
                <button onClick={() => setUrl(data.next)} className='m-2 btn btn-dark'>Siguiente</button>
            </div>

            </div>
        }

        <Footer />

    </div>
  )
}

export default Pokemons