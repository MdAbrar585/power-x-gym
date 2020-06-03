import React from 'react';
import './PricingBody.scss'
import { Link } from 'react-router-dom';

const PricingBody = () => {
    return (
        <div className="container">
            <div className="pricing-header text-center">
                <h1><span>CHOOSE THE OFFER</span> THAT SUITS YOU</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus expedita, dolorum consequatur aut doloremque alias consectetur assumenda <br /> iste ex? Tenetur at quisquam doloremque ex nulla explicabo magni est iure aut.</p>
            </div>
            <div className="row">
                <div className="col-md-4 pricing-background">
                    <div className="pricing-background-1">
                        <div className="pricing-text text-center">
                            <p className="bill">BILLED MONTHLY</p>
                            <h3>ADVANCE PLAN</h3>
                            <p className="money">$140</p>
                            <p>Mobile-Optimized</p>
                            <p>Best Hosting</p>
                            <p>Free Custom</p>
                            <p>Outstanding</p>
                            <p>Happy Customers</p>
                            <Link  to="/memberShip">
                            <button className="pricing-btn">PURCHASE</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pricing-background">
                    <div className="pricing-background-2">
                        <div className="pricing-text text-center">
                            <p className="bill">BILLED MONTHLY</p>
                            <h3>ADVANCE PLAN</h3>
                            <p className="money">$120</p>
                            <p>Mobile-Optimized</p>
                            <p>Best Hosting</p>
                            <p>Free Custom</p>
                            <p>Outstanding</p>
                            <p>Happy Customers</p>
                            <Link to="/memberShip">
                                <button className="pricing-btn">PURCHASE</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pricing-background">
                    <div className="pricing-background-3">
                        <div className="pricing-text text-center">
                            <p className="bill">BILLED MONTHLY</p>
                            <h3>ADVANCE PLAN</h3>
                            <p className="money">$90</p>
                            <p>Mobile-Optimized</p>
                            <p>Best Hosting</p>
                            <p>Free Custom</p>
                            <p>Outstanding</p>
                            <p>Happy Customers</p>
                            <Link to="/memberShip">
                            <button className="pricing-btn">PURCHASE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingBody;