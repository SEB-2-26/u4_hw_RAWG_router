import { useEffect, useState } from 'react';
import axios from 'axios';

const GameDetails = (props) => {
    const [gameDetails, setGameDetails] = useState({})
    const gameId = props.match.params.gameId;

    const fetchDetails = async () => {
        let response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_RAWG_KEY}`);
        setGameDetails(response.data)
    }
    useEffect(() => {
        fetchDetails();
    }, [gameId])

    return (
        <div className="game-content">
        <section className="image-container">
            <div>
                {gameDetails.image && <img src={gameDetails.image} alt={gameDetails.name} /> }
            </div>
        </section>
        <section className="details">
            <div className="flex-row space">
                <p>Rating: {gameDetails.rating}</p>
            </div>
            <div>
            <h3>
                {gameDetails.name}
            </h3>
            </div>
        </section>
        </div>
    )
}

export default GameDetails
