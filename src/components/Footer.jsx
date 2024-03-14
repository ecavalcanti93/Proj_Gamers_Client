import "./Footer.css";
import logo from "../assets/logo_slogan.png";
import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin
} from "react-icons/bs";

const Component = () => {
    return (
        <div className="footer">
            <div className="sb-footer section-padding">
                <div className="sb-footer-links">
                    <Link to="/">
                    <div className="sb-footer-links-div">
                    <img className="logo" src={logo} alt="logo"/>
                    </div>
                    </Link>

                    <div className="sb-footer-links-div">
                        <h4>About us</h4>
                        <a className="link-footer" href="/"><p>Data</p></a>
                        <a className="link-footer" href="/"><p>Careers</p></a>
                        <a className="link-footer" href="/"><p>Press & News</p></a>
                        <a className="link-footer" href="/"><p>Privacy Policy</p></a>
                        <a className="link-footer" href="/"><p>Terms of Service</p></a>
                    </div>

                    <div className="sb-footer-links-div">
                        <h4>Support</h4>
                        <a className="link-footer" href="/"><p>Contact Us</p></a>
                        <a className="link-footer" href="/"><p>Documentation</p></a>
                        <a className="link-footer" href="/"><p>Help & Support</p></a>
                    </div>

                    <div className="sb-footer-links-div">
                        <h4>Community</h4>
                        <a className="link-footer" href="/"><p>Blog</p></a>
                        <a className="link-footer" href="/"><p>Forum</p></a>
                        <a className="link-footer" href="/"><p>Invite a Friend</p></a>
                        <a className="link-footer" href="/"><p>Community Standards</p></a>
                        <a className="link-footer" href="/"><p>Professional Services</p></a>
                    </div>

                    <div className="sb-footer-links-div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <Footer.Icon className="socialmedia-icon" href="https://www.facebook.com" target="_blank" icon={BsFacebook} />
                            <Footer.Icon className="socialmedia-icon" href="https://www.instagram.com/" target="_blank" icon={BsInstagram} />
                            <Footer.Icon className="socialmedia-icon" href="https://x.com/" target="_blank" icon={BsTwitter} />
                            <Footer.Icon className="socialmedia-icon" href="https://linkedin.com/" target="_blank" icon={BsLinkedin} />
                            <Footer.Icon className="socialmedia-icon" href="https://github.com/" target="_blank" icon={BsGithub} />
                        </div>
                    </div>

                </div>

                <hr></hr>

                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>
                            @{new Date().getFullYear()} GamersBin. All right reserved.
                        </p>
                    </div>
                    <div className="sb-footer-below-links">
                        <a href="/"><div><p>Terms & Conditions</p></div></a>
                        <a href="/"><div><p>Privacy</p></div></a>
                        <a href="/"><div><p>Security</p></div></a>
                        <a href="/"><div><p>Cookies</p></div></a>
                    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Component;