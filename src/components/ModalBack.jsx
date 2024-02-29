import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ModalBack.css";

const API_URL = import.meta.env.VITE_API_URL;

function BackToBack () {
    const [game, setGame] = useState(null);
    const { gameId } = useParams();
  
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
  
    useEffect(() => {
      getGame();
    }, []);
    
    return (
        <Link to="/games">
    <button className='button-back'></button>
  </Link>
  )
}

export default BackToBack;