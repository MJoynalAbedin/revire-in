import React from 'react';
import './ImgTxt.css'

const ImgTxt = ({imgRight, imgLeft, headingRight, headingLeft, paragraphRight, paragraphLeft}) => {
    return (
        <div style={{height: '900px'}} className="whole-ImgTxt d-flex align-items-center">
            <div className="m-3">
                <div className="row">
                    <div className="col-md-6 ImgTxt-part-one">
                        <img className="shadow" style={{width: '90%', borderRadius: '10px'}} src={imgLeft} alt="" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ImgTxt-part-two">
                        <div className="header-text">
                            <h1>
                            {headingRight}
                            </h1>
                            <p className="fw-bold">
                            {paragraphRight}
                            </p>
                            <button className="btn btn-outline-success">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 d-flex align-items-center ImgTxt-part-one">
                        <div className="header-text">
                            <h1>
                            {headingLeft}
                            </h1>
                            <p className="fw-bold">
                            {paragraphLeft}
                            </p>
                            <button className="btn btn-outline-success">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 ImgTxt-part-two">
                        <img className="shadow" style={{width: '90%', borderRadius: '10px', float: 'right'}} src={imgRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgTxt;