import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SearchBar.css";
import BasicModal from "./Modal";
<<<<<<< HEAD
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
=======
import AddCreatedGame from "./AddCreatedGame";
>>>>>>> b7947a0f09ce7c9e0e58531ec67be273239cb791
// import defaultGameImage from "../assets/default-game-image.webp"

const API_URL = import.meta.env.VITE_API_URL;

function SearchBar() {
  const [games, setGames] = useState([]);
  const [searchGames, setSearchGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const storedToken = localStorage.getItem("authToken");

  const fetchGames = () => {
    axios
      .get(`${API_URL}/games`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        const sortedGames = res.data.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        setGames(sortedGames);
        setSearchGames(sortedGames);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredGames = games.filter((game) => {
      return game.title.toLowerCase().includes(searchTerm);
    });
    setSearchGames(filteredGames);
  };
  

  // const handleGameImage = ()=>{
  //   searchGames ? ( searchGames.map((game)=>{
  //     if (game.image === defaultGameImage) {
  //     return defaultGameImage
  //   }else return game.image
  //   })) : loading   
  // }

  

  return (
    <div className="center">
      <div className="search-box flex-center">
        <BasicModal />
        <input
          type="text"
          placeholder="Search for games..."
          onChange={handleSearchInputChange}
          className="input-search"
        />
      </div>

      {loading ? (
        <div className="loading">
            <Stack sx={{ color: 'orangered' }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
            </Stack>
            </div>
      ) : (
        <div className="list-container">
          {searchGames.map((game) => (
            <div key={game._id}>
              <Link to={`/games/${game._id}`}>
                <img src={game.image} alt={game.title} className="list-img" />
                
              </Link>
              <AddCreatedGame />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
