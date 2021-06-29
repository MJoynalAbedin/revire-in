import React from 'react';
import './BigAnimation.css';
import BigAnim from '../../../images/bigAnim.png'

const BigAnimation = () => {
    return (
        <div className="d-flex align-items-center flex-column pt-5 pb-5 header-text big-anim">
            <div className="text-center text-of-bigAnim">
                <p className="big-anim-title">The world's first <br/> Enterprise Optimization System</p>
                <h5>Automatically optimize billions of micro-decisions related to customer experience, personalization, message targeting, and timing using machine learning and advanced analytics.</h5>
                <button className="btn btn-outline-dark mt-3">Book A Demo</button>
            </div>
            <div className="d-flex justify-content-center">
                <img className="main-anim-img" src={BigAnim} alt="" />
            </div>
        </div>
    );
};

export default BigAnimation;