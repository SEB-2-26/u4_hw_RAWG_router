// import { useState, useEffect } from 'react'
// import Search from '../components/Search'
// import axios from 'axios'
// import GameCard from '../components/GameCard'
// import GenreCard from '../components/GenreCard'

// const Home = () => {
//   const [genres, setGenres] = useState([])
//   const [searchResults, setSearchResults] = useState([])
//   const [searched, toggleSearched] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const apiUrl = 'https://api.rawg.io/api/genres'
//   const getGenres = async () => {

//   }

//   const getSearchResults = async (e) => {
//     e.preventDefault()
//   }

//   const handleChange = (event) => {

//   }

// useEffect(() => {
//   getGenres()
// }, [])

// useEffect(() => {
//   getSearchResults()
// }, [])

// useEffect(() => {
//   handleChange()
// }, [])

//   return (
//     <div>
//       <div className="search">
//         <h2>Search Results</h2>
//         <section className="search-results container-grid">

//         </section>
//       </div>
//       <div className="genres">
//         <h2>Genres</h2>
//         <section className="container-grid">

//         </section>
//       </div>
//     </div>
//   )
// }

// export default Home

import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import GameCard from "../components/GameCard";
import GenreCard from "../components/GenreCard";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const apiKey = "bdfcd5779a5e4116bae0d83e8e99e914";
  const apiUrl = "https://api.rawg.io/api";

  const getGenres = async () => {
    try {
      const response = await axios.get(`${apiUrl}/genres?key=${apiKey}`);
      setGenres(response.data.results);
    } catch (error) {
      console.error("Failed to fetch genres:", error);
    }
  };

  const getSearchResults = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${apiUrl}/games?search=${searchQuery}&key=${apiKey}`
      );
      setSearchResults(response.data.results);
      setSearched(true);
      setSearchQuery("");
    } catch (error) {
      console.error("Failed to fetch search results:", error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div>
      <Search
        value={searchQuery}
        onChange={handleChange}
        onSubmit={getSearchResults}
      />
      {searched && (
        <div className="search">
          <h2>Search Results</h2>
          <section className="search-results container-grid">
            {searchResults.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </section>
        </div>
      )}
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
