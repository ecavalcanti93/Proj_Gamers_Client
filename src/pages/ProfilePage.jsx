import "./ProfilePage.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import Card from "../components/Perfil";
import SearchBar from "../components/SearchBar";
import Component from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL;

function ProfilePage() {
  const navigate = useNavigate();
  const { storeToken, authenticateUser, user } = useContext(AuthContext);

  return (
    <div>
      <Card />
      <SearchBar />
      <Component />
    </div>

  );
}

export default ProfilePage;
