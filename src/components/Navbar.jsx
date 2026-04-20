import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/">
          <span className="logo-icon">💜</span>
          <span className="logo-text">ARMY App</span>
        </Link>
      </div>
      
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/discography" className={location.pathname === '/discography' ? 'active' : ''}>
            Discografía
          </Link>
        </li>
        <li>
          <Link to="/members" className={location.pathname === '/members' ? 'active' : ''}>
            Miembros
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;