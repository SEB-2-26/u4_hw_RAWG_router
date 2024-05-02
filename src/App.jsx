import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import GameCard from './components/GameCard'
import GenreCard from './components/GenreCard'
import Search from './components/Search'
import './styles/App.css'



const App = () => {

  return (
    <div>
   <Header />
    <main>
      <Routes>
        <Route path="/" element={} />
        <Route path="/about" element={} />
        <Route path="" element={} />
        <Route path="" element={} />
      </Routes>
    </main>
    </div>
  )
}



export default App
