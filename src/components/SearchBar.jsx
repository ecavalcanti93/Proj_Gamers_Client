import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./SearchBar.css";
import BasicModal from "./Modal";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import BackToTop from "./ModalTop";

const API_URL = import.meta.env.VITE_API_URL;

function SearchBar() {
  const [games, setGames] = useState([]);
  const [searchGames, setSearchGames] = useState([]);
  const { user } = useContext(AuthContext);
  const [gamesId, setGamesId] = useState([]);
  const navigate = useNavigate();
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

  const fetchUser = () => {
    axios
      .get(`${API_URL}/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res)=>{
        res.data.games.map((game) => {
          gamesId.push(game._id);
        });
      })
  };

  useEffect(() => {
    fetchGames()
    fetchUser()
  }, []);

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredGames = games.filter((game) => {
      return game.title.toLowerCase().includes(searchTerm);
    });
    setSearchGames(filteredGames);
  };

  const handleAddGame = (game) => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/games`, game, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/profile")
      })
  };

  return (
    <div className="center">
      <div className="search-box flex-center">
        <BasicModal refreshedGames={fetchGames} />
        <input
          type="text"
          placeholder="Search for games..."
          onChange={handleSearchInputChange}
          className="input-search"
        />
      </div>

      {loading ? (
        <div className="loading">
          <Stack sx={{ color: "orangered" }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
          </Stack>
        </div>
      ) : (
        <>
          <div className="list-container">
          {searchGames.map((game) => (
            <div key={game._id} className="column">
              <Link to={`/games/${game._id}`}>
                <img src={game.image} alt={game.title} className="list-img" />
              </Link>
              {gamesId.includes(game._id) ? (
                <button
                  className="btn-add-list"
                  hidden
                  onClick={() => {
                    handleAddGame(game);
                  }}
                >
                </button>
              ) : (
                <button
                className="btn-add-list"
                  onClick={() => {
                    handleAddGame(game);
                  }}
                >
                </button>
              )}

            </div>
          ))}
        </div>
        <div className="btn-top-search">
        <BackToTop/>
        </div>
        </>
        
      )}
    </div>
  );
}

export default SearchBar;
