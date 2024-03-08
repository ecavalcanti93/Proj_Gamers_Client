import "./gameDetailsPage.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import GameCard from "../components/GameCard";
import "./GameDetailsPage.css";
import ModalEdit from "../components/ModalEdit";
import DeleteGameButton from "../components/ModalDelete";

const API_URL = import.meta.env.VITE_API_URL;

function GameDetailsPage() {
  const [game, setGame] = useState(null);
  // const [canEdit, setCanEdit] = useState(false);
  const { gameId } = useParams();
  const navigate = useNavigate();
  const { user, authenticateUser } = useContext(AuthContext);

  // const handleCanEdit = () => {
  //   user.username === game.author.username ? setCanEdit(true) : canEdit;
  // };

  const getGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        setGame(res.data);
        // console.log(game);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGame();
  }, []);

  const handleAddGame = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/games`, game, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        authenticateUser()
        navigate("/profile");
      });
  };

  // const deleteGame = () => {
  //   const storedToken = localStorage.getItem("authToken");
  //   axios
  //     .delete(`${API_URL}/games/${gameId}`, {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then(() => {
  //       navigate("/games");
  //     })
  //     .catch((err) => console.log(err));
  // };
  // console.log(game);
  return (
    <div>
      <div className="buttons-detail">
        {/* <BackToBack /> */}
        {game && user._id.toString() === game.author._id.toString() && (
          <ModalEdit />
        )}
        {/* {game && user.games.includes(game._id) && <DeleteGameButton />} */}

        {/* <ModalEdit /> */}
        {/* <DeleteGameButton /> */}
      </div>
      <GameCard {...game} updateGame={getGame} addGame={handleAddGame} />
      <div>
      </div>
    </div>
  );
}

export default GameDetailsPage;
