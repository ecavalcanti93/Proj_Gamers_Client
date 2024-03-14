import "./EditForm.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { message } from "antd";

const API_URL = import.meta.env.VITE_API_URL;

function EditForm() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [userImage, setUserImage] = useState(user.userImage);
  const [editForm, setEditForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleUserImage = (e) => setUserImage(e.target.files[0]);
  const handleForm = () => setEditForm(!editForm);

  const storedToken = localStorage.getItem("authToken");

  const fetchUser = () => {
    axios
      .get(`${API_URL}/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        setUpdatedUser(res.data)
        setUsername(res.data.username);
        setEmail(res.data.email);
        setUserImage(res.data.userImage);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    const uploadData = new FormData();

    uploadData.set("username", username);
    uploadData.set("email", email);

    if (userImage) {
      uploadData.append("userImage", userImage);
    }

    if (!email || !username) {
      alert("Required.");
      return;
    }

    // Make an axios request to the API
    // If the PUT request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios
      .put(`${API_URL}/user/${user._id}`, uploadData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then(() => {
        handleForm();
        navigate("/profile");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <div className="edit-profile">
    <div>
      <img className="image" src={userImage} alt="Profile Image" />
    </div>
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
            type="file"
            name="userImage"
            // value={userImage}
            onChange={handleUserImage}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default EditForm;
