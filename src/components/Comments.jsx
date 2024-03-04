import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Comments(props) {

  const [game, setGame] = useState(null);
  const { gameId } = useParams();
  const navigate = useNavigate();


  return (
    <>

    {props.children}

    </>

  );
}

export default Comments;
