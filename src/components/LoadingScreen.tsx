import pokedex from '../assets/pokedex.png'

const LoadingScreen = () => {
    return ( 
        <div className='loadingScreen'>
            <img className='loadingImg' src={pokedex} alt='Pokedex'/>
        </div>
     );
}
 
export default LoadingScreen;