import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import {Header, Footer} from '../components'

import { fetchPokemons } from "../api/fetchPokemons"
import { Pokemon } from "../types/types"
import LoadingScreen from "../components/LoadingScreen"
import { waitFor } from "../utils/utils"


const Pokemons = () => {

    const [query, setQUery] = useState('')
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchAllPokemons = async () => {
        setLoading(true)
        await waitFor(800)
        const allPokemons = await fetchPokemons ()
        setPokemons(allPokemons)
        setLoading(false)
      }
      fetchAllPokemons()
    }, [])
    
    if (loading || !pokemons) {
        return <LoadingScreen/>
    }

    const filterPokemons = pokemons?.slice(0, 151).filter( (pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase())
    })

    return ( 
        <>
            <Header query={query} setQuery={setQUery}/>
                <main>
                    <nav>
                        {filterPokemons.slice(0,151).map( (pokemon) => 
                            <Link key={pokemon.id} className='listItem' to={`/pokemon/${pokemon.name}`}>
                                <img className='listItemIcon' src={pokemon.imgSrc} alt={pokemon.name} />
                                <div className='listItemText'>
                                    <span>{pokemon.name}</span>
                                    <span>{pokemon.id}</span>
                                </div>
                            </Link>
                        )}
                    </nav>
                </main>
            <Footer/>
        </>
     );
}
 
export default Pokemons;