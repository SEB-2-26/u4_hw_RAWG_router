import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import { useParams } from "react-router-dom";

const ViewGames = () => {
  const [games, setGames] = useState([]);
  const { genreId } = useParams();
  const API_KEY = import.meta.env.VITE_RAWG_KEY;

  useEffect(() => {
    const getGamesByGenre = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${API_KEY}`
        );
        setGames(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getGamesByGenre();
  }, [genreId]);

  return (
    <div className="container-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          name={game.name}
          image={game.background_image}
          rating={game.rating}
        />
      ))}
    </div>
  );
};

export default ViewGames;
