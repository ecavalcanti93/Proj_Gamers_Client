import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function GameCard ( { image, title, genre, company, platform, rating, age, description, _id } ) {
  
  return (
    <>
    <div>
    <img src={image} alt="game image"/>
  </div>
    <div>
    <h1><b>{title}</b></h1>
            <p><b>Genre:</b> {genre}</p>
            <p><b>Platform:</b> {platform}</p>
            <p><b>Company:</b> {company}</p>
            <p><b>PEGI:</b> {age}</p>
            <p><b>Description:</b> {description}</p>
            <p><b>Rating:</b> {rating}</p>
    </div>
    </>
  );
}

export default GameCard;