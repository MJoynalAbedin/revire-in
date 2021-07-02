import React from 'react';
import './OnFooter.css'

const OnFooter = () => {
    return (
        <div style={{ backgroundColor: '#FDFAF3' }} className="d-flex justify-content-center">
            <div className="d-flex box-on-footer justify-content-between align-items-center">
                <h1 className="mb-3 fw-bold"><span style={{fontSize: '50px'}}>Get Started Now</span></h1>
                <div><button className="btn btn-outline-light ">Book a Demo</button></div>
            </div>
        </div>
    );
};

export default OnFooter;