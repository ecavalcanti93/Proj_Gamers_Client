import * as React from "react";
import { useContext } from "react";
import { useParams, useNavigate, } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import "./ModalDelete.css";

const API_URL = import.meta.env.VITE_API_URL;

function DeleteGameButton() {
  const { gameId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fakeDeleteGame = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return <button title="Delete" className="button-delete" onClick={fakeDeleteGame}></button>;
}

export default DeleteGameButton;
