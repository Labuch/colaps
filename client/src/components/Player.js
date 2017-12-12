import React, {Component}  from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Player extends Component {

    render (){
        return (
            <div className="row ">
            This is the player

            </div>);
    }

}

export default connect(null, null)(Player);
