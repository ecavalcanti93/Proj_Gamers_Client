import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function EditGamePage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { gameId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${API_URL}/api/games/${gameId}`)
      .then((response) => {
        const oneGame = response.data;
        setTitle(oneGame.title);
        setDescription(oneGame.description);
      })
      .catch((error) => console.log(error));
    
  }, [gameId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    axios
      .put(`${API_URL}/api/games/${gameId}`, requestBody)
      .then((response) => {
        navigate(`/games/${gameId}`)
      });
  };
  
  
  const deleteGame = () => {
    
    axios
      .delete(`${API_URL}/api/games/${gameId}`)
      .then(() => {
        navigate("/games");
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div>
      <h3>Edit Game</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Game</button>
      </form>

      <button onClick={deleteGame}>Delete Game</button>
    </div>
  );
}

export default EditGamePage;
