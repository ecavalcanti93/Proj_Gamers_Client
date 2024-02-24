import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import GameCard from "../components/GameCard";
import "../App.css";
import '../pages/GameListPage.css'

const API_URL = import.meta.env.VITE_API_URL;

function SearchBar() {
  const [games, setGames] = useState([]);
  const [searchGames, setSearchGames] = useState([]);

  const storedToken = localStorage.getItem("authToken");

  const fetchGames = () => {
    axios
      .get(`${API_URL}/games`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        setGames(res.data);
        return res.data;
      })
      .then((data) => setSearchGames(data))
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleSearchInputChange = (e) => {
    e.target.value === null
      ? setSearchGames(games)
      : setSearchGames(
          games.filter((game) => {
            return game.title
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          })
        );
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search for games..."
          onChange={handleSearchInputChange}
          className="search-bar"
        />
        🔍
        {games.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <div className="list-container">
            {searchGames.map((game) => {
              return (
                <div key={game._id} >
                  <Link to={`/games/${game._id}`}>
                    <img src={game.image} alt={game.title} className="list-img"/>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
