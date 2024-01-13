import React from 'react'

function PokeCard(props) {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.height}</p>
        <p>{props.url}</p>
    </div>
  )
}

export default PokeCard