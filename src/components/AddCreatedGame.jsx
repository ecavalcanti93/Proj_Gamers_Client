import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddGame.css";

const API_URL = import.meta.env.VITE_API_URL;

function AddCreatedGame(props) {

  const [game, setGame] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();



  const getGame = () => {


    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${props.gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        setGame(res.data);
        setLoading(false)
        return game

      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    
  };

  const handleOnClick = (e) => {
    getGame()
  };

  return (
    <div className="container-add">
      <button
        onClick={() => {
          handleOnClick();
        }}
      >
        Add game
      </button>
    </div>
  );
}

export default AddCreatedGame;
