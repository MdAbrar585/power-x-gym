import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="cover">
            <div className="row">
                <div className="col-md-5 col-sm-12 text">
                    <h1>The Best Fitness <br/> Studio In Town</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quod commodi reiciendis ad accusantium nostrum oditlaudantium.</p>
                    <Link to="/pricing">
                    <button className="custom-btn">Join Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;