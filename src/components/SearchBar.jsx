import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function SearchBar() {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchGames = () => {
    axios.get(`${API_URL}/games`)
      .then((res) => {
        setGames(res.data);
      })
      .catch(error => {
        console.error("Error fetching games:", error);
      });
  };

  useEffect(() => {
    fetchGames();
  }, []); 


  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search for games..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-bar"
        />
      </div>
    </>
  );
}

export default SearchBar;
