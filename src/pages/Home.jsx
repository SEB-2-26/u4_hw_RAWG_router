import { useState, useEffect } from 'react';
import Search from '../components/Search';
import GameCard from '../components/GameCard';
import GenreCard from '../components/GenreCard';
import axios from 'axios';

const Home = () => {
    const [genres, setGenres] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [searched, setSearched] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const getGenres = async () => {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`)
        setGenres(response.data.results)
    }
  
    
    const getSearchResults = async (e) => {
        e.preventDefault()
        const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${import.meta.env.VITE_RAWG_KEY}`)
        setSearchResults(response.data.results);
        console.log(response.data.results)
        setSearched(true);
        setSearchQuery('');
    }
    console.log(searchResults);
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    useEffect(() => {
        getGenres();
      }, []);

      return (
          <div>
            <Search 
            onSubmit={getSearchResults}
            onChange={handleChange}
            value={searchQuery}
            /> 
            <div className="search">
                <h2>Search Results</h2>

                <section className="search-results container-grid">
                    {searched? searchResults.map((game)=> (
                        <GameCard 
                        name={game.name}
                        rating={game.rating}
                        image={game.background_image}
                        />
                    )):''}
                </section>
            </div>
            <div className="genres">
                <h2>Genres</h2>
                <section className="container-grid">
                {genres.map((genre) => (
                    
                        <GenreCard 
                        key={genre.id} 
                        image={genre.image_background
                        } 
                        name={genre.name} />
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Home
