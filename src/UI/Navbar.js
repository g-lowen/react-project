import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <ul className="Navbar-container">
          <li className="Navbar-container-item">
            <Link className="Test" to="/">
              Home
            </Link>
          </li>
          <li className="Navbar-container-item">
            <Link className="Test" to="/rules">
              Rules
            </Link>
          </li>
          <li className="Navbar-container-item">
            <Link className="Test" to="/contact">
              Contact
            </Link>
          </li>
          <li className="Navbar-searchbar-container">
            <input
              className="Navbar-searchbar"
              type="text"
              placeholder="Search"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
