import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, POSTER_PATH } from '../globals'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genres?key=${import.meta.env.VITE_RAWG_KEY}`)
    console.log(response.data.results)
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    console.log('banana')
    e.preventDefault()
    toggleSearched(true)
    const response = await axios.get(`${BASE_URL}/games?key=${import.meta.env.VITE_RAWG_KEY}&search=${searchQuery}`)
    setSearchResults(response.data.results)
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }
  useEffect(() => {
    getGenres()
  }, [])

  return (
    <div>
      <Search value={searchQuery} onChange={handleChange} onSubmit={getSearchResults} />
      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searched ? searchResults.map((game) => (<GameCard image={game.background_image} name={game.name} rating={game.rating} id={game.id} />)) : ''}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard name={genre.name} gamesCount={genre.games_count} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
