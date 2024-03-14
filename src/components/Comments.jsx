import { useState } from "react";
import { useParams } from "react-router-dom";

function Comments(props) {

  const [game, setGame] = useState(null);
  const { gameId } = useParams();

  return (
    <>

    {props.children}

    </>

  );
}

export default Comments;
