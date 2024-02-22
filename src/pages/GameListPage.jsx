import { useState, useEffect } from "react";
import axios from "axios";

import GameCard from "../components/GameCard";
import AddGame from "../components/AddGame";

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

  return (
    <div className="game-title">
      <AddGame refreshGames={getAllGames} />

      {games.map((game) => (
        <GameCard key={game._id} {...game} />
      ))}
    </div>
  );
}

export default GameListPage;
