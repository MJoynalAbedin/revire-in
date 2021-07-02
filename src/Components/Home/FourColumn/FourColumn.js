import React from 'react';
import Security from '../../../images/cyber-security.png';
import Ai from '../../../images/innovation.png';
import Api from '../../../images/api.png';


const FourColumn = () => {
    return (
        <div style={{marginTop: '50px', fontFamily: 'Sora,Helvetica,Arial,sans-serif'}} className="d-flex justify-content-center">
            <div className="row m-3">
                <div className="col-md-4">
                    <div className="m-5">
                        <img style={{width: '100px', marginBottom: '20px'}} src={Security} alt="" />
                        <div>
                            <h5 className='fw-bold'>Advanced Security</h5>
                            <p>Revire was built with security in mind. We encrypt customer data according to military-grade encryption standards.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="m-5">
                        <img style={{width: '100px', marginBottom: '20px'}} src={Ai} alt="" />
                        <div>
                            <h5 className='fw-bold'>Live Tech Support</h5>
                            <p>Revire comes with comprehensive live tech support and integration specialists to ensure customer success.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="m-5">
                        <img style={{width: '100px', marginBottom: '20px'}} src={Api} alt="" />
                        <div>
                            <h5 className='fw-bold'>Open API</h5>
                            <p>Revire's API is simple to use and is able to be integrated into other business systems and webstores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourColumn;