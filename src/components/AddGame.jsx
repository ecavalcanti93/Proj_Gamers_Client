import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddGame.css";

const API_URL = import.meta.env.VITE_API_URL;

function AddGame({refreshedGames, handleClose}) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [company, setCompany] = useState("");
  const [platform, setPlatform] = useState("");
  const [rating, setRating] = useState(null);
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploadData = new FormData();

    uploadData.set("title", title);
    uploadData.set("genre", genre);
    uploadData.set("company", company);
    uploadData.set("platform", platform);
    uploadData.set("rating", rating);
    uploadData.set("age", age);
    uploadData.set("description", description);

    if (image) {
      uploadData.append("image", image);
    }

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/games`, uploadData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        // Reset the state//
        setTitle("");
        setGenre("");
        setCompany("");
        setPlatform("");
        setRating(0);
        setAge(0);
        setDescription("");
        setImage("");
        handleClose();
        navigate(`/games/${res.data.games[res.data.games.length -1]}`)
        return refreshedGames()
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-add">
      <h3>Create a New Game</h3>

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
          <option></option>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
        <label>PEGI:</label>
        <select value={age} onChange={(e) => setAge(e.target.value)}>
          <option></option>
          <option>3</option>
          <option>7</option>
          <option>12</option>
          <option>16</option>
          <option>18</option>
        </select>
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
          // value={image}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddGame;
