import "./EditForm.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { message } from "antd";

const API_URL = import.meta.env.VITE_API_URL;

function EditPassword() {
  const navigate = useNavigate();
  const { storeToken, authenticateUser, user } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleCurrentPassword = (e) => setCurrentPassword(e.target.value);
  const handleNewPassword = (e) => setNewPassword(e.target.value);
  const handleConfirmNewPassword = (e) => setConfirmNewPassword(e.target.value);
  const handleForm = () => setEditForm(!editForm);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      alert("Required.");
      return;
    }

    // Create an object representing the request body
    const requestBody = { currentPassword, newPassword, confirmNewPassword };

    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/passwordupdate`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        handleForm();
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <div className="edit-profile">
        <form onSubmit={handlePasswordSubmit}>
          <label>Current Password:</label>
          <input
            type="password"
            name="password"
            value={currentPassword}
            onChange={handleCurrentPassword}
          />

          <label>New Password:</label>
          <input
            type="password"
            name="password"
            value={newPassword}
            onChange={handleNewPassword}
          />

          <label>Confirm New Password:</label>
          <input
            type="password"
            name="password"
            value={confirmNewPassword}
            onChange={handleConfirmNewPassword}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default EditPassword;
