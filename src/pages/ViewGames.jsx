import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GameCard from "../components/GameCard";

const ViewGames = () => {
  const { genreId } = useParams();
  const [games, setGames] = useState([]);

  const API_KEY = "bdfcd5779a5e4116bae0d83e8e99e914";
  const apiUrl = `https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${API_KEY}`;

  useEffect(() => {
    const fetchGamesByGenre = async () => {
      try {
        const response = await axios.get(apiUrl);
        setGames(response.data.results);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchGamesByGenre();
  }, [genreId]);

  return (
    <div className="container-grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default ViewGames;
