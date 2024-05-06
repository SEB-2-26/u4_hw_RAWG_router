import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GameDetails = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState({});

  const API_KEY = "bdfcd5779a5e4116bae0d83e8e99e914";
  const apiUrl = `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`;

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(apiUrl);
        setGameDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch game details:", error);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  return (
    <div className="game-content">
      <section className="image-container">
        <img src={gameDetails.background_image} alt={gameDetails.name} />
      </section>
      <section className="details">
        <div className="flex-row space-between">
          <h2>{gameDetails.name}</h2>
          <p>Released: {gameDetails.released}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>{gameDetails.description_raw}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <ul>
            {gameDetails.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GameDetails;
