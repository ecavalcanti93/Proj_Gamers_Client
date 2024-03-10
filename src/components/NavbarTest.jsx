import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import "./NavbarTest2.css";

const Navbar2 = () => {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const showDropdownMenu = () => {
        setShowDropdown(true);
    };

    const hideDropdownMenu = () => {
        setShowDropdown(false);
    };

    return (
        <div className="navbar-bg">
            <div className="sb__navbar">
                <div className="sb__navbar-links">
                    <div className="sb__navbar-links_logo">
                        <Link to="/">
                            <img src={logo} alt="logo" style={{ height: "35px", marginLeft: "50px" }} />
                        </Link>
                        {isLoggedIn && (
                            <div>
                                <p className="text-nav">Hello, <Link style={{ marginLeft: "5px", color: "orangeRed" }} to="/profile">{user && user.username}</Link></p>
                            </div>
                        )}
                    </div>

                    <div className="sb__navbar-links_container">
                        {isLoggedIn && (
                            <>
                                <Link to="/games">
                                    <button className="buttons-nav">Games</button>
                                </Link>
                                <Link to="/profile">
                                    <button className="buttons-nav">My Library</button>
                                </Link>
                                <div
                                    className="dropdown"
                                    onMouseEnter={showDropdownMenu}
                                    onMouseLeave={hideDropdownMenu}
                                >
                                    <button className="buttons-nav">Settings</button>
                                    {showDropdown && (
                                        <div className="dropdown-content">
                                            <Link to="/profile/edit">
                                                <button className="font-drop">Edit Profile</button>
                                            </Link>
                                            <Link to="/profile/editPassword">
                                                <button className="font-drop">Change Password</button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <button className="buttons-nav" onClick={logOutUser}>Logout</button>
                            </>
                        )}

                        {!isLoggedIn && (
                            <>
                                <Link to="/signup">
                                    <button className="buttons-nav">Sign Up</button>
                                </Link>
                                <Link to="/login">
                                    <button className="buttons-nav">Login</button>
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="sb__navbar-menu">
                        {toggleMenu ? (
                            <RiCloseLine
                                color="#fb3108"
                                size={27}
                                onClick={() => setToggleMenu(false)}
                            />
                        ) : (
                            <RiMenu3Line
                                color="#fb3108"
                                size={27}
                                onClick={() => setToggleMenu(true)}
                            />
                        )}
                        {toggleMenu && (
                            <div className="sb__navbar-menu_container scale-up-center">
                                <div className="sb__navbar-menu_container-links">
                                {isLoggedIn && (
                            <>
                                <Link to="/games">
                                    <button onClick={() => setToggleMenu(false)} className="buttons-nav2">Games</button>
                                </Link>
                                <Link to="/profile">
                                    <button onClick={() => setToggleMenu(false)} className="buttons-nav2">My Library</button>
                                </Link>
                                <div
                                    className="dropdown"
                                    onMouseEnter={showDropdownMenu}
                                    onMouseLeave={hideDropdownMenu}
                                >
                                    <button  className="buttons-nav2">Settings</button>
                                    {showDropdown && (
                                        <div className="dropdown-content2">
                                            <Link to="/profile/edit">
                                                <button onClick={() => setToggleMenu(false)} className="font-drop">Edit Profile</button>
                                            </Link>
                                            <Link to="/profile/editPassword">
                                                <button onClick={() => setToggleMenu(false)} className="font-drop">Change Password</button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <button className="buttons-nav2" onClick={()=>{
                                  logOutUser()
                                  setToggleMenu(false)
                                }}>Logout</button>
                            </>
                        )}

                        {!isLoggedIn && (
                            <>
                                <Link to="/signup">
                                    <button onClick={() => setToggleMenu(false)} className="buttons-nav2">Sign Up</button>
                                </Link>
                                <Link to="/login">
                                    <button onClick={() => setToggleMenu(false)} className="buttons-nav2">Login</button>
                                </Link>
                            </>
                        )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
