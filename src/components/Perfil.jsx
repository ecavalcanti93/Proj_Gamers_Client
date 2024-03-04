import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Perfil.css";
import logo from '../assets/logo.png';

const Card = () => {
    const { storeToken, authenticateUser, user } = useContext(AuthContext);
    
    const handleImage = ()=>{
      if (user.userImage === logo) {
        return logo
      }else return user.userImage
    }
  return (
    <div className="container-perfil">
    <div className="card-container">
<header>
    <img className="image" src={handleImage()} alt="profile image" />
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


