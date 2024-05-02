import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header>
      <nav>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='about'>
          <button>About</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
