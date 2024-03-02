import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css";
import EditForm from "./EditForm";
import logo from "../assets/logo.png";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <div className="flex-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "35px", marginLeft: "50px" }}
          />
        </Link>
        {isLoggedIn && (
          <div>
            <p className="text-nav">Hello, {user && user.username}</p>
          </div>
        )}
      </div>

      {isLoggedIn && (
        <>
          <div>
            <Link to="/games">
              <button>Games</button>
            </Link>

            <Link to="/profile">
              <button>Your Profile</button>
            </Link>

            {/* <Link to="/profile/edit">
              <button>Settings</button>
            </Link> */}
            <button onClick={()=>{
              <>
              <select>
                <option>Edit your profile</option>
                <option>Cange your password</option>
              </select>
              </>
              
            }}>Settings
              
            </button>

            <button onClick={logOutUser}>Logout</button>
          </div>
        </>
      )}

      {!isLoggedIn && (
        <div>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
