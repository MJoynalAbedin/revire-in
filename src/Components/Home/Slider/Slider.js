import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div style={{fontFamily:'Sora, Helvetica,Arial,sans-serif'}} className="d-flex container slider-parent align-items-center justify-content-center"> 
            <div>
                <h1 className="fw-bold slider-heading">The reviews of our clients</h1>
            </div>
            <div style={{height: '300px', width: '100%'}} id="carouselExampleControls" className="carousel slide p-5 rounded" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-between dark-blue">
                            <div style={{width: '40%'}}>
                                <p>Booked Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non, inventore laborum
                                eaque optio vel unde aut odio sint quia.</p>
                                <h6 className="fw-bold">The Lorem ipsum dolor, sit amet consectetur adipisicing.</h6>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, esse.</p>
                            </div>
                            <div style={{width: '40%'}}>
                                <p>"Possimus non, inventore laborum
                                eaque optio vel unde aut odio sint quia."</p>
                                <h6 className="fw-bold">Senior Administrator</h6>
                                <p>Microsoft Limited India</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="d-flex justify-content-between dark-blue">
                            <div style={{width: '40%'}}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non, inventore laborum
                                eaque optio vel unde aut odio sint.</p>
                                <h6 className="fw-bold">The Lorem ipsum dolor, sit amet consectetur adipisicing.</h6>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, esse.</p>
                            </div>
                            <div style={{width: '40%'}}>
                                <p>"Possimus non, inventore laborum
                                eaque optio vel unde aut odio sint quia."</p>
                                <h6 className="fw-bold">Junior Web Developer</h6>
                                <p>Don't Know Limited</p>
                            </div>
                        </div>        
                    </div>
                    <div className="carousel-item">
                    <div className="d-flex justify-content-between dark-blue">
                            <div style={{width: '40%'}}>
                                <p>"I booked Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non, inventore laborum
                                eaque optio vel unde aut odio sint quia."</p>
                                <h6 className="fw-bold">The Lorem ipsum dolor, sit amet consectetur adipisicing.</h6>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, esse.</p>
                            </div>
                            <div style={{width: '40%'}}>
                                <p>"Possimus non, inventore laborum
                                eaque optio vel unde aut odio sint quia."</p>
                                <h6 className="fw-bold">The Lorem Ispum Moderator</h6>
                                <p>WHO LTS New</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-black-50" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;