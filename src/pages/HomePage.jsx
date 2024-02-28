import "./HomePage.css";
import menu2 from "../assets/menu2.png";
import Component from "../components/Footer";
import AddGame from "../components/AddGame";
import { Accordion } from "../components/Accordion";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import BasicModal from "../components/Modal2";

function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [editForm, setEditForm] = useState(false);
  const handleForm = () => setEditForm(!editForm);

  return (
    <>
      <div className="container">
        <div className="menu-div1">
          <h1>Create your own game library!</h1>
          <h3>Remember forever the games you've played.</h3>
          {!isLoggedIn && (
            <div className="menu-button">
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>

              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <div className="menu-button">
              <Link to="/games">
                <button>Games</button>
              </Link>
              {/* <button
              
                onClick={() => {
                  handleForm();
                }}
              >
                Add Game
              </button> */}
              <BasicModal/>
              {/* {editForm && <AddGame />} */}
            </div>
          )}
        </div>
        <div className="menu-div2">
          <img className="banner2" src={menu2} alt="image2" />
        </div>
      </div>
      <div className="section2">
        <div className="section2-text">
          <h1>Your library for games of the past, present, and future!</h1>
          <h3>Find and add games to your virtual shelf.</h3>
        </div>
        <Accordion />
      </div>
      <Component />
    </>
  );
}

export default HomePage;
