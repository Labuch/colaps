import  React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {

    return (
        <div style={{textAlign:'center'}}>
            <h1>
                CoLaps
            </h1>
            <label>Launch your sample and make them loop !</label>
            <br/>
            <Link  to="/SampleLooper" className="">ENTER</Link>
        </div>
    );
};

export default Landing;