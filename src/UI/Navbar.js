import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <nav className="Navbar-container-nav">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
        <div className="Navbar-searchbar-container">
          <input
            className="Navbar-searchbar"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
