import React from 'react';
import './Payment.scss';
import paymentImage1 from "../../images/credit-cards_mastercard.png";
import paymentImage2 from "../../images/credit-cards_visa.png";
import paymentImage3 from "../../images/credit-cards_amex.png";
import paymentImage4 from "../../images/Bitmap.png";



const Payment = () => {
    return (
        <div className="container">
            <div className="step-custom">
                <div className="stepwizard">
                    <div className="stepwizard-row setup-panel">
                        <div className="stepwizard-step col-xs-3">
                            <a href="#step-1" type="button" className="btn btn-success btn-circle">1</a>
                            <p><small>Personal Details</small></p>
                        </div>
                        <div className="stepwizard-step col-xs-3">
                            <a href="#step-2" type="button" className="btn btn-success btn-circle" >2</a>
                            <p><small>Bank Payment</small></p>
                        </div>
                        <div className="stepwizard-step col-xs-3">
                            <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
                            <p><small>Membership Created</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="credit-card-body">
                <div className="row">
                    <div className="clo-md-8 credit-card-text">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <h3>Credit Card</h3>
                        <p>Safe money transfer using your bank account. Visa, Maestro, Discover,American Express</p>
                    </div>
                    <div className="col-md-4 payment-img">
                        <img src={paymentImage1} alt="" />
                        <img src={paymentImage2} alt="" />
                        <img src={paymentImage3} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label for="inputAddress2">Card Number</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="0000 0000 0000 0000" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label for="inputAddressLine1">NAME ON CARD </label>
                        <input type="address" className="form-control" id="inputAddressLine1" placeholder="Address" />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputAddressLine1">Expiry Date</label>
                        <input id="inputDate" className="form-control" placeholder="MM/YY" />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputAddressLine1">CVV CODE </label>
                        <input id="inputCvc" className="form-control" />
                    </div>
                </div>
            </div>


            <div className="credit-card-body">
                <div className="row">
                    <div className="clo-md-10 credit-card-text">
                        <h3>PayPal</h3>
                        <p>You will be redirected to PayPal website to complete your purchase securely</p>
                    </div>
                    <div className="col-md-2 paypal-img">
                        <img src={paymentImage4} alt="" />
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-end payment-custom-btn">
                <button type="submit" className="btn btn-primary">NEXT</button>
            </div>
        </div>
    );
};

export default Payment;