import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function GameCard ( { title, description, _id } ) {
  
  return (
    <div>
      <Link to={`/games/${_id}`}>
        <h3><b>{title}</b></h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default GameCard;