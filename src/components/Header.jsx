import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav>
      <Link to="/pages/home">Home</Link>
      <Link to="/pages/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
