import { useState, useEffect } from 'react'
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
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`)
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${import.meta.env.VITE_RAWG_KEY}`)
    setSearchResults(response.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    const search = event.target.value
    setSearchQuery(search)
  }

  useEffect(()=> {
    getGenres()
  }, [])

  return (
    <div>
      <div className="search">
        <div>  
          <Search onChange={handleChange} onSubmit={getSearchResults} value={searchQuery}/>
        </div>
        {searchResults.length != 0 ? <h2>Search Results</h2> : ""}   
        <section className="search-results container-grid">
                
          {
          !!searchResults === true ? (
            searchResults.map((result) => (
            <GameCard 
              name={result.name}
              rating={result.rating}
              image={result.background_image}
            />))) : (<p></p>) }
        </section>
      </div>


      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
            {
            genres.map((genre) => (
                <GenreCard 
                  id={genre.id}
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
