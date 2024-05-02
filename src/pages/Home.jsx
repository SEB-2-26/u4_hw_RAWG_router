import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import GenreCard from "../components/GenreCard";
import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    try {
      const response = await axios.get("https://api.rawg.io/api/genres", {
        params: {
          key: import.meta.env.VITE_RAWG_KEY,
        },
      });
      setGenres(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getSearchResults = async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?search=${searchQuery}`,
        {
          params: {
            key: import.meta.env.VITE_RAWG_KEY,
          },
        }
      );
      console.log(response.data);
      setSearchResults(response.data.results);
      setSearched(true);
      setSearchQuery("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleGameClick = (id) => {
    console.log(`Game with id ${id} clicked`);
    navigate(`/games/details/${id}`);
  };

  const handleGenreClick = (id) => {
    console.log(`Genre with id ${id} clicked`);
    navigate(`/view/games/${id}`);
  };

  return (
    <div>
      <div className="search">
        <Search
          onSubmit={getSearchResults}
          onChange={handleChange}
          value={searchQuery}
        />
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((game) => (
              <GameCard
                key={game.id}
                image={game.background_image}
                name={game.name}
                rating={game.rating}
                onClick={() => handleGameClick(game.id)}
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
              image={genre.image_background}
              name={genre.name}
              gamesCount={genre.games_count}
              onClick={() => handleGenreClick(genre.id)}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
