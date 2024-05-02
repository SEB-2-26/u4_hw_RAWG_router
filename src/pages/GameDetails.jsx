import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({});
  const { gameId } = useParams();
  const API_KEY = import.meta.env.VITE_RAWG_KEY;

  useEffect(() => {
    const getGameDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
        );
        setGameDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getGameDetails();
  }, [gameId]);

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image} alt={gameDetails.name} />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h3>{gameDetails.name}</h3>
          <p>Release Date: {gameDetails.released}</p>
          <p>Rating: {gameDetails.rating}</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p>{gameDetails.description}</p>
        </div>
      </section>
    </div>
  );
};

export default GameDetails;
