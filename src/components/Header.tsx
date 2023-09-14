
type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({query, setQuery}: HeaderProps) => {

    return ( 
        <header className="header">
            <div className="contenedor">
                <input 
                    className="input"
                    placeholder='Buscar pokemon'
                    type="text"
                    value={query}
                    onChange={ (event) => setQuery(event.target.value)}/>
            </div>
        </header>
     );
}
 
export default Header;