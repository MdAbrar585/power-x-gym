import React from 'react';
import './MemberShipBody.scss'
import { Link } from 'react-router-dom';
const MemberShipBody = () => {
    return (
        <html>
            <body>

                <div className="container">
                    <div className="step-custom">
                    <div className="stepwizard">
                        <div className="stepwizard-row setup-panel">
                            <div className="stepwizard-step col-xs-3">
                                <a href="#step-1" type="button" className="btn btn-success btn-circle">1</a>
                                <p><small>Personal Details</small></p>
                            </div>
                            <div className="stepwizard-step col-xs-3">
                                <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
                                <p><small>Bank Payment</small></p>
                            </div>
                            <div className="stepwizard-step col-xs-3">
                                <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
                                <p><small>Membership Created</small></p>
                            </div>

                        </div>
                    </div>
                    </div>
                    

                    <div classNameName="container">
                        <form action="/action_page.php">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputFirstName">First Name</label>
                                    <input type="name" className="form-control" id="inputFirstName" placeholder="First Name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputLastNAme">Last Name</label>
                                    <input type="lastName" className="form-control" id="inputLastNAme" placeholder="Last Name" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputMobile">Mobile</label>
                                    <input type="mobile" className="form-control" id="inputMobile" placeholder="Mobile" required/>
                                </div>
                            </div>

                           
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label for="inputState">Date OF Birth</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <select id="inputState" className="form-control custom-frm">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <select id="inputState" className="form-control custom-frm">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputState">Gender</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Both</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputAddressLine1">Address Line 1 </label>
                                    <input type="address" className="form-control" id="inputAddressLine1" placeholder="Address" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputCountry">Country / Region</label>
                                    <input type="country" className="form-control" id="inputCountry" placeholder="Country / Region" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="city" className="form-control" id="inputCity" placeholder="City" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPostcode">Postcode</label>
                                    <input type="postcode" className="form-control" id="inputPostcode" placeholder="Postcode" required/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end payment-custom-btn">
                                <Link to="/payment">
                                <button type="submit" className="btn btn-primary">NEXT</button>
                                {/* <input type="submit" className="btn btn-primary"/> */}
                                </Link>
                            </div>
                        </form>
                    </div>


                </div>
            </body>
        </html>
    );
};

export default MemberShipBody;