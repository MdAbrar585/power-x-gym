import React from 'react';
import "./Choose.scss";
import chooseImg1 from "../../images/Group 87.png";
import chooseImg2 from "../../images/Group 88.png";
import chooseImg3 from "../../images/gift-2.png";



const Choose = () => {
    return (
        <div className="container">
            <div className="choose-header d-flex justify-content-center">
                <h1><span>WHY</span> CHOOSE US</h1>
            </div>

            <div className="card-deck">
                <div className="card text-center">
                    <div className="d-flex justify-content-center">
                        <img className="card-img-top " src={chooseImg1} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">FREE FITNESS TRAINING</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                </div>
                <div className="card text-center">
                    <div className="d-flex justify-content-center">
                        <img className="card-img-top" src={chooseImg2} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">TONS OF CARDIO & STRENGTH</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="d-flex justify-content-center">
                        <img className="card-img-top" src={chooseImg3} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">NO COMMITMENT MEMBERSHIP</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;