import './Navbar.css';

const Navbar = ({name, lastName}) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-img">
          <img src=""></img>
        </div>
        <div className="nav-links">
          <a>{name}</a>
          <a>{lastName}</a>
          <a>About</a>
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