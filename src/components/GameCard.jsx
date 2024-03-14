import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import "./GameCard.css";
import Comments from "./Comments";
import AddComment from "./AddComment";
import BackToBack from "./ModalBack";
import Rating from "./Rating";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteGameButton from "./ModalDelete";
import Pegi from "./Pegi";
import BackToTop from "./ModalTop";

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
  addGame,
}) {
  const { gameId } = useParams();
  const [gamesId, setGamesId] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const fetchUser = () => {
    axios
      .get(`${API_URL}/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        res.data.games.map((game) => {
          gamesId.push(game._id);
        });
      });
  };

  useEffect(() => {
    fetchUser()
  }, []);

  return (
    <>
      <div className="gamecard">
        <div className="div-container1">
          <div className="test">
          <img className="card" src={image} alt="game image" />
            <div className="btn-details">
              <BackToBack />
              
              {gamesId.includes(gameId) ? (
                <DeleteGameButton />
              ) : (
                <button
                  className="add-game"
                  onClick={() => {
                    addGame = addGame();
                  }}
                ></button>
              )}
            </div>
            </div>
        </div>
        <div className="div-container2">
          <div className="sticky">
            <h1 className="titlecard">
              <b>{title}</b>
            </h1>
            <Rating>{rating}</Rating>
            <p className="description">
              <b style={{ color: "#fb3108" }}>Genre:</b> {genre}
            </p>
            <p className="description">
              <b style={{ color: "#fb3108" }}>Platform:</b> {platform}
            </p>
            <p className="description">
              <b style={{ color: "#fb3108" }}>Company:</b> {company}
            </p>
            <p className="description">
              <b style={{ color: "#fb3108" }}>Description:</b> {description}
            </p>
            <Pegi>{age}</Pegi>

          </div>
        </div>

        <div className="div-container3">
          <div>
            <AddComment updateGame={updateGame} />
          </div>
          {comments ? (
            <div className="comments">
              <Comments>
                {comments ? (
                  comments.map((comment) => {
                    return (
                      <div className="text-padding" key={comment._id}>
                        <p>
                          <b className="comment-author">{comment.author.username}:</b> {comment.content}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <div className="loading">
                    <Stack
                      sx={{ color: "orangered" }}
                      spacing={2}
                      direction="row"
                    >
                      <CircularProgress color="inherit" />
                    </Stack>
                  </div>
                )}
              </Comments>
            </div>
          ) : (
            <div className="loading">
              <Stack sx={{ color: "orangered" }} spacing={2} direction="row">
                <CircularProgress color="inherit" />
              </Stack>
            </div>
          )}
        </div>
      </div>
      <div className="backtotop">
              <BackToTop/>
              </div>
    </>
  );
}

export default GameCard;
