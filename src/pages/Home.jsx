import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`)
      setGenres(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${import.meta.env.VITE_RAWG_KEY}`)
      setSearchResults(response.data.results)
      toggleSearched(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <div>
      <div className="search">
      <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
        {searched && searchResults.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
