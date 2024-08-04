import React from 'react'
import styles from './styles.css'
function PokeCard(props) {
  return (

    
    <div className='card'>
        <p>{props.name}</p>
        <p>{props.attack}</p>
        <img src={props.url} alt=""></img>
    </div>
  )
}

export default PokeCard