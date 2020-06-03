import React from 'react';
import './AdvanceBody.scss';
import advanceImg1 from "../../images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg";

const AdvanceBody = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="advance-image">
                        <img className="advance-img" src={advanceImg1} alt="" />
                    </div>
                    <div className="advance-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quaerat ad,
                        nihil nesciunt vero similique! Fuga beatae delectus aliquam unde. Doloremque
                        a qui optio maxime iusto veniam, dolorem beatae quae.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quaerat ad,
                        nihil nesciunt vero similique! Fuga beatae delectus aliquam unde. Doloremque
                            a qui optio maxime iusto veniam, dolorem beatae quae</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="advance-head">
                        <h1><span>CLASS</span> SCHEDULE</h1>
                        <div className="rwo">
                            <div class="card-columns">
                                <div class="card">
                                    <div class="card-body">
                                        <h6>Monday</h6>
                                        <p class="card-text">8:00 - 9:00 AM</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h6>Tuesday</h6>
                                        <p class="card-text">8:00 - 9:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rwo">
                            <div class="card-columns">
                                <div class="card">
                                    <div class="card-body">
                                        <h6>Wednesday</h6>
                                        <p class="card-text">8:00 - 9:00 AM</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h6>Thursday</h6>
                                        <p class="card-text">8:00 - 9:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rwo">
                            <div class="card-columns">
                                <div class="card">
                                    <div class="card-body">
                                        <h6>Friday</h6>
                                        <p class="card-text">8:00 - 9:00 AM</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h6>Saturday</h6>
                                        <p class="card-text">8:00 - 9:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                        <div className="col-md-6 advance-list">
                                <h5>Having Slimmer Shapely Thing</h5>
                                <h5>Getting Stronger Body</h5>
                                <h5>Increased Metabolism</h5>
                                <h5>Incerase Muscular Endurance</h5>
                                <h5>Maximum Result in Less Time</h5>
                                <h5>Firm Hips and Tummy</h5>

                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-end"> 
                            <button className="advance-button">JOIN US</button>

                            </div>
                        </div>
                </div>
            </div>


        </div>
    );
};

export default AdvanceBody;