import './styles/App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'



const App = () => {

  return (
    <div>
      <Header />
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
