import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;
    
    return (
        <header>
            <h1>KALIA</h1>
        </header>
    )
}

export default Header;