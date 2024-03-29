import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { projectId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, projectId };

    axios
      .post(`${API_URL}/tasks`, requestBody)
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
      
        props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;