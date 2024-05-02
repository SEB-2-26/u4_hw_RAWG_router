import './styles/App.css'
const VITE_RAWG_KEY = import.meta.env.VITE_RAWG_KEY;
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        {/*  <Route path="" element={} />
          <Route path="" element={} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
