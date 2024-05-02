import { useState, useEffect} from 'react';
import Search from '../components/Search'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
const API_KEY = import.meta.env.VITE_RAWG_KEY;


const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(()=>{ 
    getGenres();
   }, []);

function handleChange(e){
  setSearchQuery(e.target.value)
}

async function getGenres(){
  const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  setGenres(response.data.results);
}

async function getSearchResults(){
  const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`);

  setSearchResults(response.data.results[0]);
  setSearchQuery('');
}

function onSubmit(e){
  e.preventDefault();
  toggleSearched(true);
  getSearchResults();
}

function onClick(e){
  console.log("hello")
}

  return (
    <div>
      <div className="search">
        <Search handleChange={handleChange} value={searchQuery} onSubmit={onSubmit} />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
        <div>{searched ? ( <GameCard onClick={onClick} name={searchResults.name} image={searchResults.background_image} rating={searchResults.rating} />) : (<p>No Results yet</p>)}</div>
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
         <section className="container-grid">
          {genres.map((genre)=>(
            <GenreCard name={genre.name} gamesCount={genre.games_count} image={genre.image_background}/>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
