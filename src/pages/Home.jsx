import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import GameCard from "../components/GameCard";
import GenreCard from "../components/GenreCard";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, toggleSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getGenres = async () => {
    try {
      const response = await axios.get("https://api.rawg.io/api/genres", {
        params: {
          key: import.meta.env.VITE_RAWG_KEY,
        },
      });
      setGenres(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getSearchResults = async (e) => {
    e.preventDefault();
    toggleSearched(true);
    const response = await axios.get(
      "https://api.rawg.io/api/games?search=${searchQuery}",
      {
        params: {
          key: import.meta.env.VITE_RAWG_KEY,
        },
      }
    );
    setSearchResults(response.data.results);
    setSearchQuery("");
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
        <Search
          onSubmit={getSearchResults}
          onChange={handleChange}
          value={searchQuery}
        />
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((game) => {
              <GameCard
                key={game.id}
                name={game.name}
                image={game.image}
                rating={game.rating}
              />;
            })}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => {
            <GenreCard key={genre.id} name={genre.name} image={genre.image} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Home;
