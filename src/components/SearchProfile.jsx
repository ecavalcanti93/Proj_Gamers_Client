import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./SearchBar.css";
import BasicModal from "./Modal";

const API_URL = import.meta.env.VITE_API_URL;

function SearchProfile() {
//   const [games, setGames] = useState([]);
  const [searchProfileGames, setSearchProfileGames] = useState([]);
  const [profileGames, setProfileGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  

//   const storedToken = localStorage.getItem("authToken");

//   const fetchMyGames = () => {
    
//     axios
//       .get(`${API_URL}/games/myGames`, {
//         headers: { Authorization: `Bearer ${storedToken}` },
//       })
//       .then((res) => {
//         res.data.filter((game)=>{
//             if (game.author !== undefined && user === game.author) return game
//         //    console.log(game.author); 
//         //    console.log(game);
//         })
        
//         return filteredProfileGames
//       })
//       .then((res) => {
//         console.log(res);
//         const sortedGames = res.data.sort((a, b) => {
//           return a.title.localeCompare(b.title);
//         });
//         setProfileGames(sortedGames);
//         setSearchProfileGames(sortedGames);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching games:", error);
//       });
//   };

  useEffect(() => {
    setProfileGames(user.games)
    setSearchProfileGames(user.games)
  }, []);
  


//   const handleProfileGames = () => {
//     const filteredProfileGames = games.filter((game)=>{
//         if (user === game.author) return game
//     })
//     setProfileGames(filteredProfileGames)
//   }

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

      {/* {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="list-container">
          {searchProfileGames.map((game) => (
            <div key={game._id}>
              <Link to={`/games/${game._id}`}>
                <img src={game.image} alt={game.title} className="list-img" />
              </Link>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default SearchProfile;