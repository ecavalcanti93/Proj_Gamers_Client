import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./SearchBar.css";
import BasicModal from "./Modal";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import AddCreatedGame from "./AddCreatedGame";
import { filter } from "lodash";
import BackTop from "antd/es/float-button/BackTop";
import BackToTop from "./ModalTop";
// import defaultGameImage from "../assets/default-game-image.webp"

const API_URL = import.meta.env.VITE_API_URL;

function SearchBar() {
  const [games, setGames] = useState([]);
  const [searchGames, setSearchGames] = useState([]);
  const { user, authenticateUser } = useContext(AuthContext);
  const [gamesId, setGamesId] = useState([]);
  const navigate = useNavigate();
  // const [searchGamesFiltered, setSearchGamesFiltered] = useState([]);
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
      .then(()=>{
        user.games.map((game) => {
          gamesId.push(game._id);
        });
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  useEffect(() => {
    fetchGames();
    // user.games.map((game) => {
    //   gamesId.push(game._id);
    // });
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
        authenticateUser()
      })
      .then((res) => {
        // res && console.log(res.data);
        res && navigate("/profile")
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
        <BackToTop/>
        </>
        
      )}
    </div>
  );
}

export default SearchBar;
