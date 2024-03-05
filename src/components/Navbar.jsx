import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css";
import EditForm from "./EditForm";
import logo from "../assets/logo.png";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownMenu = () => {
    setShowDropdown(true);
  };

  const hideDropdownMenu = () => {
    setShowDropdown(false);
  };

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
            <p className="text-nav">Hello, <Link style={{ marginLeft: "5px" }} to="/profile">{user && user.username}</Link></p>
          </div>
        )}
      </div>

      {isLoggedIn && (
        <>
          <div className="buttons-nav">
            <Link to="/games">
              <button>Games</button>
            </Link>

            <Link to="/profile">
              <button>Profile</button>
            </Link>

            <div
              className="dropdown"
              onMouseEnter={showDropdownMenu}
              onMouseLeave={hideDropdownMenu}
            >
              <button className="dropbtn">Settings</button>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/profile/edit">
                    <button>Edit Profile</button>
                  </Link>
                  <Link to="/profile/editPassword">
                    <button>Change Password</button>
                  </Link>
                  
                </div>
              )}
            </div>

            {/* <Link to="/profile/edit">
              <button>Settings</button>
            </Link> */}
            <div>
            <button onClick={logOutUser}>Logout</button>
            </div>
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
