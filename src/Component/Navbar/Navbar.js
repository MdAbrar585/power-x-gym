import React from 'react';
import './Navbar.scss';
import ReactGa from 'react-ga';


const Navbar = () => {
    const ClickHandler = (e) => {
		ReactGa.event({
			category: 'A',
			action: 'Click the button from navbar page'
		})
		// alert('Send the information to google analytics that I touched the click button');
	}
    return (
        <div>
            <nav class="slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top ">
                <div class="container">
                    <a class="navbar-brand" href="/">Power <span>X</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item"><a class="nav-link" href="/home" onClick={(e) => ClickHandler(e)}>Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/pricing" onClick={(e) => ClickHandler(e)}>Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="/classes" onClick={(e) => ClickHandler(e)}>Our Classes</a></li>
                            <li class="nav-item"><a class="nav-link" href="/" onClick={(e) => ClickHandler(e)}>About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="/" onClick={(e) => ClickHandler(e)}>Blog</a></li>
                            <li class="nav-item"><a class="nav-link" href="/pricing" onClick={(e) => ClickHandler(e)}>Pricing</a></li>
                            <li class="nav-item"><a class="nav-link" href="/" onClick={(e) => ClickHandler(e)}>Contact Us</a></li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;