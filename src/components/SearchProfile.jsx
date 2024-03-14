import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./SearchBar.css";
import BasicModal from "./Modal";
import BackToTop from "./ModalTop";

const API_URL = import.meta.env.VITE_API_URL;

function SearchProfile() {
  const [searchProfileGames, setSearchProfileGames] = useState([]);
  const [profileGames, setProfileGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, refreshUser } = useContext(AuthContext);

  const storedToken = localStorage.getItem("authToken");

  const fetchUser = () => {
    axios
      .get(`${API_URL}/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        const sortedProfileGames = res.data.games.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        setProfileGames(sortedProfileGames);
        setSearchProfileGames(sortedProfileGames);
      });
  };

  useEffect(() => {
    fetchUser()
  }, []);

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredSearchProfileGames = profileGames.filter((game) => {
      return game.title.toLowerCase().includes(searchTerm);
    });
    setSearchProfileGames(filteredSearchProfileGames);
  };

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
      <div className="list-container">
        {searchProfileGames.map((game) => (
          <div key={game._id}>
            <Link to={`/games/${game._id}`}>
              <img src={game.image} alt={game.title} className="list-img" />
            </Link>
          </div>
        ))}
      </div>
      <div className="btn-top-search">
      <BackToTop />
      </div>
    </div>
  );
}

export default SearchProfile;
