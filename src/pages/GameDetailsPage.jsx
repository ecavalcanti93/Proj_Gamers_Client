import "./gameDetailsPage.css";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GameCard from "../components/GameCard";
import "./GameDetailsPage.css";
import Comments from "../components/Comments";
// import AddTask from "../components/AddTask";
// import TaskCard from "../components/TaskCard";

const API_URL = import.meta.env.VITE_API_URL;

function GameDetailsPage() {
  const [game, setGame] = useState(null);
  const { gameId } = useParams();
  const navigate = useNavigate();

  const getGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        const oneGame = response.data;
        // console.log(oneGame);
        setGame(oneGame);
        // console.log(game);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGame();
  }, []);

  // game ? console.log(game.author.username) : <p>loading...</p>
  
 
  const deleteGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/games");
        // navigate("/games");
      })
      .catch((err) => console.log(err));
  };
  // console.log({...game});
  return (
    <div>
      <GameCard {...game} />
      

      <Link to="/games">
        <button>Back to games</button>
      </Link>

      <Link to={`/games/edit/${gameId}`}>
        <button>Edit Game</button>
      </Link>

      <button onClick={deleteGame}>Delete Game</button>
    </div>
  );
}

export default GameDetailsPage;
