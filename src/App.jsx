import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import About from './pages/About'

const App = () => {

  return (
    <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/games/details/:id" element={ <GameDetails /> } />
        <Route path="/view/games/:genreId" element={ <ViewGames /> } />
      </Routes>
    </main>
  </div>
  )
}

export default App
