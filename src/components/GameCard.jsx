import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function GameCard ( { title, genre, company, plataform, rating, age, description, _id } ) {
  
  return (
    <div>
      <Link to={`/games/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{description} </p>
      <p>{genre} </p>
      <p>{company} </p>
      <p>{plataform} </p>
      <p>{rating} </p>
      <p>{age} </p>
      <p>{description} </p>
    </div>
  );
}

export default GameCard;