import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Perfil.css";

const Card = () => {
    const { storeToken, authenticateUser, user } = useContext(AuthContext);
  return (
    <div className="container-perfil">
    <div className="card-container">
<header>
    <img className="image" src={user.userImage} alt="profile image" />
</header>
<h1 className="bold-text">
    {user.username}
</h1>
<h2 className="bold-text">{user.email}</h2>
</div>
</div>
  );
};
export default Card;


