import "./ProfilePage.css";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import Card from "../components/Perfil";
import SearchProfile from "../components/SearchProfile";
import { animateScroll as scroll} from "react-scroll";

const API_URL = import.meta.env.VITE_API_URL;

function ProfilePage() {
  const navigate = useNavigate();
  const { storeToken, authenticateUser, user } = useContext(AuthContext);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  

  return (
    <div>
      <Card />
      <SearchProfile />
    </div>
  );
}

export default ProfilePage;
