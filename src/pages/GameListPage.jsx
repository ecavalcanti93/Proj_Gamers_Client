import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import "./GameListPage.css";
import AddGame from "../components/AddGame";
import { animateScroll as scroll} from "react-scroll";

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
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <div>
        {editForm && <AddGame updateGames={getAllGames} />}
        <SearchBar />
      </div>
    </>
  );
}

export default GameListPage;
