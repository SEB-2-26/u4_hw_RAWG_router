import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
