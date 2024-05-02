import { useEffect, useState } from "react";
import Seach from "../components/Search";
import axios from "axios";
import GameCard from "../components/GameCard";
import GenreCard from "../components/GenreCard";

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({});

  useEffect(() => {}, [gameId]);

  return (
    <div className="game-content">
      <section className="image-container">
        <div></div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3></h3>
        </div>
      </section>
    </div>
  );
};

export default GameDetails;
