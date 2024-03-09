import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddGame.css";

const API_URL = import.meta.env.VITE_API_URL;

function AddCreatedGame(props) {

  const [game, setGame] = useState(null);

  const [loading, setLoading] = useState(true);
  // const [author, setAuthor] = useState("");
  // const [comments, setComments] = useState("");

  const navigate = useNavigate();



  const getGame = () => {


    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${props.gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        // const oneGame = response.data;
        // console.log(res.data);
        setGame(res.data);
        setLoading(false)
        return game

        // console.log(game);
      })
      .then((res) => {
        console.log(res);
        // setLoading(false)
        // if(loading === false) {console.log(game)} else loading
      })
    //   .then(addGame())
      .catch((error) => console.log(error));
    
  };

  const handleOnClick = (e) => {
    // e.preventDefault();
    // addThisGame();
    getGame()
    // addGame()
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
