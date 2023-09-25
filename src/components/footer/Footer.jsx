import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaHeart,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                This Movie Recommendation Platform is proudly crafted with <FaHeart /> by the creative minds of Jayesh, Aditya, and Daksh as their entry into the WebWizardry Hackathon. With their passion for movies and their dedication to web development, they've come together to bring you a unique and personalized movie recommendation experience. Explore a world of cinematic delights curated just for you, thanks to the collaborative efforts of these talented individuals. Enjoy your cinematic journey!"
                </div>
                <div className="socialIcons" >
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
