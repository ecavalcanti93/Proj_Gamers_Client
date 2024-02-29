import "./ProfilePage.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import Card from "../components/Perfil";
import SearchBar from "../components/SearchBar";

const API_URL = import.meta.env.VITE_API_URL;

function ProfilePage() {
  const navigate = useNavigate();
  const { storeToken, authenticateUser, user } = useContext(AuthContext);

  return (
    <div>
      <Card />
      {/* <h1>Profile of: {user.username}</h1>
      <img src={user.userImage} alt="profile image" />
      <p>{user.email}</p>
      <p>Your games</p> */}

      {/* <button
        onClick={() => {
          handleForm();
        }}
      >
        Edit Profile
      </button>

      {editForm && (
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
      )} */}
      <SearchBar />
    </div>
  );
}

export default ProfilePage;
