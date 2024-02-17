import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import AddTask from "../components/AddTask";
// import TaskCard from "../components/TaskCard";

const API_URL = import.meta.env.VITE_API_URL;

function GameDetailsPage(props) {
  const [game, setGame] = useState(null);
  const { gameId } = useParams();

  const getGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get( `${API_URL}/api/games/${gameId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      .then((response) => {
        const oneGame = response.data;
        setGame(oneGame);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <div>
      {game && (
        <>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
        </>
      )}

      <AddTask refreshGame={getGame} gameId={gameId} />

      {game &&
        game.tasks.map((task) => <TaskCard key={task._id} {...task} />)}

      <Link to="/games">
        <button>Back to games</button>
      </Link>

      <Link to={`/games/edit/${gameId}`}>
        <button>Edit Game</button>
      </Link>
    </div>
  );
}

export default GameDetailsPage;
