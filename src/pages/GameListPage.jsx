import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import "./GameListPage.css";
import AddGame from "../components/AddGame";
<<<<<<< HEAD
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> b197d34fd45baf0d1fd9e3a6f62b092515f4c075

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

  return (
    <>
      <div>
<<<<<<< HEAD
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
        {editForm && <AddGame updateGames={getAllGames} />}
=======
        <Routes>
          <Route
            path="/games/:gameId"
            element={editForm ? <AddGame /> : null}
          /> 
        </Routes>
>>>>>>> b197d34fd45baf0d1fd9e3a6f62b092515f4c075
        <SearchBar />
      </div>
    </>
  );
}

export default GameListPage;
