import React, {Component}  from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class PatternMatrix extends Component {

    render (){
        return (
            <div className="row ">
                This is the PatternMatrix

            </div>);
    }

}

export default connect(null, null)(PatternMatrix);
