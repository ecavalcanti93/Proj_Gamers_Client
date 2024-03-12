// import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Perfil.css";
import logo from "../public/logo.png";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const API_URL = import.meta.env.VITE_API_URL;

const Card = () => {
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const [updatedUser, setUpdatedUser] = useState(null);

  const fetchUser = () => {
    axios
      .get(`${API_URL}/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        setUpdatedUser(res.data);
      });
  };

  const handleImage = () => {
    if (user.userImage === logo) {
      return logo;
    } else return updatedUser.userImage;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {!updatedUser ? (
        <div className="loading">
          <Stack sx={{ color: "orangered" }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
          </Stack>
        </div>
      ) : (
        <div className="container-perfil">
          <div className="card-container">
            <header>
              <img className="image" src={handleImage()} alt="profile image" />
            </header>
            <h1 className="bold-text">{updatedUser.username}</h1>
            <h2 className="bold-text">{updatedUser.email}</h2>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
