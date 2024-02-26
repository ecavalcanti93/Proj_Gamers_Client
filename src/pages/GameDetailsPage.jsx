import "./gameDetailsPage.css";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GameCard from "../components/GameCard";
import "./GameDetailsPage.css"
// import AddTask from "../components/AddTask";
// import TaskCard from "../components/TaskCard";

const API_URL = import.meta.env.VITE_API_URL;

function GameDetailsPage(props) {
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
        setGame(oneGame);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGame();
  }, []);

  const deleteGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/games")
        // navigate("/games");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    <GameCard {...game}/>
      {/* {game && (
        <div className="game-title">
          <div>
            <img src={game.image} alt="game image"/>
          </div>
          <div>
            <h1><b>{game.title}</b></h1>
            <p><b>Genre:</b> {game.genre}</p>
            <p><b>Platform:</b> {game.platform}</p>
            <p><b>Company:</b> {game.company}</p>
            <p><b>PEGI:</b> {game.age}</p>
            <p><b>Description:</b> {game.description}</p>
            <p><b>Rating:</b> {game.rating}</p>
          </div>
        </div>
      )} */}

      {/* <AddTask refreshGame={getGame} gameId={gameId} /> */}

      {/* {game &&
        game.tasks.map((task) => <TaskCard key={task._id} {...task} />)} */}

      <Link to="/games">
        <button>Back to games</button>
      </Link>

      <Link to={`/games/edit/${gameId}`}>
        <button>Edit Game</button>
      </Link>

      {/* <button onClick={()=>{deleteGame()}}>Delete Game</button> */}
      <button onClick={deleteGame}>Delete Game</button>
      
    </div>
  );
}

export default GameDetailsPage;
