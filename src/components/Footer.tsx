import { Link } from "react-router-dom";

// Assets
import PokemonsPics from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';


const Footer = () => {
    return ( 
        <footer>
            <div className="footer">
                <Link className="footerLink" to='/pokemons'>
                    <img className="footerIcon" src={PokemonsPics} alt='pokeball'/>
                </Link>

                <Link className="footerLink" to='/items'>
                    <img className="footerIcon" src={ItemsPic} alt='items'/>
                </Link>

                <Link className="footerLink" to='/pokemons'>
                    <img className="footerIcon" src={LocationPic} alt='location'/>
                </Link>
            </div>
        </footer>
     );
}
 
export default Footer;