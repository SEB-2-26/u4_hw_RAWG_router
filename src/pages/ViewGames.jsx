import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import GameCard from '../components/GameCard'

const ViewGames = (props) => {
  let {id} = useParams()
  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  useEffect(() => {
    setGenreId(useParams())

  })
  const getGamesByGenre = async () => {
    
  }

  return (
    <div className="container-grid">
      {genereId}
    </div>
  )
}

export default ViewGames
 