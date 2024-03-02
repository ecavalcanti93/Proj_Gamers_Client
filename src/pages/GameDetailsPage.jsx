import "./gameDetailsPage.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import GameCard from "../components/GameCard";
import "./GameDetailsPage.css";
import ModalEdit from "../components/ModalEdit";
import DeleteGameButton from "../components/ModalDelete";
import BackToBack from "../components/ModalBack";
import Comments from "../components/Comments";
// import AddTask from "../components/AddTask";
// import TaskCard from "../components/TaskCard";

const API_URL = import.meta.env.VITE_API_URL;

function GameDetailsPage() {
  const [game, setGame] = useState(null);
  const { gameId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const getGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((res) => {
        // const oneGame = response.data;
        // console.log(oneGame);
        setGame(res.data);
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
  console.log(game);
  return (
    <div>
      <div className="buttons-detail">
        <BackToBack />
        <ModalEdit />
        <DeleteGameButton />
      </div>
      {/* <div className="buttons-detail">
        <BackToBack />
        {user === true && user.username === game.author.username ? (
          <>
            <ModalEdit />
            <DeleteGameButton />
          </>
        ) : <p>loading...</p>}
      </div> */}
    </div>
  );
}

export default GameDetailsPage;
