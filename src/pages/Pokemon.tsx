import { useNavigate, useParams } from "react-router-dom";
import Pokeball from '../assets/pokeball.png';
import { Footer } from "../components";
import { useState, useEffect } from 'react';
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import { waitFor } from "../utils/utils";
import LoadingScreen from "../components/LoadingScreen";


const Pokemon = () => {

    const [pokemon, setPokemon] = useState<PokemonDetails>()
    const [loading, setLoading] = useState(false)

    const {name} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      
        async function getPokemon() {
            //setLoading(true)
            await waitFor(1000)
            const fetchedPokemon = await fetchPokemon(name as string)
            setPokemon(fetchedPokemon)
            setLoading(false)
        }

        getPokemon()

    }, [name])

    if (loading || !pokemon) {
        return <LoadingScreen/>
    }
    

    return ( 
        <>
            <button className='backButton' onClick={ () => navigate('/pokemons')}>
                <img className="backImg" src={Pokeball} alt='Pokeball' /> regresar
            </button>
            
            <div className="pokemon">
                <main className="pokemonInfo">
                    <div className="pokemonTitle">{name?.toUpperCase()}</div>
                    <div>Nr. {pokemon?.id}</div>
                    <div>
                        <img className="pokemonImg" src={pokemon?.imgSrc} alt='Bulbasaur'/>
                    </div>
                    <div>Hp: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense: {pokemon?.defense}</div>
                </main>
            </div>
            <Footer/>
        </>
     );
}
 
export default Pokemon;