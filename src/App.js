import styles from './Components/styles.css'
import {useState, useEffect} from 'react'
import PokeCard from './Components/PokeCard'

function App() {

  const [pokemon, setPokemon] = useState('')
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  const handleSubmit= (e) => {
    e.preventDefault()
    setPokemon(search)
  }
  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(URL)
    response.json().then(json => {
      setData(json)
      console.log(json)
    })
    }
    fetchData();
  }, [pokemon])


  return (
    <div className='container'>
      <div className='title'>Search a Pokemon
      <form onSubmit={handleSubmit}>
      <input type='text' value={search} onChange={e => setSearch(e.target.value)}></input>
      </form>
      </div> 

      <PokeCard name={pokemon} 
      height={data.height}
      url={data.sprite}
      
      ></PokeCard> 

    </div>


  );
}

export default App;
