import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";

const API_URL = import.meta.env.VITE_API_URL;

function GameListPage() {
  const [games, setGames] = useState([]);

  const getAllGames = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get( `${API_URL}/games`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => setGames(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllGames();
  }, []);

  const searchGame = (char) => {
    let filteredGames;
  
    if (char === "") {
      filteredGames = jsonData; // How to import the JSON coming from the backend?
    } else {
      filteredGames = jsonData.filter((eachGame) => {
        return eachGame.name.toLowerCase().includes(char.toLowerCase());
      })
    }
    setGames(filteredGames);
  }

  return (
    <div>
    <SearchBar setGames={searchGame}/>
      {games.map((game) => (
        <GameCard key={game._id} {...game} />
      ))}
    </div>
  );
}

export default GameListPage;
