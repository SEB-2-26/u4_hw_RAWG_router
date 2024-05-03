import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'
import GameCard from './components/GameCard'
import GenreCard from './components/GenreCard'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {

  return (
    <div>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    </div>
  )
}

export default App
