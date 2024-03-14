import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { animateScroll as scroll} from "react-scroll";
import axios from "axios";
import GameCard from "../components/GameCard";
import "./GameDetailsPage.css";
import ModalEdit from "../components/ModalEdit";

const API_URL = import.meta.env.VITE_API_URL;

function GameDetailsPage() {
  const [game, setGame] = useState(null);
  const { gameId } = useParams();
  const navigate = useNavigate();
  const { user, authenticateUser } = useContext(AuthContext);

  const getGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        setGame(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGame();
    scroll.scrollToTop();
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


  return (
    <div>
      <div className="buttons-detail">
        {game && user._id.toString() === game.author._id.toString() && (
          <ModalEdit refreshedGame = {getGame} />
        )}
      </div>
      <GameCard {...game} updateGame={getGame} addGame={handleAddGame} />
      <div>
      </div>
    </div>
  );
}

export default GameDetailsPage;
