import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import "./GameListPage.css";
import AddGame from "../components/AddGame";
import BasicModal from "../components/Modal";
import Component from "../components/Footer";



const API_URL = import.meta.env.VITE_API_URL;

function GameListPage() {
  const [games, setGames] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const handleForm = () => setEditForm(!editForm);

  const getAllGames = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/games`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setGames(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllGames();
  }, []);
console.log(games);
  return (
    <>
      <div>
      
      {/* <ModalForm /> */}
      {/* <BasicModal /> */}
      {/* <button
        className="add-game"
        onClick={() => {
        handleForm();
        }}
      >
        +
      </button> */}
      {editForm && <AddGame />}   
        <SearchBar />
      </div>
      <Component/>
    </>
  );
}

export default GameListPage;
