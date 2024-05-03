import { useState } from 'react'
import axios from 'axios';
import Search from '../components/Search';
import GameCard from '../components/GameCard';
import GenreCard from '../components/GenreCard';

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    try {
      const response = await axios.get('https://api.rawg.io/api/genres', {
        params: {
          key: 'ffd689434a89465c8e8b40f0e969debf', 
        },
      });
      setGenres(response.data.results);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const getSearchResults = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}`, {
        params: {
          key: 'ffd689434a89465c8e8b40f0e969debf',
        },
      });
      setSearchResults(response.data.results);
      toggleSearched(true);
      setSearchQuery('');
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div>
      <div className="search">
        <h2>Search Results</h2>
        <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
        <section className="search-results container-grid">
        {searched &&
          searchResults.map((game) => (
            <GameCard
              key={game.id}
              onClick={() => console.log(`Clicked on ${game.name}`)}
              image={game.background_image}
              name={game.name}
              rating={game.rating}
            />
          ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              onClick={() => console.log(`Clicked on ${genre.name}`)}
              image={genre.image_background}
              name={genre.name}
              gamesCount={genre.games_count}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home
