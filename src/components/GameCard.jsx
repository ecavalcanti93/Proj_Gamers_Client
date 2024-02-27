import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GameCard.css";

// We are deconstructing props object directly in the parentheses of the function
function GameCard({
  image,
  title,
  genre,
  company,
  platform,
  rating,
  age,
  description,
  comments
}) {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  // const getGame = () => {
  //   const storedToken = localStorage.getItem("authToken");
  //   axios
  //     .get(`${API_URL}/games/${gameId}`, {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })

  //     .then((response) => {
  //       const oneGame = response.data;
  //       setGame(oneGame);
  //       console.log(game);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   getGame();
  // }, []);

  // const deleteGame = () => {
  //   const storedToken = localStorage.getItem("authToken");
  //   axios
  //     .delete(`${API_URL}/games/${gameId}`, {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then(() => {
  //       navigate("/games");
  //       // navigate("/games");
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <>
      <div className="gamecard">
        <div className="div-container1">
          <img className="card" src={image} alt="game image" />
          {/* <span className="material-symbols-outlined">+</span> */}
        </div>
        <div className="div-container2">
          <h1 className="titlecard">
            <b>{title}</b>
          </h1>
          <p className="description">
            <b>Genre:</b> {genre}
          </p>
          <p className="description">
            <b>Platform:</b> {platform}
          </p>
          <p className="description">
            <b>Company:</b> {company}
          </p>
          <p className="description">
            <b>PEGI:</b> {age}
          </p>
          <p className="description">
            <b>Description:</b> {description}
          </p>
          <p className="description">
            <b>Rating:</b> {rating}
          </p>

          {/* <div>
            <Link to={`/games/edit/${gameId}`}>
              <button>Edit Game</button>
            </Link>

            <button onClick={deleteGame}>Delete Game</button>
          </div> */}
        </div>
        <div className="div-container3">
          {/* {comments.map((comment)=>{
            return(
              <ul key={game._id} >
              <li>{comment.content}</li>
              </ul>
            )
          })} */}
        </div>
      </div>
    </>
  );
}

export default GameCard;
