import  React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {

    return (
        <div className="container" style={{textAlign:'center'}}>
            <h1>
                CoLaps
            </h1>

            <br/>

            <Link to={'/SampleLooper'} className="Link">
                Launch your sample and make them loop !
            </Link>

            <Link to={'/SampleLibrary'} className="Link" >
                Manage Your sample Library
            </Link>


            
        </div>
    );
};

export default Landing;