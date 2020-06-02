import React from 'react';
import './AboutUs.scss'
import aboutImage from "../../images/wells-chan-H-vAxuWxmi8-unsplash.jpg";


const AboutUs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="about-bg">
                        <img className="about-img" src={aboutImage} alt=""/>
                    </div>
                </div>
                <div className="col-md-6 about-text">
                        <h1>About Us</h1>
                        <h2>WE ARE HERHE TO DREAM!</h2>
                        <h3>OUR TEAM IS HERE SERVE YOU.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum non nobis, expedita voluptatibus excepturi ex nemo corporis, est.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;