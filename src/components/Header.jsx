import { Link } from 'react-router-dom'


function Header() {
    return (
      <header className="header">
        <h1 className="header-title">Wayfarer</h1>
  
        <nav>
          <ul className="navList">
            <li>
              <Link className="navLink" to="/">Home</Link>
            </li>
            <li>
              <Link className="navLink" to="/cities">Cities</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  