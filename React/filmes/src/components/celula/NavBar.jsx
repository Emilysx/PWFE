import './NavBar.css';
import SearchBar from '../atons/SearchBar';


function NavBar() {
    return (
        <nav className='navbar'>
            <div>
                <h2>Filmes</h2>
                <ul className='nav-links'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Adicionar Filmes</a></li>
                    <li><a href='#'>Sobre</a></li>
                </ul>
            </div>

            <div className='navbar-left'>
                <SearchBar />
                <div className='icon'>
                    <span title='Login'><a href='#'>Login</a> </span>
                    <span title='Perfil'><a href='#'>Perfil</a> </span>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;