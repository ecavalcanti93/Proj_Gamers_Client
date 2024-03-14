import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
