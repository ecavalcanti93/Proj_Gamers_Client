import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css"
import EditForm from "./EditForm";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/games">
            <button>Games</button>
          </Link>

          <Link to="/profile">
            <button>Your Profile</button>
          </Link>

          <Link to="/profile/edit">
            <button>Settings</button>
          </Link>

          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">{user && user.username}</Link>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/login">
          <button className="login-button">Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
