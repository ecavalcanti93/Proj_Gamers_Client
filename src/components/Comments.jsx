import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Comments(props) {
//   console.log(props.comments);
  const [game, setGame] = useState(null);
  const { gameId } = useParams();
  const navigate = useNavigate();
//   console.log(props.children);

  return (
    <>
    {/* {props.title} */}
    {props.children}
      {/* {props.comments ? (
        <ul>
          {props.comments.map((comment) => {
            <li key={props.comments._id}>
              {comment.author}: {comment.content}
            </li>;
          })}
        </ul>
      ) : (
        <p>loading...</p>
      )} */}
    </>
    // <>
    // {props.author}: {props.content}
    // {game ? game.title : <p>loading...</p>}
    // <p>Hola {game.comments.author}: {game.comments.content}</p>
    // </>
  );
}

export default Comments;
