import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GameCard.css";
import Comments from "./Comments";
import AddComment from "./AddComment";
import BackToBack from "./ModalBack";
import Rating from "./Rating"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const API_URL = import.meta.env.VITE_API_URL;


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
  comments,
  updateGame,
  addGame
}) {
  const { gameId } = useParams();
  const navigate = useNavigate();
  // const [game, setGame] = useState(null);

  // const addGame = () => {
  //   const requestBody = {
  //     title: title,
  //     genre: genre,
  //     company: company,
  //     platform: platform,
  //     rating: rating,
  //     age: age,
  //     description: description,
  //     image: image,
  //   };

  //   const storedToken = localStorage.getItem("authToken");

  //   axios
  //     .post(`${API_URL}/games`, requestBody, {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const handleAddGame = (game) => {
  //   const storedToken = localStorage.getItem('authToken');

  //   axios
  //   .post( `${API_URL}/games`,
  //   game,
  //     { headers: { Authorization: `Bearer ${storedToken}` } }
  //   ).then(navigate ('/profile'))
  // }
  

  return (
    <>
      <div className="gamecard">
        <div className="div-container1">
          <img className="card" src={image} alt="game image" />
          {/* <span className="material-symbols-outlined">+</span> */}
          <button onClick={()=>{addGame=addGame()}}>Add game</button>
        </div>
        <div className="div-container2">
          <h1 className="titlecard">
            <b>{title}</b>
          </h1>
          <div className="description">
            <b>Rating:</b> 
            <Rating>{rating}</Rating> 
          </div>
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
          <BackToBack/>
        </div>
        <div></div>
        <div className="div-container3">
          <div>
            <AddComment updateGame={updateGame}/>
          </div>
          {comments ? (
            <div className="comments">
              <Comments>
                {comments ? (
                  comments.map((comment) => {
                    return (
                      <div className="text-padding" key={comment._id}>
                      <p>
                        <b>{comment.author.username}:</b> {comment.content}
                      </p>
                      </div>
                    );
                  })
                ) : (
                  <div className="loading">
                  <Stack sx={{ color: 'orangered' }} spacing={2} direction="row">
                  <CircularProgress color="inherit" />
                  </Stack>
                  </div>
                )}
              </Comments>
              
            </div>
          ) : (
            <div className="loading">
            <Stack sx={{ color: 'orangered' }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
            </Stack>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GameCard;
