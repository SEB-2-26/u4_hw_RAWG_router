import { useState, useEffect } from 'react'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import axios from 'axios'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`)
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&search=${searchQuery}`)
    setSearchResults(response.data.results);
    console.log(response.data.results)
    toggleSearched(true);
    setSearchQuery('');
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <div>
      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          <Search onChange={handleChange} onSubmit={getSearchResults}/>
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
            {
            genres.map((genre) => (
                <GenreCard 
                  name={genre.name}
                  gameCount={genre.games_count}
                  image={genre.image_background}
                />
                  
            ))}
        </section>
      </div>
    </div>
  )
}


export default Home
