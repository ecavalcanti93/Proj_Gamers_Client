import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function AddGame() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [company, setCompany] = useState("");
  const [platform, setPlatform] = useState("");
  const [rating, setRating] = useState(null);
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // const [author, setAuthor] = useState("");
  // const [comments, setComments] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, genre, company, platform, rating, age, description, image };

    const storedToken = localStorage.getItem('authToken');

    axios
    .post( `${API_URL}/games`,
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response) => {
     // Reset the state
     setTitle("");
     setGenre("");
     setCompany("");
     setPlatform("");
     setRating(0);
     setAge(0);
     setDescription("");
     setImage("");
     navigate("/games")
    })
     .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Add Game</h3>

      <form onSubmit={handleSubmit}>
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
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddGame;