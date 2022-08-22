import {Link} from "react-router-dom";

import './Navbar.css';

const Navbar = ({name, lastName}) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className='nav-left'>
          <a href='/'>
            <img alt='space-logo' className='nav-img' src="https://cdn.dribbble.com/users/1769954/screenshots/4216600/media/f1ed192ec1c5300d413fac7fb076f7d0.png"></img>
          </a>
          <h1 className='nav-title'>Space-app</h1>
        </div>
        <div className="nav-links">
          
          <a href='/'>Personas en el espacio</a>
          <Link to="/astronauts">Personas en el espacio</Link>

          <a href='/'>Foto de astronimía del día</a>
          <Link to="/apod">Foto de astronimía del día</Link>

        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  name: "Nombre",
  lastName: "Apellido"
}

export default Navbar;