import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <div>
            <nav class="slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top ">
                <div class="container">
                    <a class="navbar-brand" href="/">Power <span>X</span></a>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/dashboard">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="/bookedAppointment">Our Classes</a></li>
                            <li class="nav-item"><a class="nav-link" href="/">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="/">Blog</a></li>
                            <li class="nav-item"><a class="nav-link" href="/">Pricing</a></li>
                            <li class="nav-item"><a class="nav-link" href="/">Contact Us</a></li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;