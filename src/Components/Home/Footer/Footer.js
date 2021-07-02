import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div style={{height:'115vh', backgroundColor:'#003049', color: '#F9F3E3', paddingTop:'80px'}}>
            <div style={{height: '94vh'}} className="d-flex flex-column whole-footer justify-content-center">
            <div className="row container-fluid">
                <div className="col-md-6">
                    <h2>The first-artificial intelligent business partner in India</h2>
                    <button className="btn btn-outline-light mt-5 book-demo">Sign Up</button>
                </div>
                <div className="col-md-6">
                    <div className="float-end">
                        <div style={{fontSize: '45px'}}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon  className="ms-5" icon={faInstagram} />
                            <FontAwesomeIcon  className="ms-5" icon={faLinkedin} />
                        </div>
                        <div className="mt-5">
                            <p>First One is here</p>
                            <p>Second One is here So Lore, adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <p style={{fontFamily: 'Sora, Helvetica,Arial,sans-serif'}} className="text-center copyright">&copy; Copyright 2021 Revire - All rights reserved.</p>
        </div>
    );
};

export default Footer;