import "./HomePage.css";
import menu2 from "../assets/menu2.png"

function HomePage() {
  return (
    <div className="container">
    <div className="menu-div1">
    <h1>Create your own <br/>game library!</h1>
    <h2>Remember forever the games you've played.</h2>
    </div>
    <div className="menu-div2">
    <img className="banner2" src={menu2} alt="image2" />
    </div>
    </div>
  );
}

export default HomePage;