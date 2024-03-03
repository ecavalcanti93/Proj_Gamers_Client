import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddComment.css"


const API_URL = import.meta.env.VITE_API_URL;

function AddComment() {
  const [content, setContent] = useState("");
  const { gameId } = useParams();
  

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { content };
    

    const storedToken = localStorage.getItem('authToken');

    axios
    .post( `${API_URL}/games/${gameId}/comment`,
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then(() => {
    setContent("");
    navigate(`/games/${gameId}`)
    })
     .catch((error) => console.log(error));
  };



  return (
    <div className="box-comment">
    <div className="container-add">
      <h3>Add a comment</h3>

      <form onSubmit={handleSubmit}>
        <label>Content:</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        
        <button type="submit">Add comment</button>
      </form>

    </div>
    </div>
  );
}

export default AddComment;