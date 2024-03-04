import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddGame.css";

const API_URL = import.meta.env.VITE_API_URL;

function AddCreatedGame(props) {
//   const [title, setTitle] = useState("");
//   const [genre, setGenre] = useState("");
//   const [company, setCompany] = useState("");
//   const [platform, setPlatform] = useState("");
//   const [rating, setRating] = useState(null);
//   const [age, setAge] = useState(0);
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
  const [game, setGame] = useState(null);

  const [loading, setLoading] = useState(true);
  // const [author, setAuthor] = useState("");
  // const [comments, setComments] = useState("");

  const navigate = useNavigate();



  const getGame = () => {


    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${props.gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        // const oneGame = response.data;
        // console.log(res.data);
        setGame(res.data);
        setLoading(false)
        return game

        // console.log(game);
      })
      .then((res) => {
        console.log(res);
        // setLoading(false)
        // if(loading === false) {console.log(game)} else loading
      })
    //   .then(addGame())
      .catch((error) => console.log(error));
    
  };

//   const addGame = () => {
//     const requestBody = {
//       title: game.title,
//       genre: game.genre,
//       company: game.company,
//       platform: game.platform,
//       rating: game.rating,
//       age: game.age,
//       description: game.description,
//       image: game.image,
//     };

//     const storedToken = localStorage.getItem("authToken");

//     axios
//       .post(`${API_URL}/games`, requestBody, {
//         headers: { Authorization: `Bearer ${storedToken}` },
//       })
//       .catch((error) => console.log(error));
//   };
  

//   const addThisGame = () => {
//     getGame()
//     addGame()
//   };

  const handleOnClick = (e) => {
    // e.preventDefault();
    // addThisGame();
    getGame()
    // addGame()
  };

  return (
    <div className="container-add">
      <button
        onClick={() => {
          handleOnClick();
        }}
      >
        Add game
      </button>
      {/* <h3>Create a New Game</h3> */}

      {/* <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <br />
        <label>Platform:</label>
        <input
          type="text"
          name="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <br />
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
        <label>PEGI:</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          rows="10"
          cols="50"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>Image:</label>
        <input
          type="file"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <button type="submit">Add game</button>
      </form> */}
    </div>
  );
}

export default AddCreatedGame;
