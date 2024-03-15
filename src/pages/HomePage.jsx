import "./HomePage.css";
import menu2 from "../assets/menu2.png";
import { Accordion } from "../components/Accordion";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import steps from "../assets/Steps.svg"
import { animateScroll as scroll} from "react-scroll";

function HomePage() {

  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  
  const { isLoggedIn } = useContext(AuthContext);
  const [editForm, setEditForm] = useState(false);
  const handleForm = () => setEditForm(!editForm);

  return (
    <>
      <div className="container">
        <div className="menu-div1">
          <h1 className="title-home">Create your <br/><span className="own">own</span> game <br/>library!</h1>
          <h3 className="subtitle-home">Remember forever the games you've played.</h3>
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

              <Link to="/profile">
                <button className="margin">My Library</button>
              </Link>
            </div>
          )}
        </div>
        <div className="menu-div2">
          <img className="banner2" src={menu2} alt="image2" />
        </div>
      </div>
      <div className="section2">
        <div className="section2-text">
          <h1 className="section2-sub">Your library for games of the past, present, and future!</h1>
          <h3 className="section2-sub2">Find and add games to your virtual shelf.</h3>
        </div>
        <Accordion />
      </div>
      <div className="box-steps">
      <img className="steps" src={steps} alt="steps" />
      </div>
     
    </>
  );
}

export default HomePage;
