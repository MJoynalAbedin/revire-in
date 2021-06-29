import React from 'react';
import './BoxOnAbout.css'

const BoxOnAbout = () => {
    return (
        <div className="d-flex box-on-about justify-content-center">
            <div className="main-box w-75 text-center">
                <h1 className="mb-3 fw-bold">Get Started Now</h1>
                <h6>Revire seamlessly integrates with most distribution ERPs, CRMs, and webstore managers. Our integrations library means implementing Revire can take under a day. Revire was built with security in mind. We encrypt customer data according to military-grade encryption standards.</h6>
                <button className="btn btn-outline-light mt-3">Learn More</button>
            </div>
        </div>
    );
};

export default BoxOnAbout;