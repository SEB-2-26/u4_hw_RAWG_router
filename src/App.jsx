import './styles/App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Search from './components/Search'

const App = () => {

  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="" element={''} />
          <Route path="" element={''} />
        </Routes>
      </main>

    </div>
  )
}

export default App
