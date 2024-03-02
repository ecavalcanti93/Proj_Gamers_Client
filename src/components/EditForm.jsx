import "./EditForm.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { message } from "antd";

const API_URL = import.meta.env.VITE_API_URL;

function EditForm() {
  const navigate = useNavigate();
  const { storeToken, authenticateUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [userImage, setUserImage] = useState(user.userImage);
  const [editForm, setEditForm] = useState(false);

  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleUserImage = (e) => setUserImage(e.target.value);
  const handleForm = () => setEditForm(!editForm);

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Required.");
      return;
    }

    // Create an object representing the request body
    const requestBody = { email, username, userImage };
    // Make an axios request to the API
    // If the PUT request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios
      .put(`${API_URL}/user/${user._id}`, requestBody)

      .then((response) => {
        handleForm();
        navigate("/profile");
      });

    // .catch((error) => {
    //   const errorDescription = error.response.data.message;
    //   setErrorMessage(errorDescription);
    // });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handleProfileSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={username}
            onChange={handleUsername}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />

          <label>Profile Image:</label>
          <input
            type="input"
            name="userImage"
            value={userImage}
            onChange={handleUserImage}
          />

          <button type="submit">Save</button>
        </form>
      </div>
      {/* <div>
        <form onSubmit={handlePasswordSubmit}>
          <label>Current password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleUsername}
          />

          <label>New password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleEmail}
          />

          <label>Repeat New password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleUserImage}
          />

          <button type="submit">Save</button>
        </form>
      </div> */}
    </>
  );
}

export default EditForm;
