import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ModalDelete.css";

const API_URL = import.meta.env.VITE_API_URL;

function DeleteGameButton() {
  const { gameId } = useParams();
  const navigate = useNavigate();

  const deleteGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/games/${gameId}/delete`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/profile");
        // navigate("/games");
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   getGame();
  // }, []);

  return <button className="button-delete" onClick={deleteGame()}></button>;
}

export default DeleteGameButton;
