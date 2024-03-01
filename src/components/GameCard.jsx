import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GameCard.css";
import Comments from "./Comments";
import AddComment from "./AddComment";

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
}) {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

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
        </div>
        <div className="div-container3">
          {comments ? (
            <div>
              <Comments>
                {comments ? (
                  comments.map((comment) => {
                    return (
                      <p key={comment._id}>
                        <b>{comment.author.username}:</b> {comment.content}
                      </p>
                    );
                  })
                ) : (
                  <p>loadig...</p>
                )}
              </Comments>
              
            </div>
          ) : (
            <p>loading...</p>
          )}
          <div>
            <AddComment />
          </div>
        </div>
      </div>
    </>
  );
}

export default GameCard;
