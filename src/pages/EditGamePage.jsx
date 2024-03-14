import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditGamePage.css"
import { animateScroll as scroll} from "react-scroll";

const API_URL = import.meta.env.VITE_API_URL;

function EditGamePage(props) {

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [company, setCompany] = useState("");
  const [platform, setPlatform] = useState("");
  const [rating, setRating] = useState(0);
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/games/${gameId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneGame = response.data;
        setTitle(oneGame.title);
        setGenre(oneGame.genre);
        setCompany(oneGame.company);
        setPlatform(oneGame.platform);
        setRating(oneGame.rating);
        setAge(oneGame.age);
        setDescription(oneGame.description);
        setImage(oneGame.image);
        scroll.scrollToTop();
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      genre,
      company,
      platform,
      rating,
      age,
      description,
      image,
    };
    const storedToken = localStorage.getItem("authToken");

    axios.put(`${API_URL}/games/${gameId}`, requestBody, {
      headers: { Authorization: `Bearer ${storedToken}` },
    }).then(() => {
      navigate(`/games/${gameId}`);
    });
  };

  return (
    <div className="game-title">
      <h1>Edit Game</h1>

      <form onSubmit={handleFormSubmit}>
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
        <select value={age} onChange={(e) => setAge(e.target.value)}>
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
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <button className="button-submit" type="submit">Update Game</button>
      </form>

    </div>
  );
}

export default EditGamePage;
