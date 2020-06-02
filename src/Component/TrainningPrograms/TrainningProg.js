import React from 'react';
import "./TrainningProg.scss"

const TrainningProg = () => {
    return (
        <div className="container">
            <div className="train-header d-flex justify-content-center">
                <h1>TRAINNING <span>PROGRAMS</span></h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="train-bg-1">
                        <button className="train-btn d-flex justify-content-start">Your Training Session -></button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="train-bg-2">
                        <button className="train-btn d-flex justify-content-start">Cardo Training Session -></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainningProg;