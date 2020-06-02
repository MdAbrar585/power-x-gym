import React from 'react';
import './Footer.scss';
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
    return (
        <div>
            {/* FOOTER START */}
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1 className="footer-heading">POWER <span>X</span></h1>
                       
                    </div>
                    <div className="col">
                        <h1>Products</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Accounts</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Webmail</li>
                            <li>Redeem code</li>
                            <li>WHOIS lookup</li>
                            <li>Site map</li>
                            <li>Web templates</li>
                            <li>Email templates</li>
                        </ul>
                    </div>
                    <div className="col social">
                        <h1>Social</h1>
                        <ul>
                        <li><a href="/" classNameName="icon">
                            <FontAwesomeIcon icon={faYoutube} />
                            </a></li>
                            <li><a href="/" classNameName="icon">
                            <FontAwesomeIcon icon={faFacebookF} />
                            </a></li>
                            <li><a href="/" classNameName="icon">
                            <FontAwesomeIcon icon={faTwitter} />
                            </a></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>Web chat</li>
                            <li>Open ticket</li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
            {/* END OF FOOTER */}
        </div>

    );
};

export default Footer;