import "./HomePage.css";
import menu2 from "../assets/menu2.png";
// import Footer from "../components/Footer"
import Component from "../components/Footer";
import { Accordion } from "../components/Accordion";

function HomePage() {
  return (
    <>
    <div className="container">
    <div className="menu-div1">
    <h1>Create your own game library!</h1> 
    <h3>Remember forever the games you've played.</h3>
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
    <Component/>
    </>
  );
}

export default HomePage;