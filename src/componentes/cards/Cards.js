import React from 'react'
import {Cardspokemon} from './Cardspokemon'
import './Cards.css'

export const Cards = ({results}) => {
  return (
    <div className='contaniner'>
        <ul className='cards'>
            {
                results.map( p=>(
                    <li className='card-item' key={p.name}>
                        <Cardspokemon url={p.url}/>
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

export default Cards