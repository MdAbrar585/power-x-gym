import React from 'react';
import './Progress.scss';
import logo1 from "../../images/Group 80.png";
import logo2 from "../../images/Group 81.png";
import logo3 from "../../images/Group 82.png";


const Progres = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 background">
                    <div className="background-1">
                        <img className="img" src={logo1} alt="" />
                        <h1>Progress</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga nulla expedita debitis nam beatae vel laboriosam facere magni quasi!</p>

                    </div>
                </div>
                <div className="col-md-4 background">
                    <div className="background-2">
                        <img className="img" src={logo2} alt="" />
                        <h1>WorkOut</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga nulla expedita debitis nam beatae vel laboriosam facere magni quasi!</p>

                    </div>
                </div>
                <div className="col-md-4 background">
                    <div className="background-3">
                        <img className="img" src={logo3} alt="" />
                        <h1>Nutrition</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga nulla expedita debitis nam beatae vel laboriosam facere magni quasi!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progres;