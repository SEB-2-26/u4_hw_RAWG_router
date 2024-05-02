import { useState } from 'react'
const API_KEY = import.meta.env.VITE_RAWG_KEY;

const ViewGames = (props) => {
  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {
    
  }

  return (
    <div className="container-grid">

    </div>
  )
}

export default ViewGames
