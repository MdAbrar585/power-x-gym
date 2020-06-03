import React from 'react';
import './ClassesOption.scss';
import { Link } from 'react-router-dom';


const ClassesOption = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 class-op-bg">
                <Link to="/pricing">
                    <div className="class-op-bg-1">
                    <button className="class-op-btn d-flex justify-content-start">PSYCHO TRAINING &#8594;</button>  
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 class-op-bg">
                <Link to="/pricing">
                    <div className="class-op-bg-2">
                    <button className="class-op-btn d-flex justify-content-start">SELF DEFENCE &#8594;</button>          
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 class-op-bg">
                <Link to="/pricing">
                    <div className="class-op-bg-3">
                    <button className="class-op-btn d-flex justify-content-start">ADVANCE GYM &#8594;</button>

                   </div>
                   </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 class-op-bg">
                <Link to="/pricing">
                    <div className="class-op-bg-4">
                    <button className="class-op-btn d-flex justify-content-start">CARDIO TRAINING &#8594;</button>
                       
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 class-op-bg">
                <Link to="/pricing">
                    <div className="class-op-bg-5">
                    <button className="class-op-btn d-flex justify-content-start">STRENGTH TRAINING &#8594;</button>
                       
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 class-op-bg">
                <Link to="/pricing">
                    
                    <div className="class-op-bg-6">
                    <button className="class-op-btn d-flex justify-content-start">PSYCHO TRAINING &#8594;</button>

                   </div>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default ClassesOption;