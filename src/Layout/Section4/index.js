import React from 'react';
import './Section4.css'

const index = () => {
    return (
        <div className='container text-center'>
            <p>INTRODUCING</p>
            <h3>ENVIROMATICS</h3>
            <h4>TELEMATICS 2.0</h4>
            <p>Technology built based on real world scenarios</p>
            <div className='row mx-0 mt-3'>
                <div className='col-11'>
                    <div className='row mx-0'>
                        <div className='col-3'><button className='extract-btn rounded-5'>EXTRACT</button></div>
                        <div className='col-3'><button className='extract-btn rounded-5'>ANALYZE</button></div>
                        <div className='col-3'><button className='extract-btn rounded-5'>PREDICT</button></div>
                        <div className='col-3'><button className='extract-btn rounded-5'>COACH</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index