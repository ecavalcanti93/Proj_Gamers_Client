import { Link } from "react-router-dom";
import "./GameCard.css"

// We are deconstructing props object directly in the parentheses of the function
function GameCard ( { image, title, genre, company, platform, rating, age, description, _id } ) {
  
  return (
    <>
    <div  className="gamecard">
    <div className="div-container1">
    <img className="card" src={image} alt="game image"/>
    <span className="material-symbols-outlined">+</span>
  </div>
    <div className="div-container2">
    <h1 className="titlecard"><b>{title}</b></h1>
            <p className="description"><b>Genre:</b> {genre}</p>
            <p className="description"><b>Platform:</b> {platform}</p>
            <p className="description"><b>Company:</b> {company}</p>
            <p className="description"><b>PEGI:</b> {age}</p>
            <p className="description"><b>Description:</b> {description}</p>
            <p className="description"><b>Rating:</b> {rating}</p>
    </div>
    </div>
    </>
  );
}

export default GameCard;