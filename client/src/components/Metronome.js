import React, {Component}  from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Metronome extends Component {

    render (){
        return (
            <div className="row ">
                This is the Metronome

            </div>);
    }

}

export default connect(null, null)(Metronome);