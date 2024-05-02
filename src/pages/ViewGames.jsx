import { useEffect, useState } from 'react'
import axios from 'axios';
import GameCard from '../components/GameCard';

const ViewGames = (props) => {
    const [genereId, setGenreId] = useState(null)
    const [games, setGames] = useState([])

    const getGamesByGenre = async () => {
        const response = await axios.get(`https://api.rawg.io/api/games?page_size=40&genres=${genreId}?key=${import.meta.env.VITE_RAWG_KEY}`);
        setGames(response.data.results);
    }

    useEffect(()=> {
        getGamesByGenre()
    }, [genreId])

    return (
        <div className="container-grid">
            <GameCard
            key={game.id}
            image={game.image}
            name={game.name}
            rating={game.rating}
            />
        </div>
    );
};

export default ViewGames
