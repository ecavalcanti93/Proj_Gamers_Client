import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ModalDelete.css"

const API_URL = import.meta.env.VITE_API_URL;

function DeleteGameButton() {
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

  useEffect(() => {
    getGame();
  }, []);

  return (
    <button className='button-delete' onClick={deleteGame}></button>
  )

}

export default DeleteGameButton;