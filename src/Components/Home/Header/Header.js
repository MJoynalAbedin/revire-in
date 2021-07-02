import React from 'react';
import './Header.css';
import Story from '../../../images/storyImage.png'

const Header = () => {
    return (
        <div className="whole-header pt-5">
            <div className="container">
            <div className="row">
                <div className="col-md-5 d-flex align-items-center header-part-one">
                    <div className="header-text">
                        <h1>
                        Causal AI for Revenue Intelligence & Supply Chain Optimization
                        </h1>
                        <h6>
                        Revire is a Causal AI tool that helps wholesale distributors and B2B retailers automate and optimize their pricing and supply chain
                        </h6>
                        <button className="btn btn-outline-danger p-2 book-demo">Book a Demo</button>
                        <button className="btn btn-outline-primary p-2 book-demo ms-3">Sign Up Now</button>
                    </div>
                </div>
                <div className="col-md-7 header-part-two">
                    <img style={{width: '700px', borderRadius: '10px'}} src={Story} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;