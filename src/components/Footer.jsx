import logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import React from "react";
import './social.css';

const Footer = () => {
    return (
        <> 
            <div className="divider"></div>
            <footer className="footer">
                <div className="wrapper grid">
                    <div className="footer-logo flex">
                        <a className="footer-brand" href="src/components#">
                            <img src={logo} alt="Logo"/>
                        </a>
                    </div>

                    <div className="footer-links">
                        <ul className="footer-list">
                            <span className="footer-title">Navigation</span>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Home</a>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Top Destinations</a>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Top Countries</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <ul className="footer-list">
                            <span className="footer-title">Helpful Links</span>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">About Us</a>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Contact Us</a>
                            </li>
                            <li className="footer-item">
                                <Link to='/Privacy'><a href="/" className="footer-link">Privacy Policy</a></Link>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Terms of Use</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <span className="footer-title">Contact Us</span>
                        <span className="footer-item">alingesh233@gmail.com.com</span>
                        <span className="footer-item">8270753591</span>
                    </div>
                </div>
<section className="follow">
 <p>Follow Us</p>
 <a href="https://facebook.com">
 <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
 </a>
 <a href="https://twitter.com">
 <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
 </a>
<a href="https://linkedin.com">
 <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" />
 </a>
 </section>
            </footer>
        </>
    )

}

export default Footer
