import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import GameCard from "../components/GameCard";
import GenreCard from "../components/GenreCard";
import { StrictMode } from "react";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, toggleSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = import.meta.env.VITE_RAWG_KEY;

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${apiKey}`
      );
      setGenres(response.data.results);
    };

    getGenres();
  }, []);

  const getSearchResults = async (e) => {
    e.preventDefault();
    let searchInput = searchQuery.toLowerCase().replace(" ", "-");

    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${apiKey}&search=${searchInput}`);
      
    if(response.data.results.length) {
      toggleSearched(!searched)
      setSearchResults(response.data.results)
    }

    setSearchQuery("");
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const onClick = (e) => {
    setSearchQuery()
  }
  let results;

  if (searched) {
    results = searchResults.map((result) => {
      return <GameCard key={result.id} onSubmit={onClick} image={result.background_image} name={result.name} rating={result.rating}/>
    })
  }

  return (
    <div>
      <StrictMode>
        <div className="search">
          <Search
            value={searchQuery}
            onChange={handleChange}
            onSubmit={getSearchResults}
          />
         
         {searched ? <h2>Search Results</h2>: null} 
          <section className="search-results container-grid">
           {results}
          </section>
        </div>
        <div className="genres">
          <h2>Genres</h2>
          <section className="container-grid">
            {genres.map((genre) => (
              <GenreCard
                key={genre.id}
                name={genre.name}
                image={genre.image_background}
                gamesCount={genre.games_count}
              />
            ))}
          </section>
        </div>
      </StrictMode>
    </div>
  );
};

export default Home;
